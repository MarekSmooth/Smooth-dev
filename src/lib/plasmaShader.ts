const VERTEX_SHADER = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

// linesPerGroup is the dominant cost driver (it's the per-pixel loop count) — parameterized so
// mobile GPUs, which this per-pixel trig-heavy shader hits much harder than desktop, can run a
// visibly-equivalent but cheaper version instead of the same workload at a smaller canvas.
const getFragmentShader = (linesPerGroup: number) => `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed = 0.2;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const float scale = 5.0;
  const vec4 lineColor = vec4(0.55, 0.32, 1.0, 1.0);
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.2;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = ${linesPerGroup};

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy;
    // Normalize by the longer side, not always width — on a narrow/tall mobile
    // viewport, dividing by width alone crams far more periods into the height,
    // making the whole pattern shrink into thin, barely-visible lines.
    float spaceDivisor = max(iResolution.x, iResolution.y);
    vec2 space = (fragCoord - iResolution.xy / 2.0) / spaceDivisor * 2.0 * scale;

    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

    vec4 lines = vec4(0.0);
    vec4 bgColor1 = vec4(0.05, 0.04, 0.16, 1.0);
    vec4 bgColor2 = vec4(0.16, 0.05, 0.28, 1.0);

    for (int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

      float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

      lines += (line + circle) * lineColor * rand * 0.7;
    }

    vec4 fragColor = mix(bgColor1, bgColor2, uv.x);
    fragColor *= verticalFade;
    fragColor.a = 1.0;
    fragColor += lines;

    gl_FragColor = fragColor;
  }
`;

function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Shader program link error:', gl.getProgramInfoLog(program));
    return null;
  }

  return program;
}

interface ResizableCanvas {
  width: number;
  height: number;
}

export interface PlasmaShaderOptions {
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

export interface PlasmaShaderHandle {
  resize: (cssWidth: number, cssHeight: number, dpr: number) => void;
  setPaused: (paused: boolean) => void;
  setHidden: (hidden: boolean) => void;
  destroy: () => void;
}

// Runs the draw loop on whatever thread calls it — the same logic backs both the Worker path
// (via OffscreenCanvas) and the main-thread fallback, so there's exactly one place that can get
// the animation/perf tuning wrong. Uses setTimeout rather than requestAnimationFrame because rAF
// isn't reliably available inside a worker scope across browsers, and a slow ambient plasma
// drift doesn't need vsync precision anyway.
export function startPlasmaShader(
  gl: WebGLRenderingContext,
  canvas: ResizableCanvas,
  { isMobile, prefersReducedMotion }: PlasmaShaderOptions
): PlasmaShaderHandle | null {
  const program = initShaderProgram(gl, VERTEX_SHADER, getFragmentShader(isMobile ? 6 : 10));
  if (!program) return null;

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const vertexPositionLoc = gl.getAttribLocation(program, 'aVertexPosition');
  const resolutionLoc = gl.getUniformLocation(program, 'iResolution');
  const timeLoc = gl.getUniformLocation(program, 'iTime');

  // Render at a reduced internal resolution — this is a soft, blurred plasma background, so it
  // doesn't need native/retina sharpness, and pixel count is the single biggest cost driver for
  // this per-pixel shader.
  const RESOLUTION_SCALE = isMobile ? 0.4 : 0.6;
  const TARGET_FRAME_INTERVAL = 1000 / (isMobile ? 20 : 30); // the plasma drifts slowly — even 20fps reads as smooth

  const resize = (cssWidth: number, cssHeight: number, dpr: number) => {
    const scale = Math.min(dpr || 1, 1.5) * RESOLUTION_SCALE;
    canvas.width = Math.max(1, Math.round(cssWidth * scale));
    canvas.height = Math.max(1, Math.round(cssHeight * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const startTime = Date.now();
  let timeoutId: ReturnType<typeof setTimeout> | 0 = 0;
  let isHidden = false;
  let isPaused = false;
  let destroyed = false;

  const draw = () => {
    const elapsed = (Date.now() - startTime) / 1000;
    gl.useProgram(program);
    gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
    gl.uniform1f(timeLoc, elapsed);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(vertexPositionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexPositionLoc);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const tick = () => {
    if (destroyed) return;
    draw();
    if (!prefersReducedMotion && !isHidden && !isPaused) {
      timeoutId = setTimeout(tick, TARGET_FRAME_INTERVAL);
    } else {
      timeoutId = 0;
    }
  };

  const resumeIfNeeded = () => {
    if (!isHidden && !isPaused && !prefersReducedMotion && !timeoutId && !destroyed) {
      timeoutId = setTimeout(tick, 0);
    }
  };

  if (!prefersReducedMotion) {
    timeoutId = setTimeout(tick, 0);
  } else {
    draw();
  }

  return {
    resize,
    setPaused: (paused: boolean) => {
      isPaused = paused;
      resumeIfNeeded();
    },
    setHidden: (hidden: boolean) => {
      isHidden = hidden;
      resumeIfNeeded();
    },
    destroy: () => {
      destroyed = true;
      if (timeoutId) clearTimeout(timeoutId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    },
  };
}

export type PlasmaWorkerMessage =
  | {
      type: 'init';
      canvas: OffscreenCanvas;
      width: number;
      height: number;
      dpr: number;
      isMobile: boolean;
      prefersReducedMotion: boolean;
    }
  | { type: 'resize'; width: number; height: number; dpr: number }
  | { type: 'pause'; value: boolean }
  | { type: 'hidden'; value: boolean }
  | { type: 'destroy' };
