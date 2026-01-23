import './assets/styles/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { MavlinkProvider } from './context/MavlinkContext' // Import Context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MavlinkProvider> {/* Wrap App */}
      <App />
    </MavlinkProvider>
  </StrictMode>
)

