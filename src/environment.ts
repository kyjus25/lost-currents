import * as THREE from 'three';
import { TW, TSEG, WSIZE } from './shared';
import { G } from './shared';
import { createWaterMaterial } from './water-shader';

export const buildWater = () => {
  G.waterGeo = new THREE.PlaneGeometry(WSIZE, WSIZE, 120, 120);
  G.waterGeo.rotateX(-Math.PI / 2);
  const fogColor = G.scene.fog ? (G.scene.fog as THREE.Fog).color : new THREE.Color(0x9dd5ee);
  const fogNear = G.scene.fog ? (G.scene.fog as THREE.Fog).near : 200;
  const fogFar = G.scene.fog ? (G.scene.fog as THREE.Fog).far : 2000;
  const mat = createWaterMaterial(fogColor, fogNear, fogFar);
  G.waterMaterial = mat;
  G.waterMesh = new THREE.Mesh(G.waterGeo, mat);
  G.waterMesh.position.y = -3.0;
  G.waterMesh.receiveShadow = true;
  G.scene.add(G.waterMesh);
}

export const buildSky = () => {
  const geo = new THREE.SphereGeometry(1, 48, 36);
  const positions = geo.attributes.position;
  const colors = new Float32Array(positions.count * 3);

  for (let i = 0; i < positions.count; i++) {
    const y = positions.getY(i);
    const h = (y + 1) * 0.5;
    let r, g, b;
    if (h > 0.7) {
      const t = (h - 0.7) / 0.3;
      r = 0.15 + t * 0.10;
      g = 0.35 + t * 0.15;
      b = 0.80 + t * 0.12;
    } else if (h > 0.5) {
      const t = (h - 0.5) / 0.2;
      r = 0.35 + t * (-0.20);
      g = 0.55 + t * (-0.20);
      b = 0.85 + t * (-0.05);
    } else if (h > 0.4) {
      const t = (h - 0.4) / 0.1;
      r = 0.55 + t * (-0.20);
      g = 0.70 + t * (-0.15);
      b = 0.88 + t * (-0.03);
    } else {
      r = 0.53;
      g = 0.68;
      b = 0.87;
    }
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false });
  const sky = new THREE.Mesh(geo, mat);
  sky.scale.set(1800, 1800, 1800);
  G.scene.add(sky);
}

export const buildClouds = () => {
  for (let i = 0; i < 60; i++) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 64, 10, 128, 64, 100);
    grad.addColorStop(0, 'rgba(255,255,255,0.7)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0.3)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
    for (let j = 0; j < 5; j++) {
      const cx = 128 + (Math.random() - 0.5) * 120;
      const cy = 64 + (Math.random() - 0.5) * 40;
      const cr = 20 + Math.random() * 50;
      const g2 = ctx.createRadialGradient(cx, cy, 5, cx, cy, cr);
      g2.addColorStop(0, 'rgba(255,255,255,0.5)');
      g2.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fill();
    }
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.5 + Math.random() * 0.3, depthWrite: false });
    const sprite = new THREE.Sprite(mat);
    const angle = Math.random() * Math.PI * 2;
    const dist = 300 + Math.random() * 600;
    sprite.position.set(Math.cos(angle) * dist, 150 + Math.random() * 200, Math.sin(angle) * dist);
    sprite.scale.set(100 + Math.random() * 150, 30 + Math.random() * 50, 1);
    G.scene.add(sprite);
    G.cloudMeshes.push(sprite);
  }
}

export const buildTerrain = () => {
  const cliffGeo = new THREE.BoxGeometry(1);
  const cliffColors = [0x7a5a2a, 0x6a4a1a, 0x8a6a3a, 0x5a3a0a];

  for (let i = 0; i < TSEG; i += 30) {
    for (let side = -1; side <= 1; side += 2) {
      const p = G.trackPts[i];
      const dist = TW * 0.5 + 120;
      const pos = p.pos.clone().add(p.right.clone().multiplyScalar(side * dist));
      pos.y = -6;

      const h = 20 + (i % 4) * 8;
      const w = 8 + (i % 3) * 6;
      const d = 8 + ((i + 2) % 3) * 6;

      const col = cliffColors[i % cliffColors.length];
      const cliff = new THREE.Mesh(cliffGeo, new THREE.MeshStandardMaterial({ color: col, roughness: 0.92, metalness: 0.0 }));
      cliff.scale.set(w, h, d);
      cliff.position.copy(pos);
      cliff.position.y += h * 0.5;
      cliff.rotation.y = (i * 0.07) % Math.PI;
      cliff.castShadow = true;
      cliff.receiveShadow = true;
      G.scene.add(cliff);
      G.cliffMeshes.push(cliff);
      G.racingMeshes.push(cliff);
    }
  }

  const mountainColors = [0x6a5040, 0x7a6050, 0x5a4030, 0x8a7060];
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2 + 0.3;
    const dist = 500 + (i % 5) * 50;
    const mh = 50 + (i % 7) * 10;
    const mw = 40 + (i % 4) * 15;
    const md = 40 + (i % 3) * 15;
    const mtn = new THREE.Mesh(cliffGeo, new THREE.MeshStandardMaterial({
      color: mountainColors[i % mountainColors.length],
      roughness: 0.95
    }));
    mtn.scale.set(mw, mh, md);
    mtn.position.set(Math.cos(angle) * dist, -3 + mh * 0.3, Math.sin(angle) * dist);
    mtn.castShadow = true;
    mtn.receiveShadow = true;
    G.scene.add(mtn);
    G.racingMeshes.push(mtn);
  }

  const floorGeo = new THREE.PlaneGeometry(2500, 2500);
  floorGeo.rotateX(-Math.PI / 2);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x3a7a2a, roughness: 0.9, metalness: 0 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.y = -80;
  floor.receiveShadow = true;
  G.scene.add(floor);
  G.racingMeshes.push(floor);
}

