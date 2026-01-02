import { useEffect, useRef, useState } from 'react'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string>('')
  const [isStreamActive, setIsStreamActive] = useState(false)
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false)

  useEffect(() => {
    startCamera()
    return () => {
      // Cleanup stream on unmount
      if (videoRef.current && videoRef.current.srcObject) {
         const stream = videoRef.current.srcObject as MediaStream;
         stream.getTracks().forEach(track => track.stop());
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          facingMode: 'user'
        },
        audio: false
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsStreamActive(true)
      }
    } catch (err) {
      console.error("Camera access denied:", err)
      setError("Camera access required. Please allow permission.")
    }
  }

  const minimizeWindow = () => {
    // In Electron, this will be handled via IPC
    // For browser dev mode, we minimize via browser API
    try {
      if (window.electronAPI) {
        window.electronAPI.minimizeWindow()
      } else {
        window.blur() // Browser fallback
      }
    } catch (err) {
      console.error("Minimize failed:", err)
    }
  }

  const toggleAlwaysOnTop = () => {
    try {
      const newState = !isAlwaysOnTop
      if (window.electronAPI) {
        window.electronAPI.toggleAlwaysOnTop(newState)
      }
      setIsAlwaysOnTop(newState)
    } catch (err) {
      console.error("Toggle always on top failed:", err)
    }
  }

  const takeSnapshot = () => {
    if (!videoRef.current) return
    
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Draw mirrored image
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      
      // Download as PNG
      const link = document.createElement('a')
      link.download = `mirrorcam-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }

  return (
    <div className="app-container">
      <div className="app-header">
        {isStreamActive && <div className="recording-indicator" />}
        <span>MirrorCam</span>
      </div>

      <div className="camera-wrapper">
        {error ? (
          <div className="status-message">
            <p>{error}</p>
            <button className="control-btn primary" onClick={startCamera} style={{marginTop: 20, width: 'auto', padding: '0 20px', borderRadius: 20}}>
              Retry
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-video"
          />
        )}
        
        <div className="controls-overlay">
          {/* Snapshot Button */}
          <button 
            className="control-btn" 
            onClick={takeSnapshot}
            title="Take Photo"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>

          {/* Always On Top Toggle */}
          <button 
            className={`control-btn ${isAlwaysOnTop ? 'primary' : ''}`}
            onClick={toggleAlwaysOnTop}
            title={isAlwaysOnTop ? "Disable Always On Top" : "Enable Always On Top"}
          >
            <svg viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V17h14v2z" fill="currentColor"/>
            </svg>
          </button>

          {/* Minimize Window Button (Primary Feature) */}
          <button 
            className="control-btn primary"
            onClick={minimizeWindow}
            title="Minimize Window"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
