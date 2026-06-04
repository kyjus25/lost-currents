import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { G } from './shared';

export interface DebugTools {
  stats: Stats;
  gui: GUI;
  visible: boolean;
  update(): void;
  toggle(): void;
  dispose(): void;
}

export function createDebugTools(): DebugTools {
  const stats = new Stats();
  stats.dom.style.position = 'absolute';
  stats.dom.style.top = '0px';
  stats.dom.style.left = '0px';
  stats.dom.style.display = 'none';
  document.body.appendChild(stats.dom);

  const gui = new GUI({ title: 'Debug', width: 260 });
  gui.domElement.style.display = 'none';

  const params = {
    bloomStrength: 0.3,
    fogNear: 200,
    fogFar: 2000,
    camShake: 0,
    testingMode: false,
    waterVisible: true,
  };

  const rendering = gui.addFolder('Rendering');
  rendering.add(params, 'bloomStrength', 0, 2, 0.01).name('Bloom').onChange((v: number) => {
    if (G.pp) G.pp.setBloomStrength(v);
  });
  rendering.add(params, 'fogNear', 10, 500, 1).name('Fog Near').onChange((v: number) => {
    if (G.scene && G.scene.fog) (G.scene.fog as THREE.Fog).near = v;
  });
  rendering.add(params, 'fogFar', 100, 4000, 10).name('Fog Far').onChange((v: number) => {
    if (G.scene && G.scene.fog) (G.scene.fog as THREE.Fog).far = v;
  });
  rendering.close();

  const gameplay = gui.addFolder('Gameplay');
  gameplay.add(params, 'testingMode').name('Testing Mode').onChange((v: boolean) => {
    G.testingMode = v;
  });
  gameplay.close();

  const debug = gui.addFolder('Debug');
  debug.add({ reset_pos: () => {
    if (G.pBoat) { G.pBoat.pos.set(0, 0, 0); G.pBoat.speed = 0; }
  }}, 'reset_pos').name('Reset Position');
  debug.close();

  return {
    stats,
    gui,
    visible: false,

    update() {
      stats.update();
      params.camShake = G.camShake || 0;
    },

    toggle() {
      this.visible = !this.visible;
      stats.dom.style.display = this.visible ? 'block' : 'none';
      gui.domElement.style.display = this.visible ? 'block' : 'none';
    },

    dispose() {
      stats.dom.remove();
      gui.destroy();
    },
  };
}
