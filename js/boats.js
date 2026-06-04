import * as THREE from 'three';
import { TW, TSEG } from './shared.js';
import { G } from './shared.js';

export function mkBoat(color, accent, nozzles, finScale, hullType) {
  nozzles = nozzles || 3;
  finScale = finScale || 1.0;
  hullType = hullType || 'standard';
  const nz = { 1: [0], 2: [-0.3, 0.3], 3: [-0.4, 0, 0.4], 4: [-0.5, -0.17, 0.17, 0.5] };
  const zPos = nz[nozzles] || nz[3];

  const group = new THREE.Group();
  group.rotation.order = 'YXZ';

  const inner = new THREE.Group();
  inner.position.x = -2.6;

  const hullMat = new THREE.MeshStandardMaterial({ color, roughness: 0.25, metalness: 0.7 });
  const accentMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.3, metalness: 0.6 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, metalness: 0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.5 });

  switch (hullType) {
    case 'torpedo': {
      const tg = new THREE.CylinderGeometry(0.55, 0.25, 5.5, 10);
      tg.rotateZ(Math.PI / 2);
      const tm = new THREE.Mesh(tg, hullMat);
      tm.castShadow = true;
      inner.add(tm);
      const dorsalGeo = new THREE.BoxGeometry(3, 0.15, 0.08);
      const dorsal = new THREE.Mesh(dorsalGeo, accentMat);
      dorsal.position.set(0, 0.5, 0);
      inner.add(dorsal);
      break;
    }
    case 'delta': {
      const ds = new THREE.Shape();
      ds.moveTo(-2, 0);
      ds.quadraticCurveTo(0, -0.4, 2.8, -2);
      ds.lineTo(2.8, 2);
      ds.quadraticCurveTo(0, 0.4, -2, 0);
      const dg = new THREE.ExtrudeGeometry(ds, { depth: 0.35, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 3 });
      dg.translate(0, 0, -0.175);
      const dm = new THREE.Mesh(dg, hullMat);
      dm.castShadow = true;
      inner.add(dm);
      break;
    }
    case 'ufo': {
      const ug = new THREE.SphereGeometry(2, 20, 10);
      ug.scale(1, 0.28, 1);
      const um = new THREE.Mesh(ug, hullMat);
      um.castShadow = true;
      inner.add(um);
      const ringGeo = new THREE.TorusGeometry(2, 0.08, 8, 24);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, accentMat);
      ring.position.y = 0.05;
      inner.add(ring);
      const domeGeo = new THREE.SphereGeometry(0.7, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
      const dome = new THREE.Mesh(domeGeo, glassMat);
      dome.position.y = 0.15;
      inner.add(dome);
      break;
    }
    case 'catamaran': {
      [-0.9, 0.9].forEach(z => {
        const ps = new THREE.Shape();
        ps.moveTo(-1.8, -0.25);
        ps.lineTo(1.2, -0.35);
        ps.quadraticCurveTo(2, -0.15, 2.2, 0);
        ps.quadraticCurveTo(2, 0.15, 1.2, 0.35);
        ps.lineTo(-1.8, 0.25);
        ps.lineTo(-1.8, -0.25);
        const pg = new THREE.ExtrudeGeometry(ps, { depth: 0.35, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03 });
        pg.translate(0, 0, -0.175);
        const pm = new THREE.Mesh(pg, hullMat);
        pm.position.z = z;
        pm.castShadow = true;
        inner.add(pm);
      });
      const platGeo = new THREE.BoxGeometry(3.5, 0.08, 2.4);
      const plat = new THREE.Mesh(platGeo, darkMat);
      inner.add(plat);
      break;
    }
    case 'stealth': {
      const ss = new THREE.Shape();
      ss.moveTo(-2.2, -0.4);
      ss.lineTo(1.5, -0.75);
      ss.lineTo(2.8, 0);
      ss.lineTo(1.5, 0.75);
      ss.lineTo(-2.2, 0.4);
      ss.lineTo(-2.2, -0.4);
      const sg = new THREE.ExtrudeGeometry(ss, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2 });
      sg.translate(0, 0, -0.11);
      const sm = new THREE.Mesh(sg, hullMat);
      sm.castShadow = true;
      inner.add(sm);
      const panelGeo = new THREE.BoxGeometry(2, 0.06, 1.2);
      const panel = new THREE.Mesh(panelGeo, accentMat);
      panel.position.set(0, 0.22, 0);
      inner.add(panel);
      break;
    }
    case 'arrow': {
      const as = new THREE.Shape();
      as.moveTo(-1.8, 0);
      as.lineTo(1.5, -0.3);
      as.lineTo(3, -1.6);
      as.lineTo(2.8, 0);
      as.lineTo(3, 1.6);
      as.lineTo(1.5, 0.3);
      as.lineTo(-1.8, 0);
      const ag = new THREE.ExtrudeGeometry(as, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 });
      ag.translate(0, 0, -0.2);
      const am = new THREE.Mesh(ag, hullMat);
      am.castShadow = true;
      inner.add(am);
      break;
    }
    case 'hover': {
      const hoverGeo = new THREE.BoxGeometry(4, 0.5, 2.8);
      const hoverHull = new THREE.Mesh(hoverGeo, hullMat);
      hoverHull.castShadow = true;
      inner.add(hoverHull);
      const skirtGeo = new THREE.BoxGeometry(4.2, 0.08, 3);
      const skirt = new THREE.Mesh(skirtGeo, darkMat);
      skirt.position.y = -0.28;
      inner.add(skirt);
      const domeHover = new THREE.SphereGeometry(0.8, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.5);
      const domeH = new THREE.Mesh(domeHover, glassMat);
      domeH.position.set(0.3, 0.25, 0);
      domeH.scale.set(1, 0.5, 1);
      inner.add(domeH);
      break;
    }
    case 'skiff': {
      const sk = new THREE.Shape();
      sk.moveTo(-2, -0.85);
      sk.lineTo(1.2, -0.95);
      sk.lineTo(2.2, -0.5);
      sk.lineTo(2.2, 0.5);
      sk.lineTo(1.2, 0.95);
      sk.lineTo(-2, 0.85);
      sk.lineTo(-2, -0.85);
      const skGeo = new THREE.ExtrudeGeometry(sk, { depth: 0.55, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 3 });
      skGeo.translate(0, 0, -0.275);
      const skMesh = new THREE.Mesh(skGeo, hullMat);
      skMesh.castShadow = true;
      inner.add(skMesh);
      const gunwaleGeo = new THREE.BoxGeometry(3.8, 0.22, 0.1);
      [-0.9, 0.9].forEach(z => {
        const gunwale = new THREE.Mesh(gunwaleGeo, accentMat);
        gunwale.position.set(0, 0.45, z);
        inner.add(gunwale);
      });
      break;
    }
    default: {
      const shape = new THREE.Shape();
      shape.moveTo(-2, -0.7);
      shape.lineTo(1.2, -0.85);
      shape.quadraticCurveTo(2.2, -0.6, 2.6, 0);
      shape.quadraticCurveTo(2.2, 0.6, 1.2, 0.85);
      shape.lineTo(-2, 0.7);
      shape.lineTo(-2, -0.7);
      const hg = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 3 });
      hg.translate(0, 0, -0.25);
      const hm = new THREE.Mesh(hg, hullMat);
      hm.castShadow = true;
      inner.add(hm);
    }
  }

  if (hullType !== 'ufo') {
    const stripeGeo = new THREE.BoxGeometry(3.5, 0.08, 1.85);
    const stripe = new THREE.Mesh(stripeGeo, accentMat);
    stripe.position.set(0.2, 0.32, 0);
    inner.add(stripe);

    const deckGeo = new THREE.BoxGeometry(2.5, 0.08, 1.4);
    const deck = new THREE.Mesh(deckGeo, darkMat);
    deck.position.set(-0.3, 0.35, 0);
    inner.add(deck);

    const cockpitGeo = new THREE.BoxGeometry(1.0, 0.35, 0.9);
    const cockpit = new THREE.Mesh(cockpitGeo, glassMat);
    cockpit.position.set(0.3, 0.55, 0);
    inner.add(cockpit);

    const engineGeo = new THREE.BoxGeometry(0.5, 0.35, 1.3);
    const engine = new THREE.Mesh(engineGeo, darkMat);
    engine.position.set(-1.6, 0.25, 0);
    inner.add(engine);

    if (hullType !== 'catamaran') {
      const noseGeo = new THREE.ConeGeometry(0.7, 1.2, 4);
      const nose = new THREE.Mesh(noseGeo, hullMat.clone());
      nose.rotation.z = -Math.PI / 2;
      nose.position.x = 2.8;
      nose.castShadow = true;
      inner.add(nose);
    }
  }

  const nzScale = 1.5 / nozzles;
  const exhaustGeo = new THREE.CylinderGeometry(0.14 * nzScale, 0.18 * nzScale, 0.5, 8);
  zPos.forEach(z => {
    const ex = new THREE.Mesh(exhaustGeo, darkMat);
    ex.rotation.x = Math.PI / 2;
    ex.position.set(hullType === 'ufo' ? -2.2 : -2.15, hullType === 'ufo' ? 0 : 0.15, z);
    inner.add(ex);
  });

  const finGeo = new THREE.BoxGeometry(0.7, 1.0 * finScale, 0.08);
  const fin = new THREE.Mesh(finGeo, accentMat);
  fin.position.set(-1.5, 0.55 + finScale * 0.25, 0);
  inner.add(fin);

  const jetNozzle = new THREE.Group();
  jetNozzle.userData.isJet = true;
  jetNozzle.visible = false;

  const nozzleOuterGeo = new THREE.CylinderGeometry(0.35 * nzScale, 0.45 * nzScale, 0.8, 8);
  nozzleOuterGeo.rotateX(Math.PI / 2);
  const nozzleOuter = new THREE.Mesh(nozzleOuterGeo, darkMat.clone());
  nozzleOuter.position.set(-2.3, 0.15, 0);
  jetNozzle.add(nozzleOuter);

  const nozzleInnerGeo = new THREE.CylinderGeometry(0.25 * nzScale, 0.3 * nzScale, 0.9, 8);
  nozzleInnerGeo.rotateX(Math.PI / 2);
  const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xff4400, roughness: 0.3, metalness: 0.4, emissive: 0xff4400, emissiveIntensity: 0 });
  const nozzleInner = new THREE.Mesh(nozzleInnerGeo, nozzleMat);
  nozzleInner.position.set(-2.3, 0.15, 0);
  nozzleInner.userData.isNozzleInner = true;
  jetNozzle.add(nozzleInner);

  const turbineGeo = new THREE.CylinderGeometry(0.3 * nzScale, 0.35 * nzScale, 1.2, 8);
  turbineGeo.rotateX(Math.PI / 2);
  zPos.forEach(z => {
    const turbine = new THREE.Mesh(turbineGeo.clone(), new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3, metalness: 0.8 }));
    turbine.position.set(-2.0, 0.15, z);
    jetNozzle.add(turbine);
  });

  inner.add(jetNozzle);

  const flameGroup = new THREE.Group();
  flameGroup.userData.isFlameGroup = true;
  zPos.forEach(z => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,200,50,1)');
    grad.addColorStop(0.3, 'rgba(255,120,0,0.8)');
    grad.addColorStop(0.7, 'rgba(255,60,0,0.3)');
    grad.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, opacity: 0, depthWrite: false
    }));
    sprite.position.set(-3.2, 0.15, z);
    sprite.scale.set(0, 0, 0);
    sprite.userData.isFlame = true;
    flameGroup.add(sprite);
  });
  inner.add(flameGroup);

  group.add(inner);
  return group;
}

export function mkFishingBoat() {
  const group = new THREE.Group();
  group.rotation.order = 'YXZ';

  const inner = new THREE.Group();
  inner.position.x = -2.6;

  const hullMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.4 });
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.7, metalness: 0.1 });
  const cabinMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.4, metalness: 0.2 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.7 });
  const windowMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.6 });

  const hullShape = new THREE.Shape();
  hullShape.moveTo(-2.8, -0.9);
  hullShape.lineTo(1.5, -1.05);
  hullShape.quadraticCurveTo(2.8, -0.7, 3.2, 0);
  hullShape.quadraticCurveTo(2.8, 0.7, 1.5, 1.05);
  hullShape.lineTo(-2.8, 0.9);
  hullShape.lineTo(-2.8, -0.9);
  const hullGeo = new THREE.ExtrudeGeometry(hullShape, { depth: 0.9, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.08, bevelSegments: 3 });
  hullGeo.translate(0, 0, -0.45);
  const hull = new THREE.Mesh(hullGeo, hullMat);
  hull.castShadow = true;
  inner.add(hull);

  const deckGeo = new THREE.BoxGeometry(6, 0.12, 2.8);
  const deck = new THREE.Mesh(deckGeo, deckMat);
  deck.position.set(0, 0.42, 0);
  deck.receiveShadow = true;
  inner.add(deck);

  const cabinGeo = new THREE.BoxGeometry(1.8, 1.3, 2.0);
  const cabin = new THREE.Mesh(cabinGeo, cabinMat);
  cabin.position.set(-1.3, 1.1, 0);
  cabin.castShadow = true;
  inner.add(cabin);

  const roofGeo = new THREE.BoxGeometry(2.2, 0.1, 2.4);
  const roof = new THREE.Mesh(roofGeo, darkMat);
  roof.position.set(-1.3, 1.8, 0);
  inner.add(roof);

  const windshieldGeo = new THREE.BoxGeometry(0.06, 0.6, 1.6);
  const windshield = new THREE.Mesh(windshieldGeo, windowMat);
  windshield.position.set(-0.35, 1.2, 0);
  inner.add(windshield);

  const sideWindowGeo = new THREE.BoxGeometry(1.2, 0.5, 0.06);
  [-1.05, 1.05].forEach(z => {
    const sw = new THREE.Mesh(sideWindowGeo, windowMat);
    sw.position.set(-1.3, 1.2, z);
    inner.add(sw);
  });

  const wheelGeo = new THREE.TorusGeometry(0.22, 0.035, 8, 16);
  const wheel = new THREE.Mesh(wheelGeo, darkMat);
  wheel.position.set(-0.8, 1.3, 0);
  wheel.rotation.y = Math.PI / 2;
  inner.add(wheel);

  const seatGeo = new THREE.BoxGeometry(0.7, 0.45, 0.7);
  const seat = new THREE.Mesh(seatGeo, darkMat);
  seat.position.set(-0.5, 0.7, 0);
  inner.add(seat);

  const motorMountGeo = new THREE.BoxGeometry(0.25, 1.0, 0.6);
  const motorMount = new THREE.Mesh(motorMountGeo, darkMat);
  motorMount.position.set(-3.1, 0.3, 0);
  inner.add(motorMount);
  const motorGeo = new THREE.CylinderGeometry(0.2, 0.28, 0.7, 8);
  motorGeo.rotateX(Math.PI / 2);
  const motor = new THREE.Mesh(motorGeo, darkMat);
  motor.position.set(-3.3, -0.1, 0);
  inner.add(motor);
  const propGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 6);
  propGeo.rotateX(Math.PI / 2);
  const prop = new THREE.Mesh(propGeo, darkMat);
  prop.position.set(-3.5, -0.1, 0);
  inner.add(prop);

  const holderGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.45, 6);
  [[2.2, 0.7, -0.9], [2.2, 0.7, 0.9], [1.6, 0.7, -0.9], [1.6, 0.7, 0.9], [1.0, 0.7, -0.9], [1.0, 0.7, 0.9]].forEach(p => {
    const h = new THREE.Mesh(holderGeo, darkMat);
    h.position.set(p[0], p[1], p[2]);
    inner.add(h);
  });

  const rodGeo = new THREE.CylinderGeometry(0.02, 0.012, 3.5, 4);
  const rodMat = new THREE.MeshStandardMaterial({ color: 0x886644, roughness: 0.7 });
  [[2.2, -0.9, 0.3], [2.2, 0.9, -0.3], [1.6, -0.9, 0.25], [1.6, 0.9, -0.25]].forEach((p, i) => {
    const rod = new THREE.Mesh(rodGeo.clone(), rodMat);
    rod.position.set(p[0] + 1.2, 2.3, p[1]);
    rod.rotation.z = 0.35;
    rod.rotation.x = p[2];
    inner.add(rod);
  });

  const wellGeo = new THREE.BoxGeometry(0.9, 0.55, 0.9);
  const wellMat = new THREE.MeshStandardMaterial({ color: 0x3366aa, roughness: 0.3, metalness: 0.4, transparent: true, opacity: 0.6 });
  const well = new THREE.Mesh(wellGeo, wellMat);
  well.position.set(2.0, 0.72, 0);
  inner.add(well);

  const coolerGeo = new THREE.BoxGeometry(0.7, 0.45, 0.55);
  const cooler = new THREE.Mesh(coolerGeo, new THREE.MeshStandardMaterial({ color: 0x2244aa, roughness: 0.5 }));
  cooler.position.set(2.0, 0.68, -1.0);
  inner.add(cooler);

  const railPostGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 4);
  for (let x = -2.2; x <= 2.8; x += 0.7) {
    [x, 0.9, -1.4].concat([x, 0.9, 1.4]).forEach((_, j) => {
      const z = j === 0 ? -1.4 : 1.4;
      const post = new THREE.Mesh(railPostGeo, darkMat);
      post.position.set(x, 0.9, z);
      inner.add(post);
    });
  }
  const railBarGeo = new THREE.CylinderGeometry(0.02, 0.02, 6, 6);
  railBarGeo.rotateZ(Math.PI / 2);
  [-1.4, 1.4].forEach(z => {
    const bar = new THREE.Mesh(railBarGeo.clone(), darkMat);
    bar.position.set(0, 1.3, z);
    inner.add(bar);
  });

  const stripeGeo = new THREE.BoxGeometry(0.04, 0.01, 2.8);
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.8 });
  for (let x = -2.5; x <= 2.5; x += 0.25) {
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(x, 0.49, 0);
    inner.add(stripe);
  }

  group.add(inner);
  return group;
}

