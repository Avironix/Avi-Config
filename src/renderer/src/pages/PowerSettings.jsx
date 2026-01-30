import React, { useState, useEffect, useRef } from 'react'
import { THEME } from '../theme'
import { useMavlink } from '../context/MavlinkContext'
import { getParamDef } from '../utils/paramDefinitions'

const PowerSettings = () => {
  // 1. EXTRACT CONTEXT DATA
  const { parameters, expectedParamCount, requestParams, updateParam, isSyncing } = useMavlink()

  // 2. LOCAL UI STATES
  const [localValues, setLocalValues] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)
  const [showRefreshHint, setShowRefreshHint] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [calcData, setCalcData] = useState({ vehicle: 0, multiplier: 0, measured: 0 })
  const initialized = useRef(false)

  // 3. PROGRESS LOGIC (Matches Advanced Settings)
  const loadedCount = Object.keys(parameters).length
  const isDownloading = expectedParamCount > 0 && loadedCount < expectedParamCount
  const progress = expectedParamCount > 0 ? Math.round((loadedCount / expectedParamCount) * 100) : 0

  // 4. INITIAL SYNC
  useEffect(() => {
    if (Object.keys(parameters).length > 0 && !initialized.current) {
      setLocalValues({
        monitor: parameters['BATT_MONITOR']?.value ?? 0,
        capacity: parameters['BATT_CAPACITY']?.value ?? 0,
        minArmVolt: parameters['ARMING_VOLT_MIN']?.value ?? 0,
        voltMult: parameters['BATT_VOLT_MULT']?.value ?? 0,
        ampsPerVolt: parameters['BATT_AMP_PERVLT']?.value ?? 0,
        ampsOffset: parameters['BATT_AMP_OFFSET']?.value ?? 0
      })
      initialized.current = true
    }
  }, [parameters])

  // 5. HANDLERS
  const handleRefresh = async () => {
    const success = await requestParams()
    if (!success) alert('Refresh failed. Check drone connection.')
  }

  const handleUpdate = async () => {
    setIsUpdating(true)
    const mappings = [
      { id: 'BATT_MONITOR', val: localValues.monitor },
      { id: 'BATT_CAPACITY', val: localValues.capacity },
      { id: 'ARMING_VOLT_MIN', val: localValues.minArmVolt },
      { id: 'BATT_VOLT_MULT', val: localValues.voltMult },
      { id: 'BATT_AMP_PERVLT', val: localValues.ampsPerVolt },
      { id: 'BATT_AMP_OFFSET', val: localValues.ampsOffset }
    ]

    try {
      for (const item of mappings) {
        if (item.val !== undefined) {
          await updateParam(item.id, parseFloat(item.val))
          await new Promise((r) => setTimeout(r, 300)) // Sequential write delay
        }
      }
      setShowRefreshHint(true)
      initialized.current = false
    } catch (error) {
      console.error('Update failed:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const executeCalculation = () => {
    const ratio = calcData.measured / calcData.vehicle
    const newValue = (calcData.multiplier * ratio).toFixed(4)
    if (activeModal === 'voltage') setLocalValues({ ...localValues, voltMult: newValue })
    else setLocalValues({ ...localValues, ampsPerVolt: newValue })
    setActiveModal(null)
  }

  return (
    <div style={containerStyle}>
      {/* MODAL: BLOCKING SYNC PROGRESS */}
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
        <h2 style={headerStyle}>POWER SETTINGS</h2>
        <button onClick={handleRefresh} disabled={isSyncing} style={refreshBtnStyle}>
          {isSyncing ? 'Syncing...' : 'Refresh List'}
        </button>
      </div>

      {showRefreshHint && (
        <div style={hintBoxStyle}>
          <span>✅ Changes Sent. Please click Refresh to confirm.</span>
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
        {/* FIELD 1: MONITOR */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Battery Monitor</label>
          <select
            style={inputStyle}
            value={localValues.monitor}
            onChange={(e) => setLocalValues({ ...localValues, monitor: e.target.value })}
          >
            <option value="0">Disabled</option>
            <option value="4">Analog Voltage and Current</option>
          </select>
        </div>

        {/* FIELD 2: CAPACITY */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Battery Capacity (mAh)</label>
          <input
            type="number"
            style={inputStyle}
            value={localValues.capacity}
            onChange={(e) => setLocalValues({ ...localValues, capacity: e.target.value })}
          />
        </div>

        {/* FIELD 3: MIN VOLT */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Minimum Arming Voltage (V)</label>
          <input
            type="number"
            step="0.01"
            style={inputStyle}
            value={localValues.minArmVolt}
            onChange={(e) => setLocalValues({ ...localValues, minArmVolt: e.target.value })}
          />
        </div>

        {/* FIELD 4: VOLT MULTIPLIER + CALC */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Voltage Multiplier</label>
          <input type="number" style={inputStyle} value={localValues.voltMult} readOnly />
          <button
            style={calcLinkStyle}
            onClick={() => {
              setCalcData({ vehicle: 0, multiplier: localValues.voltMult, measured: 0 })
              setActiveModal('voltage')
            }}
          >
            Calculate
          </button>
        </div>

        {/* FIELD 5: AMPS PER VOLT + CALC */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Amps Per Volt (A/V)</label>
          <input type="number" style={inputStyle} value={localValues.ampsPerVolt} readOnly />
          <button
            style={calcLinkStyle}
            onClick={() => {
              setCalcData({ vehicle: 0, multiplier: localValues.ampsPerVolt, measured: 0 })
              setActiveModal('amps')
            }}
          >
            Calculate
          </button>
        </div>

        {/* FIELD 6: AMPS OFFSET */}
        <div style={fieldWrapper}>
          <label style={labelStyle}>Amps Offset (V)</label>
          <input
            type="number"
            style={inputStyle}
            value={localValues.ampsOffset}
            onChange={(e) => setLocalValues({ ...localValues, ampsOffset: e.target.value })}
          />
            <button
        style={{ ...updateBtnStyle, opacity: isUpdating ? 0.7 : 1 }}
        onClick={handleUpdate}
        disabled={isUpdating}
      >
        {isUpdating ? 'Updating...' : 'Update Drone'}
      </button>
        </div>
        
      </div>

      

      {/* CALCULATION MODAL */}
      {activeModal && (
        <div style={modalOverlayStyle}>
          <div style={calcCardStyle}>
            <h3>Calculate {activeModal === 'voltage' ? 'Voltage Multiplier' : 'Amps per Volt'}</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                margin: '20px 0'
              }}
            >
              <div>
                <label style={labelStyle}>
                  Vehicle {activeModal === 'voltage' ? 'Voltage' : 'Current'}
                </label>
                <input
                  type="number"
                  style={inputStyle}
                  value={calcData.vehicle}
                  onChange={(e) => setCalcData({ ...calcData, vehicle: e.target.value })}
                />
              </div>
              <div>
                <label style={labelStyle}>
                  Current {activeModal === 'voltage' ? 'Multiplier' : 'Scaling'}
                </label>
                <input
                  type="number"
                  style={inputStyle}
                  value={calcData.multiplier}
                  onChange={(e) => setCalcData({ ...calcData, multiplier: e.target.value })}
                />
              </div>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={labelStyle}>
                Measured {activeModal === 'voltage' ? 'Voltage' : 'Current'}
              </label>
              <input
                type="number"
                style={inputStyle}
                value={calcData.measured}
                onChange={(e) => setCalcData({ ...calcData, measured: e.target.value })}
              />
            </div>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <button style={cancelBtnStyle} onClick={() => setActiveModal(null)}>
                Cancel
              </button>
              <button style={calcConfirmBtn} onClick={executeCalculation}>
                Calculate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// --- STYLES (Synchronized with App Theme) ---
const containerStyle = { padding: '50px', background: '#fff', height: '100%', position: 'relative' }
const headerRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '40px'
}
const headerStyle = { color: '#00d1ff', margin: 0, fontSize: '1.2em' }
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 60px' }
const fieldWrapper = { display: 'flex', flexDirection: 'column', gap: '8px' }
const labelStyle = { color: '#555', fontSize: '0.9em' }
const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  outline: 'none'
}
const calcLinkStyle = {
  background: 'none',
  border: '1px solid #00d1ff',
  color: '#00d1ff',
  borderRadius: '20px',
  padding: '5px 15px',
  marginTop: '5px',
  cursor: 'pointer',
  alignSelf: 'flex-start'
}
const updateBtnStyle = {
  marginTop: '50px',
  float: 'right',
  padding: '12px 60px',
  background: '#00d1ff',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontWeight: 'bold'
  
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
  textAlign: 'center'
}
const calcCardStyle = { background: 'white', padding: '40px', borderRadius: '12px', width: '500px' }
const progressBgStyle = {
  width: '100%',
  height: '15px',
  background: '#E5E7EB',
  borderRadius: '10px',
  overflow: 'hidden'
}
const progressFillStyle = { height: '100%', background: '#00d1ff', transition: 'width 0.3s ease' }

const refreshBtnStyle = {
  padding: '10px 20px',
  background: THEME.primary,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}
const cancelBtnStyle = {
  padding: '10px 30px',
  background: '#00d1ff',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer'
}
const calcConfirmBtn = {
  padding: '10px 30px',
  background: 'none',
  border: '1px solid #00d1ff',
  color: '#00d1ff',
  borderRadius: '25px',
  cursor: 'pointer'
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

export default PowerSettings
