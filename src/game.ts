import * as THREE from 'three';
import { BOATS, G, kp } from './shared';
import { buildTrack } from './track';
import { mkBoat, mkBoatState, mkFishingBoat, mkDiver, updateBoat, updatePontoonBoat, syncMesh, syncBoat } from './boats';
import { HydroAudio } from './audio';
import { buildWater, buildSky, buildClouds, buildTerrain, buildLights, buildSun, updateWater, updateBoosts, updateClouds, buildIslands, mkMegalodon, spawnMegalodon, updateMegalodon, setOceanMode, buildOceanFloor, spawnGiantHand, updateGiantHand, mkSubmarine44, mkMegalodonSkeleton, mkSubmarine, mkDetailedSubmarine, mkMonsterEel } from './environment';
import { updateCamera } from './camera';
import { updateAI } from './ai';
import { drawHUD } from './hud';
import { buildBoatThumbnails } from './thumbnails';
import { initFishing, startFishing, updateFishing, buyRod, buyUpgrade, unlockAchievement, RODS, UPGRADES, FISH, getCompletion, rarityColor } from './fishing';
import { createPostProcessing } from './postprocessing';
import { createDebugTools } from './debug';
import { createPhysicsWorld } from './physics';

const hide = () => {
  const e = document.getElementById('loading-screen');
  if (e) { e.style.opacity = '0'; setTimeout(() => e.style.display = 'none', 600); }
}

const init = () => {
  G.hudEl = document.getElementById('hud-canvas');
  G.hudCtx = G.hudEl.getContext('2d');

  G.scene = new THREE.Scene();
  G.scene.background = new THREE.Color(0x87CEEB);
  G.scene.fog = new THREE.Fog(0x9dd5ee, 200, 2000);

  G.cam = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, 0.5, 4000);

  G.ren = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  G.ren.setSize(innerWidth, innerHeight);
  G.ren.setPixelRatio(Math.min(devicePixelRatio, 2));
  G.ren.shadowMap.enabled = true;
  G.ren.shadowMap.type = THREE.PCFSoftShadowMap;
  G.ren.toneMapping = THREE.ACESFilmicToneMapping;
  G.ren.toneMappingExposure = 1.3;
  G.ren.outputColorSpace = THREE.SRGBColorSpace;
  G.ren.setClearColor(0x87CEEB, 1);
  document.body.prepend(G.ren.domElement);

  G.pp = createPostProcessing(G.ren, G.scene, G.cam);
  G.debug = createDebugTools();
  G.physics = createPhysicsWorld();

  G.audio = new HydroAudio();
  G.audio.init();
  initFishing();
  hide();

  document.addEventListener('keydown', e => { G.keys[e.key] = true; if (e.key === 'Enter' || e.key === ' ') e.preventDefault(); });
  document.addEventListener('keyup', e => { G.keys[e.key] = false; });
  document.addEventListener('wheel', e => {
    G.camZoomDist = Math.max(3, Math.min(40, G.camZoomDist + e.deltaY * 0.01));
  }, { passive: true });
  addEventListener('resize', () => {
    G.cam.aspect = innerWidth / innerHeight;
    G.cam.updateProjectionMatrix();
    G.ren.setSize(innerWidth, innerHeight);
    if (G.pp) G.pp.resize(innerWidth, innerHeight);
  });

  buildTrack();
  buildWater();
  buildSky();
  buildClouds();
  buildTerrain();
  buildLights();
  buildSun();
  buildBoatThumbnails();

  G.displayBoats = [];
  G.displayStartIdx = [0, 873, 855, 837, 820];
  const dCfgs = [
    { color: 0xff4400, accent: 0xff8800, nz: 2, fs: 0.7, h: 'standard' },
    { color: 0x2288ff, accent: 0x66ccff, nz: 3, fs: 1.0, h: 'stealth' },
    { color: 0x22ff66, accent: 0x66ffaa, nz: 3, fs: 0.8, h: 'ufo' },
    { color: 0x00cccc, accent: 0x66ffff, nz: 2, fs: 1.2, h: 'delta' },
    { color: 0x0044ff, accent: 0x4488ff, nz: 1, fs: 0.4, h: 'catamaran' },
  ];
  const latOff = [0, -3, 3, -6, 6];
  dCfgs.forEach((cfg, i) => {
    const m = mkBoat(cfg.color, cfg.accent, cfg.nz, cfg.fs, cfg.h);
    const pt = G.trackPts[G.displayStartIdx[i]];
    m.position.copy(pt.pos);
    m.position.add(pt.right.clone().multiplyScalar(latOff[i]));
    m.position.y = pt.pos.y + 0.3;
    m.rotation.y = Math.atan2(-pt.tan.z, pt.tan.x);
    m.visible = false;
    G.scene.add(m);
    G.displayBoats.push(m);
  });

  G.state = 'MENU';
  G.lastTime = performance.now();
  requestAnimationFrame(loop);
}

const startRace = (cfg) => {
  G.pBoat = mkBoatState(cfg, 0, 0, 0, true);
  G.aiList = [];
  const aiPool = BOATS.filter((_, i) => i !== G.boatIdx);
  for (let i = 0; i < 3; i++) {
    const c = aiPool[i % aiPool.length];
    const a = mkBoatState(c, 0.97 - i * 0.02, (i - 1) * 2, 15 + i * 3, false);
    G.aiList.push(a);
  }

  G.boostObjs.forEach(p => { p.userData.collected = false; p.visible = true; });
  G.raceTime = 0;
  G.camShake = 0;
  G.countVal = 4;
  G.countTimer = 0.001;
  G.countDone = false;
  G.state = 'COUNTDOWN';
  G.audio.stopMusic();
}

