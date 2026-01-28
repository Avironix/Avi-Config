import React, { useState, useEffect } from 'react'
import { THEME } from '../theme'
import { useMavlink } from '../context/MavlinkContext'

const ConnectPage = () => {
  const { isSyncing, parameters, expectedParamCount, startSync, ports, scanPorts } = useMavlink()

  // UI State
  const [selectedPort, setSelectedPort] = useState('')
  const [baud, setBaud] = useState('115200')
  const [dataBits, setDataBits] = useState(8)
  const [parity, setParity] = useState('none')
  const [isConnecting, setIsConnecting] = useState(false)

  // Sync Progress
  const loadedCount = Object.keys(parameters).length
  const progress = expectedParamCount > 0 ? Math.round((loadedCount / expectedParamCount) * 100) : 0

  useEffect(() => {
    scanPorts()
  }, [])

  // Set default port when list loads
  useEffect(() => {
    if (ports.length > 0 && !selectedPort) {
      setSelectedPort(ports[0].path)
    }
  }, [ports])

  const handleConnect = async () => {
    setIsConnecting(true)
    const success = await window.api.connectDrone({
      port: selectedPort,
      baud: parseInt(baud),
      dataBits: dataBits,
      parity: parity
    })

    if (success) {
      startSync()
    } else {
      alert('Connection Failed. Check if the port is busy.')
    }
    setIsConnecting(false)
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={cardInnerStyle}>
          {/* Header */}
          <div style={headerStyle}>COMM LINK SETTINGS</div>

          {/* Main Content Area */}
          <div style={mainContentStyle}>
            {/* Left Column - Form Fields */}
            <div style={leftColumnStyle}>
              {/* Connection Type Selector */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle}>Connection Type</label>
                <select style={dropdownStyle} defaultValue="Serial">
                  <option value="Serial">Serial</option>
                  <option value="UDP">UDP</option>
                </select>
              </div>

              {/* Serial Port */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle}>Serial Port</label>
                <select
                  style={dropdownStyle}
                  value={selectedPort}
                  onChange={(e) => setSelectedPort(e.target.value)}
                >
                  {ports.map((p) => (
                    <option key={p.path} value={p.path}>
                      {p.path} ({p.friendlyName || 'Mavlink'})
                    </option>
                  ))}
                  {ports.length === 0 && <option>No Ports Detected</option>}
                </select>
              </div>

              {/* Baud Rate */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle}>Baud Rate</label>
                <select style={dropdownStyle} value={baud} onChange={(e) => setBaud(e.target.value)}>
                  <option value="9600">9600</option>
                  <option value="57600">57600</option>
                  <option value="115200">115200</option>
                </select>
              </div>

              {/* Data Bits Selection */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle}>Data Bits</label>
                <div style={btnGroupStyle}>
                  {[6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setDataBits(num)}
                      style={dataBits === num ? activeToggleStyle : inactiveToggleStyle}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parity Selection */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle}>Parity</label>
                <div style={btnGroupStyle}>
                  {['None', 'Even', 'Odd'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setParity(p.toLowerCase())}
                      style={parity === p.toLowerCase() ? activeToggleStyle : inactiveToggleStyle}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Action Buttons */}
            <div style={rightColumnStyle}>
              <button 
                style={connectBtnStyle} 
                onClick={handleConnect} 
                disabled={isConnecting}
                onMouseOver={(e) => !isConnecting && (e.target.style.background = '#00b8e6')}
                onMouseOut={(e) => !isConnecting && (e.target.style.background = '#00d1ff')}
              >
                {isConnecting ? 'Connecting...' : 'Connect'}
              </button>
              <button 
                style={disconnectBtnStyle} 
                onClick={() => window.api.disconnectDrone()}
                onMouseOver={(e) => {
                  e.target.style.background = '#00d1ff'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = '#00d1ff'
                }}
              >
                Disconnect
              </button>
            </div>
          </div>

          {/* Advanced Button */}
          <div style={footerStyle}>
            <button 
              style={advancedLinkStyle}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#00d1ff'
                e.target.style.color = '#00d1ff'
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = '#DDD'
                e.target.style.color = '#999'
              }}
            >
              Advanced
            </button>
          </div>
        </div>
      </div>

      {/* BLOCKING SYNC MODAL */}
      {isSyncing && (
        <div style={syncOverlayStyle}>
          <div style={syncCardStyle}>
            <h2 style={syncHeaderStyle}>🔄 Synchronizing Drone</h2>
            <p style={syncTextStyle}>
              Fetching parameters... {loadedCount} / {expectedParamCount}
            </p>
            <div style={progressBgStyle}>
              <div style={{ ...progressFillStyle, width: `${progress}%` }}></div>
            </div>
            <div style={syncProgressTextStyle}>
              {progress}%
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// --- STYLES ---

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9FAFB',
  padding: '20px',
  boxSizing: 'border-box'
}

const cardStyle = {
  background: 'white',
  borderRadius: '15px',
  width: '100%',
  maxWidth: '900px',
  boxShadow: '0 4px 30px rgba(0,0,0,0.05)',
  boxSizing: 'border-box'
}

const cardInnerStyle = {
  padding: '40px',
  boxSizing: 'border-box'
}

const headerStyle = {
  color: '#00d1ff',
  fontSize: '1.4em',
  marginBottom: '30px',
  fontWeight: '600',
  letterSpacing: '0.5px'
}

const mainContentStyle = {
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
  flexWrap: 'wrap'
}

const leftColumnStyle = {
  flex: '1 1 400px',
  minWidth: '280px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}

const rightColumnStyle = {
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  minWidth: '200px'
}

const fieldGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
}

const labelStyle = {
  fontSize: '0.9em',
  color: '#666',
  fontWeight: '500'
}

const dropdownStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid #DDD',
  background: '#FFF',
  outline: 'none',
  fontSize: '0.95em',
  color: '#333',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box'
}

const btnGroupStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap'
}

const inactiveToggleStyle = {
  padding: '10px 24px',
  border: '1px solid #00d1ff',
  background: 'white',
  color: '#00d1ff',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.9em',
  fontWeight: '500',
  transition: 'all 0.2s',
  flex: '1 0 auto',
  minWidth: '60px'
}

const activeToggleStyle = {
  padding: '10px 24px',
  border: '1px solid #00d1ff',
  background: '#00d1ff',
  color: 'white',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.9em',
  fontWeight: '500',
  transition: 'all 0.2s',
  flex: '1 0 auto',
  minWidth: '60px'
}

const connectBtnStyle = {
  padding: '14px 40px',
  background: '#00d1ff',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '1em',
  cursor: 'pointer',
  transition: 'all 0.3s',
  boxShadow: '0 2px 8px rgba(0, 209, 255, 0.3)',
  whiteSpace: 'nowrap'
}

const disconnectBtnStyle = {
  padding: '14px 40px',
  background: 'white',
  color: '#00d1ff',
  border: '2px solid #00d1ff',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '1em',
  cursor: 'pointer',
  transition: 'all 0.3s',
  whiteSpace: 'nowrap'
}

const footerStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'flex-end'
}

const advancedLinkStyle = {
  background: 'none',
  border: '1px solid #DDD',
  borderRadius: '20px',
  padding: '10px 24px',
  color: '#999',
  cursor: 'pointer',
  fontSize: '0.9em',
  transition: 'all 0.2s'
}

const syncOverlayStyle = {
  position: 'fixed',
  inset: '0',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(4px)',
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
}

const syncCardStyle = {
  textAlign: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '20px'
}

const syncHeaderStyle = {
  color: THEME.accent,
  fontSize: '1.5em',
  marginBottom: '15px',
  fontWeight: '600'
}

const syncTextStyle = {
  color: '#666',
  fontSize: '1em',
  marginBottom: '20px'
}

const progressBgStyle = {
  width: '100%',
  height: '12px',
  background: '#eee',
  borderRadius: '6px',
  overflow: 'hidden'
}

const progressFillStyle = {
  height: '100%',
  background: '#00d1ff',
  transition: 'width 0.3s ease',
  borderRadius: '6px'
}

const syncProgressTextStyle = {
  marginTop: '15px',
  fontWeight: 'bold',
  color: THEME.accent,
  fontSize: '1.2em'
}

// Media query styles (applied via window resize listener if needed)
// For true responsive behavior in React, consider using window.matchMedia or a resize listener
// Or use CSS-in-JS libraries. For now, the flexbox layout handles most responsive needs.

export default ConnectPage