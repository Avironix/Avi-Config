import React from 'react';
import { THEME } from '../theme';

const StatCard = ({ label, value, color }) => (
  <div style={{
    background: 'white', padding: '20px', borderRadius: '12px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
    minWidth: '200px', flex: 1
  }}>
    <div style={{ color: '#6B7280', fontSize: '0.9em', marginBottom: '5px' }}>{label}</div>
    <div style={{ color: color || '#1F2937', fontSize: '1.8em', fontWeight: 'bold' }}>{value || "N/A"}</div>
  </div>
);

const Dashboard = ({ mavData }) => {
  // Safe defaults if no data is streaming yet
  const packet = mavData ? JSON.parse(mavData.json) : {};
  
  // Example mapping (adjust based on your actual packet structure)
  const mode = packet.custom_mode || "STABILIZE";
  const battery = packet.battery_remaining || 0;
  const voltage = (packet.voltage_battery / 1000).toFixed(1);
  const armStatus = packet.base_mode & 128 ? "ARMED" : "DISARMED";
  const gpsFix = packet.fix_type || "No Fix";

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* 1. TOP ROW - STATUS CARDS */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
        <StatCard label="Flight Mode" value={mode} color={THEME.accent} />
        <StatCard label="Arming Status" value={armStatus} color={armStatus === "ARMED" ? '#EF4444' : '#10B981'} />
        <StatCard label="Battery" value={`${battery}% (${voltage}V)`} />
        <StatCard label="GPS Status" value={gpsFix} />
      </div>

      {/* 2. ATTITUDE DISPLAY (Simple Text Version) */}
      <div style={{ background: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>Real-time Attitude</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#6366F1' }}>
                    {(packet.roll ? (packet.roll * 57.29).toFixed(1) : "0.0")}°
                </div>
                <div style={{ color: '#9CA3AF' }}>ROLL</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#10B981' }}>
                    {(packet.pitch ? (packet.pitch * 57.29).toFixed(1) : "0.0")}°
                </div>
                <div style={{ color: '#9CA3AF' }}>PITCH</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#F59E0B' }}>
                    {(packet.yaw ? (packet.yaw * 57.29).toFixed(1) : "0.0")}°
                </div>
                <div style={{ color: '#9CA3AF' }}>YAW</div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;