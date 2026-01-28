import React from 'react';
import { THEME } from '../theme';

const TelemetrySettingsModal = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '450px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: THEME.accent, borderBottom: '1px solid #E5E7EB', paddingBottom: '10px', marginBottom: '20px' }}>
          TELEMETRY SETTINGS
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          <SelectField label="Attitude" defaultValue="4" />
          <SelectField label="Position" defaultValue="3" />
          <SelectField label="Mode/Status" defaultValue="2" />
          <SelectField label="RC" defaultValue="2" />
          <SelectField label="SENSORS" defaultValue="2" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
             <label style={{ fontSize: '0.8em', color: '#6B7280' }}>Connect Reset</label>
             <input type="checkbox" style={{ width: '25px', height: '25px' }} />
          </div>

          <div style={{ gridColumn: 'span 1' }}>
            <label style={{ fontSize: '0.8em', color: '#6B7280', display: 'block' }}>Disconnection Time</label>
            <input type="text" defaultValue="5000" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #CCC' }} />
            <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>[Min 1 - Max 180 sec]</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={onClose} style={{ padding: '10px 30px', borderRadius: '20px', border: `1px solid ${THEME.accent}`, background: 'white', color: THEME.accent, cursor: 'pointer' }}>
            Cancel
          </button>
          <button style={{ padding: '10px 30px', borderRadius: '20px', border: 'none', background: THEME.accent, color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectField = ({ label, defaultValue }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <label style={{ fontSize: '0.8em', color: '#6B7280' }}>{label}</label>
    <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #CCC' }} defaultValue={defaultValue}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
);

export default TelemetrySettingsModal;