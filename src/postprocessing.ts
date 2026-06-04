import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const UnderwaterShader = {
  uniforms: {
    tDiffuse: { value: null },
    uIntensity: { value: 0 },
    uTintColor: { value: new THREE.Color(0x003355) },
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uIntensity;
    uniform vec3 uTintColor;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = length(vUv - 0.5);
      float vignette = smoothstep(0.4, 0.9, dist);
      color.rgb = mix(color.rgb, uTintColor, uIntensity * 0.5);
      color.rgb *= 1.0 - vignette * uIntensity * 0.4;
      float caustic = sin(vUv.x * 30.0 + uTime * 2.0) * sin(vUv.y * 30.0 + uTime * 1.5) * 0.03 * uIntensity;
      color.rgb += vec3(caustic * 0.3, caustic * 0.6, caustic);
      color.rgb *= 1.0 - uIntensity * 0.2;
      gl_FragColor = color;
    }
  `,
};

const XRayShader = {
  uniforms: {
    tDiffuse: { value: null },
    uActive: { value: 0 },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uActive;
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      if (uActive < 0.01) {
        gl_FragColor = color;
        return;
      }

      vec2 uv = vUv;
      vec2 pixel = uv * uResolution;

      float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 xrayColor = vec3(gray * 0.2, gray * 1.0, gray * 0.4);

      float edge = 0.0;
      float eps = 1.0 / uResolution.x;
      float l = dot(texture2D(tDiffuse, uv + vec2(-eps, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
      float r = dot(texture2D(tDiffuse, uv + vec2(eps, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
      float u = dot(texture2D(tDiffuse, uv + vec2(0.0, eps)).rgb, vec3(0.299, 0.587, 0.114));
      float d = dot(texture2D(tDiffuse, uv + vec2(0.0, -eps)).rgb, vec3(0.299, 0.587, 0.114));
      edge = sqrt((r - l) * (r - l) + (u - d) * (u - d));
      xrayColor += vec3(0.0, edge * 2.0, edge * 0.8);

      float scanline = sin(pixel.y * 1.5) * 0.5 + 0.5;
      scanline = pow(scanline, 0.3);
      xrayColor *= 0.7 + scanline * 0.3;

      float flicker = 0.97 + 0.03 * sin(uTime * 8.0 + uv.y * 5.0);
      xrayColor *= flicker;

      float noise = fract(sin(dot(pixel + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
      xrayColor += (noise - 0.5) * 0.06;

      float dist = length(uv - 0.5);
      float vignette = 1.0 - smoothstep(0.3, 0.95, dist);
      xrayColor *= 0.5 + vignette * 0.5;

      float scanband = smoothstep(0.0, 0.02, abs(fract(pixel.y / 4.0 + uTime * 0.5) - 0.5));
      xrayColor *= 0.85 + scanband * 0.15;

      gl_FragColor = vec4(mix(color.rgb, xrayColor, uActive), 1.0);
    }
  `,
};

export interface PostProcessing {
  composer: EffectComposer;
  bloomPass: UnrealBloomPass;
  underwaterPass: ShaderPass;
  xrayPass: ShaderPass;
  setUnderwater(intensity: number, tintColor?: THREE.Color): void;
  setBloomStrength(strength: number): void;
  setXRay(active: boolean): void;
  render(dt: number): void;
  resize(w: number, h: number): void;
}

export function createPostProcessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera
): PostProcessing {
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(renderer.domElement.width, renderer.domElement.height),
    0.3, 0.4, 0.85
  );
  composer.addPass(bloomPass);

  const underwaterPass = new ShaderPass(UnderwaterShader);
  composer.addPass(underwaterPass);

  const xrayPass = new ShaderPass(XRayShader);
  xrayPass.uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
  composer.addPass(xrayPass);

  return {
    composer,
    bloomPass,
    underwaterPass,
    xrayPass,
    setUnderwater(intensity: number, tintColor?: THREE.Color) {
      underwaterPass.uniforms.uIntensity.value = intensity;
      if (tintColor) underwaterPass.uniforms.uTintColor.value.copy(tintColor);
    },
    setBloomStrength(strength: number) {
      bloomPass.strength = strength;
    },
    setXRay(active: boolean) {
      xrayPass.uniforms.uActive.value = active ? 1.0 : 0.0;
    },
    render(dt: number) {
      underwaterPass.uniforms.uTime.value += dt;
      xrayPass.uniforms.uTime.value += dt;
      composer.render();
    },
    resize(w: number, h: number) {
      composer.setSize(w, h);
      xrayPass.uniforms.uResolution.value.set(w, h);
    },
  };
}
