import React from 'react';
import { THEME } from '../theme';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'DETAILS', label: 'Drone Details' },
    { id: 'UPGRADE', label: 'Firmware Upgrade' },
    { id: 'ADVANCED', label: 'Advance Settings' },
    { id: 'RESET', label: 'Reset Parameters' },
    {id:'VERIFY',label:'Verify Firmware'}
  ];

  return (
    <div style={{ width: '20%',height:"100%", background: THEME.sidebar, borderRight: `1px solid ${THEME.border}`, display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <h2 style={{ color: THEME.accent, marginBottom: '40px', paddingLeft: '10px' }}>AVI GREEN</h2>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{ 
              padding: '15px', 
              textAlign: 'left', 
              background: activeTab === item.id ? '#E6F9FF' : 'transparent',
              color: activeTab === item.id ? THEME.accent : THEME.textLight,
              border: 'none', 
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: activeTab === item.id ? 'bold' : 'normal',
              transition: '0.2s'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <button onClick={onLogout} style={{ color: THEME.error, background: 'transparent', border: 'none', cursor: 'pointer', padding: '10px' }}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;