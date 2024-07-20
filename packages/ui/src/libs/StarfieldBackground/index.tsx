import { createSignal, onMount, onCleanup } from "solid-js";

const StarfieldBackground = () => {
  let canvasRef: HTMLCanvasElement | undefined;
  const [dimensions, setDimensions] = createSignal({ width: 0, height: 0 });

  // Vertex shader
  const vertexShaderSource = `
    attribute vec2 a_position;
    attribute float a_size;
    attribute vec3 a_color;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying vec3 v_color;
    void main() {
      vec2 position = a_position;
      position.y = mod(position.y + u_time * 0.05, 1.0);
      vec2 zeroToOne = position;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;
      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
      gl_PointSize = a_size;
      v_color = a_color;
    }
  `;

  // Fragment shader
  const fragmentShaderSource = `
    precision mediump float;
    varying vec3 v_color;
    void main() {
      float r = 0.0, delta = 0.0, alpha = 1.0;
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      r = dot(cxy, cxy);
      if (r > 1.0) {
          discard;
      }
      gl_FragColor = vec4(v_color, alpha);
    }
  `;

  // Helper function to create shaders
  const createShader = (
    gl: WebGLRenderingContext,
    type: number,
    source: string
  ) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("Unable to create shader");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(
        "An error occurred compiling the shaders: " +
          gl.getShaderInfoLog(shader)
      );
    }
    return shader;
  };

  // Helper function to create program
  const createProgram = (
    gl: WebGLRenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ) => {
    const program = gl.createProgram();
    if (!program) throw new Error("Unable to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(
        "Unable to initialize the shader program: " +
          gl.getProgramInfoLog(program)
      );
    }
    return program;
  };

  // Main render function
  const render = (
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    startTime: number
  ) => {
    const { width, height } = dimensions();
    gl.viewport(0, 0, width, height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position"
    );
    const sizeAttributeLocation = gl.getAttribLocation(program, "a_size");
    const colorAttributeLocation = gl.getAttribLocation(program, "a_color");
    const resolutionUniformLocation = gl.getUniformLocation(
      program,
      "u_resolution"
    );
    const timeUniformLocation = gl.getUniformLocation(program, "u_time");

    gl.uniform2f(resolutionUniformLocation, width, height);
    gl.uniform1f(timeUniformLocation, (Date.now() - startTime) * 0.001);

    const numStars = 1000;
    const positions = new Float32Array(numStars * 2);
    const sizes = new Float32Array(numStars);
    const colors = new Float32Array(numStars * 3);

    for (let i = 0; i < numStars; i++) {
      positions[i * 2] = Math.random();
      positions[i * 2 + 1] = Math.random();
      sizes[i] = Math.random() * 5 + 1;
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(sizeAttributeLocation);
    gl.vertexAttribPointer(sizeAttributeLocation, 1, gl.FLOAT, false, 0, 0);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(colorAttributeLocation);
    gl.vertexAttribPointer(colorAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, numStars);

    requestAnimationFrame(() => render(gl, program, startTime));
  };

  onMount(() => {
    if (!canvasRef) return;

    const gl = canvasRef.getContext("webgl");
    if (!gl) {
      console.error(
        "Unable to initialize WebGL. Your browser may not support it."
      );
      return;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );
    const program = createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    const resizeCanvas = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvasRef!.width = width;
      canvasRef!.height = height;
      setDimensions({ width, height });
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();
    render(gl, program, startTime);

    onCleanup(() => {
      window.removeEventListener("resize", resizeCanvas);
    });
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        "z-index": -1,
      }}
    />
  );
};

export default StarfieldBackground;
