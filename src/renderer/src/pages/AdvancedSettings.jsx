import React, { useState, useEffect, useMemo } from 'react';
import { THEME } from '../theme';
import { getParamDef } from '../utils/paramDefinitions';

const AdvancedSettings = ({ paramsData, onRequestLoad }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [localParams, setLocalParams] = useState([]);
  const [editingValues, setEditingValues] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showRefreshHint, setShowRefreshHint] = useState(false);

  // --- PROGRESS LOGIC ---
  const loadedCount = paramsData ? Object.keys(paramsData).length : 0;
  const sampleParam = paramsData ? Object.values(paramsData)[0] : null;
  const totalCount = sampleParam ? sampleParam.count : 0;
  const progress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 0;
  const isDownloading = totalCount > 0 && loadedCount < totalCount;

  // --- DATA SYNC ---
  useEffect(() => {
    if (paramsData) {
      const array = Object.values(paramsData).sort((a, b) => {
        const idA = a.id || "";
        const idB = b.id || "";
        return idA.localeCompare(idB);
      });
      setLocalParams(array);
    }
  }, [paramsData]);

  // --- HANDLERS ---
  const handleInputChange = (id, val) => {
    setEditingValues(prev => {
      const originalVal = paramsData[id]?.value;
      if (val === "" || String(val) === String(originalVal)) {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      }
      return { ...prev, [id]: val };
    });
  };

  const handleGlobalWriteClick = () => {
    if (Object.keys(editingValues).length > 0) setShowModal(true);
  };

