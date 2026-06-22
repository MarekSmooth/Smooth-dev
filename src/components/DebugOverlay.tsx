import React, { useEffect, useState } from 'react';

// Temporary, opt-in (?debug=1) diagnostic for tracking down a real-device-only main-thread
// freeze report that hasn't reproduced in any synthetic CPU-throttled test so far. Shows which
// shader render path actually engaged and flags any main-thread stall over 80ms, with a
// timestamp, so the freeze can be correlated to a specific user action when reported back.
// Remove once the mobile freeze investigation is closed out.
const DebugOverlay: React.FC = () => {
  const [shaderMode, setShaderMode] = useState('pending');
  const [stalls, setStalls] = useState<{ time: string; ms: number }[]>([]);

  useEffect(() => {
    const modeTimer = setTimeout(() => {
      setShaderMode((window as unknown as { __shaderMode?: string }).__shaderMode || 'unknown');
    }, 600);

    let last = performance.now();
    const interval = setInterval(() => {
      const now = performance.now();
      const gap = now - last;
      last = now;
      if (gap > 80) {
        const time = new Date().toLocaleTimeString('cs-CZ', { hour12: false });
        setStalls((prev) => [...prev.slice(-9), { time, ms: Math.round(gap) }]);
      }
    }, 50);

    return () => {
      clearTimeout(modeTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 8,
        left: 8,
        zIndex: 99999,
        background: 'rgba(0,0,0,0.88)',
        color: '#4ade80',
        fontSize: 11,
        fontFamily: 'monospace',
        padding: '8px 10px',
        borderRadius: 8,
        maxWidth: 240,
        pointerEvents: 'none',
        lineHeight: 1.5,
      }}
    >
      <div>shader: {shaderMode}</div>
      <div style={{ color: '#fbbf24', marginTop: 4 }}>stalls &gt;80ms:</div>
      {stalls.length === 0 ? (
        <div style={{ color: '#9ca3af' }}>(none yet)</div>
      ) : (
        stalls.map((s, i) => (
          <div key={i}>
            {s.time} — {s.ms}ms
          </div>
        ))
      )}
    </div>
  );
};

export default DebugOverlay;
