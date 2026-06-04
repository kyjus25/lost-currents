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

export interface PostProcessing {
  composer: EffectComposer;
  bloomPass: UnrealBloomPass;
  underwaterPass: ShaderPass;
  setUnderwater(intensity: number, tintColor?: THREE.Color): void;
  setBloomStrength(strength: number): void;
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

  return {
    composer,
    bloomPass,
    underwaterPass,
    setUnderwater(intensity: number, tintColor?: THREE.Color) {
      underwaterPass.uniforms.uIntensity.value = intensity;
      if (tintColor) underwaterPass.uniforms.uTintColor.value.copy(tintColor);
    },
    setBloomStrength(strength: number) {
      bloomPass.strength = strength;
    },
    render(dt: number) {
      underwaterPass.uniforms.uTime.value += dt;
      composer.render();
    },
    resize(w: number, h: number) {
      composer.setSize(w, h);
    },
  };
}