export const buildLights = () => {
  G.scene.add(new THREE.AmbientLight(0x99ccee, 0.5));
  const sun = new THREE.DirectionalLight(0xfff4e0, 2.0);
  sun.position.set(300, 400, 200);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 600;
  sun.shadow.camera.left = -200;
  sun.shadow.camera.right = 200;
  sun.shadow.camera.top = 200;
  sun.shadow.camera.bottom = -200;
  sun.shadow.bias = -0.001;
  G.scene.add(sun);
  G.scene.add(new THREE.HemisphereLight(0x88ccff, 0x44aa44, 0.7));
}

export const buildSun = () => {
  const sunGeo = new THREE.SphereGeometry(20, 20, 20);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff88 });
  const sunMesh = new THREE.Mesh(sunGeo, sunMat);
  sunMesh.position.set(300, 400, 200);
  G.scene.add(sunMesh);

  const glowGeo = new THREE.SphereGeometry(40, 20, 20);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffaa, transparent: true, opacity: 0.25 });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.copy(sunMesh.position);
  G.scene.add(glow);
}

export const updateWater = () => {
  if (G.waterMaterial) {
    G.waterMaterial.uniforms.uTime.value = performance.now() * 0.001;
  }
}

export const updateBoosts = (time) => {
  G.boostObjs.forEach(p => {
    if (p.userData.collected) return;
    p.position.y = p.userData.baseY + Math.sin(time * 3 + p.userData.idx * 0.5) * 0.8;
    p.rotation.y = time * 2;
    p.rotation.x = time * 1.3;
  });
}

export const updateClouds = (time) => {
  G.cloudMeshes.forEach((c, i) => {
    c.position.x += Math.sin(time * 0.1 + i) * 0.03;
    c.position.z += Math.cos(time * 0.08 + i * 0.7) * 0.03;
  });
}

export const buildIslands = () => {
  G.islands = [];
  const data = [
    { x: 200, z: 200, s: 12 }, { x: -300, z: 350, s: 9 }, { x: 500, z: -150, s: 14 },
    { x: -450, z: -250, s: 10 }, { x: 150, z: -500, s: 11 }, { x: -600, z: 150, s: 8 },
    { x: 350, z: 500, s: 13 }, { x: -200, z: -550, s: 10 }, { x: 650, z: 300, s: 9 },
    { x: -700, z: -100, s: 15 }, { x: 100, z: 700, s: 11 }, { x: -500, z: 600, s: 8 },
  ];
  data.forEach(d => {
    const g = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: 0xc2b280, roughness: 0.9 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x4a7a2a, roughness: 0.85 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8B7355, roughness: 0.8 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x228B22, roughness: 0.7 });

    const baseGeo = new THREE.CylinderGeometry(d.s * 0.6, d.s, d.s * 0.4, 8);
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -3 + d.s * 0.2;
    g.add(base);

    const topGeo = new THREE.CylinderGeometry(d.s * 0.55, d.s * 0.65, d.s * 0.25, 8);
    const top = new THREE.Mesh(topGeo, grassMat);
    top.position.y = -3 + d.s * 0.45;
    g.add(top);

    for (let t = 0; t < 3; t++) {
      const ta = (t / 3) * Math.PI * 2 + d.x * 0.1;
      const tr = d.s * 0.2 + Math.random() * d.s * 0.15;
      const th = 3 + Math.random() * 4;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.25, th, 6), trunkMat);
      trunk.position.set(Math.cos(ta) * tr, -3 + d.s * 0.45 + th * 0.5, Math.sin(ta) * tr);
      trunk.rotation.z = (Math.random() - 0.5) * 0.2;
      g.add(trunk);
      const crown = new THREE.Mesh(new THREE.SphereGeometry(1.5 + Math.random() * 1.5, 8, 6), leafMat);
      crown.position.set(Math.cos(ta) * tr, -3 + d.s * 0.45 + th + 0.5, Math.sin(ta) * tr);
      g.add(crown);
    }

    g.position.set(d.x, 0, d.z);
    g.userData = { radius: d.s * 1.2 };
    G.scene.add(g);
    G.islands.push(g);
  });
}

