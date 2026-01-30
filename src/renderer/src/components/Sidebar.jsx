import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { THEME } from '../theme'
import logo from '../assets/images/logo.png'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { label: 'AIRFRAME', id: '/airframe', icon: '✈️' },
    { label: 'SENSORS', id: '/sensors', icon: '📡' },
    { label: 'SAFETY', id: '/safety', icon: '🛡️' },
    { label: 'FLIGHT MODES', id: '/flight-modes', icon: '🎯' },
    { label: 'RC CALIBRATION', id: '/rc-calibration', icon: '🎮' },
    { label: 'MOTOR AND ESC', id: '/motor-esc', icon: '⚙️' },
    { label: 'POWER', id: '/power', icon: '🔋' },
    { label: 'SERIAL PARAM', id: '/serial-param', icon: '🔌' },
    { label: 'CAMERA', id: '/camera', icon: '📷' },
    { label: 'SPRAYING CONFIG', id: '/spraying', icon: '💧' },
    { label: 'RESET PARAMETERS', id: '/reset', icon: '🔄' },
    { label: 'ADVANCED SETTINGS', id: '/advanced', icon: '⚡' },
    { label: 'LOG ANALYZER', id: '/logs', icon: '📊' },
    { label: 'FIRMWARE UPGRADE', id: '/upgrade', icon: '⬆️' },
    { label: 'DRONE DETAILS', id: '/profile', icon: '🚁' }
  ]

  return (
    <div
      style={{
        width: '280px',
        height: '100%',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        borderRight: `1px solid rgba(61, 155, 233, 0.1)`,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        position: 'relative'
      }}
    >
     

      {/* NAVIGATION MENU */}
      <nav
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '15px 10px',
          scrollbarWidth: 'thin',
          scrollbarColor: `${THEME.accent}20 transparent`
        }}
      >
        <style>
          {`
            nav::-webkit-scrollbar {
              width: 4px;
            }
            nav::-webkit-scrollbar-track {
              background: transparent;
            }
            nav::-webkit-scrollbar-thumb {
              background: ${THEME.accent}20;
              border-radius: 10px;
            }
            nav::-webkit-scrollbar-thumb:hover {
              background: ${THEME.accent}40;
            }
          `}
        </style>

        {menuItems.map((item) => {
          const isActive = location.pathname === item.id

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                width: '100%',
                padding: '12px 15px',
                margin: '3px 0',
                textAlign: 'left',
                background: isActive
                  ? `linear-gradient(135deg, ${THEME.accent}15, ${THEME.accent}08)`
                  : 'transparent',
                color: isActive ? THEME.accent : '#4b5563',
                border: 'none',
                borderLeft: isActive ? `3px solid ${THEME.accent}` : '3px solid transparent',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: isActive ? '600' : '500',
                fontSize: '0.85em',
                letterSpacing: '0.3px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = `${THEME.accent}05`
                  e.currentTarget.style.transform = 'translateX(3px)'
                  e.currentTarget.style.paddingLeft = '18px'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.paddingLeft = '15px'
                }
              }}
            >
              {/* Icon */}
              <span
                style={{
                  fontSize: '18px',
                  lineHeight: 1,
                  filter: isActive ? 'none' : 'grayscale(100%) opacity(0.6)',
                  transition: 'filter 0.3s'
                }}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span>{item.label}</span>

              {/* Active Indicator Glow */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '60%',
                    background: THEME.accent,
                    borderRadius: '10px 0 0 10px',
                    boxShadow: `0 0 10px ${THEME.accent}`
                  }}
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Bottom Info Section */}

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  )
}

export default Sidebar
