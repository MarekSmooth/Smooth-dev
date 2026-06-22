import { startPlasmaShader, type PlasmaShaderHandle, type PlasmaWorkerMessage } from '../lib/plasmaShader';

let handle: PlasmaShaderHandle | null = null;

self.onmessage = (e: MessageEvent<PlasmaWorkerMessage>) => {
  const msg = e.data;

  switch (msg.type) {
    case 'init': {
      const gl = msg.canvas.getContext('webgl', { antialias: false });
      if (!gl) {
        self.postMessage({ type: 'status', ok: false, reason: 'no-webgl-context' });
        return;
      }
      handle = startPlasmaShader(gl, msg.canvas, {
        isMobile: msg.isMobile,
        prefersReducedMotion: msg.prefersReducedMotion,
      });
      if (!handle) {
        self.postMessage({ type: 'status', ok: false, reason: 'shader-init-failed' });
        return;
      }
      handle.resize(msg.width, msg.height, msg.dpr);
      self.postMessage({ type: 'status', ok: true });
      break;
    }
    case 'resize':
      handle?.resize(msg.width, msg.height, msg.dpr);
      break;
    case 'pause':
      handle?.setPaused(msg.value);
      break;
    case 'hidden':
      handle?.setHidden(msg.value);
      break;
    case 'destroy':
      handle?.destroy();
      handle = null;
      break;
  }
};