export const mkMegalodon = () => {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x445566, roughness: 0.4, metalness: 0.3 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.5 });

  const bodyGeo = new THREE.CylinderGeometry(1.8, 0.8, 18, 10);
  bodyGeo.rotateZ(Math.PI / 2);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  g.add(body);

  const bellyGeo = new THREE.CylinderGeometry(1.2, 0.6, 16, 8);
  bellyGeo.rotateZ(Math.PI / 2);
  const belly = new THREE.Mesh(bellyGeo, bellyMat);
  belly.position.y = -0.6;
  g.add(belly);

  const headGeo = new THREE.SphereGeometry(2, 10, 8);
  headGeo.scale(1.5, 0.8, 0.9);
  const head = new THREE.Mesh(headGeo, bodyMat);
  head.position.x = 9;
  g.add(head);

  const jawGeo = new THREE.SphereGeometry(1.5, 8, 6);
  jawGeo.scale(1.2, 0.4, 0.8);
  const jaw = new THREE.Mesh(jawGeo, bellyMat);
  jaw.position.set(9.5, -0.8, 0);
  g.add(jaw);

  const dorsalGeo = new THREE.ConeGeometry(1.5, 3, 4);
  const dorsal = new THREE.Mesh(dorsalGeo, bodyMat);
  dorsal.position.set(2, 2.5, 0);
  g.add(dorsal);

  const tailGeo = new THREE.ConeGeometry(2, 4, 4);
  tailGeo.rotateZ(Math.PI / 2);
  const tail = new THREE.Mesh(tailGeo, bodyMat);
  tail.position.x = -10;
  tail.rotation.z = 0.3;
  g.add(tail);

  const pectoralGeo = new THREE.ConeGeometry(1.2, 3, 4);
  pectoralGeo.rotateX(Math.PI / 2);
  [-1.5, 1.5].forEach(z => {
    const fin = new THREE.Mesh(pectoralGeo.clone(), bodyMat);
    fin.position.set(3, -0.5, z);
    fin.rotation.z = z < 0 ? -0.4 : 0.4;
    g.add(fin);
  });

  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.8 });
  [-1, 1].forEach(z => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 4), eyeMat);
    eye.position.set(9.5, 0.5, z * 1.2);
    g.add(eye);
  });

  g.scale.set(1.5, 1.5, 1.5);
  return g;
}

export const spawnMegalodon = (boatPos) => {
  if (G.megalodon) return;
  const meg = mkMegalodon();
  const angle = Math.random() * Math.PI * 2;
  const dist = 60 + Math.random() * 40;
  const startX = boatPos.x + Math.cos(angle) * dist;
  const startZ = boatPos.z + Math.sin(angle) * dist;
  meg.position.set(startX, -8 + Math.random() * 4, startZ);
  const targetAngle = angle + Math.PI + (Math.random() - 0.5) * 1.5;
  meg.rotation.y = targetAngle;
  meg.userData = {
    vx: Math.cos(targetAngle) * 25,
    vz: Math.sin(targetAngle) * 25,
    timer: 8 + Math.random() * 4,
    wobble: Math.random() * Math.PI * 2,
  };
  G.scene.add(meg);
  G.megalodon = meg;
}

export const updateMegalodon = (dt) => {
  if (!G.megalodon) return;
  const m = G.megalodon;
  m.userData.timer -= dt;
  if (m.userData.timer <= 0) {
    G.scene.remove(m);
    G.megalodon = null;
    return;
  }
  m.position.x += m.userData.vx * dt;
  m.position.z += m.userData.vz * dt;
  m.userData.wobble += dt * 2;
  m.position.y += Math.sin(m.userData.wobble) * 0.3;
  m.rotation.z = Math.sin(m.userData.wobble * 0.7) * 0.08;
}

export const setOceanMode = (enabled) => {
  if (G.racingMeshes) G.racingMeshes.forEach(m => { m.visible = !enabled; });
  if (G.cliffMeshes) G.cliffMeshes.forEach(m => { m.visible = !enabled; });
}

export const buildOceanFloor = () => {
  G.oceanFloor = new THREE.Group();
  G.hasMegalodonSkeleton = false;
  G.megalodonSkeletonPos = null;
  G.skeletonSeen = false;
  G.hasSub44 = false;
  G.sub44Seen = false;

  const floorGeo = new THREE.PlaneGeometry(2000, 2000, 30, 30);
  floorGeo.rotateX(-Math.PI / 2);
  const pos = floorGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, Math.sin(x * 0.008) * 3 + Math.cos(z * 0.01) * 2);
  }
  floorGeo.computeVertexNormals();
  const floor = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({ color: 0x2a3a4a, roughness: 0.95 }));
  floor.position.y = -50;
  G.oceanFloor.add(floor);

  const boneMat = new THREE.MeshStandardMaterial({ color: 0xccccaa, roughness: 0.7 });
  for (let i = 0; i < 80; i++) {
    const bone = mkBone(boneMat);
    bone.position.set((Math.random() - 0.5) * 900, -50 + Math.random() * 3, (Math.random() - 0.5) * 900);
    bone.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    bone.scale.setScalar(0.4 + Math.random() * 2);
    G.oceanFloor.add(bone);
  }

  for (let i = 0; i < 15; i++) {
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.8 + Math.random() * 0.5, 8, 6), boneMat.clone());
    skull.scale.set(1, 0.7, 0.9);
    skull.position.set((Math.random() - 0.5) * 800, -50 + Math.random() * 2, (Math.random() - 0.5) * 800);
    skull.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
    G.oceanFloor.add(skull);
    [-0.4, 0.4].forEach(ox => {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 4), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      socket.position.copy(skull.position);
      socket.position.x += ox * skull.scale.x;
      socket.position.y += 0.15;
      G.oceanFloor.add(socket);
    });
  }

  if (Math.random() < 0.15) {
    const skel = mkMegalodonSkeleton();
    skel.position.set((Math.random() - 0.5) * 500, -48, (Math.random() - 0.5) * 500);
    skel.rotation.y = Math.random() * Math.PI * 2;
    G.oceanFloor.add(skel);
    G.hasMegalodonSkeleton = true;
    G.megalodonSkeletonPos = skel.position.clone();
  }

  if (Math.random() < 0.25) {
    const whale = mkWhaleSkeleton();
    whale.position.set((Math.random() - 0.5) * 700, -48, (Math.random() - 0.5) * 700);
    whale.rotation.y = Math.random() * Math.PI * 2;
    G.oceanFloor.add(whale);
  }

  if (Math.random() < 0.3) {
    const fish = mkGiantFishSkeleton();
    fish.position.set((Math.random() - 0.5) * 600, -49, (Math.random() - 0.5) * 600);
    fish.rotation.y = Math.random() * Math.PI * 2;
    G.oceanFloor.add(fish);
  }

  if (Math.random() < 0.2) {
    const tentacle = mkKrakenTentacle();
    tentacle.position.set((Math.random() - 0.5) * 500, -50, (Math.random() - 0.5) * 500);
    tentacle.rotation.y = Math.random() * Math.PI * 2;
    G.oceanFloor.add(tentacle);
  }

  if (Math.random() < 0.15) {
    const wreck = mkShipwreck();
    wreck.position.set((Math.random() - 0.5) * 600, -48, (Math.random() - 0.5) * 600);
    wreck.rotation.y = Math.random() * Math.PI * 2;
    wreck.rotation.z = (Math.random() - 0.5) * 0.3;
    G.oceanFloor.add(wreck);
  }

  if (Math.random() < 0.01) {
    const sub = mkSubmarine44();
    sub.position.set((Math.random() - 0.5) * 400, -47, (Math.random() - 0.5) * 400);
    sub.rotation.y = Math.random() * Math.PI * 2;
    sub.rotation.z = 0.3;
    G.oceanFloor.add(sub);
    G.hasSub44 = true;
    G.sub44Pos = sub.position.clone();
  }

  G.scene.add(G.oceanFloor);
}

