import React, { useState, useEffect, useMemo } from 'react';
import { THEME } from '../theme';

const AdvancedSettings = ({ paramsData, onRequestLoad }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [localParams, setLocalParams] = useState([]);


  const filteredParams = useMemo(() => {
  const term = searchTerm.toLowerCase();
  return localParams.filter(p =>
    (p.id || "").toLowerCase().includes(term)
  );
}, [searchTerm, localParams]);


  // Convert the object map (from App.jsx) to an array for the table
  useEffect(() => {
    if (paramsData) {
      const array = Object.values(paramsData).sort((a, b) => {
        // Safety: Ensure ID exists before sorting
        const idA = a.id || "";
        const idB = b.id || "";
        return idA.localeCompare(idB);
      });
      setLocalParams(array);
    }
  }, [paramsData]);

  // Handle "Enter Key" or "Blur" to Save
  const handleSave = (id, newValue) => {
    if (!id) return;
    console.log(`Saving ${id} -> ${newValue}`);
    window.api.setParam(id, newValue);
  };

 

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '10px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: THEME.accent, margin: '0 0 10px 0' }}>FULL PARAMETER LIST</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={onRequestLoad} style={{ padding: '8px 20px', background: THEME.success, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Refresh / Load Params
            </button>
            <span style={{ alignSelf: 'center', color: '#999', fontSize: '0.9em' }}>
              {localParams.length} parameters loaded
            </span>
          </div>
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <input 
             type="text" 
             placeholder="Search Parameter..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             style={{ width: '100%', padding: '10px', borderRadius: '4px', border: `1px solid #CCC` }}
          />
        </div>
      </div>

      {/* TABLE */}
      <div style={{ flex: 1, overflowY: 'auto', border: `1px solid ${THEME.border}`, borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead style={{ position: 'sticky', top: 0, background: '#F5F7FA', zIndex: 1 }}>
            <tr style={{ textAlign: 'left', color: '#555' }}>
              <th style={{ padding: '12px', width: '40%' }}>Parameter Name</th>
              <th style={{ padding: '12px', width: '30%' }}>Value (Editable)</th>
              <th style={{ padding: '12px', width: '30%' }}>Index</th>
            </tr>
          </thead>
          <tbody>
            {filteredParams.length > 0 ? (
              filteredParams.map((param, i) => (
                <tr key={param.id || i} style={{ borderBottom: '1px solid #EEE', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold', color: '#333' }}>{param.id || "Unknown"}</td>
                  <td style={{ padding: '5px' }}>
                    <input 
                      type="number" 
                      step="any"
                      defaultValue={param.value}
                      onKeyDown={(e) => { 
                        if(e.key === 'Enter') {
                          handleSave(param.id, e.target.value);
                          e.target.blur(); 
                          e.target.style.background = '#E6FFFA'; // Flash Green
                        }
                      }}
                      onBlur={(e) => handleSave(param.id, e.target.value)}
                      style={{ width: '100%', padding: '8px', border: '1px solid #DDD', borderRadius: '4px', color: THEME.accent, fontWeight: 'bold' }}
                    />
                  </td>
                  <td style={{ padding: '10px', color: '#999' }}>{param.index}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3" style={{ padding: '40px', textAlign: 'center', color: '#AAA' }}>No parameters found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvancedSettings;