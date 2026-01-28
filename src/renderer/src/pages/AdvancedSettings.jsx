import React, { useState, useMemo } from 'react'
import { THEME } from '../theme'
import { useMavlink } from '../context/MavlinkContext'
import { getParamDef } from '../utils/paramDefinitions'

const AdvancedSettings = () => {
  // --- DATA FROM CONTEXT ---
  const { parameters, expectedParamCount, requestParams, updateParam, isSyncing } = useMavlink()

  // --- LOCAL UI STATE ---
  const [searchTerm, setSearchTerm] = useState('')
  const [editingValues, setEditingValues] = useState({})
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showRefreshHint, setShowRefreshHint] = useState(false)

  // --- PROGRESS & SYNC LOGIC ---
  const loadedCount = Object.keys(parameters).length
  // Modal shows if we expect params but haven't finished downloading
  const isDownloading = expectedParamCount > 0 && loadedCount < expectedParamCount
  const progress = expectedParamCount > 0 ? Math.round((loadedCount / expectedParamCount) * 100) : 0

  // --- DATA TRANSFORMATION ---

  const handleRefresh = async () => {
    console.log('Button Clicked: Refreshing...')
    const success = await requestParams()//
    if (!success) {
      alert('Refresh failed. Check if drone is still connected.')
    }
  }

  const localParams = useMemo(() => {
    return Object.values(parameters).sort((a, b) => {
      const idA = a.id || ''
      const idB = b.id || ''
      return idA.localeCompare(idB)
    })
  }, [parameters])

  const filteredParams = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return localParams.filter((p) => (p.id || '').toLowerCase().includes(term))
  }, [searchTerm, localParams])

  // --- HANDLERS ---
  const handleInputChange = (id, val) => {
    setEditingValues((prev) => {
      const originalVal = parameters[id]?.value
      if (val === '' || String(val) === String(originalVal)) {
        const newState = { ...prev }
        delete newState[id]
        return newState
      }
      return { ...prev, [id]: val }
    })
  }

  const confirmGlobalWrite = async () => {
    const paramsToWrite = Object.entries(editingValues)
    const total = paramsToWrite.length

    for (let i = 0; i < total; i++) {
      const [id, val] = paramsToWrite[i]
      // Burst send with 300ms delay to prevent drone congestion
      await updateParam(id, parseFloat(val))
      await new Promise((resolve) => setTimeout(resolve, 300))
    }

    setEditingValues({})
    setShowRefreshHint(true)
    setShowConfirmModal(false)
  }

  const handleExport = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(parameters, null, 2))
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute('download', 'drone_params.json')
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <div style={containerStyle}>
      {/* --- MODAL 1: BLOCKING SYNC PROGRESS --- */}
      {isDownloading && (
        <div style={modalOverlayStyle}>
          <div style={syncCardStyle}>
            <h2 style={{ color: THEME.accent, marginBottom: '10px' }}>
              📥 Synchronizing Parameters
            </h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Downloading: {loadedCount} / {expectedParamCount}
            </p>
            <div style={progressBgStyle}>
              <div style={{ ...progressFillStyle, width: `${progress}%` }}></div>
            </div>
            <div style={{ marginTop: '15px', fontWeight: 'bold', color: THEME.accent }}>
              {progress}%
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: WRITE CONFIRMATION --- */}
      {showConfirmModal && (
        <div style={modalOverlayStyle}>
          <div style={confirmCardStyle}>
            <h3 style={{ marginBottom: '20px' }}>Confirm Parameter Changes</h3>
            <table style={confirmTableStyle}>
              <thead style={{ background: '#F3F4F6' }}>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Old</th>
                  <th style={thStyle}>New</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(editingValues).map(([id, newVal]) => (
                  <tr key={id}>
                    <td style={tdStyle}>{id}</td>
                    <td style={tdStyle}>{parameters[id]?.value}</td>
                    <td style={{ ...tdStyle, color: THEME.success, fontWeight: 'bold' }}>
                      {newVal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowConfirmModal(false)} style={cancelBtnStyle}>
                Cancel
              </button>
              <button onClick={confirmGlobalWrite} style={successBtnStyle}>
                Agree & Write All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- HEADER & TOOLBAR --- */}
      <div style={headerStyle}>
        <h2 style={{ margin: 0, color: '#1F2937' }}>Advanced Settings</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleRefresh} disabled={isSyncing} style={primaryBtnStyle}>
            {isSyncing ? 'Syncing...' : 'Refresh List'}
          </button>
          <button
            disabled={Object.keys(editingValues).length === 0}
            onClick={() => setShowConfirmModal(true)}
            style={Object.keys(editingValues).length > 0 ? successBtnStyle : disabledBtnStyle}
          >
            Write Changes ({Object.keys(editingValues).length})
          </button>
          <button onClick={handleExport} style={secondaryBtnStyle}>
            Export JSON
          </button>
        </div>
      </div>

      {/* --- REFRESH HINT --- */}
      {showRefreshHint && (
        <div style={hintStyle}>
          <span>✅ Changes Sent. Please click Refresh to confirm.</span>
          <button
            onClick={() => {
              requestParams()
              setShowRefreshHint(false)
            }}
            style={refreshNowStyle}
          >
            Refresh Now
          </button>
        </div>
      )}

      {/* --- SEARCH --- */}
      <div style={searchContainerStyle}>
        <span style={searchIconStyle}>🔍</span>
        <input
          type="text"
          placeholder="Search parameters by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
      </div>

      {/* --- PARAMETERS TABLE --- */}
      <div style={tableContainerStyle}>
        <table style={mainTableStyle}>
          <thead style={stickyHeaderStyle}>
            <tr>
              <th style={{ width: '20%', ...thStyle }}>Parameter ID</th>
              <th style={{ width: '15%', ...thStyle }}>Value</th>
              <th style={{ width: '10%', ...thStyle }}>Default</th>
              <th style={{ width: '15%', ...thStyle }}>Range</th>
              <th style={{ width: '40%', ...thStyle }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredParams.map((param, i) => {
              const editValue = editingValues[param.id]
              const droneValue = param.value ?? ''
              const displayValue = editValue ?? droneValue
              const isModified = editValue !== undefined && String(editValue) !== String(droneValue)
              const def = getParamDef(param.id)

              return (
                <tr key={param.id} style={{ background: i % 2 === 0 ? 'white' : '#F9FAFB' }}>
                  <td style={idCellStyle}>{param.id}</td>
                  <td style={tdStyle}>
                    <input
                      type="text"
                      value={displayValue}
                      onChange={(e) => handleInputChange(param.id, e.target.value)}
                      style={{
                        ...inputStyle,
                        border: isModified ? `1px solid ${THEME.success}` : '1px solid #EEE',
                        background: isModified ? '#F0FFF4' : 'white',
                        color: isModified ? THEME.success : '#333',
                        fontWeight: isModified ? 'bold' : 'normal'
                      }}
                    />
                  </td>
                  <td style={defCellStyle}>{def.default}</td>
                  <td style={defCellStyle}>
                    {def.range} {def.unit}
                  </td>
                  <td style={descCellStyle}>{def.desc}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// --- STYLES ---
const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  boxSizing: 'border-box'
}
const modalOverlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000
}
const syncCardStyle = {
  background: 'white',
  padding: '40px',
  borderRadius: '15px',
  width: '450px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
}
const progressBgStyle = {
  width: '100%',
  height: '15px',
  background: '#E5E7EB',
  borderRadius: '10px',
  overflow: 'hidden'
}
const progressFillStyle = {
  height: '100%',
  background: THEME.accent,
  transition: 'width 0.3s ease'
}
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  borderBottom: '2px solid #EEE',
  paddingBottom: '10px'
}
const searchContainerStyle = { position: 'relative', marginBottom: '15px' }
const searchInputStyle = {
  width: '100%',
  padding: '12px 45px',
  borderRadius: '8px',
  border: '1px solid #DDD',
  boxSizing: 'border-box',
  outline: 'none'
}
const searchIconStyle = {
  position: 'absolute',
  left: '15px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#9CA3AF'
}
const tableContainerStyle = {
  flex: 1,
  overflowY: 'auto',
  border: '1px solid #E5E7EB',
  borderRadius: '8px',
  background: 'white'
}
const mainTableStyle = { width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }
const stickyHeaderStyle = { position: 'sticky', top: 0, background: '#F8F9FA', zIndex: 5 }
const thStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #EEE',
  fontWeight: 'bold',
  color: '#374151'
}
const tdStyle = { padding: '12px', borderBottom: '1px solid #EEE' }
const idCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #EEE',
  fontFamily: 'monospace',
  color: '#1F2937'
}
const defCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #EEE',
  color: '#6B7280',
  fontSize: '0.85em'
}
const descCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #EEE',
  color: '#4B5563',
  fontSize: '0.85em',
  lineHeight: '1.5'
}
const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #EEE',
  outline: 'none'
}
const primaryBtnStyle = {
  padding: '10px 20px',
  background: THEME.primary,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}
const secondaryBtnStyle = {
  padding: '10px 20px',
  background: '#6B7280',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}
const successBtnStyle = {
  padding: '10px 20px',
  background: THEME.success,
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontWeight: 'bold'
}
const disabledBtnStyle = {
  padding: '10px 20px',
  background: '#E0E0E0',
  color: '#AAA',
  border: 'none',
  borderRadius: '25px',
  cursor: 'default'
}
const cancelBtnStyle = {
  padding: '10px 20px',
  background: 'white',
  border: '1px solid #DDD',
  borderRadius: '6px',
  cursor: 'pointer'
}
const hintStyle = {
  background: '#D1FAE5',
  border: '1px solid #10B981',
  padding: '12px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '15px'
}
const refreshNowStyle = {
  background: THEME.success,
  color: 'white',
  border: 'none',
  padding: '5px 15px',
  borderRadius: '4px',
  cursor: 'pointer'
}
const confirmCardStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '12px',
  width: '600px',
  maxHeight: '80vh',
  overflowY: 'auto'
}
const confirmTableStyle = { width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }

export default AdvancedSettings
