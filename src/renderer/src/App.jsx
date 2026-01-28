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

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

  const { isConnected, isSyncing, mavData, disconnectDrone } = useMavlink();
  const navigate = useNavigate();
  
  // Use a hook to get the current location safely
  const currentPath = window?.location?.hash || "";

  useEffect(() => {
    // 1. If we are upgrading, freeze all navigation logic
    if (isUpgrading) return;

    if (!isLoggedIn) {
      navigate('/login');
    } 
    // 2. Only redirect to connect if NOT on the upgrade page and NOT connected
    else if (!isConnected && !currentPath.includes("upgrade")) {
      navigate('/connect');
    }
    // 3. Handle auto-navigation to dashboard when connection is restored
    else if (isConnected && !isSyncing) {
      if (currentPath.includes('connect') || currentPath.includes('login') || currentPath === '#/') {
        navigate('/dashboard');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    }
  }, [isLoggedIn, isConnected, isSyncing, navigate, isUpgrading, currentPath]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleDisconnect = async () => await disconnectDrone();

  // ✅ CRITICAL RENDER LOGIC: 
  // We allow the "App Shell" to exist if we are connected OR if we are on the upgrade page
  const canAccessShell = isLoggedIn && (isConnected || currentPath.includes("upgrade") || isUpgrading);

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#F3F4F6' }}>
      {showPopup && <div style={popupStyle}>✅ Drone Connected & Synced</div>}

      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/connect" />} />

        <Route path="/connect" element={
            isLoggedIn && !isConnected && !currentPath.includes("upgrade") ? (
              <ConnectPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        {/* PROTECTED APP SHELL */}
        <Route path="/*" element={
            canAccessShell ? (
              <div style={{ display: 'flex', height: '100%' }}>
                {/* Optional: Hide sidebar during actual flash process for safety */}
                {!isUpgrading && <Sidebar />}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <Header isConnected={isConnected} onDisconnect={handleDisconnect} />

                  <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <Routes>
                      <Route path="dashboard" element={<Dashboard mavData={mavData} />} />
                      <Route path="profile" element={<DroneProfile mavData={mavData} />} />
                      <Route path="upgrade" element={
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
            ) : (
              <Navigate to="/connect" />
            )
          }
        />
      </Routes>
    </div>
  );
}

// STYLES
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
