import * as THREE from 'three';
import { G } from './shared';

export function updateCamera(b, dt) {
  const boatPos = b.pos.clone();
  boatPos.y += 1.5;
  const fwd = new THREE.Vector3(Math.cos(b.heading), 0, -Math.sin(b.heading));

  if (G.diving) {
    const dx = b.pos.x + G.diverPos.x, dy = b.pos.y + G.diverPos.y, dz = b.pos.z + G.diverPos.z;
    const diverPos = new THREE.Vector3(dx, dy, dz);
    const camTarget = diverPos.clone().add(fwd.clone().multiplyScalar(3)).add(new THREE.Vector3(0, 2, 0));
    G.cam.position.lerp(camTarget, Math.min(1, dt * 8));
    G.cam.lookAt(diverPos);
  } else if (G.walkingMode) {
    const cos = Math.cos(b.heading), sin = Math.sin(b.heading);
    const wx = b.pos.x + G.walkPos.x * cos - G.walkPos.z * sin;
    const wz = b.pos.z + G.walkPos.x * sin + G.walkPos.z * cos;
    const playerPos = new THREE.Vector3(wx, b.pos.y + 1.8, wz);
    const camTarget = playerPos.clone().add(fwd.clone().multiplyScalar(4)).add(new THREE.Vector3(0, 3, 0));
    G.cam.position.lerp(camTarget, Math.min(1, dt * 8));
    G.cam.lookAt(playerPos);
  } else if (G.pov === 'first') {
    const cockpitPos = boatPos.clone().add(fwd.clone().multiplyScalar(0.5)).add(new THREE.Vector3(0, 0.8, 0));
    G.cam.position.lerp(cockpitPos, Math.min(1, dt * 12));
    G.cam.lookAt(boatPos.clone().add(fwd.clone().multiplyScalar(50)));
  } else {
    const spdFactor = Math.min(1, Math.abs(b.speed) / Math.max(1, b.maxSpd));
    const goingBack = b.speed < -1;
    const behind = 10 - spdFactor * 2;
    const height = 5 + spdFactor * 2.5;
    const camDir = goingBack ? fwd.clone() : fwd.clone().multiplyScalar(-1);
    const camTarget = boatPos.clone().add(camDir.multiplyScalar(behind)).add(new THREE.Vector3(0, height, 0));
    if (G.camShake > 0) {
      camTarget.x += (Math.random() - 0.5) * G.camShake * 3;
      camTarget.y += (Math.random() - 0.5) * G.camShake * 2;
      G.camShake *= 0.9; if (G.camShake < 0.01) G.camShake = 0;
    }
    G.cam.position.lerp(camTarget, Math.min(1, dt * 10));
    G.cam.lookAt(boatPos);
  }
}