export function syncBoat(b) {
  const waveY = waterHeightAt(b.pos.x, b.pos.z);
  b.pos.y = waveY + 0.5;

  const dx = 0.8, dz = 0.8;
  const wXL = waterHeightAt(b.pos.x - dx, b.pos.z);
  const wXR = waterHeightAt(b.pos.x + dx, b.pos.z);
  const wZF = waterHeightAt(b.pos.x, b.pos.z - dz);
  const wZB = waterHeightAt(b.pos.x, b.pos.z + dz);
  const pitch = Math.atan2(wZB - wZF, dz * 2);
  const roll = Math.atan2(wXR - wXL, dx * 2);

  const spdNorm = Math.abs(b.speed) / Math.max(1, b.maxSpd);
  const bob = Math.sin(performance.now() * 0.004) * 0.2 * (0.1 + 0.9 * spdNorm);

  b.mesh.position.copy(b.pos);
  b.mesh.position.y += bob;
  b.mesh.rotation.y = b.heading;
  b.mesh.rotation.x = pitch * 0.6;
  b.mesh.rotation.z = roll * 0.6 + Math.sin(performance.now() * 0.003) * 0.04 * spdNorm;
}

export function updateBoat(b, dt) {
  if (b.finished) return null;
  if (b.colTimer > 0) b.colTimer -= dt;

  if (b.turboActive) {
    b.turboCharges -= dt;
    if (b.turboCharges <= 0) {
      b.turboCharges = 0;
      b.turboActive = false;
    }
  }

  const maxSpd = b.maxSpd;

  if (b.throttle > 0) {
    const target = b.throttle * maxSpd;
    const rate = b.speed < target ? b.accel : b.accel * 1.5;
    b.speed += (target - b.speed) * (1 - Math.exp(-rate * dt));
  } else if (b.throttle < 0) {
    const target = b.throttle * maxSpd * 0.4;
    b.speed += (target - b.speed) * (1 - Math.exp(-b.accel * 0.8 * dt));
  } else {
    b.speed *= Math.pow(0.95, dt * 60);
  }
  if (b.colTimer > 0) b.speed *= 0.3;
  if (b.speed > maxSpd) {
    b.speed += (maxSpd - b.speed) * (1 - Math.exp(-3.0 * dt));
  } else {
    b.speed = Math.max(-b.maxSpd * 0.4, Math.min(maxSpd, b.speed));
  }

  const spdNorm = b.speed / Math.max(1, b.maxSpd);
  const absSpdNorm = Math.abs(spdNorm);

  const turnMod = 0.10 + 0.10 * Math.pow(absSpdNorm, 0.7);
  b.heading -= b.steer * b.turnSpeed * turnMod * dt * 60 * Math.sign(spdNorm || 1);

  const fwd = new THREE.Vector3(Math.cos(b.heading), 0, -Math.sin(b.heading));
  const moveSpeed = b.speed * dt;
  b.pos.x += fwd.x * moveSpeed;
  b.pos.z += fwd.z * moveSpeed;

  const closest = findClosestTrackPoint(b.pos);
  if (closest) {
    const dist = b.pos.distanceTo(closest.pos);
    const maxDist = TW * 0.55;
    if (dist > maxDist) {
      const pushDir = closest.pos.clone().sub(b.pos).normalize();
      b.pos.add(pushDir.multiplyScalar(dist - maxDist));
      b.speed *= 0.95;
    }
  }

  const segIdx = closest ? closest.idx : 0;
  const seg = G.trackSeg[segIdx];

  if (b.airborne) {
    b.airVY -= 25 * dt;
    if (seg && seg.pos.y + 2 < 0) {
      b.airborne = false;
      b.airVY = 0;
      G.camShake = Math.max(G.camShake, 0.3);
    }
  } else if (seg && seg.ramp && b.speed > 30) {
    b.airborne = true;
    b.airVY = 14 + b.speed * 0.04;
    G.camShake = Math.max(G.camShake, 0.2);
  }

  if (closest) {
    b._trackT = closest.t;
    b._segIdx = segIdx;

    if (seg && seg.finish && b.cp >= 2 && Math.abs(b.speed) > 2 && !b.airborne) {
      b.lap++;
      b.cp = 0;
      if (b.lap >= 3) {
        b.finished = true;
        b.finTime = G.raceTime;
        return 'finish';
      }
      return 'lap';
    }
    if (seg && seg.checkpoint >= 0 && b.cp === seg.checkpoint) b.cp++;

    if (seg && seg.obstacle && b.colTimer <= 0 && closest.dist < 3 && b.speed > 20) {
      b.colTimer = 0.5;
      G.camShake = 0.6;
      return 'crash';
    }

    if (seg && seg.boost) {
      const found = G.boostObjs.find(p => !p.userData.collected && p.userData.idx === segIdx);
      if (found && closest.dist < seg.halfW * 0.65) {
        found.userData.collected = true;
        found.visible = false;
        b.turboCharges += found.userData.isRed ? 10 : 3;
        return 'pickup';
      }
    }
  }

  return null;
}

export function syncMesh(b) {
  const pos = b.pos.clone();

  const waveY = waterHeightAt(pos.x, pos.z);
  const elev = b._trackT !== undefined ? getTrackElevation(b._trackT) : 0;

  if (b.airborne) {
    pos.y = elev + Math.max(0, b.airVY * 0.15) + 2.0;
  } else {
    pos.y = Math.max(waveY + 0.3, elev + 0.3);
  }

  const absSpd = Math.abs(b.speed);
  const spdNorm = absSpd / Math.max(1, b.maxSpd);
  const glide = Math.max(0, 1 - spdNorm * 0.85);
  const bob = Math.sin(performance.now() * 0.005) * 0.3 * glide;
  const roll = Math.sin(performance.now() * 0.003 + b.pos.x * 0.01) * 0.2 * glide;
  pos.y += bob;

  b.mesh.position.copy(pos);
  b.pos.y = pos.y;
  b.mesh.rotation.set(0, 0, 0);
  b.mesh.rotation.y = b.heading;
  b.mesh.rotation.x = b.steer * 0.3 * spdNorm;
  b.mesh.rotation.z = roll;

  b.mesh.traverse(c => {
    if (c.userData.isFlame) {
      if (b.turboActive && b.speed > 5) {
        const phase = performance.now() * 0.01;
        const flicker = 0.6 + Math.sin(phase + Math.random() * 3) * 0.3;
        c.material.opacity = 0.7 + flicker * 0.3;
        const sx = 0.6 + flicker * 0.5;
        const sy = 1.5 + flicker * 1.5;
        c.scale.set(sx, sy, 1);
      } else {
        c.material.opacity = 0;
        c.scale.set(0, 0, 0);
      }
    } else if (c.userData.isJet) {
      c.visible = b.turboCharges > 0;
    } else if (c.userData.isNozzleInner && c.material.emissive) {
      c.material.emissiveIntensity = b.turboActive ? 1.5 + Math.sin(performance.now() * 0.01) * 0.5 : b.turboCharges > 0 ? 0.3 : 0;
    }
  });
}

