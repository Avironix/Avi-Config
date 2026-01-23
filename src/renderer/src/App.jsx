import { useState, useEffect } from 'react'
import { THEME } from './theme'

// Components & Pages
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import DroneDetails from './pages/DroneDetails'
import FirmwareUpgrade from './pages/FirmwareUpgrade'
import AdvancedSettings from './pages/AdvancedSettings'
import ResetParameters from './pages/ResetParameters'

// ================================
// MAVLink Helper
// ================================
function charsToString(charArray) {
  if (!charArray) return ''

  return Array.from(charArray)
    .map(c => String.fromCharCode(c))
    .join('')
    .replace(/\0/g, '')
    .trim()
}

function App() {
  // ================================
  // STATE
  // ================================


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('DETAILS')
  const [ports, setPorts] = useState([])
  const [connectedPort, setConnectedPort] = useState(null)

  const [attitude, setAttitude] = useState({
    roll: 0,
    pitch: 0,
    yaw: 0
  })

  const [parameters, setParameters] = useState({})
  const [expectedParamCount, setExpectedParamCount] = useState(null)
  const [hasHeartbeat, setHasHeartbeat] = useState(false)

  // ================================
  // MAVLINK LISTENER
  // ================================
 useEffect(() => {
  const handler = (data) => {
    const packet = JSON.parse(data.json)

    // ❤️ HEARTBEAT
    if (packet.header.msgid === 0) {
      setHasHeartbeat(true)
      console.log('❤️ HEARTBEAT')
    }

    // 🧭 ATTITUDE
    if (packet.header.msgid === 30) {
      setAttitude({
        roll: ((packet.roll * 180) / Math.PI).toFixed(1),
        pitch: ((packet.pitch * 180) / Math.PI).toFixed(1),
        yaw: ((packet.yaw * 180) / Math.PI).toFixed(1)
      })
    }

    // ⚙️ PARAMETER VALUE
    if (packet.header.msgid === 22 && packet.param_id) {
      const cleanId = charsToString(packet.param_id)

      setExpectedParamCount(packet.param_count)

      setParameters(prev => ({
        ...prev,
        [cleanId]: {
          id: cleanId,
          value: packet.param_value,
          index: packet.param_index,
          count: packet.param_count
        }
      }))
    }
  }

  // REGISTER
  window.api.onMavlinkData(handler)

  // CLEANUP (Electron-safe)
  return () => {
    window.api.offMavlinkData(handler)
  }
}, [])


  // ================================
  // PARAM LOAD MONITOR (OPTIONAL)
  // ================================
  useEffect(() => {
    if (!expectedParamCount) return

    const loaded = Object.keys(parameters).length

    if (loaded === expectedParamCount) {
      console.log('✅ FULL PARAMETER LIST LOADED')
    }
  }, [parameters, expectedParamCount])

  // ================================
  // GLOBAL ACTIONS
  // ================================
  const handleScan = async () => {
    const found = await window.api.getPorts()
    setPorts(found)
  }

  const handleConnect = async (path) => {
    try {
      await window.api.connectDrone(path)
      setConnectedPort(path)
    } catch (err) {
      alert(err)
    }
  }

  const handleUploadStart = async (port, file) => {
    if (connectedPort === port) setConnectedPort(null)

    try {
      await window.api.uploadFirmware(port, file)
    } catch (err) {
      alert('Upload Error: ' + err)
    }
  }

  // ================================
  // LOGIN SCREEN
  // ================================
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  // ================================
  // MAIN UI
  // ================================
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '90vh',
        fontFamily: 'Segoe UI, sans-serif',
        color: THEME.textMain
      }}
    >
      {/* SIDEBAR */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={() => setIsLoggedIn(false)}
      />

      {/* CONTENT */}
      <div
        style={{
          width: '80%',
          background: THEME.bg,
          padding: '40px',
          overflowY: 'auto'
        }}
      >
        {activeTab === 'DETAILS' && (
          <DroneDetails
            attitude={attitude}
            ports={ports}
            connectedPort={connectedPort}
            onScan={handleScan}
            onConnect={handleConnect}
          />
        )}

        {activeTab === 'UPGRADE' && (
          <FirmwareUpgrade
            ports={ports}
            connectedPort={connectedPort}
            onScan={handleScan}
            onUploadStart={handleUploadStart}
          />
        )}

        {activeTab === 'ADVANCED' && (
          <AdvancedSettings
            paramsData={parameters}
            onRequestLoad={() => {
              console.log('🔁 Refresh clicked')
              if (!hasHeartbeat) {
                alert('Waiting for vehicle heartbeat...')
                return
              }
              setParameters({})
              setExpectedParamCount(null)
              window.api.requestParams()
            }}
          />
        )}

        {activeTab === 'RESET' && <ResetParameters />}
      </div>
    </div>
  )
}

export default App
