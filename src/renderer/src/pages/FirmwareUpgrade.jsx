import React, { useState, useEffect, useRef } from 'react';
import { THEME } from '../theme';

// Visual Component: Progress Bar
const ProgressBar = ({ progress, status }) => (
  <div style={{ marginTop: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontWeight: 'bold', color: THEME.textMain }}>
      <span>{status}</span>
      <span>{progress}%</span>
    </div>
    <div style={{ width: '100%', height: '12px', background: '#ECECEC', borderRadius: '6px', overflow: 'hidden' }}>
      <div style={{ width: `${progress}%`, height: '100%', background: THEME.accent, transition: 'width 0.3s ease' }}></div>
    </div>
  </div>
);

const FirmwareUpgrade = ({ onScan, onUploadStart }) => {
  const [firmwarePath, setFirmwarePath] = useState(null);
  
  // Logic State
  const [isScanning, setIsScanning] = useState(false); 
  const [isUploading, setIsUploading] = useState(false);
  
  // UI State
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("Ready");
  const [showReplugModal, setShowReplugModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Refs for timers
  const scanInterval = useRef(null);

  // --- 1. HANDLE UPLOAD PROGRESS ---
  useEffect(() => {
    const removeListener = window.api.onUploadProgress((message) => {
      // Parse Progress
      const percentMatch = message.match(/(\d+\.\d+)%/);
      if (percentMatch) setProgress(parseFloat(percentMatch[1]));

      // Parse Status
      if (message.includes("Erase")) setUploadStatus("Erasing Memory...");
      if (message.includes("Program")) setUploadStatus("Writing Firmware...");
      if (message.includes("Verify")) setUploadStatus("Verifying...");
      
      // Success
      if (message.includes("SUCCESS") || message.includes("Rebooting")) {
        setUploadStatus("Complete");
        setProgress(100);
        setIsUploading(false);
        setShowSuccessModal(true);
      }
    });

    return () => {
      if (scanInterval.current) clearInterval(scanInterval.current);
    }
  }, []);

  // --- 2. FILE SELECTION ---
  const handleSelectFile = async () => {
    const path = await window.api.selectFile();
    if (path) setFirmwarePath(path);
  };

  // --- 3. START AUTO-DETECT SEQUENCE (STRICT MODE) ---
  const handleStartAutoDetect = async () => {
    if (!firmwarePath) return alert("Please select a firmware file first.");

    // Step A: Show "Replug" Modal immediately
    setShowReplugModal(true);
    setIsScanning(true);

    // Step B: Start watching with HIGH SPEED (100ms)
    scanInterval.current = setInterval(async () => {
      const latestPorts = await window.api.getPorts();
      
      // STRICT FILTER: Only accept ports with "Bootloader" in the name
      const bootloaderPort = latestPorts.find(p => {
         const name = (p.friendlyName || "").toLowerCase();
         console.log(name,'name ports')
         return name.includes("bootloader") || name.includes("stm32") || name.includes("serial device") || name.includes("usb");
      });

      if (bootloaderPort) {
        // MATCH FOUND!
        console.log("STRICT MATCH:", bootloaderPort.friendlyName);
        
        clearInterval(scanInterval.current); 
        setIsScanning(false);
        setShowReplugModal(false);
        
        startUploadProcess(bootloaderPort.path);
      } 
      // NOTE: If we find a port like "Cube Orange Mavlink", we do NOTHING.
      // The Interval keeps running.
      // The Modal stays open.
      // The user must try replugging again.

    }, 100); 
  };

  // Inside FirmwareUpgrade.jsx

const startUploadProcess = async (portName) => {
  setIsUploading(true);
  setProgress(0);
  setUploadStatus(`Bootloader detected on ${portName}. Starting...`);
  
  try {
    await window.api.uploadFirmware({ 
      portPath: portName, 
      filePath: firmwarePath 
    });
  } catch (err) {
    setUploadStatus("Upload Failed: " + err);
    setIsUploading(false);
  }
};

  // --- 4. CANCEL LOGIC ---
  const handleCancel = async () => {
    await window.api.cancelUpload();
    setIsUploading(false);
    setUploadStatus("Cancelled by User");
    setProgress(0);
  };

  const cancelScan = () => {
    clearInterval(scanInterval.current);
    setIsScanning(false);
    setShowReplugModal(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      
      {/* --- MODAL: REPLUG --- */}
      {showReplugModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ fontSize: '5em', marginBottom: '20px', animation: 'pulse 2s infinite' }}>🔌</div>
           <h2 style={{ color: THEME.accent, fontSize: '2em', margin: '0 0 10px 0' }}>Detecting Drone...</h2>
           <p style={{ color: THEME.textLight, fontSize: '1.2em', textAlign: 'center', maxWidth: '400px' }}>
             Scanning for <b>"Bootloader"</b>... <br/>
             <br/>
             Please Unplug the USB and Plug it back in.
           </p>
           
           <div style={{ marginTop: '30px', display: 'flex', gap: '10px', alignItems: 'center' }}>
             <div style={{ width: '10px', height: '10px', background: THEME.accent, borderRadius: '50%', animation: 'bounce 1s infinite' }}></div>
             <span style={{ color: '#999' }}>Scanning ports...</span>
           </div>

           <button onClick={cancelScan} style={{ marginTop: '50px', padding: '10px 30px', background: 'transparent', border: `1px solid ${THEME.border}`, color: THEME.textLight, borderRadius: '20px', cursor: 'pointer' }}>
             Cancel Scan
           </button>
        </div>
      )}

      {/* --- MODAL: SUCCESS --- */}
      {showSuccessModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 50px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '4em', color: THEME.success, marginBottom: '10px' }}>✓</div>
            <h2 style={{ color: THEME.textMain }}>Update Complete!</h2>
            <button onClick={()=>setShowSuccessModal(false)} style={{ marginTop: '20px', padding: '12px 30px', background: THEME.accent, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              Done
            </button>
          </div>
        </div>
      )}

      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: THEME.textMain }}>Firmware Upgrade Wizard</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', color: THEME.textLight, fontSize: '0.9em', fontWeight: 'bold', marginBottom: '10px' }}>SELECT FIRMWARE FILE</label>
        <div onClick={handleSelectFile} style={{ border: `2px dashed ${firmwarePath?THEME.accent:THEME.border}`, padding: '30px', borderRadius: '15px', textAlign: 'center', cursor: 'pointer', background: firmwarePath?'#F0FBFF':'#FAFAFA', transition: '0.2s' }}>
          <div style={{ fontSize: '2em', marginBottom: '10px' }}>{firmwarePath ? '📄' : '📂'}</div>
          {firmwarePath ? <span style={{ color: THEME.accent, fontWeight: 'bold' }}>{firmwarePath.split('\\').pop()}</span> : <span style={{color: '#999'}}>Click to select .apj file</span>}
        </div>
      </div>

      {!isUploading ? (
        <button onClick={handleStartAutoDetect} disabled={!firmwarePath}
          style={{ width: '100%', padding: '20px', background: firmwarePath ? THEME.accent : '#F0F0F0', color: firmwarePath ? 'white' : '#CCC', border: 'none', borderRadius: '12px', fontSize: '1.2em', fontWeight: 'bold', cursor: firmwarePath ? 'pointer' : 'not-allowed', boxShadow: firmwarePath ? '0 5px 15px rgba(0,209,255,0.3)' : 'none', transition: '0.2s' }}>
          Start Upgrade
        </button>
      ) : (
        <div>
          <ProgressBar progress={progress} status={uploadStatus} />
          <button onClick={handleCancel} style={{ marginTop: '20px', width: '100%', padding: '12px', background: 'transparent', border: '1px solid #FF7675', color: '#FF7675', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Cancel Upload
          </button>
        </div>
      )}
      
      {!isUploading && !firmwarePath && (
         <p style={{ textAlign: 'center', color: '#CCC', fontSize: '0.9em', marginTop: '10px' }}>Select a file to begin</p>
      )}

    </div>
  );
};

export default FirmwareUpgrade;