const mkBone = (mat) => {
  const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 1.8, 6), mat);
  g.add(shaft);
  const eg = new THREE.SphereGeometry(0.14, 6, 4);
  const e1 = new THREE.Mesh(eg, mat); e1.position.y = 0.9; g.add(e1);
  const e2 = new THREE.Mesh(eg.clone(), mat); e2.position.y = -0.9; g.add(e2);
  return g;
}

export const mkMegalodonSkeleton = () => {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xbbbbaa, roughness: 0.8 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x222222 });

  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.2, 30, 8), mat);
  spine.rotation.z = Math.PI / 2; g.add(spine);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 8), mat);
  skull.scale.set(1.8, 0.9, 1.0); skull.position.x = 16; g.add(skull);
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(2.5, 8, 6), mat);
  jaw.scale.set(1.4, 0.4, 0.9); jaw.position.set(16.5, -1.5, 0); g.add(jaw);
  [-1.3, 1.3].forEach(z => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.6, 6, 4), dark);
    s.position.set(17, 1, z); g.add(s);
  });

  for (let i = 0; i < 12; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.15, 6, 8, Math.PI), mat);
    rib.position.x = 10 - i * 2; rib.rotation.y = Math.PI / 2; g.add(rib);
  }

  for (let i = 0; i < 6; i++) {
    const v = new THREE.Mesh(new THREE.SphereGeometry(0.7 - i * 0.08, 6, 4), mat);
    v.position.x = -12 - i * 1.8; g.add(v);
  }

  const dorsal = new THREE.Mesh(new THREE.ConeGeometry(2, 5, 4), mat);
  dorsal.position.set(4, 4, 0); g.add(dorsal);
  const tu = new THREE.Mesh(new THREE.ConeGeometry(2.5, 6, 4), mat);
  tu.position.set(-17, 4, 0); tu.rotation.z = 0.3; g.add(tu);
  const td = new THREE.Mesh(new THREE.ConeGeometry(2, 5, 4), mat);
  td.position.set(-17, -3, 0); td.rotation.z = -0.3; g.add(td);
  [-2, 2].forEach(z => {
    const f = new THREE.Mesh(new THREE.ConeGeometry(1.5, 5, 4), mat);
    f.position.set(6, -1.5, z); f.rotation.x = z < 0 ? -0.5 : 0.5; g.add(f);
  });

  g.scale.set(2.5, 2.5, 2.5);
  return g;
}

export const mkGiantHand = () => {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x666655, roughness: 0.6, metalness: 0.2 });
  const fmat = new THREE.MeshStandardMaterial({ color: 0x777766, roughness: 0.6, metalness: 0.2 });

  const palm = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 8), mat);
  palm.scale.set(1.2, 0.4, 1.4); g.add(palm);

  for (let i = 0; i < 5; i++) {
    const a = (i / 4) * Math.PI * 0.5 - Math.PI * 0.25;
    const len = 2.5 + (i === 2 ? 1.2 : i === 0 || i === 4 ? -0.5 : 0);
    const f = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.22, len, 6), fmat);
    f.position.set(Math.cos(a) * 2.2, 0.5, Math.sin(a) * 2.2);
    f.rotation.x = Math.PI / 2; f.rotation.z = a; g.add(f);
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 4), fmat);
    k.position.set(Math.cos(a) * 2.2, 0.5, Math.sin(a) * 2.2); g.add(k);
  }

  const arm = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.4, 20, 8), mat);
  arm.position.y = -12; g.add(arm);
  g.scale.set(1.5, 1.5, 1.5);
  return g;
}

export const spawnGiantHand = (diverPos) => {
  if (G.giantHand) return;
  const hand = mkGiantHand();
  hand.position.set(diverPos.x + (Math.random() - 0.5) * 6, -55, diverPos.z + (Math.random() - 0.5) * 6);
  hand.userData = { phase: 'rising', timer: 0, targetY: diverPos.y };
  G.scene.add(hand);
  G.giantHand = hand;
}

