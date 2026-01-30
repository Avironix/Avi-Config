import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

// PAGES
import Login from './pages/Login'
import ConnectPage from './pages/ConnectPage'
import Dashboard from './pages/Dashboard'
import DroneProfile from './pages/DroneProfile'
import AdvancedSettings from './pages/AdvancedSettings'
import FirmwareUpgrade from './pages/FirmwareUpgrade'
import ResetParameters from './pages/ResetParameters'

// COMPONENTS
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// CONTEXT
import { useMavlink } from './context/MavlinkContext'
import SprayingConfig from './pages/SprayingConfig'
import PowerSettings from './pages/PowerSettings'

// Placeholder for new configuration pages
const Placeholder = ({ name }) => (
  <div style={{ padding: '40px', color: '#666', background: '#fff', flex: 1 }}>
    <h2>{name}</h2>
    <p>This module is currently under development.</p>
  </div>
)

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  const { isConnected, isSyncing,  disconnectDrone } = useMavlink()
  const navigate = useNavigate()

  // Use a hook to get the current location safely
  const currentPath = window?.location?.hash || ''

  useEffect(() => {
    // 1. If we are upgrading, freeze all navigation logic
    if (isUpgrading) return

    if (!isLoggedIn) {
      navigate('/login')
    }
    // 2. Only redirect to connect if NOT on the upgrade page and NOT connected
    else if (!isConnected && !currentPath.includes('upgrade')) {
      navigate('/connect')
    }
    // 3. Handle auto-navigation to dashboard when connection is restored
    else if (isConnected && !isSyncing) {
      if (
        currentPath.includes('connect') ||
        currentPath.includes('login') ||
        currentPath === '#/'
      ) {
        navigate('/dashboard')
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 3000)
      }
    }
  }, [isLoggedIn, isConnected, isSyncing, navigate, isUpgrading, currentPath])

  const handleLogin = () => setIsLoggedIn(true)
  const handleDisconnect = async () => await disconnectDrone()

  // ✅ AUTHORIZATION GATE:
  // Allow shell access if connected OR currently on the upgrade route
  const canAccessShell =
    isLoggedIn && (isConnected || currentPath.includes('upgrade') || isUpgrading)

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      {showPopup && <div style={popupStyle}>✅ Drone Connected & Synced</div>}

      <Routes>
        {/* LOGIN & CONNECT ROUTES */}
        <Route
          path="/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/connect" />}
        />

        <Route
          path="/connect"
          element={
            isLoggedIn && !isConnected && !currentPath.includes('upgrade') ? (
              <ConnectPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        {/* PROTECTED APP SHELL (Sidebar + Header + Content Area) */}
        <Route
          path="/*"
          element={
            canAccessShell ? (
              <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                {/* Hide sidebar only during active flash process for safety */}
                {!isUpgrading && <Sidebar />}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <Header isConnected={isConnected} onDisconnect={handleDisconnect} />

                  <div
                    style={{ flex: 1, overflow: 'hidden',  position: 'relative' }}
                  >
                    <Routes>
                      {/* TELEMETRY & PROFILE */}
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="profile" element={<DroneProfile  />} />

                      {/* CONFIGURATION MODULES (Placeholders for now) */}
                      <Route path="airframe" element={<Placeholder name="Airframe" />} />
                      <Route path="sensors" element={<Placeholder name="Sensors" />} />
                      <Route path="safety" element={<Placeholder name="Safety" />} />
                      <Route path="flight-modes" element={<Placeholder name="Flight Modes" />} />
                      <Route
                        path="rc-calibration"
                        element={<Placeholder name="RC Calibration" />}
                      />
                      <Route path="motor-esc" element={<Placeholder name="Motor and ESC" />} />
                      <Route path="power" element={<PowerSettings/>} />
                      <Route path="serial-param" element={<Placeholder name="Serial Param" />} />
                      <Route path="camera" element={<Placeholder name="Camera" />} />
                      <Route path="spraying" element={<SprayingConfig />} />
                      <Route path="logs" element={<Placeholder name="Log Analyzer" />} />

                      {/* UTILITIES */}
                      <Route
                        path="upgrade"
                        element={
                          <FirmwareUpgrade
                            onUpgradeStart={() => setIsUpgrading(true)}
                            onUpgradeEnd={() => setIsUpgrading(false)}
                          />
                        }
                      />
                      <Route path="advanced" element={<AdvancedSettings />} />
                      <Route path="reset" element={<ResetParameters />} />

                      {/* FALLBACK */}
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/connect" />
            )
          }
        />
      </Routes>
    </div>
  )
}

const popupStyle = {
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
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
