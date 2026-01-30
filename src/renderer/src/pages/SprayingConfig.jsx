import React, { useState, useEffect, useRef } from 'react'
import { THEME } from '../theme'
import { useMavlink } from '../context/MavlinkContext'
import { getParamDef } from '../utils/paramDefinitions'

const SprayingConfig = () => {
  // 1. EXTRACT ALL NEEDED CONTEXT DATA
  const { parameters, expectedParamCount, requestParams, updateParam, isSyncing } = useMavlink()

  // 2. LOCAL UI STATES
  const [localValues, setLocalValues] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)
  const [showRefreshHint, setShowRefreshHint] = useState(false)
  const initialized = useRef(false)

  // 3. PROGRESS CALCULATION (Same as Advanced Settings)
  const loadedCount = Object.keys(parameters).length
  const isDownloading = expectedParamCount > 0 && loadedCount < expectedParamCount
  const progress = expectedParamCount > 0 ? Math.round((loadedCount / expectedParamCount) * 100) : 0

  // 4. SYNC INITIAL DATA
  useEffect(() => {
    if (Object.keys(parameters).length > 0 && !initialized.current) {
      setLocalValues({
        enable: parameters['SPRAY_ENABLE']?.value ?? 0,
        rcSwitch: parameters['CH7_OPT']?.value ?? 0,
        pwmCount: parameters['BRD_PWM_COUNT']?.value ?? 0,
        servo9Func: parameters['SERVO9_FUNCTION']?.value ?? 0,
        s9Min: parameters['SERVO9_MIN']?.value ?? 1100,
        s9Max: parameters['SERVO9_MAX']?.value ?? 1900,
        servo10Func: parameters['SERVO10_FUNCTION']?.value ?? 0,
        s10Min: parameters['SERVO10_MIN']?.value ?? 1100,
        s10Max: parameters['SERVO10_MAX']?.value ?? 1900
      })
      initialized.current = true
    }
  }, [parameters])

  // 5. REFRESH HANDLER
  const handleRefresh = async () => {
    const success = await requestParams()
    if (!success) {
      alert('Refresh failed. Check drone connection.')
    }
  }

  // 6. UPDATE HANDLER (Matches Advanced Settings Logic)
  const handleUpdate = async () => {
    setIsUpdating(true)
    const mappings = [
      { id: 'SPRAY_ENABLE', val: localValues.enable },
      { id: 'CH7_OPT', val: localValues.rcSwitch },
      { id: 'BRD_PWM_COUNT', val: localValues.pwmCount },
      { id: 'SERVO9_FUNCTION', val: localValues.servo9Func },
      { id: 'SERVO9_MIN', val: localValues.s9Min },
      { id: 'SERVO9_MAX', val: localValues.s9Max },
      { id: 'SERVO10_FUNCTION', val: localValues.servo10Func },
      { id: 'SERVO10_MIN', val: localValues.s10Min },
      { id: 'SERVO10_MAX', val: localValues.s10Max }
    ]

    try {
      for (const item of mappings) {
        if (item.val !== undefined) {
          await updateParam(item.id, parseFloat(item.val))
          await new Promise((r) => setTimeout(r, 300)) // 300ms burst delay
        }
      }
      setShowRefreshHint(true)
      initialized.current = false // Allow fresh sync after refresh
    } catch (error) {
      console.error('Update failed:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const renderField = (label, key, paramId) => {
    const def = getParamDef(paramId)
    return (
      <div style={fieldWrapper}>
        <label style={labelStyle}>{label}</label>
        <input
          type="number"
          style={inputStyle}
          value={localValues[key] ?? ''}
          onChange={(e) => setLocalValues((prev) => ({ ...prev, [key]: e.target.value }))}
        />
        <span style={hintTextStyle}>
          [Min {def.min ?? 0} - Max {def.max ?? 100}]
        </span>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      {/* MODAL: BLOCKING SYNC PROGRESS (Same as Advanced Settings) */}
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

      <div style={headerRowStyle}>
        <h2 style={headerStyle}>SPRAYING CONFIGURATION</h2>
        <button onClick={handleRefresh} disabled={isSyncing} style={refreshBtnStyle}>
          {isSyncing ? 'Syncing...' : 'Refresh List'}
        </button>
      </div>

      {/* REFRESH HINT BOX */}
      {showRefreshHint && (
        <div style={hintBoxStyle}>
          <span>✅ Changes Sent. Please click Refresh to confirm drone saved values.</span>
          <button
            onClick={() => {
              handleRefresh()
              setShowRefreshHint(false)
            }}
            style={refreshNowBtnStyle}
          >
            Refresh Now
          </button>
        </div>
      )}

      <div style={gridStyle}>
        <div style={fieldWrapper}>
          <label style={labelStyle}>Enable Spraying</label>
          <select
            style={inputStyle}
            value={localValues.enable ?? 0}
            onChange={(e) => setLocalValues((prev) => ({ ...prev, enable: e.target.value }))}
          >
            <option value="0">Disable</option>
            <option value="1">Enable</option>
          </select>
        </div>
        {renderField('RC Switch', 'rcSwitch', 'CH7_OPT')}
        {renderField('BRD PWM Count', 'pwmCount', 'BRD_PWM_COUNT')}
        {renderField('Servo9 Function [AUX 1]', 'servo9Func', 'SERVO9_FUNCTION')}
        {renderField('PWM Min', 's9Min', 'SERVO9_MIN')}
        {renderField('PWM Max', 's9Max', 'SERVO9_MAX')}
        {renderField('Servo10 Function [AUX 2]', 'servo10Func', 'SERVO10_FUNCTION')}
        {renderField('PWM Min', 's10Min', 'SERVO10_MIN')}
        {renderField('PWM Max', 's10Max', 'SERVO10_MAX')}
      </div>

      <button
        style={{ ...updateBtnStyle, opacity: isUpdating ? 0.7 : 1 }}
        onClick={handleUpdate}
        disabled={isUpdating}
      >
        {isUpdating ? 'Updating...' : 'Update Drone'}
      </button>
    </div>
  )
}

// --- UPDATED STYLES ---
const containerStyle = { padding: '50px', background: '#fff', height: '100%', position: 'relative' }
const headerRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '40px'
}
const headerStyle = { color: '#3D9BE9', margin: 0, fontSize: '1.2em' }
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '40px 60px',
  maxWidth: '1200px'
}
const fieldWrapper = { display: 'flex', flexDirection: 'column', gap: '8px' }
const labelStyle = { color: '#555', fontSize: '0.95em' }
const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1em',
  outline: 'none'
}
const hintTextStyle = { color: '#888', fontSize: '0.8em', textAlign: 'right' }

// Modal & Progress (Same as AdvancedSettings)
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
  textAlign: 'center'
}
const progressBgStyle = {
  width: '100%',
  height: '15px',
  background: '#E5E7EB',
  borderRadius: '10px',
  overflow: 'hidden'
}
const progressFillStyle = { height: '100%', background: '#3D9BE9', transition: 'width 0.3s ease' }

const refreshBtnStyle = {
  padding: '10px 20px',
  background: THEME.primary,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}
const updateBtnStyle = {
  marginTop: '50px',
  float: 'right',
  padding: '12px 60px',
  background: '#3D9BE9',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontWeight: 'bold'
}

const hintBoxStyle = {
  background: '#D1FAE5',
  border: '1px solid #10B981',
  padding: '15px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px'
}
const refreshNowBtnStyle = {
  background: '#10B981',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '4px',
  cursor: 'pointer'
}

export default SprayingConfig