const spawnUnderwaterLoot = () => {
  G.underwaterLoot = [];
  const lootTypes = [
    { name: 'Gold Nugget', value: 75, color: '#ffcc00' },
    { name: 'Old Coin', value: 40, color: '#cc8844' },
    { name: 'Scrap Metal', value: 15, color: '#888888' },
    { name: 'Coral', value: 10, color: '#ff6644' },
    { name: 'Pearl', value: 100, color: '#eeeeff' },
    { name: 'Anchor', value: 50, color: '#555555' },
    { name: 'Seaweed', value: 5, color: '#44aa44' },
    { name: 'Old Boot', value: 3, color: '#664422' },
  ];
  for (let i = 0; i < 25; i++) {
    const type = lootTypes[Math.floor(Math.random() * lootTypes.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 3 + Math.random() * 22;
    const geo = type.name === 'Pearl' ? new THREE.SphereGeometry(0.2, 8, 6)
      : type.name === 'Anchor' ? new THREE.CylinderGeometry(0.15, 0.25, 0.8, 6)
      : new THREE.DodecahedronGeometry(0.25 + Math.random() * 0.2);
    const mat = new THREE.MeshStandardMaterial({ color: type.color, emissive: type.color, emissiveIntensity: 0.4, roughness: 0.4, metalness: 0.3 });
    const mesh = new THREE.Mesh(geo, mat);
    const bx = G.pBoat.pos.x, bz = G.pBoat.pos.z, by = G.pBoat.pos.y;
    mesh.position.set(bx + Math.cos(angle) * dist, by - 2 - Math.random() * 12, bz + Math.sin(angle) * dist);
    G.scene.add(mesh);
    G.underwaterLoot.push({ mesh, lootType: type, size: 1 + Math.random() * 4, value: type.value, collected: false });
  }
}

const loop = (ts) => {
  const dt = Math.min((ts - G.lastTime) / 1000, 0.05);
  G.lastTime = ts;
  update(dt);
  if (G.pp) {
    G.pp.render(dt);
  } else {
    G.ren.render(G.scene, G.cam);
  }
  drawHUD();
  if (G.debug) G.debug.update();
  for (const k in G.keys) G.prev[k] = G.keys[k];
  requestAnimationFrame(loop);
}

const update = (dt) => {
  const time = performance.now() * 0.001;
  if (G.displayBoats) G.displayBoats.forEach(b => { b.visible = false; });

  if (kp('F3')) {
    if (G.debug) G.debug.toggle();
  }

  const isUnderwater = (G.state === 'FREE_ROAM' && G.diving) || G.state === 'IRON_LUNG';
  if (G.pp) {
    G.pp.setUnderwater(isUnderwater ? (G.state === 'IRON_LUNG' ? 0.8 : 0.4) : 0,
      G.state === 'IRON_LUNG' ? new THREE.Color(0x330000) : new THREE.Color(0x003355));
    G.pp.setBloomStrength(G.state === 'IRON_LUNG' ? 0.5 : 0.3);
  }

  if (G.physics) G.physics.update(dt);

  switch (G.state) {
    case 'MENU':
      if (kp('Enter') || kp(' ')) { G.state = 'SELECT'; G.audio.sfx('select'); }
      if (kp('f') || kp('F')) {
        G.state = 'FREE_ROAM';
        G.pov = 'first';
        const boatMesh = mkFishingBoat();
        G.scene.add(boatMesh);
        G.pBoat = { mesh: boatMesh, pos: new THREE.Vector3(0, 0, 0), heading: 0, speed: 0, maxSpd: 40, baseMaxSpd: 40, accel: 0.8, turnSpeed: 0.04, throttle: 0, steer: 0 };
        G.walkingMode = false; G.walkPos = { x: 0, z: 0 };
        G.diving = false; G.oxygen = 100; G.maxOxygen = 100; G.oxygenDepleteRate = 3.33;
        G.diverPos = { x: 0, y: -2, z: 0 }; G.diverSpeed = 5; G.tetherMaxDist = 25;
        G.diverMesh = null; G.underwaterLoot = []; G.megalodon = null; G.megalodonMsg = '';
        G.giantHand = null; G.hasMegalodonSkeleton = false; G.megalodonSkeletonPos = null; G.skeletonSeen = false;
        G.hasSub44 = false; G.sub44Seen = false; G.sub44Pos = null;
        G.aiList = [];
        setOceanMode(true);
        if (G.testingMode) {
          G.scene.background = new THREE.Color(0x1a2a3a);
          G.scene.fog = new THREE.Fog(0x1a2a3a, 200, 600);
          if (!G.testGround) {
            G.testGround = new THREE.Mesh(
              new THREE.PlaneGeometry(500, 500, 10, 10),
              new THREE.MeshStandardMaterial({ color: 0x555566, roughness: 0.9 })
            );
            G.testGround.rotation.x = -Math.PI / 2;
            G.testGround.position.y = -0.5;
            G.testGround.receiveShadow = true;
            G.scene.add(G.testGround);
          }
          G.testGround.visible = true;
          if (G.waterMesh) G.waterMesh.visible = false;
        } else {
          buildIslands();
          if (G.physics && G.islands) {
            G.islands.forEach((island, i) => {
              G.physics.addIsland(String(i), island.position.x, island.position.z, island.userData.radius);
            });
          }
          buildOceanFloor();
          if (G.testGround) G.testGround.visible = false;
          if (G.waterMesh) G.waterMesh.visible = true;
        }
        G.audio.sfx('go');
      }
      if (kp('t') || kp('T')) { G.testingMode = !G.testingMode; G.audio.sfx('select'); }
      if (kp('a') || kp('A')) { G.state = 'ACHIEVEMENTS'; G.audio.sfx('select'); }
      if (kp('u') || kp('U')) { G.state = 'UPDATES'; G.audio.sfx('select'); }
      if (kp('i') || kp('I')) {
        G.state = 'IRON_LUNG';
        G.sub = mkDetailedSubmarine();
        G.sub.position.set(400, -5, 400);
        G.subHeading = 0;
        G.scene.add(G.sub);
        G.scene.background = new THREE.Color(0x330000);
        G.scene.fog = new THREE.Fog(0x330000, 5, 80);
        if (G.waterMaterial) G.waterMaterial.uniforms.uColor.value.setHex(0x880000);
        setOceanMode(true);
        buildOceanFloor();
        G.skeletonTarget = mkMegalodonSkeleton();
        G.skeletonTarget.position.set(400 + (Math.random() - 0.5) * 200, -48, 400 + (Math.random() - 0.5) * 200);
        G.scene.add(G.skeletonTarget);
        G.monsterEel = null; G.eelSpawnTimer = 15 + Math.random() * 20; G.eelFlashed = false;
        G.xrayActive = false; G.ironLungState = 'playing'; G.jumpscareTimer = 0;
        G.audio.sfx('go');
      }
      if (G.displayBoats) {
        G.displayBoats.forEach((b, i) => {
          b.visible = true;
          const pt = G.trackPts[G.displayStartIdx[i]];
          b.position.y = pt.pos.y + 0.3 + Math.sin(time * 1.5 + i * 1.2) * 0.2;
        });
      }
      const sp = G.trackPts[0];
      G.cam.position.copy(sp.pos.clone().add(sp.right.clone().multiplyScalar(40)).add(new THREE.Vector3(0, 18, 0)));
      G.cam.lookAt(sp.pos);
      break;
    case 'FREE_ROAM':
      if (!G.pBoat) break;
      if (kp('Escape')) {
        if (G.megAttack) {
          if (G.megAttack.meg) G.scene.remove(G.megAttack.meg);
          G.megAttack = null;
          G.pBoat.pos.set(400, 0, 400); G.pBoat.heading = 0; G.pBoat.speed = 0;
          G.pBoat.mesh.visible = true;
          syncBoat(G.pBoat);
          G.fishing.message = 'You escaped the Megalodon!'; G.fishing.messageTimer = 3;
          break;
        }
        G.state = 'MENU'; G.pov = 'third';
        if (G.diverMesh) { G.scene.remove(G.diverMesh); G.diverMesh = null; }
        if (G.underwaterLoot) { G.underwaterLoot.forEach(l => G.scene.remove(l.mesh)); G.underwaterLoot = []; }
        if (G.megalodon) { G.scene.remove(G.megalodon); G.megalodon = null; }
        if (G.giantHand) { G.scene.remove(G.giantHand); G.giantHand = null; }
        if (G.islands) { G.islands.forEach(il => G.scene.remove(il)); G.islands = []; }
        if (G.physics) G.physics.dispose();
        if (G.oceanFloor) { G.scene.remove(G.oceanFloor); G.oceanFloor = null; }
        if (G.testGround) G.testGround.visible = false;
        if (G.waterMesh) G.waterMesh.visible = true;
        setOceanMode(false);
        G.scene.remove(G.pBoat.mesh); G.pBoat = null;
        break;
      }
      if (kp('v') || kp('V')) { G.pov = G.pov === 'first' ? 'third' : 'first'; G.audio.sfx('select'); }
      if (kp('e') || kp('E')) {
        if (G.diving) { G.diving = false; if (G.diverMesh) { G.scene.remove(G.diverMesh); G.diverMesh = null; } G.walkingMode = true; G.walkPos = { x: 0, z: 0 }; }
        else if (G.walkingMode) { G.walkingMode = false; }
        else { G.walkingMode = true; G.walkPos = { x: 0, z: 0 }; }
        G.audio.sfx('select');
      }
      if (kp('g') || kp('G')) {
        if (G.diving) { G.diving = false; if (G.diverMesh) { G.scene.remove(G.diverMesh); G.diverMesh = null; } if (G.underwaterLoot) { G.underwaterLoot.forEach(l => G.scene.remove(l.mesh)); G.underwaterLoot = []; } }
        else if (!G.diving) {
          G.diving = true; G.oxygen = G.maxOxygen;
          G.diverPos = { x: 0, y: -2, z: 0 };
          G.diverMesh = mkDiver(); G.scene.add(G.diverMesh);
          G.walkingMode = false;
          if (!G.underwaterLoot || G.underwaterLoot.length === 0) spawnUnderwaterLoot();
        }
        G.audio.sfx('splash');
      }
      if (kp('b') || kp('B')) { G.state = 'SHOP'; G.audio.sfx('select'); break; }
      if (kp('d') || kp('D')) { G.state = 'DEX'; G.audio.sfx('select'); break; }
      if ((kp('f') || kp('F')) && G.fishing.state === 'idle' && !G.diving && Math.abs(G.pBoat.speed) < 3) { startFishing(); G.audio.sfx('splash'); }

      if (G.testingMode) {
        if (kp('n') || kp('N')) { spawnMegalodon(G.pBoat.pos); G.fishing.message = 'MEGALODON SPAWNED'; G.fishing.messageTimer = 2; }
        if (kp('k') || kp('K')) {
          const sub = mkSubmarine44();
          const h = G.pBoat.heading;
          sub.position.set(G.pBoat.pos.x + Math.cos(h) * 20, -47, G.pBoat.pos.z - Math.sin(h) * 20);
          sub.rotation.y = h;
          G.scene.add(sub);
          G.fishing.message = 'SUBMARINE 44 SPAWNED'; G.fishing.messageTimer = 2;
        }
        if (kp('c') || kp('C')) {
          G.freeCam = !G.freeCam;
          if (G.freeCam) { G.freeCamEuler = new THREE.Euler(0, 0, 0, 'YXZ'); G.freeCamEuler.y = G.pBoat.heading; }
          G.fishing.message = G.freeCam ? 'FREE CAM ON - WASD+Arrows' : 'FREE CAM OFF'; G.fishing.messageTimer = 2;
        }
        if (kp('o') || kp('O')) {
          const skel = mkMegalodonSkeleton();
          const h = G.pBoat.heading;
          skel.position.set(G.pBoat.pos.x + Math.cos(h) * 15, -48, G.pBoat.pos.z - Math.sin(h) * 15);
          skel.rotation.y = h + Math.PI;
          G.scene.add(skel);
          G.fishing.message = 'MEGALODON SKELETON SPAWNED'; G.fishing.messageTimer = 2;
        }
        if (kp('p') || kp('P')) {
          spawnGiantHand(G.diving ? G.diverPos : { x: 0, y: -2, z: 0 });
          G.fishing.message = 'GIANT HAND SPAWNED'; G.fishing.messageTimer = 2;
        }
        if (kp('u') || kp('U')) {
          const sub = mkDetailedSubmarine();
          const h = G.pBoat.heading;
          sub.position.set(G.pBoat.pos.x + Math.cos(h) * 15, -5, G.pBoat.pos.z - Math.sin(h) * 15);
          sub.rotation.y = h;
          G.scene.add(sub);
          G.fishing.message = 'DETAILED SUBMARINE SPAWNED'; G.fishing.messageTimer = 2;
        }
        if (kp('j') || kp('J')) {
          const eel = mkMonsterEel();
          const h = G.pBoat.heading;
          eel.position.set(G.pBoat.pos.x + Math.cos(h) * 30, -8, G.pBoat.pos.z - Math.sin(h) * 30);
          eel.rotation.y = h + Math.PI;
          G.scene.add(eel);
          G.fishing.message = 'MONSTER EEL SPAWNED'; G.fishing.messageTimer = 2;
        }
      }

      if (G.freeCam) {
        const ms = (G.keys['Shift'] || G.keys['shift'] ? 40 : 20) * dt;
        const ls = 1.5 * dt;
        if (!G.freeCamEuler) G.freeCamEuler = new THREE.Euler(0, 0, 0, 'YXZ');
        if (G.keys['ArrowLeft']) G.freeCamEuler.y += ls;
        if (G.keys['ArrowRight']) G.freeCamEuler.y -= ls;
        if (G.keys['ArrowUp']) G.freeCamEuler.x = Math.max(-Math.PI / 2, G.freeCamEuler.x - ls);
        if (G.keys['ArrowDown']) G.freeCamEuler.x = Math.min(Math.PI / 2, G.freeCamEuler.x + ls);
        const fwd = new THREE.Vector3(0, 0, -1).applyEuler(G.freeCamEuler);
        const rgt = new THREE.Vector3(1, 0, 0).applyEuler(G.freeCamEuler);
        if (G.keys['w']) G.cam.position.add(fwd.clone().multiplyScalar(ms));
        if (G.keys['s']) G.cam.position.add(fwd.clone().multiplyScalar(-ms));
        if (G.keys['a']) G.cam.position.add(rgt.clone().multiplyScalar(-ms));
        if (G.keys['d']) G.cam.position.add(rgt.clone().multiplyScalar(ms));
        if (G.keys[' ']) G.cam.position.y += ms;
        G.cam.rotation.copy(G.freeCamEuler);
        break;
      }

      if (G.diving) {
        G.oxygen -= G.oxygenDepleteRate * dt;
        if (G.oxygen <= 0) { G.oxygen = 0; G.diving = false; if (G.diverMesh) { G.scene.remove(G.diverMesh); G.diverMesh = null; } if (G.underwaterLoot) { G.underwaterLoot.forEach(l => G.scene.remove(l.mesh)); G.underwaterLoot = []; } }
        const h = G.pBoat.heading, cos = Math.cos(h), sin = Math.sin(h), ms = G.diverSpeed * dt;
        if (G.keys['w'] || G.keys['ArrowUp']) { G.diverPos.x += cos * ms; G.diverPos.z -= sin * ms; }
        if (G.keys['s'] || G.keys['ArrowDown']) { G.diverPos.x -= cos * ms; G.diverPos.z += sin * ms; }
        if (G.keys['a'] || G.keys['ArrowLeft']) { G.diverPos.x -= sin * ms; G.diverPos.z -= cos * ms; }
        if (G.keys['d'] || G.keys['ArrowRight']) { G.diverPos.x += sin * ms; G.diverPos.z += cos * ms; }
        if (G.keys[' ']) G.diverPos.y += ms;
        if (G.keys['Shift'] || G.keys['shift']) G.diverPos.y -= ms;
        const dDist = Math.sqrt(G.diverPos.x * G.diverPos.x + G.diverPos.z * G.diverPos.z);
        if (dDist > G.tetherMaxDist) { const s = G.tetherMaxDist / dDist; G.diverPos.x *= s; G.diverPos.z *= s; }
        G.diverPos.y = Math.max(-50, Math.min(-0.5, G.diverPos.y));
        if (G.diverMesh) {
          G.diverMesh.position.set(G.pBoat.pos.x + G.diverPos.x, G.pBoat.pos.y + G.diverPos.y, G.pBoat.pos.z + G.diverPos.z);
          G.diverMesh.rotation.y = h;
          G.diverMesh.rotation.x = G.keys[' '] ? -0.5 : G.keys['Shift'] || G.keys['shift'] ? 0.5 : 0;
        }
        if (G.underwaterLoot) {
          for (let i = G.underwaterLoot.length - 1; i >= 0; i--) {
            const loot = G.underwaterLoot[i]; if (loot.collected) continue;
            const lx = G.pBoat.pos.x + G.diverPos.x, ly = G.pBoat.pos.y + G.diverPos.y, lz = G.pBoat.pos.z + G.diverPos.z;
            const dx = lx - loot.mesh.position.x, dy = ly - loot.mesh.position.y, dz = lz - loot.mesh.position.z;
            if (dx*dx + dy*dy + dz*dz < 2.25) {
              loot.collected = true; loot.mesh.visible = false;
              G.fishing.tank.push({ fish: loot.lootType, size: loot.size, value: loot.value });
              G.fishing.message = loot.lootType.name + '! → tank'; G.fishing.messageTimer = 2;
              G.audio.sfx('pickup');
            }
          }
        }
        if (Math.random() < 0.001 * dt && !G.megalodon) {
          spawnMegalodon(G.pBoat.pos);
          G.megalodonMsg = 'MEGALODON DETECTED';
          G.fishing.message = 'MEGALODON DETECTED'; G.fishing.messageTimer = 4;
        }
        if (Math.random() < 0.002 * dt && !G.giantHand) {
          spawnGiantHand(G.diverPos);
          G.fishing.message = 'Something is grabbing you!'; G.fishing.messageTimer = 3;
        }
        const handResult = updateGiantHand(dt);
        if (handResult === 'pulled') {
          G.diving = false;
          if (G.diverMesh) { G.scene.remove(G.diverMesh); G.diverMesh = null; }
          if (G.underwaterLoot) { G.underwaterLoot.forEach(l => G.scene.remove(l.mesh)); G.underwaterLoot = []; }
          if (G.megalodon) { G.scene.remove(G.megalodon); G.megalodon = null; }
          G.walkingMode = true; G.walkPos = { x: 0, z: 0 };
          G.fishing.message = 'A giant hand pulled you back to the boat!'; G.fishing.messageTimer = 3;
        }
        if (G.hasMegalodonSkeleton && G.megalodonSkeletonPos && !G.skeletonSeen) {
          const dx = (G.pBoat.pos.x + G.diverPos.x) - G.megalodonSkeletonPos.x;
          const dz = (G.pBoat.pos.z + G.diverPos.z) - G.megalodonSkeletonPos.z;
          if (dx * dx + dz * dz < 900) { G.skeletonSeen = true; G.fishing.message = 'A massive Megalodon skeleton... incredible!'; G.fishing.messageTimer = 4; }
        }
        if (G.hasSub44 && G.sub44Pos && !G.sub44Seen) {
          const dx = (G.pBoat.pos.x + G.diverPos.x) - G.sub44Pos.x;
          const dz = (G.pBoat.pos.z + G.diverPos.z) - G.sub44Pos.z;
          if (dx * dx + dz * dz < 625) { G.sub44Seen = true; G.fishing.message = 'A torn-open submarine... the number 44 is barely visible.'; G.fishing.messageTimer = 5; }
        }
        updateMegalodon(dt);
      } else if (G.walkingMode) {
        const h = G.pBoat.heading, cos = Math.cos(h), sin = Math.sin(h), ms = 3 * dt;
        if (G.keys['w'] || G.keys['ArrowUp']) { G.walkPos.x += cos * ms; G.walkPos.z -= sin * ms; }
        if (G.keys['s'] || G.keys['ArrowDown']) { G.walkPos.x -= cos * ms; G.walkPos.z += sin * ms; }
        if (G.keys['a'] || G.keys['ArrowLeft']) { G.walkPos.x -= sin * ms; G.walkPos.z -= cos * ms; }
        if (G.keys['d'] || G.keys['ArrowRight']) { G.walkPos.x += sin * ms; G.walkPos.z += cos * ms; }
        G.walkPos.x = Math.max(-2.3, Math.min(2.3, G.walkPos.x));
        G.walkPos.z = Math.max(-1.3, Math.min(1.3, G.walkPos.z));
        syncBoat(G.pBoat);
      } else {
        G.pBoat.maxSpd = G.pBoat.baseMaxSpd * (1 + (G.fishing.upgrades ? G.fishing.upgrades.speedBonus : 0));
        G.pBoat.throttle = 0;
        if (G.keys['ArrowUp'] || G.keys['w']) G.pBoat.throttle = 1;
        if (G.keys['ArrowDown'] || G.keys['s']) G.pBoat.throttle = -1;
        G.pBoat.steer = 0;
        if (G.keys['ArrowLeft'] || G.keys['a']) G.pBoat.steer -= 1;
        if (G.keys['ArrowRight'] || G.keys['d']) G.pBoat.steer += 1;
        updatePontoonBoat(G.pBoat, dt);
        if (G.physics && G.islands) {
          const col = G.physics.checkIslandCollision(G.pBoat.pos.x, G.pBoat.pos.z, 2.5);
          if (col) {
            G.pBoat.pos.x += col.nx * col.depth;
            G.pBoat.pos.z += col.nz * col.depth;
            G.pBoat.speed *= 0.85;
          }
        } else if (G.islands) {
          G.islands.forEach(island => {
            const dx = G.pBoat.pos.x - island.position.x;
            const dz = G.pBoat.pos.z - island.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            const minDist = island.userData.radius;
            if (dist < minDist && dist > 0) {
              G.pBoat.pos.x += (dx / dist) * (minDist - dist);
              G.pBoat.pos.z += (dz / dist) * (minDist - dist);
              G.pBoat.speed *= 0.85;
            }
          });
        }
        syncBoat(G.pBoat);
      }
      if ((kp('m') || kp('M')) && !G.megAttack && G.diving) {
        G.megAttack = { phase: 'spotted', timer: 0, meg: null, redAlpha: 0 };
        G.fishing.message = 'A MEGALODON HAS SPOTTED YOU! SWIM!'; G.fishing.messageTimer = 3;
      }
      if (G.megAttack) {
        const ma = G.megAttack;
        ma.timer += dt;
        const dw = new THREE.Vector3(G.pBoat.pos.x + G.diverPos.x, G.pBoat.pos.y + G.diverPos.y, G.pBoat.pos.z + G.diverPos.z);
        const isMoving = !!(G.keys['w'] || G.keys['ArrowUp'] || G.keys['s'] || G.keys['ArrowDown'] || G.keys['a'] || G.keys['ArrowLeft'] || G.keys['d'] || G.keys['ArrowRight'] || G.keys[' '] || G.keys['Shift']);

        if (ma.phase === 'spotted') {
          if (!ma.meg) {
            ma.meg = mkMegalodon();
            const a = Math.random() * Math.PI * 2;
            ma.meg.position.set(G.pBoat.pos.x + Math.cos(a) * 60, -15, G.pBoat.pos.z + Math.sin(a) * 60);
            G.scene.add(ma.meg);
          }
          ma.redAlpha = Math.max(0, ma.redAlpha - dt * 0.5);
          if (ma.timer > 3) { ma.phase = 'stalking'; ma.timer = 0; }
        } else if (ma.phase === 'stalking') {
          const dist = ma.meg.position.distanceTo(dw);
          const dir = dw.clone().sub(ma.meg.position).normalize();
          ma.meg.position.add(dir.multiplyScalar(2 * dt));
          ma.meg.lookAt(dw);
          ma.redAlpha = Math.max(0, 1 - dist / 60);
          if (dist < 10 || (!isMoving && ma.timer > 5)) { ma.phase = 'charging'; ma.timer = 0; }
        } else if (ma.phase === 'charging') {
          const dir = dw.clone().sub(ma.meg.position).normalize();
          ma.meg.position.add(dir.multiplyScalar(45 * dt));
          ma.meg.lookAt(dw);
          ma.redAlpha = 1.0;
          if (ma.meg.position.distanceTo(dw) < 3) { ma.phase = 'catch'; ma.timer = 0; }
        } else if (ma.phase === 'catch') {
          G.pBoat.pos.y -= dt * 4; ma.meg.position.copy(G.pBoat.pos); ma.meg.position.y -= 3;
          G.camShake = Math.max(G.camShake, 2.0); syncBoat(G.pBoat);
          if (ma.timer > 5) { ma.phase = 'destroying'; ma.timer = 0; }
        } else if (ma.phase === 'destroying') {
          G.pBoat.mesh.visible = false;
          ma.meg.position.x += dt * 30 * Math.cos(ma.meg.rotation.y);
          ma.meg.position.z -= dt * 30 * Math.sin(ma.meg.rotation.y);
          G.camShake = Math.max(G.camShake, 2.5);
          if (ma.timer > 4) { ma.phase = 'respawning'; ma.timer = 0; }
        } else if (ma.phase === 'respawning') {
          G.scene.remove(ma.meg); G.megAttack = null;
          G.pBoat.pos.set(400, 0, 400); G.pBoat.heading = 0; G.pBoat.speed = 0;
          G.pBoat.mesh.visible = true; syncBoat(G.pBoat);
          G.fishing.message = 'You barely survived a Megalodon attack!'; G.fishing.messageTimer = 4;
        }
        if (ma.phase === 'stalking' && kp(' ')) {
          const pushDir = ma.meg.position.clone().sub(dw).normalize();
          ma.meg.position.add(pushDir.multiplyScalar(8));
        }
        if (G.megAttack && ma.phase !== 'respawning') {
          G.cam.position.lerp(dw.clone().add(new THREE.Vector3(0, 8, 15)), dt * 3);
          G.cam.lookAt(dw);
        }
      }
      updateFishing(dt);
      updateWater(); updateBoosts(time); updateClouds(time);
      updateCamera(G.pBoat, dt);
      break;
    case 'SHOP':
      if (kp('b') || kp('B') || kp('Escape')) { G.state = 'FREE_ROAM'; G.audio.sfx('select'); break; }
      if (kp('Tab')) { G.fishing.shopTab = (G.fishing.shopTab + 1) % 2; G.fishing.shopCursor = 0; G.audio.sfx('select'); break; }
      if (G.fishing.shopTab === 0) {
        if (kp('ArrowUp')) { G.fishing.shopCursor = (G.fishing.shopCursor - 1 + RODS.length) % RODS.length; G.audio.sfx('select'); }
        if (kp('ArrowDown')) { G.fishing.shopCursor = (G.fishing.shopCursor + 1) % RODS.length; G.audio.sfx('select'); }
        if (kp('Enter') || kp(' ')) {
          if (buyRod(G.fishing.shopCursor)) G.audio.sfx('pickup');
          else if (G.fishing.ownedRods.includes(G.fishing.shopCursor)) { G.fishing.message = 'Already owned!'; G.fishing.messageTimer = 2; }
          else { const msgs = ["Insufficient currency, captain!", "Your wallet weeps, sailor!", "Not enough doubloons!", "The ocean laughs at your poverty!", "Even the crabs have more money!"]; G.fishing.message = msgs[Math.floor(Math.random() * msgs.length)]; G.fishing.messageTimer = 2; G.audio.sfx('crash'); }
        }
      } else {
        if (kp('ArrowUp')) { G.fishing.shopCursor = (G.fishing.shopCursor - 1 + UPGRADES.length) % UPGRADES.length; G.audio.sfx('select'); }
        if (kp('ArrowDown')) { G.fishing.shopCursor = (G.fishing.shopCursor + 1) % UPGRADES.length; G.audio.sfx('select'); }
        if (kp('Enter') || kp(' ')) {
          if (buyUpgrade(G.fishing.shopCursor)) G.audio.sfx('pickup');
          else if (G.fishing.ownedUpgrades.includes(G.fishing.shopCursor)) { G.fishing.message = 'Already installed!'; G.fishing.messageTimer = 2; }
          else { const msgs = ["Insufficient currency, captain!", "Your wallet weeps, sailor!", "Not enough doubloons!", "The ocean laughs at your poverty!", "Even the crabs have more money!"]; G.fishing.message = msgs[Math.floor(Math.random() * msgs.length)]; G.fishing.messageTimer = 2; G.audio.sfx('crash'); }
        }
      }
      break;
    case 'DEX':
      if (kp('d') || kp('D') || kp('Escape')) { G.state = 'FREE_ROAM'; G.audio.sfx('select'); break; }
      if (kp('ArrowUp')) { G.fishing.dexCursor = (G.fishing.dexCursor - 1 + FISH.length) % FISH.length; }
      if (kp('ArrowDown')) { G.fishing.dexCursor = (G.fishing.dexCursor + 1) % FISH.length; }
      break;
    case 'IRON_LUNG':
      if (!G.sub) break;
      if (kp('Escape')) {
        G.state = 'MENU';
        G.scene.remove(G.sub); G.sub = null;
        if (G.monsterEel) { G.scene.remove(G.monsterEel); G.monsterEel = null; }
        if (G.skeletonTarget) { G.scene.remove(G.skeletonTarget); G.skeletonTarget = null; }
        G.scene.background = new THREE.Color(0x87CEEB);
        G.scene.fog = new THREE.Fog(0x9dd5ee, 200, 2000);
        if (G.waterMaterial) G.waterMaterial.uniforms.uColor.value.setHex(0x0e7799);
        setOceanMode(false);
        if (G.oceanFloor) { G.scene.remove(G.oceanFloor); G.oceanFloor = null; }
        G.jumpscareTimer = 0;
        G.camShake = 0;
        break;
      }
      {
        const ss = 15 * dt, st = 1.0 * dt;
        if (G.keys['w'] || G.keys['ArrowUp']) { G.sub.position.x += Math.cos(G.subHeading) * ss; G.sub.position.z -= Math.sin(G.subHeading) * ss; }
        if (G.keys['s'] || G.keys['ArrowDown']) { G.sub.position.x -= Math.cos(G.subHeading) * ss; G.sub.position.z += Math.sin(G.subHeading) * ss; }
        if (G.keys['a'] || G.keys['ArrowLeft']) G.subHeading += st;
        if (G.keys['d'] || G.keys['ArrowRight']) G.subHeading -= st;
        if (G.keys[' ']) G.sub.position.y += ss;
        if (G.keys['Shift'] || G.keys['shift']) G.sub.position.y -= ss;
        G.sub.position.y = Math.max(-50, Math.min(-2, G.sub.position.y));
        G.sub.rotation.y = G.subHeading;

        if (kp('x') || kp('X')) {
          G.xrayActive = !G.xrayActive;
          if (G.pp) G.pp.setXRay(G.xrayActive);
          if (G.xrayActive) {
            G.scene.background = new THREE.Color(0x000811);
            G.scene.fog = new THREE.Fog(0x000811, 20, 200);
            if (G.waterMaterial) G.waterMaterial.uniforms.uColor.value.setHex(0x001a22);
          } else {
            G.scene.background = new THREE.Color(0x330000);
            G.scene.fog = new THREE.Fog(0x330000, 5, 80);
            if (G.waterMaterial) G.waterMaterial.uniforms.uColor.value.setHex(0x880000);
          }
        }

        if (G.skeletonTarget && G.ironLungState === 'playing') {
          const sd = G.sub.position.distanceTo(G.skeletonTarget.position);
          if (sd < 15) {
            G.ironLungState = 'found';
            G.fishing.message = 'THE SKELETON... IT\'S MOVING!'; G.fishing.messageTimer = 5;
          }
        }

        if (!G.monsterEel && G.eelSpawnTimer > 0) G.eelSpawnTimer -= dt;
        if (!G.monsterEel && G.eelSpawnTimer <= 0) {
          G.monsterEel = mkMonsterEel();
          const ea = Math.random() * Math.PI * 2;
          G.monsterEel.position.set(G.sub.position.x + Math.cos(ea) * 80, G.sub.position.y, G.sub.position.z + Math.sin(ea) * 80);
          G.scene.add(G.monsterEel);
          G.eelFlashed = false;
          G.eelPhase = 'approach';
          G.eelPhaseTimer = 0;
          G.fishing.message = 'SOMETHING IS COMING...'; G.fishing.messageTimer = 3;
        }

        if (G.monsterEel) {
          const eel = G.monsterEel;
          const ed = G.sub.position.distanceTo(eel.position);
          const dir = G.sub.position.clone().sub(eel.position).normalize();
          G.eelPhaseTimer += dt;

          if (G.eelPhase === 'approach') {
            const speed = ed < 30 ? 18 : 12;
            eel.position.add(dir.multiplyScalar(speed * dt));
            eel.lookAt(G.sub.position);
            eel.position.y += Math.sin(performance.now() * 0.003) * 0.3;

            if (eel.userData.jawDownGroup) {
              const openTarget = ed < 20 ? 0.5 : 0.15;
              eel.userData.jawOpenAmount += (openTarget - eel.userData.jawOpenAmount) * dt * 3;
              eel.userData.jawDownGroup.rotation.x = eel.userData.jawOpenAmount;
            }

            if (ed < 12 && !G.jumpscareTimer && !G.eelFlashed) {
              G.jumpscareTimer = 1.5;
              G.camShake = 3.0;
              G.audio.sfx('crash');
            }

            if (G.jumpscareTimer > 0) {
              G.jumpscareTimer -= dt;
              G.camShake = Math.max(G.camShake, 2.5);
              if (G.jumpscareTimer <= 0) G.jumpscareTimer = 0;
            }

            if (ed < 25 && !G.eelFlashed && G.jumpscareTimer <= 0) {
              const anyKey = Object.keys(G.keys).some(k => G.keys[k] && k !== 'Escape' && k !== 'x' && k !== 'X');
              if (anyKey) {
                G.eelFlashed = true;
                G.scene.remove(eel); G.monsterEel = null;
                G.fishing.message = 'YOU FLASHED THE BEAST!'; G.fishing.messageTimer = 3;
                G.eelSpawnTimer = 20 + Math.random() * 30;
                unlockAchievement('eel_flash');
              }
            }

            if (ed < 6 && !G.eelFlashed) {
              G.eelPhase = 'lunge';
              G.eelPhaseTimer = 0;
              G.camShake = 4.0;
              G.audio.sfx('crash');
            }
          } else if (G.eelPhase === 'lunge') {
            const lungeDir = G.sub.position.clone().sub(eel.position).normalize();
            eel.position.add(lungeDir.multiplyScalar(35 * dt));
            eel.lookAt(G.sub.position);

            if (eel.userData.jawDownGroup) {
              eel.userData.jawOpenAmount += (1.2 - eel.userData.jawOpenAmount) * dt * 8;
              eel.userData.jawDownGroup.rotation.x = eel.userData.jawOpenAmount;
            }

            G.camShake = Math.max(G.camShake, 4.0);
            G.jumpscareTimer = 0.5;

            if (G.eelPhaseTimer > 0.4) {
              G.eelPhase = 'bite';
              G.eelPhaseTimer = 0;
            }
          } else if (G.eelPhase === 'bite') {
            eel.position.lerp(G.sub.position, dt * 10);
            eel.lookAt(G.sub.position);

            if (eel.userData.jawDownGroup) {
              eel.userData.jawOpenAmount += (0.0 - eel.userData.jawOpenAmount) * dt * 12;
              eel.userData.jawDownGroup.rotation.x = eel.userData.jawOpenAmount;
            }

            if (G.sub && !G._explosionSpawned) {
              G._explosionSpawned = true;
              G._explosionPos = G.sub.position.clone();
              G._debris = [];
              const debrisColors = [0x888888, 0x666666, 0x445566, 0x3a4a5a, 0x222222, 0xff4400, 0xff8800];
              for (let i = 0; i < 40; i++) {
                const geo = Math.random() < 0.5
                  ? new THREE.BoxGeometry(0.3 + Math.random() * 0.8, 0.2 + Math.random() * 0.5, 0.2 + Math.random() * 0.6)
                  : new THREE.SphereGeometry(0.2 + Math.random() * 0.4, 6, 4);
                const mat = new THREE.MeshStandardMaterial({
                  color: debrisColors[Math.floor(Math.random() * debrisColors.length)],
                  emissive: i < 8 ? 0xff4400 : 0x000000,
                  emissiveIntensity: i < 8 ? 1.5 : 0,
                  roughness: 0.6
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.copy(G.sub.position);
                mesh.position.add(new THREE.Vector3(
                  (Math.random() - 0.5) * 4,
                  (Math.random() - 0.5) * 3,
                  (Math.random() - 0.5) * 4
                ));
                mesh.userData.vx = (Math.random() - 0.5) * 20;
                mesh.userData.vy = Math.random() * 15 - 3;
                mesh.userData.vz = (Math.random() - 0.5) * 20;
                mesh.userData.life = 3 + Math.random() * 3;
                G.scene.add(mesh);
                G._debris.push(mesh);
              }
              for (let i = 0; i < 6; i++) {
                const sparkGeo = new THREE.SphereGeometry(0.1 + Math.random() * 0.15, 4, 4);
                const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffff44 });
                const spark = new THREE.Mesh(sparkGeo, sparkMat);
                spark.position.copy(G.sub.position);
                spark.userData.vx = (Math.random() - 0.5) * 30;
                spark.userData.vy = Math.random() * 20;
                spark.userData.vz = (Math.random() - 0.5) * 30;
                spark.userData.life = 0.5 + Math.random() * 1;
                G.scene.add(spark);
                G._debris.push(spark);
              }
            }
            if (G.sub) G.sub.visible = false;
            G.camShake = 5.0;
            G.jumpscareTimer = 1.0;

            if (G.eelPhaseTimer > 0.5) {
              G.eelPhase = 'thrash';
              G.eelPhaseTimer = 0;
            }
          } else if (G.eelPhase === 'thrash') {
            eel.rotation.z = Math.sin(G.eelPhaseTimer * 25) * 0.4;
            eel.rotation.x = Math.sin(G.eelPhaseTimer * 18) * 0.3;
            eel.position.y += Math.sin(G.eelPhaseTimer * 12) * dt * 8;
            G.camShake = 6.0;
            G.jumpscareTimer = 2.0;

            if (G._debris) {
              for (let i = G._debris.length - 1; i >= 0; i--) {
                const d = G._debris[i];
                d.userData.life -= dt;
                if (d.userData.life <= 0) {
                  G.scene.remove(d);
                  G._debris.splice(i, 1);
                  continue;
                }
                d.position.x += d.userData.vx * dt;
                d.position.y += d.userData.vy * dt;
                d.position.z += d.userData.vz * dt;
                d.userData.vy -= 10 * dt;
                d.rotation.x += dt * 3;
                d.rotation.z += dt * 2;
                const fade = Math.min(1, d.userData.life);
                if (d.material.opacity !== undefined) {
                  d.material.transparent = true;
                  d.material.opacity = fade;
                }
              }
            }

            if (G.eelPhaseTimer > 2.0) {
              G.eelPhase = 'kill';
              G.eelPhaseTimer = 0;
            }
          } else if (G.eelPhase === 'kill') {
            G.ironLungState = 'eaten';
            G.scene.remove(eel); G.monsterEel = null;
            G.jumpscareTimer = 0;
          }
        }

        if (G.ironLungState === 'eaten') {
          if (kp('Enter') || kp(' ')) {
            G.state = 'MENU';
            G.scene.remove(G.sub); G.sub = null;
            if (G.monsterEel) { G.scene.remove(G.monsterEel); G.monsterEel = null; }
            if (G.skeletonTarget) { G.scene.remove(G.skeletonTarget); G.skeletonTarget = null; }
            if (G._debris) { G._debris.forEach(d => G.scene.remove(d)); G._debris = null; }
            G._explosionSpawned = false;
            G.scene.background = new THREE.Color(0x87CEEB);
            G.scene.fog = new THREE.Fog(0x9dd5ee, 200, 2000);
            if (G.waterMaterial) G.waterMaterial.uniforms.uColor.value.setHex(0x0e7799);
            setOceanMode(false);
            if (G.oceanFloor) { G.scene.remove(G.oceanFloor); G.oceanFloor = null; }
            G.ironLungState = 'playing';
            G.camShake = 0;
          }
        }

        if (G.monsterEel && (G.eelPhase === 'lunge' || G.eelPhase === 'bite' || G.eelPhase === 'thrash' || G.eelPhase === 'kill')) {
          const lookTarget = G._explosionPos || G.sub.position;
          const camDir = G.monsterEel.position.clone().sub(lookTarget).normalize();
          const camT = lookTarget.clone().add(camDir.multiplyScalar(20)).add(new THREE.Vector3(0, 8, 0));
          G.cam.position.lerp(camT, dt * 5);
          G.cam.lookAt(lookTarget);
        } else if (G.ironLungState === 'eaten' && G._explosionPos) {
          const camT = G._explosionPos.clone().add(new THREE.Vector3(0, 5, G.camZoomDist));
          G.cam.position.lerp(camT, dt * 2);
          G.cam.lookAt(G._explosionPos);
        } else if (G.ironLungState === 'found' && G._skeletonRewardPos) {
          const camT = G._skeletonRewardPos.clone().add(new THREE.Vector3(0, 4, G.camZoomDist));
          G.cam.position.lerp(camT, dt * 2);
          G.cam.lookAt(G._skeletonRewardPos);
        } else {
          const camT = G.sub.position.clone().add(new THREE.Vector3(0, 5, G.camZoomDist));
          G.cam.position.lerp(camT, dt * 3);
          G.cam.lookAt(G.sub.position);
        }
      }
      break;
    case 'ACHIEVEMENTS':
      if (kp('a') || kp('A') || kp('Escape') || kp('Enter')) { G.state = 'MENU'; G.audio.sfx('select'); }
      break;
    case 'UPDATES':
      if (kp('u') || kp('U') || kp('Escape') || kp('Enter')) { G.state = 'MENU'; G.audio.sfx('select'); }
      break;
    case 'SELECT':
      if (kp('ArrowLeft')) { const r = Math.floor(G.boatIdx / 5), c = G.boatIdx % 5; G.boatIdx = r * 5 + (c - 1 + 5) % 5; G.audio.sfx('select'); }
      if (kp('ArrowRight')) { const r = Math.floor(G.boatIdx / 5), c = G.boatIdx % 5; G.boatIdx = r * 5 + (c + 1) % 5; G.audio.sfx('select'); }
      if (kp('ArrowUp')) { const r = Math.floor(G.boatIdx / 5), c = G.boatIdx % 5; G.boatIdx = ((r - 1 + 3) % 3) * 5 + c; G.audio.sfx('select'); }
      if (kp('ArrowDown')) { const r = Math.floor(G.boatIdx / 5), c = G.boatIdx % 5; G.boatIdx = ((r + 1) % 3) * 5 + c; G.audio.sfx('select'); }
      if (kp('Enter') || kp(' ')) { startRace(BOATS[G.boatIdx]); G.audio.sfx('count'); }
      break;
    case 'COUNTDOWN':
      G.countTimer -= dt;
      if (G.countTimer <= 0) {
        G.countVal--;
        if (G.countVal >= 1) { G.audio.sfx('count'); G.countTimer = 1.0; }
        else if (G.countVal === 0) { G.audio.sfx('go'); G.countTimer = 0.8; }
        else { G.countDone = true; G.state = 'RACING'; G.audio.startMusic(); }
      }
      if (G.pBoat) { syncMesh(G.pBoat); G.aiList.forEach(a => syncMesh(a)); updateCamera(G.pBoat, dt); }
      break;
    case 'RACING':
      if (!G.pBoat) break;
      G.pBoat.throttle = 0;
      if (G.keys['ArrowUp'] || G.keys['w']) G.pBoat.throttle = 1;
      if (G.keys['ArrowDown'] || G.keys['s']) G.pBoat.throttle = -1;
      G.pBoat.steer = 0;
      if (G.keys['ArrowLeft'] || G.keys['a']) G.pBoat.steer -= 1;
      if (G.keys['ArrowRight'] || G.keys['d']) G.pBoat.steer += 1;
      const wasActive = G.pBoat.turboActive;
      G.pBoat.turboActive = !!(G.keys[' ']) && G.pBoat.turboCharges > 0 && G.pBoat.speed > 5;
      if (!wasActive && G.pBoat.turboActive) G.audio.sfx('boost');
      if (wasActive && !G.pBoat.turboActive) G.audio.sfx('boost_end');
      const evt = updateBoat(G.pBoat, dt);
      if (evt === 'crash') G.audio.sfx('crash');
      if (evt === 'lap') G.audio.sfx('lap');
      if (evt === 'finish') { G.audio.sfx('finish'); G.audio.stopMusic(); setTimeout(() => { G.state = 'RESULTS'; }, 2500); }
      if (evt === 'pickup') G.audio.sfx('pickup');

      G.aiList.forEach(a => updateAI(a, dt));

      G.audio.updateEngine(G.pBoat.speed, G.pBoat.maxSpd, G.pBoat.turboActive);
      updateWater();
      updateBoosts(time);
      updateClouds(time);

      syncMesh(G.pBoat);
      G.aiList.forEach(a => syncMesh(a));
      updateCamera(G.pBoat, dt);
      G.raceTime += dt;
      break;
    case 'RESULTS':
      if (kp('Enter') || kp(' ')) {
        G.state = 'MENU';
        if (G.pBoat) { G.scene.remove(G.pBoat.mesh); G.pBoat = null; }
        G.aiList.forEach(a => G.scene.remove(a.mesh));
        G.aiList = [];
        G.audio.stopMusic();
      }
      break;
  }
}

window.addEventListener('load', init);