export const updateGiantHand = (dt) => {
  if (!G.giantHand) return null;
  const h = G.giantHand;
  h.userData.timer += dt;
  switch (h.userData.phase) {
    case 'rising':
      h.position.y += 18 * dt;
      if (h.position.y >= h.userData.targetY - 1) {
        h.position.y = h.userData.targetY - 1;
        h.userData.phase = 'grabbing'; h.userData.timer = 0;
      }
      break;
    case 'grabbing':
      if (h.userData.timer > 1.2) { h.userData.phase = 'pulling'; h.userData.timer = 0; }
      break;
    case 'pulling':
      h.position.y += 30 * dt;
      if (h.position.y > 5) { G.scene.remove(h); G.giantHand = null; return 'pulled'; }
      break;
  }
  h.rotation.z = Math.sin(h.userData.timer * 3) * 0.12;
  h.rotation.x = Math.sin(h.userData.timer * 2.3) * 0.06;
  return null;
}

export const mkSubmarine44 = () => {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x445566, roughness: 0.4, metalness: 0.6 });
  const rustMat = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7, metalness: 0.3 });
  const numMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0.4 });

  const bodyGeo = new THREE.CylinderGeometry(3, 3, 20, 12);
  bodyGeo.rotateZ(Math.PI / 2);
  const body = new THREE.Mesh(bodyGeo, hullMat);
  g.add(body);

  const conningGeo = new THREE.CylinderGeometry(1.5, 1.5, 4, 8);
  const conning = new THREE.Mesh(conningGeo, hullMat);
  conning.position.set(0, 3.5, 0);
  g.add(conning);

  const tearGeo = new THREE.BoxGeometry(8, 6, 6);
  const tear = new THREE.Mesh(tearGeo, rustMat);
  tear.position.set(3, 0, 0);
  tear.rotation.set(0.2, 0.3, 0.1);
  g.add(tear);

  for (let i = 0; i < 8; i++) {
    const shard = new THREE.Mesh(new THREE.BoxGeometry(1 + Math.random() * 2, 0.3, 0.5 + Math.random()), rustMat);
    shard.position.set(3 + Math.random() * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);
    shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    g.add(shard);
  }

  const numGeo = new THREE.BoxGeometry(1.5, 2, 0.1);
  const num4a = new THREE.Mesh(numGeo, numMat);
  num4a.position.set(-2, 0, 3.1);
  g.add(num4a);
  const num4b = new THREE.Mesh(numGeo.clone(), numMat);
  num4b.position.set(-4.5, 0, 3.1);
  g.add(num4b);

  [-1, 1].forEach(z => {
    const rivetRow = new THREE.CylinderGeometry(0.08, 0.08, 15, 4);
    rivetRow.rotateZ(Math.PI / 2);
    const rivet = new THREE.Mesh(rivetRow, numMat);
    rivet.position.set(0, 2.8, z * 2.8);
    g.add(rivet);
  });

  const propGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.2, 6);
  propGeo.rotateZ(Math.PI / 2);
  const prop = new THREE.Mesh(propGeo, rustMat);
  prop.position.set(-11, 0, 0);
  g.add(prop);

  g.scale.set(1.5, 1.5, 1.5);
  return g;
}

export const mkSubmarine = () => {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x3a4a5a, roughness: 0.4, metalness: 0.7 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, metalness: 0.8 });

  const bodyGeo = new THREE.CylinderGeometry(2.5, 2.5, 18, 12);
  bodyGeo.rotateZ(Math.PI / 2);
  const body = new THREE.Mesh(bodyGeo, hullMat);
  g.add(body);

  const noseGeo = new THREE.ConeGeometry(2.5, 4, 12);
  noseGeo.rotateZ(-Math.PI / 2);
  const nose = new THREE.Mesh(noseGeo, hullMat);
  nose.position.x = 11;
  g.add(nose);

  const tailGeo = new THREE.ConeGeometry(1.5, 3, 8);
  tailGeo.rotateZ(Math.PI / 2);
  const tail = new THREE.Mesh(tailGeo, hullMat);
  tail.position.x = -10.5;
  g.add(tail);

  const towerGeo = new THREE.CylinderGeometry(1.2, 1.2, 3, 8);
  const tower = new THREE.Mesh(towerGeo, hullMat);
  tower.position.set(0, 3, 0);
  g.add(tower);

  const periGeo = new THREE.CylinderGeometry(0.08, 0.08, 2, 6);
  const peri = new THREE.Mesh(periGeo, darkMat);
  peri.position.set(0, 5, 0);
  g.add(peri);

  const windowMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.05, transparent: true, opacity: 0.5 });
  const windowGeo = new THREE.SphereGeometry(0.4, 8, 6);
  for (let i = 0; i < 4; i++) {
    const w = new THREE.Mesh(windowGeo, windowMat);
    w.position.set(5 - i * 2.5, 1.2, 2.2);
    g.add(w);
  }

  const propGeo2 = new THREE.CylinderGeometry(1.2, 1.2, 0.15, 6);
  propGeo2.rotateZ(Math.PI / 2);
  const prop2 = new THREE.Mesh(propGeo2, darkMat);
  prop2.position.x = -12;
  g.add(prop2);

  for (let i = 0; i < 4; i++) {
    const bladeGeo = new THREE.BoxGeometry(0.08, 0.8, 0.2);
    const blade = new THREE.Mesh(bladeGeo, darkMat);
    blade.position.x = -12;
    blade.rotation.x = (i / 4) * Math.PI * 2;
    g.add(blade);
  }

  const planeGeo = new THREE.BoxGeometry(0.08, 0.1, 2);
  [-1, 1].forEach(side => {
    const plane = new THREE.Mesh(planeGeo, hullMat);
    plane.position.set(5, 0, side * 2.5);
    g.add(plane);
  });

  g.scale.set(1.5, 1.5, 1.5);
  return g;
}