export function mkBoatState(cfg, t, lat, spd, isPlayer) {
  const mesh = mkBoat(cfg.color, cfg.accent, cfg.nozzles, cfg.finScale, cfg.hull);
  G.scene.add(mesh);

  const startIdx = Math.floor(t * TSEG) % TSEG;
  const startPos = G.trackPts[startIdx].pos.clone();
  const startTan = G.trackPts[startIdx].tan.clone();
  const startRight = G.trackPts[startIdx].right.clone();
  startPos.add(startRight.multiplyScalar(lat));

  return {
    mesh, name: cfg.name, color: cfg.color, accent: cfg.accent,
    maxSpd: cfg.maxSpd, accel: cfg.accel, turnSpeed: cfg.turn, turboMax: cfg.turbo,

    pos: startPos,
    heading: Math.atan2(-startTan.z, startTan.x),
    speed: spd,
    _trackT: t,

    turboCharges: 0,
    turboActive: false,
    lap: 0, cp: 0, finished: false, finTime: 0,
    colTimer: 0, steer: 0, throttle: 0, isPlayer,
    aiTarget: 0, aiTimer: 0, airborne: false, airVY: 0
  };
}

export function updatePontoonBoat(b, dt) {
  if (b.throttle > 0) {
    b.speed += (b.throttle * b.maxSpd - b.speed) * (1 - Math.exp(-b.accel * dt));
  } else if (b.throttle < 0) {
    b.speed += (b.throttle * b.maxSpd * 0.4 - b.speed) * (1 - Math.exp(-b.accel * 0.8 * dt));
  } else {
    b.speed *= Math.pow(0.95, dt * 60);
  }
  b.speed = Math.max(-b.maxSpd * 0.3, Math.min(b.maxSpd, b.speed));
  const spdNorm = Math.abs(b.speed) / Math.max(1, b.maxSpd);
  const turnMod = 0.10 + 0.10 * Math.pow(spdNorm, 0.7);
  b.heading -= b.steer * b.turnSpeed * turnMod * dt * 60 * Math.sign(b.speed || 1);
  const fwd = new THREE.Vector3(Math.cos(b.heading), 0, -Math.sin(b.heading));
  b.pos.x += fwd.x * b.speed * dt;
  b.pos.z += fwd.z * b.speed * dt;
}