const confirmGlobalWrite = async () => {
    // 1. Convert Object to List (Matches Kotlin "listOf")
    const paramsToWrite = Object.entries(editingValues);
    const total = paramsToWrite.length;

    console.log(`🚀 Starting Bulk Write of ${total} params...`);

    // 2. Iterate with Delay (Matches Kotlin "params.forEachIndexed")
    for (let i = 0; i < total; i++) {
      const [id, val] = paramsToWrite[i];
      
      // Calculate Progress (Matches Kotlin "onProgress")
      const percent = Math.round(((i + 1) / total) * 100);
      console.log(`Writing ${i+1}/${total}: ${id} -> ${val} (${percent}%)`);

      // 3. Send Single Param (Matches Kotlin "updateParamValue")
      // Ensure we send a NUMBER, not a string
      await window.api.setParam(id, parseFloat(val));

      // 4. Delay (Matches Kotlin "Thread.sleep(delayMs)")
      // We wait 300ms between writes so the drone doesn't choke
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // 5. Complete (Matches Kotlin "onComplete")
    console.log("✅ All parameters written successfully");
    
    setEditingValues({}); // Clear edits
    setShowRefreshHint(true); // Show "Please Refresh" banner
    setShowModal(false); // Close modal
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(paramsData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "drone_params.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const filteredParams = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return localParams.filter(p => (p.id || "").toLowerCase().includes(term));
  }, [searchTerm, localParams]);

  const editCount = Object.keys(editingValues).length;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#F9FAFB',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      {/* --- CONFIRMATION MODAL --- */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '70vh',
            overflowY: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#333' }}>
              Confirm Parameter Changes
            </h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px'
            }}>
              <thead>
                <tr style={{ background: '#F3F4F6' }}>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #E5E7EB' }}>Param ID</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #E5E7EB' }}>Old Value</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #E5E7EB' }}>New Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(editingValues).map(([id, newVal]) => (
                  <tr key={id}>
                    <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>{id}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>{paramsData[id]?.value}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB', fontWeight: 'bold', color: THEME.success }}>{newVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: '1px solid #CCC',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: '#666'
                }}>
                Cancel
              </button>
              <button
                onClick={confirmGlobalWrite}
                style={{
                  padding: '10px 20px',
                  background: THEME.success,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                Agree & Write All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div style={{
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '2px solid #E5E7EB'
      }}>
        <h2 style={{
          margin: 0,
          color: '#1F2937',
          fontSize: '1.5em'
        }}>
          Advanced Settings
        </h2>
      </div>

      {/* REFRESH HINT */}
      {showRefreshHint && (
        <div style={{
          background: '#D1FAE5',
          border: '1px solid #10B981',
          borderRadius: '6px',
          padding: '12px 15px',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ color: '#065F46', fontWeight: 'bold' }}>
            ✅ Changes Sent. Please click Refresh to confirm.
          </span>
          <button
            onClick={() => {
              onRequestLoad();
              setShowRefreshHint(false);
            }}
            style={{
              background: THEME.success,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 15px',
              cursor: 'pointer',
              fontSize: '0.8em'
            }}>
            Refresh Now
          </button>
        </div>
      )}

      {/* TOOLBAR */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '15px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={onRequestLoad}
          style={{
            padding: '10px 20px',
            background: THEME.primary,
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9em'
          }}>
          Refresh List
        </button>
        <button
          onClick={handleGlobalWriteClick}
          disabled={editCount === 0}
          style={{
            padding: '10px 20px',
            background: editCount > 0 ? THEME.success : '#E0E0E0',
            color: editCount > 0 ? 'white' : '#AAA',
            border: 'none',
            borderRadius: '20px',
            cursor: editCount > 0 ? 'pointer' : 'default',
            fontWeight: 'bold',
            fontSize: '0.9em',
            transition: '0.3s'
          }}>
          {editCount > 0 ? `Write Changes (${editCount})` : "Write Changes"}
        </button>
        <button
          onClick={handleExport}
          style={{
            padding: '10px 20px',
            background: '#6B7280',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9em'
          }}>
          Export JSON
        </button>
      </div>

      {/* SEARCH BOX */}
      <div style={{
        position: 'relative',
        marginBottom: '15px'
      }}>
        <span style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '1.2em',
          color: '#9CA3AF'
        }}>
          🔍
        </span>
        <input
          type="text"
          placeholder="Search parameters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 10px 12px 40px',
            borderRadius: '6px',
            border: '1px solid #CCC',
            fontSize: '0.95em',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* PROGRESS BAR */}
      {isDownloading && (
        <div style={{
          background: '#FEF3C7',
          border: '1px solid #F59E0B',
          borderRadius: '6px',
          padding: '10px 15px',
          marginBottom: '15px',
          fontSize: '0.9em',
          color: '#92400E'
        }}>
          📥 Syncing Parameters...{loadedCount} / {totalCount}
        </div>
      )}

      {/* TABLE */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        background: 'white'
      }}>
        <table style={{
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              background: '#F9FAFB',
              position: 'sticky',
              top: 0,
              zIndex: 10
            }}>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                borderBottom: '2px solid #E5E7EB',
                fontWeight: 'bold',
                color: '#374151',
                width: '18%'
              }}>
                Parameter ID
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                borderBottom: '2px solid #E5E7EB',
                fontWeight: 'bold',
                color: '#374151',
                width: '15%'
              }}>
                Value
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                borderBottom: '2px solid #E5E7EB',
                fontWeight: 'bold',
                color: '#374151',
                width: '10%'
              }}>
                Default
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                borderBottom: '2px solid #E5E7EB',
                fontWeight: 'bold',
                color: '#374151',
                width: '15%'
              }}>
                Range
              </th>
              <th style={{
                padding: '12px',
                textAlign: 'left',
                borderBottom: '2px solid #E5E7EB',
                fontWeight: 'bold',
                color: '#374151',
                width: '42%'
              }}>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredParams.length > 0 ? (
              filteredParams.map((param, i) => {
                const editValue = editingValues[param.id];
                const droneValue = param.value !== undefined ? param.value : "";
                const displayValue = editValue !== undefined ? editValue : droneValue;
                const isModified = editValue !== undefined && String(editValue) !== String(droneValue);
                const def = getParamDef(param.id);

                return (
                  <tr key={param.id || i} style={{
                    background: i % 2 === 0 ? 'white' : '#F9FAFB'
                  }}>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #E5E7EB',
                      fontFamily: 'monospace',
                      color: '#1F2937',
                      wordWrap: 'break-word',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {param.id || "Unknown"}
                    </td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #E5E7EB'
                    }}>
                      <input
                        type="text"
                        value={displayValue}
                        onChange={(e) => handleInputChange(param.id, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: isModified ? `1px solid ${THEME.success}` : '1px solid #EEE',
                          borderRadius: '4px',
                          color: isModified ? THEME.success : '#333',
                          fontWeight: isModified ? 'bold' : 'normal',
                          background: isModified ? '#F0FFF4' : 'white',
                          fontSize: '0.95em',
                          boxSizing: 'border-box'
                        }}
                      />
                    </td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #E5E7EB',
                      color: '#6B7280',
                      fontSize: '0.9em',
                      wordWrap: 'break-word'
                    }}>
                      {def.default}
                    </td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #E5E7EB',
                      color: '#6B7280',
                      fontSize: '0.85em',
                      wordWrap: 'break-word'
                    }}>
                      <div>{def.range}</div>
                      {def.unit && <span style={{ fontStyle: 'italic', display: 'block', marginTop: '2px' }}>{def.unit}</span>}
                    </td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #E5E7EB',
                      color: '#4B5563',
                      fontSize: '0.85em',
                      lineHeight: '1.5',
                      wordWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
                      {def.desc}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} style={{
                  padding: '40px',
                  textAlign: 'center',
                  color: '#9CA3AF',
                  fontSize: '0.95em'
                }}>
                  {isDownloading ? "Loading data..." : "No parameters found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvancedSettings;