import React, { createContext, useState, useEffect, useContext, useRef } from 'react';

const MavlinkContext = createContext();

// Helper to clean strings from Char Arrays
function charsToString(charArray) {
  if (!charArray) return '';
  return Array.from(charArray)
    .map(c => String.fromCharCode(c))
    .join('')
    .replace(/\0/g, '')
    .trim();
}

export const MavlinkProvider = ({ children }) => {
  // --- STATE ---
  const [connectedPort, setConnectedPort] = useState(null);
  const [ports, setPorts] = useState([]);
  const [hasHeartbeat, setHasHeartbeat] = useState(false);
  const [attitude, setAttitude] = useState({ roll: 0, pitch: 0, yaw: 0 });
  
  // Parameters State
  const [parameters, setParameters] = useState({});
  const [expectedParamCount, setExpectedParamCount] = useState(0);
  
  // Refs (To prevent spamming actions in the high-speed loop)
  const heartbeatRef = useRef(false);
  const paramsLoadedRef = useRef(false);

  // --- ACTIONS ---
  
  // 1. SCAN PORTS
  const scanPorts = async () => {
    const found = await window.api.getPorts();
    setPorts(found);
  };

  // 2. CONNECT
  const connectDrone = async (path) => {
    try {
      // Reset State on new connection
      setParameters({});
      setExpectedParamCount(0);
      setHasHeartbeat(false);
      setAttitude({ roll: 0, pitch: 0, yaw: 0 });
      
      heartbeatRef.current = false;
      paramsLoadedRef.current = false;
      
      await window.api.connectDrone(path);
      setConnectedPort(path);
    } catch (err) {
      alert(`Connection Failed: ${err}`);
    }
  };

  // 3. REQUEST PARAMS (Common Function)
  const requestParams = () => {
    if (connectedPort) {
      console.log("Context: Requesting All Params...");
      // Clear old data to show progress bar again
      setParameters({});
      setExpectedParamCount(0); 
      paramsLoadedRef.current = false; 
      
      // Call Backend
      window.api.requestParams();
    }
  };

  // 4. UPDATE PARAM
  const updateParam = (id, value) => {
    if (connectedPort) window.api.setParam(id, value);
  };

  // --- GLOBAL MAVLINK LISTENER ---
  useEffect(() => {
    const handler = (data) => {
      const packet = JSON.parse(data.json);

      // ❤️ HEARTBEAT LOGIC
      if (packet.header.msgid === 0) {
        if (!heartbeatRef.current) {
          // First Heartbeat detected!
          heartbeatRef.current = true;
          setHasHeartbeat(true);
          console.log("❤️ Heartbeat Detected (System Online)");
          
          // AUTO-DOWNLOAD: Trigger similar to your Kotlin 'requestAllParamsList'
          if (!paramsLoadedRef.current) {
            console.log("🚀 Auto-triggering Parameter Load...");
            window.api.requestParams();
            paramsLoadedRef.current = true; // Lock so we don't spam
          }
        }
      }

      // 🧭 ATTITUDE
      if (packet.header.msgid === 30) {
        setAttitude({
          roll: ((packet.roll * 180) / Math.PI).toFixed(1),
          pitch: ((packet.pitch * 180) / Math.PI).toFixed(1),
          yaw: ((packet.yaw * 180) / Math.PI).toFixed(1)
        });
      }

      // ⚙️ PARAMETERS
      if (packet.header.msgid === 22 && packet.param_id) {
        const cleanId = charsToString(packet.param_id);
        
        // Update total expected (sent by drone in every param packet)
        setExpectedParamCount(packet.param_count);

        setParameters(prev => ({
          ...prev,
          [cleanId]: {
            id: cleanId,
            value: packet.param_value,
            index: packet.param_index,
            count: packet.param_count
          }
        }));
      }
    };

    // Bind Listener
    window.api.onMavlinkData(handler);
    return () => window.api.offMavlinkData(handler);
  }, [connectedPort]); // Re-bind if port changes

  // Expose everything to the app
  return (
    <MavlinkContext.Provider value={{
      connectedPort,
      ports,
      hasHeartbeat,
      attitude,
      parameters,
      expectedParamCount,
      scanPorts,
      connectDrone,
      requestParams,
      updateParam
    }}>
      {children}
    </MavlinkContext.Provider>
  );
};

export const useMavlink = () => useContext(MavlinkContext);