import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { THEME } from '../theme';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'AIRFRAME', id: '/airframe' },
    { label: 'SENSORS', id: '/sensors' },
    { label: 'SAFETY', id: '/safety' },
    { label: 'FLIGHT MODES', id: '/flight-modes' },
    { label: 'RC CALIBRATION', id: '/rc-calibration' },
    { label: 'MOTOR AND ESC', id: '/motor-esc' },
    { label: 'POWER', id: '/power' },
    { label: 'SERIAL PARAM', id: '/serial-param' },
    { label: 'CAMERA', id: '/camera' },
    { label: 'SPRAYING CONFIG', id: '/spraying' },
    { label: 'RESET PARAMETERS', id: '/reset' },
    { label: 'ADVANCED SETTINGS', id: '/advanced' },
    { label: 'LOG ANALYZER', id: '/logs' },
    { label: 'FIRMWARE UPGRADE', id: '/upgrade' },
    { label: 'DRONE DETAILS', id: '/profile' },
  ];

  return (
    <div style={{ 
      width: '280px', 
      height: "100%", 
      background: '#FFFFFF', 
      borderRight: `1px solid #EEE`, 
      display: 'flex', 
      flexDirection: 'column',
      boxSizing: 'border-box'
    }}>
      {/* BRANDING - Fixed at top */}
      <div style={{ padding: '40px 30px 20px 30px' }}>
        <h2 style={{ 
          color: THEME.accent, 
          margin: 0, 
          fontSize: '1.4em', 
          letterSpacing: '1px',
          fontWeight: 'bold' 
        }}>
          AVI GREEN
        </h2>
      </div>
      
      {/* NAVIGATION MENU - Scrollable Area */}
      <nav style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '20px 30px',
        display: 'flex', 
        flexDirection: 'column',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none' // Hide scrollbar for IE/Edge
      }}>
        {/* Hide scrollbar for Chrome/Safari */}
        <style>
          {`nav::-webkit-scrollbar { display: none; }`}
        </style>

        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.id;
          
          return (
            <div key={item.id} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Vertical Line Connector */}
              {index !== menuItems.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '25px',
                  width: '2px',
                  height: '30px',
                  background: '#EEE',
                  zIndex: 0
                }} />
              )}

              <button 
                onClick={() => navigate(item.id)}
                style={{ 
                  padding: '15px 0', 
                  textAlign: 'left', 
                  background: 'transparent',
                  color: isActive ? THEME.accent : '#666',
                  border: 'none', 
                  cursor: 'pointer',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: '0.9em',
                  transition: '0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  width: '100%',
                  zIndex: 1
                }}
              >
                {/* Circle Indicator */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? THEME.accent : '#777',
                  flexShrink: 0,
                  transition: 'background-color 0.3s'
                }} />

                {item.label}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;