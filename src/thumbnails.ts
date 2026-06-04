import * as THREE from 'three';
import { BOATS, G } from './shared';
import { mkBoat } from './boats';

var _thumbRen = null;

export const buildBoatThumbnails = () => {
  if (!_thumbRen) {
    _thumbRen = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    _thumbRen.setPixelRatio(2);
  }
  BOATS.forEach((cfg, i) => {
    const thumbScene = new THREE.Scene();
    thumbScene.background = new THREE.Color(0x112233);
    thumbScene.add(new THREE.AmbientLight(0x88aacc, 0.6));
    const thumbSun = new THREE.DirectionalLight(0xfff4e0, 2.0);
    thumbSun.position.set(5, 8, 5);
    thumbScene.add(thumbSun);
    thumbScene.add(new THREE.HemisphereLight(0x88ccff, 0x335533, 0.5));

    const boatMesh = mkBoat(cfg.color, cfg.accent, cfg.nozzles, cfg.finScale, cfg.hull);
    boatMesh.matrixAutoUpdate = true;
    thumbScene.add(boatMesh);

    const thumbCam = new THREE.PerspectiveCamera(35, 1.2, 0.1, 100);
    thumbCam.position.set(3, 2.5, 5);
    thumbCam.lookAt(-1, 0.2, 0);

    _thumbRen.setSize(240, 200);
    _thumbRen.render(thumbScene, thumbCam);

    G.boatThumbnails[i] = _thumbRen.domElement.toDataURL();
    thumbScene.clear();
  });
}
