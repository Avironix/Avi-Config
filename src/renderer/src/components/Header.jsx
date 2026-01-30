import React from 'react'
import { THEME } from '../theme'
import logo from '../assets/images/avironix.png'

const Header = ({ isConnected, onDisconnect }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '60px',
        background: 'white',
        // borderBottom: isConnected ? '2px solid #1E40AF' : '2px solid #374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        transition: 'all 0.5s ease',
        boxShadow: isConnected
          ? '0 2px 8px rgba(61, 155, 233, 0.3)'
          : '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isConnected
            ? 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
            : 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Connection Icon */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isConnected ? (
              // Connected WiFi Icon
              <>
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
              </>
            ) : (
              // Disconnected WiFi Icon with slash
              <>
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                <line x1="2" y1="2" x2="22" y2="22" stroke="#EF4444" strokeWidth="3" />
              </>
            )}
          </svg>
        </div>

        {/* Title */}
        <div style={{ width:"150px", height:"50px", }}>
          <img src={logo} style={{objectFit:"contain"}} width={150} height={45}/>
        </div>
      </div>

      {/* RIGHT: Status Indicator & Disconnect Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Status Pulse Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Pulsing Dot */}
          <div
            style={{
              position: 'relative',
              width: '10px',
              height: '10px'
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: isConnected ? '#10B981' : '#EF4444',
                boxShadow: isConnected ? '0 0 10px #10B981' : '0 0 10px #EF4444'
              }}
            ></div>

            {/* Pulse Ring */}
            {isConnected && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: '2px solid #10B981',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}
              ></div>
            )}
          </div>

          {/* Status Text */}
          <span
            style={{
              color: THEME.accent,
              fontSize: '0.85em',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            {isConnected ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>

        {/* DISCONNECT BUTTON - Only show if connected */}
        {isConnected && (
          <button
            onClick={onDisconnect}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(239, 68, 68, 0.9)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85em',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#DC2626'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.9)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Power Off Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
            <span>DISCONNECT</span>
          </button>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes statusPulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            50% {
              transform: translate(-50%, -50%) scale(2.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
