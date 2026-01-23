import React, { useState, useEffect, useRef } from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

// PAGES
import Login from './pages/Login'
import ConnectPage from './pages/ConnectPage'
import Dashboard from './pages/Dashboard'
import AdvancedSettings from './pages/AdvancedSettings'
import FirmwareUpgrade from './pages/FirmwareUpgrade'
import ResetParameters from './pages/ResetParameters'

// COMPONENTS
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function AppContent() {
  // --- STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [mavData, setMavData] = useState(null)
  const [paramsData, setParamsData] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  // --- REFS (For Performance Buffering) ---
  const paramsBuffer = useRef({})
  const lastUpdate = useRef(Date.now())

  const navigate = useNavigate()

  // --- 1. DATA LISTENER (The Brain) ---
  useEffect(() => {
    const removeListener = window.api.onMavlinkData((dataWrapper) => {
      // 1. Store Live Telemetry (Attitude, Battery) - Always update
      setMavData(dataWrapper)

      try {
        const packet = JSON.parse(dataWrapper.json)

        // 2. CAPTURE PARAMETERS (Msg ID 22) [FIXED LOGIC]
        if (packet.header.msgid === 22 || packet.param_id) {
          const id = packet.param_id

          // Save to Buffer (Instant, no re-render)
          paramsBuffer.current[id] = {
            id: id,
            value: packet.param_value,
            count: packet.param_count,
            index: packet.param_index
          }

          // 3. FLUSH TO SCREEN (Throttled)
          // Only update React State every 500ms to prevent freezing
          const now = Date.now()
          if (now - lastUpdate.current > 500) {
            setParamsData({ ...paramsBuffer.current }) // Copy buffer to state
            lastUpdate.current = now
          }
        }

        // 4. AUTO-CONNECT
        if (!isConnected && isLoggedIn) setIsConnected(true)
      } catch (err) {
        console.error('Packet Parse Error:', err)
      }
    })

    return () => removeListener()
  }, [isConnected, isLoggedIn])

  useEffect(() => {
    if (isUpgrading) return
    if (!isLoggedIn) {
      navigate('/login')
    } else if (!isConnected) {
      navigate('/connect')
    } else {
      // If we are on login/connect pages but actually connected, go to dashboard
      const path = window.location.hash
      if (path.includes('connect') || path.includes('login') || path === '#/') {
        navigate('/dashboard')
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 3000)
      }
    }
  }, [isLoggedIn, isConnected, navigate, isUpgrading])

  // --- ACTIONS ---
  const handleLogin = () => setIsLoggedIn(true)

  // 1. Tell Backend to close the port (Stops the data flow)
  const handleDisconnect = async () => {
    // 1. Tell Backend to close the port (Stops the data flow)
    await window.api.disconnectDrone()

    // 2. Clear Buffers
    paramsBuffer.current = {}
    setParamsData({})

    // 3. Update UI State
    setMavData(null)
    setIsConnected(false)

    // Router will automatically send us back to '/connect'
  }

  const handleParamLoad = async () => {
    setParamsData({}) // Clear table
    paramsBuffer.current = {} // Clear buffer
    await window.api.requestParams()
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#F3F4F6'
      }}
    >
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#10B981',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '50px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            zIndex: 9999,
            fontWeight: 'bold',
            animation: 'fadeIn 0.5s'
          }}
        >
          ✅ Drone Connected
        </div>
      )}

      {/* --- ROUTING SWITCH --- */}
      <Routes>
        {/* 1. LOGIN */}
        <Route
          path="/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/connect" />}
        />

        {/* 2. CONNECT */}
        <Route
          path="/connect"
          element={
            isLoggedIn && !isConnected ? (
              <ConnectPage onConnect={() => setIsConnected(true)} />
            ) : (
              <Navigate to={isLoggedIn ? '/dashboard' : '/login'} />
            )
          }
        />

        {/* 3. MAIN APP (Protected) */}
        <Route
          path="/*"
          element={
            isLoggedIn && isConnected ? (
              <div style={{ display: 'flex', height: '100%' }}>
                {/* SIDEBAR */}
                <Sidebar />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  {/* HEADER */}
                  <Header isConnected={isConnected} onDisconnect={handleDisconnect} />

                  {/* CONTENT */}
                  <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <Routes>
                      <Route path="dashboard" element={<Dashboard mavData={mavData} />} />
                      <Route
                        path="upgrade"
                        element={
                          <FirmwareUpgrade
                            onUpgradeStart={() => setIsUpgrading(true)}
                            onUpgradeEnd={() => setIsUpgrading(false)}
                          />
                        }
                      />
                      <Route
                        path="advanced"
                        element={
                          <AdvancedSettings
                            paramsData={paramsData}
                            onRequestLoad={handleParamLoad}
                          />
                        }
                      />
                      <Route path="reset" element={<ResetParameters />} />

                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to={isLoggedIn ? '/connect' : '/login'} />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
