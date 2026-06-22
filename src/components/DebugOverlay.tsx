import React, { useEffect, useState } from 'react';

// Temporary, opt-in (?debug=1) diagnostic for tracking down a real-device-only main-thread
// freeze report that hasn't reproduced in any synthetic CPU-throttled test so far. Shows which
// shader render path actually engaged and flags any main-thread stall over 80ms, with a
// timestamp, so the freeze can be correlated to a specific user action when reported back.
// Remove once the mobile freeze investigation is closed out.
const DebugOverlay: React.FC = () => {
  const [shaderMode, setShaderMode] = useState('pending');
  const [stalls, setStalls] = useState<{ time: string; ms: number }[]>([]);
  const [clickLatency, setClickLatency] = useState<number | null>(null);
  const [openDuration, setOpenDuration] = useState<number | null>(null);

  useEffect(() => {
    let last = performance.now();
    const interval = setInterval(() => {
      const w = window as unknown as {
        __shaderMode?: string;
        __lastClickLatency?: number;
        __lastOpenDuration?: number;
      };
      // Re-read every tick, not once — a one-shot read could capture a stale value if the
      // worker's confirmation arrives a moment later than the read itself.
      setShaderMode(w.__shaderMode || 'unknown');
      if (w.__lastClickLatency !== undefined) setClickLatency(w.__lastClickLatency);
      if (w.__lastOpenDuration !== undefined) setOpenDuration(w.__lastOpenDuration);

      const now = performance.now();
      const gap = now - last;
      last = now;
      if (gap > 80) {
        const time = new Date().toLocaleTimeString('cs-CZ', { hour12: false });
        setStalls((prev) => [...prev.slice(-9), { time, ms: Math.round(gap) }]);
      }
    }, 50);

    return () => clearInterval(interval);
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
      <div>disabled: {new URLSearchParams(window.location.search).get('disable') || '(none)'}</div>
      <div>shader: {shaderMode}</div>
      <div style={{ color: clickLatency && clickLatency > 80 ? '#f87171' : '#4ade80' }}>
        click→handler: {clickLatency === null ? '—' : `${clickLatency}ms`}
      </div>
      <div style={{ color: openDuration && openDuration > 400 ? '#f87171' : '#4ade80' }}>
        click→menu open: {openDuration === null ? '—' : `${openDuration}ms`}
      </div>
      <div style={{ color: '#fbbf24', marginTop: 4 }}>bg timer gaps &gt;80ms (may be imprecise on iOS):</div>
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
