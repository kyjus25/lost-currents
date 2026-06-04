import * as THREE from 'three';

const vertexShader = `
uniform float uTime;
varying vec3 vWorldPos;
varying vec3 vNormal;

float waveHeight(vec3 pos) {
  return sin(pos.x * 0.008 + uTime * 0.5) * 1.5
    + sin(pos.z * 0.012 + uTime * 0.4) * 1.2
    + sin((pos.x + pos.z) * 0.006 + uTime * 0.6) * 1.0
    + sin(pos.x * 0.025 + pos.z * 0.02 + uTime * 1.3) * 0.5
    + sin(pos.x * 0.003 + uTime * 0.2) * 2.0;
}

void main() {
  vec3 pos = position;
  float y = waveHeight(pos);
  pos.y = y;

  float eps = 0.5;
  float hL = waveHeight(pos + vec3(-eps, 0.0, 0.0));
  float hR = waveHeight(pos + vec3(eps, 0.0, 0.0));
  float hD = waveHeight(pos + vec3(0.0, 0.0, -eps));
  float hU = waveHeight(pos + vec3(0.0, 0.0, eps));
  vec3 n = normalize(vec3(hL - hR, 2.0 * eps, hD - hU));

  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  vNormal = normalize((modelMatrix * vec4(n, 0.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform vec3 uColor;
uniform float uOpacity;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec3 lightDir = normalize(vec3(0.3, 0.8, 0.2));
  float diff = max(dot(vNormal, lightDir), 0.0) * 0.6 + 0.4;
  vec3 color = uColor * diff;

  float depth = length(vWorldPos - cameraPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, depth);
  color = mix(color, uFogColor, fogFactor);

  gl_FragColor = vec4(color, uOpacity);
}
`;

export function createWaterMaterial(fogColor: THREE.Color, fogNear: number, fogFar: number): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x0e7799) },
      uOpacity: { value: 0.92 },
      uFogColor: { value: fogColor },
      uFogNear: { value: fogNear },
      uFogFar: { value: fogFar },
    },
    transparent: true,
    side: THREE.DoubleSide,
  });
}

export function waveHeightAt(x: number, z: number): number {
  const time = performance.now() * 0.001;
  return Math.sin(x * 0.008 + time * 0.5) * 1.5
    + Math.sin(z * 0.012 + time * 0.4) * 1.2
    + Math.sin((x + z) * 0.006 + time * 0.6) * 1.0
    + Math.sin(x * 0.025 + z * 0.02 + time * 1.3) * 0.5
    + Math.sin(x * 0.003 + time * 0.2) * 2.0
    - 3.0;
}
