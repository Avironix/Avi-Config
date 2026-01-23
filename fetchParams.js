const fs = require('fs');
const path = require('path');
const axios = require('axios');
const xml2js = require('xml2js');

// USE THE BACKUP SERVER (It contains the full list)
const URL = "https://autotest.ardupilot.org/Parameters/ArduCopter/apm.pdef.xml";
const OUTPUT_FILE = "src/renderer/src/utils/paramDefinitions.js";

async function getParams() {
  console.log(`📥 Downloading Full Parameter List...`);
  console.log(`   Source: ${URL}`);

  try {
    const response = await axios.get(URL);
    const parser = new xml2js.Parser();

    parser.parseString(response.data, (err, result) => {
      if (err) throw err;

      // --- 1. DEEP RECURSIVE SEARCH ---
      // This finds parameters hidden deep inside "Libraries" (GPS, Serial, etc.)
      const allParams = [];

      function findParamsInObject(obj) {
        if (!obj) return;
        
        // If this object has a 'param' array, grab them!
        if (obj.param && Array.isArray(obj.param)) {
             allParams.push(...obj.param);
        }
        
        // Dig deeper into every child object
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                findParamsInObject(obj[key]);
            }
        });
      }

      // Start searching from the very top
      findParamsInObject(result);

      if (allParams.length === 0) throw new Error("No parameters found.");

      console.log(`✅ Found ${allParams.length} parameters (Libraries + Vehicle).`);

      const outputParams = {};
      let count = 0;

      // --- 2. CLEAN DATA ---
      allParams.forEach(p => {
          if (!p.$ || !p.$.name) return;

          // FIX: REMOVE THE PREFIX! 
          // "ARDUCOPTER:RTL_ALT" becomes "RTL_ALT"
          let name = p.$.name.toUpperCase();
          if (name.includes(":")) {
              name = name.split(":")[1]; 
          }

          // Get Description
          let desc = "No description";
          if (p.documentation && p.documentation[0]) {
              desc = p.documentation[0].replace(/\s+/g, " ").trim();
          } else if (p.$.humanName) {
              desc = p.$.humanName;
          }

          // Get Fields
          let min = "N/A", max = "N/A", def = "0", unit = "", bitmask = "", values = "";

          if (p.field) {
              p.field.forEach(f => {
                  const fName = f.$.name;
                  const fVal = f._;
                  if (fName === "Range") {
                      const parts = fVal.split(" ");
                      if (parts.length >= 2) { min = parts[0]; max = parts[1]; }
                  }
                  if (fName === "Units") unit = fVal;
                  if (fName === "Bitmask") bitmask = fVal;
                  if (fName === "Values") values = fVal;
              });
          }

          if (values) desc += ` [Options: ${values}]`;
          if (bitmask) desc += ` [Bitmask: ${bitmask}]`;

          outputParams[name] = {
              desc: desc,
              range: (min !== "N/A") ? `${min} - ${max}` : "N/A",
              default: def,
              unit: unit
          };
          count++;
      });

      // --- 3. SAVE ---
      const dir = path.dirname(OUTPUT_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const fileContent = `/**
 * AUTO-GENERATED DATABASE (CLEANED)
 * Source: ${URL}
 * Count: ${count} parameters
 * Date: ${new Date().toISOString()}
 */

export const PARAM_DEFINITIONS = ${JSON.stringify(outputParams, null, 2)};

export const getParamDef = (id) => {
  if (!id) return { desc: "", range: "", default: "", unit: "" };
  const upperId = id.toUpperCase();

  // Exact Match (Now works because prefixes are gone)
  if (PARAM_DEFINITIONS[upperId]) return PARAM_DEFINITIONS[upperId];

  if (upperId.startsWith("RC") && upperId.includes("_")) {
     return { desc: "RC Channel Setting", range: "800 - 2200", default: "1500", unit: "us" };
  }

  return { desc: "Standard Parameter", range: "N/A", default: "N/A", unit: "" };
};
`;

      fs.writeFileSync(OUTPUT_FILE, fileContent);
      console.log(`🎉 Success! Database saved to: ${OUTPUT_FILE}`);
    });

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getParams();