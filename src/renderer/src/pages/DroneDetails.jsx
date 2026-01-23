import React, { useEffect } from 'react';
import { THEME } from '../theme';
import { useMavlink } from '../context/MavlinkContext'; // Import Hook

const DroneDetails = () => {
  // Grab global state directly
  const { attitude, ports, connectedPort, scanPorts, connectDrone } = useMavlink();

  // Scan on mount
  useEffect(() => { scanPorts(); }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: THEME.textMain }}>Drone Details & Flight Data</h2>
      
      {/* Connection Bar */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px', border: `1px solid ${THEME.border}` }}>
        <button onClick={scanPorts} style={{ padding: '10px 20px', background: '#F0F0F0', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Refresh Ports</button>
        {ports.length === 0 && <span style={{color: THEME.textLight}}>No Devices Found</span>}
        {ports.map((p, i) => (
          <button key={i} onClick={() => connectDrone(p.path)} 
            style={{ padding: '10px 20px', background: connectedPort===p.path?THEME.success:'white', color: connectedPort===p.path?'white':THEME.textMain, border: `1px solid ${connectedPort===p.path?THEME.success:THEME.border}`, borderRadius: '8px', cursor: 'pointer' }}>
            {connectedPort === p.path ? 'Connected' : `Connect ${p.path}`}
          </button>
        ))}
      </div>

      {/* Attitude Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', border: `1px solid ${THEME.border}` }}>
          <div style={{ fontSize: '4em', fontWeight: 'bold', color: THEME.accent }}>{attitude.roll}°</div>
          <div style={{ color: THEME.textLight }}>ROLL</div>
        </div>
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', border: `1px solid ${THEME.border}` }}>
          <div style={{ fontSize: '4em', fontWeight: 'bold', color: '#FD79A8' }}>{attitude.pitch}°</div>
          <div style={{ color: THEME.textLight }}>PITCH</div>
        </div>
      </div>
    </div>
  );
};

export default DroneDetails;