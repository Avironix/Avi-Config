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
import SprayingConfig from './pages/SprayingConfig'
import PowerSettings from './pages/PowerSettings'

// COMPONENTS
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// CONTEXT
import { useMavlink } from './context/MavlinkContext'

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  const { isConnected, isSyncing, mavData, disconnectDrone } = useMavlink()
  const navigate = useNavigate()

  const currentPath = window?.location?.hash || ''

  useEffect(() => {
    if (isUpgrading) return

    if (!isLoggedIn) {
      navigate('/login')
    }
    // ✅ FIX: Keep user on /connect if not connected OR if currently syncing
    else if ((!isConnected || isSyncing) && !currentPath.includes('upgrade')) {
      navigate('/connect')
    } else if (isConnected && !isSyncing) {
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

  // ✅ Shell is only accessible after sync is finished, or during a firmware upgrade bypass
  const canAccessShell =
    isLoggedIn && ((isConnected && !isSyncing) || isUpgrading || currentPath.includes('upgrade'))

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
        <Route
          path="/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/connect" />}
        />

        <Route
          path="/connect"
          element={
            isLoggedIn && (!isConnected || isSyncing) && !currentPath.includes('upgrade') ? (
              <ConnectPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        {/* PROTECTED APP SHELL */}
        <Route
          path="/*"
          element={
            canAccessShell ? (
              <>
               <div style={{width:"100%", marginBottom:'10px'}}>
                 <Header isConnected={isConnected} onDisconnect={handleDisconnect} />
               </div>

                <div style={{ display: 'flex', height: '100%' }}>
                  {!isUpgrading && <Sidebar />}

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <div
                      style={{ flex: 1, overflow: 'hidden', position: 'relative', padding: '20px' }}
                    >
                      <Routes>
                        <Route path="dashboard" element={<Dashboard mavData={mavData} />} />
                        <Route path="profile" element={<DroneProfile mavData={mavData} />} />
                        <Route path="spraying" element={<SprayingConfig />} />
                        <Route path="power" element={<PowerSettings />} />
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
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </>
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
