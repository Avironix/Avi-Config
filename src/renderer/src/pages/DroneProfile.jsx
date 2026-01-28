import React from 'react'
import { useMavlink } from '../context/MavlinkContext'

const DroneProfile = () => {
  const { mavData } = useMavlink()
  const packet = mavData ? JSON.parse(mavData.json) : {}

  return (
    <div style={profilePageStyle}>
      <h2 style={{ color: '#00d1ff', marginBottom: '40px' }}>DRONE DETAILS</h2>
      <div style={{ display: 'flex', gap: '60px' }}>
        {/* The Grey Icon Box from your image */}
        <div style={iconBoxStyle}>
          <img src="drone_icon.png" style={{ width: '250px' }} alt="Drone" />
        </div>

        {/* The Text Details */}
        <div style={{ flex: 1 }}>
          <DetailRow label="Drone ID :" value={packet.drone_id || 'Null'} />
          <DetailRow label="Firmware Version :" value={packet.firmware_version || '4.7.0'} />
          <DetailRow label="Code Checksum :" value="NA" />
          <DetailRow label="Data Checksum :" value="NA" />
        </div>
      </div>
    </div>
  )
}

const DetailRow = ({ label, value }) => (
  <div style={{ display: 'flex', marginBottom: '30px', fontSize: '1.1em' }}>
    <span style={{ width: '200px', color: '#555' }}>{label}</span>
    <span style={{ fontWeight: '500', color: '#333' }}>{value}</span>
  </div>
)

const profilePageStyle = { padding: '50px', background: 'white', height: '100%' }
const iconBoxStyle = {
  width: '400px',
  height: '500px',
  background: '#f5f5f5',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default DroneProfile