export const mkDetailedSubmarine = () => {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x3a4a5a, roughness: 0.35, metalness: 0.75 });
  const hullLight = new THREE.MeshStandardMaterial({ color: 0x4a5a6a, roughness: 0.3, metalness: 0.7 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4, metalness: 0.85 });
  const rivetMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.3, metalness: 0.9 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.02, metalness: 0.1, transparent: true, opacity: 0.6 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.5, metalness: 0.3 });

  // Main hull - tapered cylinder
  const hullGeo = new THREE.CylinderGeometry(2.2, 2.8, 22, 16);
  hullGeo.rotateZ(Math.PI / 2);
  const hull = new THREE.Mesh(hullGeo, hullMat);
  hull.castShadow = true;
  g.add(hull);

  // Hull belly plate
  const bellyGeo = new THREE.BoxGeometry(18, 0.15, 3.5);
  const belly = new THREE.Mesh(bellyGeo, hullLight);
  belly.position.y = -2.2;
  g.add(belly);

  // Nose - smooth pointed
  const noseGeo = new THREE.SphereGeometry(2.5, 16, 12);
  noseGeo.scale(1.8, 0.8, 0.8);
  const nose = new THREE.Mesh(noseGeo, hullMat);
  nose.position.x = 12;
  nose.castShadow = true;
  g.add(nose);

  // Nose tip
  const tipGeo = new THREE.ConeGeometry(0.8, 2, 8);
  tipGeo.rotateZ(-Math.PI / 2);
  const tip = new THREE.Mesh(tipGeo, darkMat);
  tip.position.x = 14.5;
  g.add(tip);

  // Tail section - tapered
  const tailGeo = new THREE.CylinderGeometry(1.8, 2.2, 4, 12);
  tailGeo.rotateZ(Math.PI / 2);
  const tail = new THREE.Mesh(tailGeo, hullMat);
  tail.position.x = -12;
  g.add(tail);

  // Tail cone
  const tailConeGeo = new THREE.ConeGeometry(1.8, 3, 12);
  tailConeGeo.rotateZ(Math.PI / 2);
  const tailCone = new THREE.Mesh(tailConeGeo, hullMat);
  tailCone.position.x = -15;
  g.add(tailCone);

  // Conning tower - detailed
  const towerBaseGeo = new THREE.CylinderGeometry(1.8, 2.0, 2.5, 12);
  const towerBase = new THREE.Mesh(towerBaseGeo, hullMat);
  towerBase.position.set(2, 3.2, 0);
  towerBase.castShadow = true;
  g.add(towerBase);

  // Tower top - tapered
  const towerTopGeo = new THREE.CylinderGeometry(1.2, 1.8, 1.5, 12);
  const towerTop = new THREE.Mesh(towerTopGeo, hullMat);
  towerTop.position.set(2, 5.2, 0);
  g.add(towerTop);

  // Tower flat top
  const towerCapGeo = new THREE.CylinderGeometry(1.3, 1.3, 0.15, 12);
  const towerCap = new THREE.Mesh(towerCapGeo, darkMat);
  towerCap.position.set(2, 6, 0);
  g.add(towerCap);

  // Hatch on tower
  const hatchGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.12, 8);
  const hatch = new THREE.Mesh(hatchGeo, darkMat);
  hatch.position.set(2, 6.1, 0);
  g.add(hatch);

  // Periscope
  const periGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.5, 6);
  const peri = new THREE.Mesh(periGeo, darkMat);
  peri.position.set(2.3, 7.5, 0);
  g.add(peri);

  // Periscope head
  const periHeadGeo = new THREE.BoxGeometry(0.2, 0.15, 0.3);
  const periHead = new THREE.Mesh(periHeadGeo, darkMat);
  periHead.position.set(2.3, 8.7, 0);
  g.add(periHead);

  // Antenna mast
  const antGeo = new THREE.CylinderGeometry(0.03, 0.03, 3, 4);
  const ant = new THREE.Mesh(antGeo, darkMat);
  ant.position.set(1.5, 8, 0);
  g.add(ant);

  // Antenna top
  const antTopGeo = new THREE.SphereGeometry(0.08, 6, 4);
  const antTop = new THREE.Mesh(antTopGeo, redMat);
  antTop.position.set(1.5, 9.5, 0);
  g.add(antTop);

  // Portholes - detailed with rims
  const portholeRimGeo = new THREE.TorusGeometry(0.35, 0.06, 6, 12);
  const portholeGeo = new THREE.SphereGeometry(0.3, 10, 8);
  for (let i = 0; i < 6; i++) {
    const px = 7 - i * 2.8;
    const rim = new THREE.Mesh(portholeRimGeo, rivetMat);
    rim.position.set(px, 1.5, 2.5);
    g.add(rim);
    const glass = new THREE.Mesh(portholeGeo, glassMat);
    glass.position.set(px, 1.5, 2.4);
    g.add(glass);
  }

  // Tower portholes
  for (let i = 0; i < 3; i++) {
    const rim = new THREE.Mesh(portholeRimGeo.clone(), rivetMat);
    rim.position.set(2, 4 + i * 0.6, 1.6);
    rim.rotation.x = Math.PI / 2;
    g.add(rim);
    const glass = new THREE.Mesh(portholeGeo.clone(), glassMat);
    glass.position.set(2, 4 + i * 0.6, 1.5);
    g.add(glass);
  }

  // Rivet lines along hull
  for (let row = 0; row < 3; row++) {
    const rz = -1.5 + row * 1.5;
    for (let i = 0; i < 20; i++) {
      const rx = -8 + i * 1;
      const rivetGeo = new THREE.SphereGeometry(0.05, 4, 4);
      const rivet = new THREE.Mesh(rivetGeo, rivetMat);
      rivet.position.set(rx, 2.5, rz);
      g.add(rivet);
    }
  }

  // Dive planes (sail planes on tower)
  const sailPlaneGeo = new THREE.BoxGeometry(0.08, 0.6, 2.5);
  [-1, 1].forEach(side => {
    const plane = new THREE.Mesh(sailPlaneGeo, hullMat);
    plane.position.set(2, 3, side * 2.2);
    g.add(plane);
  });

  // Rear dive planes
  const rearPlaneGeo = new THREE.BoxGeometry(0.08, 0.08, 3);
  [-1, 1].forEach(side => {
    const plane = new THREE.Mesh(rearPlaneGeo, hullMat);
    plane.position.set(-8, 0, side * 3);
    g.add(plane);
  });

  // Vertical rudder
  const rudderGeo = new THREE.BoxGeometry(2.5, 2, 0.08);
  const rudder = new THREE.Mesh(rudderGeo, hullMat);
  rudder.position.set(-14.5, 0, 0);
  g.add(rudder);

  // Propeller - detailed
  const hubGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 8);
  hubGeo.rotateZ(Math.PI / 2);
  const hub = new THREE.Mesh(hubGeo, darkMat);
  hub.position.x = -16.5;
  g.add(hub);

  // Propeller blades - curved
  for (let i = 0; i < 5; i++) {
    const bladeGeo = new THREE.BoxGeometry(0.06, 1.2, 0.35);
    const blade = new THREE.Mesh(bladeGeo, darkMat);
    blade.position.x = -16.5;
    blade.rotation.x = (i / 5) * Math.PI * 2;
    blade.rotation.y = 0.3;
    g.add(blade);
  }

  // Propeller guard ring
  const guardGeo = new THREE.TorusGeometry(1.4, 0.08, 6, 16);
  guardGeo.rotateY(Math.PI / 2);
  const guard = new THREE.Mesh(guardGeo, darkMat);
  guard.position.x = -16.5;
  g.add(guard);

  // Torpedo tubes (front)
  const tubeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.5, 6);
  tubeGeo.rotateZ(Math.PI / 2);
  [-0.6, 0.6].forEach(z => {
    const tube = new THREE.Mesh(tubeGeo, darkMat);
    tube.position.set(14.8, -0.3, z);
    g.add(tube);
  });

  // Ballast tanks (side bulges)
  const ballastGeo = new THREE.CylinderGeometry(0.6, 0.6, 12, 8);
  ballastGeo.rotateZ(Math.PI / 2);
  [-1, 1].forEach(side => {
    const ballast = new THREE.Mesh(ballastGeo, hullLight);
    ballast.position.set(0, -1.5, side * 2.8);
    g.add(ballast);
  });

  // Deck railing posts
  const railPostGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 4);
  for (let i = 0; i < 8; i++) {
    const rx = 8 - i * 2;
    [-1.2, 1.2].forEach(z => {
      const post = new THREE.Mesh(railPostGeo, darkMat);
      post.position.set(rx, 2.8, z);
      g.add(post);
    });
  }

  // Deck railing bars
  const railBarGeo = new THREE.CylinderGeometry(0.03, 0.03, 16, 6);
  railBarGeo.rotateZ(Math.PI / 2);
  [-1.2, 1.2].forEach(z => {
    const bar = new THREE.Mesh(railBarGeo, darkMat);
    bar.position.set(0, 3.1, z);
    g.add(bar);
  });

  // Keel
  const keelGeo = new THREE.BoxGeometry(20, 0.3, 0.15);
  const keel = new THREE.Mesh(keelGeo, darkMat);
  keel.position.y = -2.8;
  g.add(keel);

  // Water intake grates
  const grateGeo = new THREE.BoxGeometry(0.8, 0.08, 0.4);
  [-1, 1].forEach(side => {
    const grate = new THREE.Mesh(grateGeo, darkMat);
    grate.position.set(-3, -2.3, side * 1.5);
    g.add(grate);
  });

  // Exhaust port
  const exhaustGeo = new THREE.CylinderGeometry(0.15, 0.2, 0.4, 6);
  exhaustGeo.rotateZ(Math.PI / 2);
  const exhaust = new THREE.Mesh(exhaustGeo, darkMat);
  exhaust.position.set(-10, 1.8, 0);
  g.add(exhaust);

  g.scale.set(1.5, 1.5, 1.5);
  return g;
}

