import React from 'react';
import { THEME } from '../theme';

const ResetParameters = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', color: THEME.textLight }}>
      <h2>Reset Parameters</h2>
      <p>Restore factory defaults for the drone.</p>
      <button style={{ padding: '15px 30px', background: THEME.error, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>
        Factory Reset Drone
      </button>
    </div>
  );
};

export default ResetParameters;