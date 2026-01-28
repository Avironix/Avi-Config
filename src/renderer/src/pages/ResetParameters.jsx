import React, { useState } from 'react'
import { THEME } from '../theme'

const ResetParameters = () => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({ show: false, type: 'confirm', message: '' })

  const handleReset = async () => {
    setLoading(true)
    setModal({ show: false, type: 'confirm', message: '' }) // Close confirm modal
    
    try {
      const success = await window.api.factoryResetParams()
      if (success) {
        setModal({ 
          show: true, 
          type: 'success', 
          message: '✅ Factory reset command sent successfully.' 
        })
      } else {
        setModal({ 
          show: true, 
          type: 'error', 
          message: '❌ Failed to send reset command. Ensure the drone is connected.' 
        })
      }
    } catch (err) {
      console.error('Reset Error:', err)
      setModal({ 
        show: true, 
        type: 'error', 
        message: '❌ An error occurred while resetting.' 
      })
    } finally {
      setLoading(false)
    }
  }

  const triggerConfirm = () => {
    setModal({ 
      show: true, 
      type: 'confirm', 
      message: 'Are you sure? This will restore all drone settings to factory defaults.' 
    })
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', color: THEME.textLight }}>
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚠️</div>
      <h2 style={{ color: '#333' }}>Reset Parameters</h2>
      <p style={{ maxWidth: '400px', margin: '0 auto', color: '#666' }}>
        Restore factory defaults for the drone. This will erase all custom calibrations and parameters.
      </p>

      <button
        onClick={triggerConfirm}
        disabled={loading}
        style={{
          padding: '15px 30px',
          background: loading ? '#ccc' : '#ff4757',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          marginTop: '20px',
          transition: '0.3s'
        }}
      >
        {loading ? 'Resetting...' : 'Factory Reset Drone'}
      </button>

      {/* --- CUSTOM MODAL --- */}
      {modal.show && (
        <div style={modalOverlayStyle}>
          <div style={modalCardStyle}>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>
              {modal.type === 'confirm' ? 'Confirm Action' : 'System Status'}
            </h3>
            <p style={{ marginBottom: '25px', color: '#666' }}>{modal.message}</p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              {modal.type === 'confirm' ? (
                <>
                  <button onClick={() => setModal({ show: false })} style={cancelBtnStyle}>Cancel</button>
                  <button onClick={handleReset} style={confirmBtnStyle}>Yes, Reset</button>
                </>
              ) : (
                <button onClick={() => setModal({ show: false })} style={confirmBtnStyle}>OK</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// --- MODAL STYLES ---
const modalOverlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000
}

const modalCardStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '12px',
  width: '400px',
  textAlign: 'center',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
}

const cancelBtnStyle = {
  padding: '10px 25px',
  border: '1px solid #ddd',
  background: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}

const confirmBtnStyle = {
  padding: '10px 25px',
  border: 'none',
  background: '#00d1ff',
  color: 'white',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer'
}

export default ResetParameters