export function mkDiver() {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2a, roughness: 0.6, metalness: 0.2 });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xddaa88, roughness: 0.7 });
  const finMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 });
  const tankMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.3, metalness: 0.7 });

  const bodyGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.9, 8);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 0.1;
  group.add(body);

  const headGeo = new THREE.SphereGeometry(0.22, 8, 6);
  const head = new THREE.Mesh(headGeo, skinMat);
  head.position.y = 0.7;
  group.add(head);

  const maskGeo = new THREE.SphereGeometry(0.24, 8, 6, 0, Math.PI, 0.3, 1.5);
  const maskMat = new THREE.MeshStandardMaterial({ color: 0x22aaff, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.55 });
  const mask = new THREE.Mesh(maskGeo, maskMat);
  mask.position.set(0, 0.72, 0.06);
  mask.rotation.x = -0.1;
  group.add(mask);

  const tankGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6);
  const tank = new THREE.Mesh(tankGeo, tankMat);
  tank.position.set(0, 0.15, -0.2);
  group.add(tank);

  const armGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.5, 6);
  [-0.25, 0.25].forEach(z => {
    const arm = new THREE.Mesh(armGeo.clone(), bodyMat);
    arm.position.set(0, 0.05, z);
    arm.rotation.z = 0.5;
    arm.rotation.x = z < 0 ? -0.3 : 0.3;
    group.add(arm);
  });

  const legGeo = new THREE.CylinderGeometry(0.08, 0.06, 0.5, 6);
  [-0.12, 0.12].forEach(z => {
    const leg = new THREE.Mesh(legGeo.clone(), bodyMat);
    leg.position.set(0, -0.4, z);
    group.add(leg);
    const finGeo = new THREE.BoxGeometry(0.15, 0.04, 0.35);
    const fin = new THREE.Mesh(finGeo, finMat);
    fin.position.set(0, -0.65, z);
    group.add(fin);
  });

  group.castShadow = true;
  return group;
}

