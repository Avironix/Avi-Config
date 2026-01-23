import React, { useState, useEffect } from 'react';
import { THEME } from '../theme';

const ConnectPage = ({ onConnect }) => {
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');

  // Scan ports on mount
  useEffect(() => {
    const scanPorts = async () => {
      const availablePorts = await window.api.getPorts();
      setPorts(availablePorts);
      if (availablePorts.length > 0) setSelectedPort(availablePorts[0].path);
    };
    scanPorts();
    const interval = setInterval(scanPorts, 2000); // Auto-scan every 2s
    return () => clearInterval(interval);
  }, []);

  const handleConnect = async () => {
    if (!selectedPort) return;
    setIsConnecting(true);
    setError('');

    try {
      const success = await window.api.connectDrone(selectedPort);
      if (success) {
        onConnect(); // Tell App.jsx we are connected!
      } else {
        setError("Connection Failed. Check USB cable.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div style={{
      height: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      background: '#F3F4F6'
    }}>
      <div style={{
        background: 'white', padding: '40px', borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '400px', textAlign: 'center'
      }}>
        {/* LOGO AREA */}
        <h1 style={{ color: THEME.accent, marginBottom: '10px' }}>AVI CONFIG</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Please connect your drone to continue</p>

        {/* PORT SELECTOR */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Select COM Port</label>
          <select 
            value={selectedPort} 
            onChange={(e) => setSelectedPort(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #DDD', fontSize: '1em' }}
          >
            {ports.length === 0 && <option>No Ports Found...</option>}
            {ports.map(p => <option key={p.path} value={p.path}>{p.path} - {p.manufacturer || "USB Serial"}</option>)}
          </select>
        </div>

        {/* ERROR MESSAGE */}
        {error && <div style={{ color: 'red', marginBottom: '15px', fontSize: '0.9em' }}>⚠️ {error}</div>}

        {/* CONNECT BUTTON */}
        <button 
          onClick={handleConnect}
          disabled={isConnecting || ports.length === 0}
          style={{
            width: '100%', padding: '12px',
            background: isConnecting ? '#CCC' : THEME.success,
            color: 'white', border: 'none', borderRadius: '6px',
            fontSize: '1.1em', fontWeight: 'bold', cursor: isConnecting ? 'default' : 'pointer',
            transition: '0.3s'
          }}
        >
          {isConnecting ? "Connecting..." : "CONNECT DRONE"}
        </button>
      </div>
    </div>
  );
};

export default ConnectPage;