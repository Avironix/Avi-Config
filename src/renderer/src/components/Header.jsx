import React from 'react';
import { THEME } from '../theme'; // Assuming you have a theme file

const Header = ({ isConnected, onDisconnect }) => {
  return (
    <div style={{
      height: '60px', background: 'white', borderBottom: '1px solid #E5E7EB',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px'
    }}>
      {/* LEFT: Logo/Title */}
      <h2 style={{ margin: 0, color: THEME.accent, fontSize: '1.2em' }}>AVI CONFIG DASHBOARD</h2>

      {/* RIGHT: Status & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        
        {/* Connection Status Indicator */}
        <div style={{
          padding: '5px 12px', borderRadius: '20px', fontSize: '0.85em', fontWeight: 'bold',
          background: isConnected ? '#D1FAE5' : '#FEE2E2',
          color: isConnected ? '#065F46' : '#991B1B',
          display: 'flex', alignItems: 'center', gap: '5px'
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isConnected ? '#10B981' : '#EF4444' }}></div>
          {isConnected ? "CONNECTED" : "DISCONNECTED"}
        </div>

        {/* DISCONNECT BUTTON (Only show if connected) */}
        {isConnected && (
          <button 
            onClick={onDisconnect}
            style={{
              background: '#EF4444', color: 'white', border: 'none',
              padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
            }}
          >
            DISCONNECT
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;