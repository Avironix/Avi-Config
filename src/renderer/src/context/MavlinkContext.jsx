import React, { createContext, useState, useEffect, useContext, useRef } from 'react'

const MavlinkContext = createContext()

// Helper to clean strings from Char Arrays (if needed for older firmware)
function charsToString(charArray) {
  if (!charArray) return ''
  if (typeof charArray === 'string') return charArray
  return Array.from(charArray)
    .map((c) => String.fromCharCode(c))
    .join('')
    .replace(/\0/g, '')
    .trim()
}

export const MavlinkProvider = ({ children }) => {
  // --- ALL STATES ---
  const [isConnected, setIsConnected] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const [mavData, setMavData] = useState(null)
  const [ports, setPorts] = useState([])
  const [connectedPort, setConnectedPort] = useState(null)
  const [attitude, setAttitude] = useState({ roll: 0, pitch: 0, yaw: 0 })
  const [parameters, setParameters] = useState({})
  const [expectedParamCount, setExpectedParamCount] = useState(0)

  // --- ALL REFS ---
  const paramsBuffer = useRef({})
  const lastUpdate = useRef(Date.now())
  const heartbeatTimeout = useRef(null)
  const paramsLoadedRef = useRef(false)

  // --- ALL ACTIONS ---

  // 1. Scan Serial Ports
  const scanPorts = async () => {
    const found = await window.api.getPorts()
    setPorts(found)
  }

  // 2. Connect to Drone
  const connectDrone = async (path) => {
    try {
      // Reset state for new connection
      setParameters({})
      setExpectedParamCount(0)
      setAttitude({ roll: 0, pitch: 0, yaw: 0 })
      paramsBuffer.current = {}
      paramsLoadedRef.current = false

      const success = await window.api.connectDrone(path)
      if (success) {
        setConnectedPort(path)
      }
      return success
    } catch (err) {
      console.error('Connection Error:', err)
      return false
    }
  }

  // 3. Global Disconnect
  const disconnectDrone = async () => {
    await window.api.disconnectDrone()
    setIsConnected(false)
    setIsSyncing(false)
    setMavData(null)
    setConnectedPort(null)
    setParameters({})
    paramsBuffer.current = {}
  }

  // 4. Manual/Auto Sync Trigger
  const startSync = () => {
    setParameters({})
    paramsBuffer.current = {}
    setIsSyncing(true)
    window.api.requestParams()
  }

  // 5. Request Params (Aliased for compatibility)
  const requestParams = async () => {
    setParameters({})
    paramsBuffer.current = {}
    setIsSyncing(true)
    const success = await window.api.requestParams()
    if (!success) setIsSyncing(false)
    return success
  }

  // 6. Update Single Parameter
  const updateParam = (id, val) => {
    return window.api.setParam(id, val)
  }

  // --- GLOBAL MAVLINK LISTENER ---
  useEffect(() => {
    const handler = (dataWrapper) => {
      setMavData(dataWrapper)
      try {
        const packet = JSON.parse(dataWrapper.json)

        // A. Heartbeat Logic (ID 0)
        if (packet.header.msgid === 0) {
          if (!isConnected) setIsConnected(true)

          // Watchdog: If no heartbeat for 3s, set disconnected
          clearTimeout(heartbeatTimeout.current)
          heartbeatTimeout.current = setTimeout(() => setIsConnected(false), 3000)
        }

        // B. Attitude Logic (ID 30)
        if (packet.header.msgid === 30) {
          setAttitude({
            roll: ((packet.roll * 180) / Math.PI).toFixed(1),
            pitch: ((packet.pitch * 180) / Math.PI).toFixed(1),
            yaw: ((packet.yaw * 180) / Math.PI).toFixed(1)
          })
        }

        // C. Parameter Sync Logic (ID 22)
        if (packet.header.msgid === 22 || packet.param_id) {
          const cleanId = charsToString(packet.param_id)

          paramsBuffer.current[cleanId] = {
            id: cleanId,
            value: packet.param_value,
            count: packet.param_count,
            index: packet.param_index
          }

          const loaded = Object.keys(paramsBuffer.current).length
          const total = packet.param_count

          const now = Date.now()
          // Throttled update to prevent UI lag
          if (now - lastUpdate.current > 400 || loaded === total) {
            setParameters({ ...paramsBuffer.current })
            setExpectedParamCount(total)
            lastUpdate.current = now

            if (loaded >= total && total > 0) {
              setIsSyncing(false) // End sync
            }
          }
        }
      } catch (err) {
        console.error('Mavlink Listener Error:', err)
      }
    }

    window.api.onMavlinkData(handler)
    return () => window.api.offMavlinkData(handler)
  }, [isConnected])

  return (
    <MavlinkContext.Provider
      value={{
        isConnected,
        isSyncing,
        mavData,
        ports,
        connectedPort,
        attitude,
        parameters,
        expectedParamCount,
        scanPorts,
        connectDrone,
        requestParams,
        startSync,
        disconnectDrone,
        updateParam
      }}
    >
      {children}
    </MavlinkContext.Provider>
  )
}

export const useMavlink = () => {
  const context = useContext(MavlinkContext)
  if (!context) throw new Error('useMavlink must be used within MavlinkProvider')
  return context
}