function findClosestTrackPoint(pos) {
  let bestDist = Infinity, bestIdx = 0;
  const step = 20;
  for (let i = 0; i < TSEG; i += step) {
    const d = pos.distanceTo(G.trackPts[i].pos);
    if (d < bestDist) { bestDist = d; bestIdx = i; }
  }
  const start = Math.max(0, bestIdx - step * 2);
  const end = Math.min(TSEG, bestIdx + step * 2);
  for (let i = start; i <= end; i++) {
    const idx = i % TSEG;
    const d = pos.distanceTo(G.trackPts[idx].pos);
    if (d < bestDist) { bestDist = d; bestIdx = idx; }
  }
  return { pos: G.trackPts[bestIdx].pos, idx: bestIdx, t: bestIdx / TSEG, dist: bestDist };
}

function getTrackElevation(t) {
  const idx = Math.floor(t * TSEG) % TSEG;
  const next = (idx + 1) % TSEG;
  const frac = (t * TSEG) % 1;
  return G.trackPts[idx].pos.y + (G.trackPts[next].pos.y - G.trackPts[idx].pos.y) * frac;
}

function waterHeightAt(x, z) {
  const time = performance.now() * 0.001;
  return Math.sin(x * 0.008 + time * 0.5) * 1.5
    + Math.sin(z * 0.012 + time * 0.4) * 1.2
    + Math.sin((x + z) * 0.006 + time * 0.6) * 1.0
    + Math.sin(x * 0.025 + z * 0.02 + time * 1.3) * 0.5
    + Math.sin(x * 0.003 + time * 0.2) * 2.0
    - 3.0;
}
