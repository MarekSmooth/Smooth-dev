import React, { useEffect, useRef } from 'react';
import { startPlasmaShader, type PlasmaShaderHandle, type PlasmaWorkerMessage } from '../lib/plasmaShader';

interface ShaderBackgroundProps {
  className?: string;
}

interface PlasmaState {
  worker: Worker | null;
  handle: PlasmaShaderHandle | null;
  pendingDestroyId: ReturnType<typeof setTimeout> | null;
}

const ShaderBackground: React.FC<ShaderBackgroundProps> = ({ className = 'absolute inset-0 w-full h-full' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Persists across React StrictMode's dev-only mount→cleanup→mount cycle (the ref object itself
  // survives even though the effect body re-runs) — needed because transferControlToOffscreen()
  // can only ever be called once per canvas element, ever.
  const stateRef = useRef<PlasmaState>({ worker: null, handle: null, pendingDestroyId: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const state = stateRef.current;

    // A StrictMode remount landed before the previous cleanup's deferred teardown fired — cancel
    // it and keep using the worker/handle that's already running instead of trying (and failing)
    // to set up a second one on the same canvas.
    if (state.pendingDestroyId !== null) {
      clearTimeout(state.pendingDestroyId);
      state.pendingDestroyId = null;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!state.worker && !state.handle) {
      const canUseWorker =
        typeof OffscreenCanvas !== 'undefined' && typeof canvas.transferControlToOffscreen === 'function';

      // Temporary diagnostic hook (read by DebugOverlay, only mounted behind ?debug=1) — lets us
      // confirm from a real device which render path actually engaged, instead of guessing from
      // feature-detection alone (Safari can expose the OffscreenCanvas API while still failing to
      // hand back a usable WebGL context from it, which would silently fall through to nothing).
      (window as unknown as { __shaderMode?: string }).__shaderMode = canUseWorker ? 'worker-pending' : 'fallback';

      if (canUseWorker) {
        // Run entirely off the main thread. Many mobile GPU drivers don't actually compile the
        // shader pipeline at gl.compileShader/linkProgram time — they defer it to the first real
        // draw call, which can then block whichever thread called it for a second or more on
        // weaker hardware. On the main thread that hitch eats every pending click (including the
        // mobile menu button) and freezes any running CSS/Framer animation until it clears. Off
        // the main thread, the same hitch is invisible to the user.
        const worker = new Worker(new URL('../workers/plasmaShaderWorker.ts', import.meta.url), {
          type: 'module',
        });
        const offscreen = canvas.transferControlToOffscreen();
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const initMsg: PlasmaWorkerMessage = {
          type: 'init',
          canvas: offscreen,
          width: rect.width,
          height: rect.height,
          dpr,
          isMobile,
          prefersReducedMotion,
        };
        worker.onmessage = (e: MessageEvent) => {
          if (e.data?.type === 'status') {
            (window as unknown as { __shaderMode?: string }).__shaderMode = e.data.ok
              ? 'worker'
              : `worker-failed:${e.data.reason}`;
          }
        };
        worker.postMessage(initMsg, [offscreen]);
        state.worker = worker;
      } else {
        const gl = canvas.getContext('webgl', { antialias: false });
        if (gl) {
          state.handle = startPlasmaShader(gl, canvas, { isMobile, prefersReducedMotion });
        } else {
          console.warn('WebGL not supported, shader background disabled.');
        }
      }
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const dpr = window.devicePixelRatio || 1;
      if (state.worker) {
        const msg: PlasmaWorkerMessage = { type: 'resize', width: entry.contentRect.width, height: entry.contentRect.height, dpr };
        state.worker.postMessage(msg);
      } else {
        state.handle?.resize(entry.contentRect.width, entry.contentRect.height, dpr);
      }
    });
    resizeObserver.observe(canvas);
    if (state.handle) {
      const rect = canvas.getBoundingClientRect();
      state.handle.resize(rect.width, rect.height, window.devicePixelRatio || 1);
    }

    const handleVisibilityChange = () => {
      const value = document.hidden;
      if (state.worker) {
        const msg: PlasmaWorkerMessage = { type: 'hidden', value };
        state.worker.postMessage(msg);
      } else {
        state.handle?.setHidden(value);
      }
    };

    const handleMobileMenuToggle = (e: Event) => {
      const value = (e as CustomEvent<{ open: boolean }>).detail.open;
      if (state.worker) {
        const msg: PlasmaWorkerMessage = { type: 'pause', value };
        state.worker.postMessage(msg);
      } else {
        state.handle?.setPaused(value);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('mobile-menu-toggle', handleMobileMenuToggle);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mobile-menu-toggle', handleMobileMenuToggle);
      resizeObserver.disconnect();

      // Deferred so a StrictMode dev double-invoke remount (which happens synchronously right
      // after this) can cancel it above and keep the same worker/handle alive. A real unmount has
      // no follow-up remount, so this actually runs.
      state.pendingDestroyId = setTimeout(() => {
        if (state.worker) {
          const msg: PlasmaWorkerMessage = { type: 'destroy' };
          state.worker.postMessage(msg);
          state.worker.terminate();
          state.worker = null;
        }
        state.handle?.destroy();
        state.handle = null;
        state.pendingDestroyId = null;
      }, 0);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default ShaderBackground;