export const mkMonsterEel = () => {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a2a1a, roughness: 0.6, metalness: 0.2 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0x2a1a0a, roughness: 0.7 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 3.0 });
  const toothMat = new THREE.MeshStandardMaterial({ color: 0xeeeecc, roughness: 0.3 });
  const spikeMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4, metalness: 0.6 });
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x440000, roughness: 0.5 });

  const segments = 35;
  for (let i = 0; i < segments; i++) {
    const t = i / segments;
    const radius = 3.5 - Math.abs(t - 0.5) * 3.5;
    const r = Math.max(1.0, radius);
    const segGeo = new THREE.SphereGeometry(r, 10, 8);
    const seg = new THREE.Mesh(segGeo, i < segments / 2 ? bodyMat : bellyMat);
    seg.position.x = -i * 3.0;
    seg.position.y = Math.sin(i * 0.35) * 1.2;
    seg.scale.set(1, 0.65, 1);
    g.add(seg);

    if (i % 3 === 0 && i > 2 && i < segments - 3) {
      const spikeGeo = new THREE.ConeGeometry(0.3, 2.5, 4);
      const spike = new THREE.Mesh(spikeGeo, spikeMat);
      spike.position.set(-i * 3.0, r * 0.65 + 1.2, 0);
      spike.rotation.z = Math.PI;
      g.add(spike);
    }
  }

  const jawGroup = new THREE.Group();
  jawGroup.position.set(5, 0, 0);

  const jawUpGeo = new THREE.SphereGeometry(4.5, 14, 10);
  jawUpGeo.scale(2.0, 0.45, 1.1);
  const jawUp = new THREE.Mesh(jawUpGeo, bodyMat);
  jawUp.position.set(3, 1.5, 0);
  jawGroup.add(jawUp);

  const mouthRoof = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
    mouthMat
  );
  mouthRoof.scale.set(1.8, 0.3, 1.0);
  mouthRoof.position.set(4, 0.8, 0);
  mouthRoof.rotation.x = Math.PI;
  jawGroup.add(mouthRoof);

  const jawDownGroup = new THREE.Group();
  jawDownGroup.position.set(3, -0.5, 0);

  const jawDownGeo = new THREE.SphereGeometry(4, 12, 10);
  jawDownGeo.scale(1.8, 0.35, 1.0);
  const jawDown = new THREE.Mesh(jawDownGeo, bellyMat);
  jawDown.position.set(2, -1, 0);
  jawDownGroup.add(jawDown);

  const mouthFloor = new THREE.Mesh(
    new THREE.SphereGeometry(3.2, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
    mouthMat
  );
  mouthFloor.scale.set(1.6, 0.25, 0.9);
  mouthFloor.position.set(3, 0, 0);
  jawDownGroup.add(mouthFloor);

  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 12; i++) {
      const toothGeo = new THREE.ConeGeometry(0.15, 1.2, 4);
      const tooth = new THREE.Mesh(toothGeo, toothMat);
      tooth.position.set(1 + i * 0.45, 0.6 - row * 0.3, -1.2 + (i % 2) * 2.4);
      tooth.rotation.z = Math.PI;
      jawGroup.add(tooth);
    }
  }
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 10; i++) {
      const toothGeo = new THREE.ConeGeometry(0.12, 0.9, 4);
      const tooth = new THREE.Mesh(toothGeo, toothMat);
      tooth.position.set(1.5 + i * 0.45, 0.3 + row * 0.2, -1.0 + (i % 2) * 2.0);
      jawDownGroup.add(tooth);
    }
  }

  jawGroup.add(jawDownGroup);
  g.add(jawGroup);

  const headGeo = new THREE.SphereGeometry(5, 14, 10);
  headGeo.scale(1.6, 0.7, 1.0);
  const head = new THREE.Mesh(headGeo, bodyMat);
  head.position.x = 3;
  g.add(head);

  [-1, 1].forEach(z => {
    const eyeGeo = new THREE.SphereGeometry(1.2, 12, 10);
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(7, 2.5, z * 3.5);
    g.add(eye);
    const pupilGeo = new THREE.SphereGeometry(0.5, 8, 6);
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const pupil = new THREE.Mesh(pupilGeo, pupilMat);
    pupil.position.set(8, 2.5, z * 3.5);
    g.add(pupil);
    const irisGeo = new THREE.TorusGeometry(0.7, 0.12, 6, 12);
    const irisMat = new THREE.MeshStandardMaterial({ color: 0xff4400, emissive: 0xff2200, emissiveIntensity: 1.5 });
    const iris = new THREE.Mesh(irisGeo, irisMat);
    iris.position.set(7.6, 2.5, z * 3.5);
    iris.rotation.y = Math.PI / 2;
    g.add(iris);
  });

  const dorsalGeo = new THREE.ConeGeometry(3.5, 8, 6);
  const dorsal = new THREE.Mesh(dorsalGeo, bodyMat);
  dorsal.position.set(-12, 5.5, 0);
  g.add(dorsal);

  const dorsal2Geo = new THREE.ConeGeometry(2, 5, 5);
  const dorsal2 = new THREE.Mesh(dorsal2Geo, bodyMat);
  dorsal2.position.set(-20, 4, 0);
  g.add(dorsal2);

  [-1, 1].forEach(z => {
    const finGeo = new THREE.ConeGeometry(2.5, 6, 4);
    const fin = new THREE.Mesh(finGeo, bodyMat);
    fin.position.set(-8, -1, z * 3.5);
    fin.rotation.x = z * 0.6;
    g.add(fin);
  });

  const tailGeo = new THREE.ConeGeometry(3, 6, 4);
  tailGeo.rotateZ(Math.PI / 2);
  const tail = new THREE.Mesh(tailGeo, bodyMat);
  tail.position.x = -segments * 3.0;
  g.add(tail);

  g.scale.set(3, 3, 3);
  g.userData.jawGroup = jawGroup;
  g.userData.jawDownGroup = jawDownGroup;
  g.userData.jawOpenAmount = 0;
  return g;
}
