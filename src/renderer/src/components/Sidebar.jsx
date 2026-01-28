import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { THEME } from '../theme';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the menu items and their corresponding Routes
  const menuItems = [
    { id: '/dashboard', label: 'Drone Details' },     // Goes to Dashboard.jsx
    { id: '/upgrade',   label: 'Firmware Upgrade' }, // Goes to FirmwareUpgrade.jsx
    { id: '/advanced',  label: 'Advanced Settings' }, // Goes to AdvancedSettings.jsx
    { id: '/reset',     label: 'Reset Parameters' }, // Goes to ResetParameters.jsx
    { id: '/profile', label: 'Drone Profile' },
  ];

  return (
    <div style={{ 
      width: '250px', 
      height: "100%", 
      background: THEME.sidebar || '#FFFFFF', 
      borderRight: `1px solid ${THEME.border}`, 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '20px' 
    }}>
      {/* BRANDING */}
      <h2 style={{ color: THEME.accent, marginBottom: '40px', paddingLeft: '10px' }}>
        AVI GREEN
      </h2>
      
      {/* NAVIGATION MENU */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {menuItems.map((item) => {
          // Check if this is the active page
          const isActive = location.pathname === item.id;
          
          return (
            <button 
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{ 
                padding: '15px', 
                textAlign: 'left', 
                background: isActive ? '#E6F9FF' : 'transparent',
                color: isActive ? THEME.accent : '#666',
                border: 'none', 
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '1em',
                transition: '0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;