import * as THREE from 'three';
import { TW, TSEG } from './shared.js';
import { G } from './shared.js';

export function buildTrack() {
  const raw = [
    [0, 2, 120],
    [120, 4, 60],
    [160, 6, 0],
    [120, 8, -60],
    [0, 10, -120],
    [-120, 8, -60],
    [-160, 6, 0],
    [-120, 4, 60],
  ];
  const pts = raw.map(p => new THREE.Vector3(p[0] * 2.5, p[1] * 1.5, p[2] * 2.5));

  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
  const positions = [], uvs = [], indices = [];
  const halfW = TW * 0.5;
  const frames = curve.computeFrenetFrames(TSEG, true);

  G.trackPts = [];
  G.trackSeg = [];

  for (let i = 0; i <= TSEG; i++) {
    const t = i / TSEG;
    const pos = curve.getPoint(t);
    const tan = frames.tangents[i % TSEG].clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, tan).normalize();
    const realUp = new THREE.Vector3().crossVectors(tan, right).normalize();

    G.trackPts.push({ pos, tan, right, up: realUp, t });

    const l = pos.clone().add(right.clone().multiplyScalar(-halfW));
    const r = pos.clone().add(right.clone().multiplyScalar(halfW));
    const vi = i * 2;

    positions.push(l.x, l.y, l.z, r.x, r.y, r.z);
    uvs.push(0, t * 80, 1, t * 80);

    if (i < TSEG) {
      indices.push(vi, vi + 2, vi + 1, vi + 1, vi + 2, vi + 3);
    }

    G.trackSeg.push({
      pos, right, up: realUp, tan, halfW, t,
      boost: (i > 20 && i % 80 === 0),
      obstacle: false,
      ramp: false,
      checkpoint: i > 0 && i % Math.floor(TSEG / 3) === 0 ? Math.floor(i / (TSEG / 3)) : -1,
      finish: i === 0
    });
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(positions.length), 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    color: 0x1a6688, roughness: 0.35, metalness: 0.1, side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  G.scene.add(mesh);
  G.racingMeshes = [mesh];

  buildWalls(halfW);
  buildBoosts();
}

function buildWalls(halfW) {
  const wallH = 2.5;
  const positions = [];
  const indices = [];
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i <= TSEG; i++) {
      const p = G.trackPts[i];
      const base = p.pos.clone().add(p.right.clone().multiplyScalar(halfW * side));
      const top = base.clone().add(new THREE.Vector3(0, wallH, 0));
      const vi = positions.length / 3;
      positions.push(base.x, base.y, base.z, top.x, top.y, top.z);
      if (i < TSEG) indices.push(vi, vi + 2, vi + 1, vi + 1, vi + 2, vi + 3);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const cols = [0xcc3333, 0xdddddd];
  for (let side = 0; side < 2; side++) {
    const halfIdx = Math.floor(indices.length / 2);
    const subIdx = side === 0 ? indices.slice(0, halfIdx) : indices.slice(halfIdx);
    const subPos = positions.slice(0);
    const subGeo = new THREE.BufferGeometry();
    subGeo.setAttribute('position', new THREE.Float32BufferAttribute(subPos, 3));
    subGeo.setIndex(subIdx);
    subGeo.computeVertexNormals();
    const m = new THREE.Mesh(subGeo, new THREE.MeshStandardMaterial({ color: cols[side], roughness: 0.7, metalness: 0.3, side: THREE.DoubleSide }));
    m.receiveShadow = true;
    G.scene.add(m);
    G.racingMeshes.push(m);
  }
}

function buildBoosts() {
  G.boostObjs = [];
  for (let i = 0; i < TSEG; i++) {
    if (!G.trackSeg[i].boost) continue;
    const p = G.trackPts[i];
    const side = (i % 3 === 0) ? 1 : -1;
    const pos = p.pos.clone().add(p.right.clone().multiplyScalar(side * G.trackSeg[i].halfW * 0.35));
    pos.y += 4.0;

    const isRed = i % 400 === 0 && i > 0;
    const geo = new THREE.OctahedronGeometry(isRed ? 1.5 : 1.2);
    const mat = new THREE.MeshStandardMaterial({
      color: isRed ? 0xff2200 : 0xffdd00,
      emissive: isRed ? 0xff0000 : 0xff8800,
      emissiveIntensity: 0.8
    });

    const m = new THREE.Mesh(geo, mat);
    m.position.copy(pos);
    m.userData = { idx: i, collected: false, side, baseY: pos.y, isRed };
    G.scene.add(m);
    G.boostObjs.push(m);
    G.racingMeshes.push(m);
  }
}
