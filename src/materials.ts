import * as THREE from 'three';

const cache = new Map<string, THREE.MeshStandardMaterial>();

export const MAT = {
  water: () => mat(0x0e7799, { roughness: 0.12, metalness: 0.2, transparent: true, opacity: 0.92 }),
  cliff: (i: number) => mat([0x7a5a2a, 0x6a4a1a, 0x8a6a3a, 0x5a3a0a][i % 4], { roughness: 0.92, metalness: 0 }),
  mountain: (i: number) => mat([0x6a5040, 0x7a6050, 0x5a4030, 0x8a7060][i % 4], { roughness: 0.95 }),
  floor: () => mat(0x3a7a2a, { roughness: 0.9, metalness: 0 }),
  oceanFloor: () => mat(0x2a3a4a, { roughness: 0.95 }),
  bone: () => mat(0xccccaa, { roughness: 0.7 }),
  dark: () => mat(0x222222, { roughness: 0.5, metalness: 0.8 }),
  rivet: () => mat(0x666666, { roughness: 0.3, metalness: 0.9 }),
  glass: () => mat(0x88ccff, { roughness: 0.02, metalness: 0.1, transparent: true, opacity: 0.6 }),
  red: () => mat(0xcc2222, { roughness: 0.5, metalness: 0.3 }),
  islandBase: () => mat(0xc2b280, { roughness: 0.9 }),
  islandGrass: () => mat(0x4a7a2a, { roughness: 0.85 }),
  trunk: () => mat(0x8B7355, { roughness: 0.8 }),
  leaf: () => mat(0x228B22, { roughness: 0.7 }),
  sharkSkin: () => mat(0x5a6a7a, { roughness: 0.35, metalness: 0.15 }),
  sharkBelly: () => mat(0xb0a898, { roughness: 0.45, metalness: 0.05 }),
  sharkFin: () => mat(0x4a5a6a, { roughness: 0.4, metalness: 0.1 }),
  eye: () => mat(0x0a0a0a, { roughness: 0.05, metalness: 0.9 }),
  mouth: () => mat(0x8b2020, { roughness: 0.6 }),
  tooth: () => mat(0xf0f0e0, { roughness: 0.3 }),
  gill: () => mat(0x7a3030, { roughness: 0.6, side: THREE.DoubleSide }),
  scale: () => mat(0x6a7a8a, { roughness: 0.25, metalness: 0.2, side: THREE.DoubleSide }),
  hullSub: () => mat(0x3a4a5a, { roughness: 0.35, metalness: 0.75 }),
  hullSubLight: () => mat(0x4a5a6a, { roughness: 0.3, metalness: 0.7 }),
  hullSub44: () => mat(0x445566, { roughness: 0.4, metalness: 0.6 }),
  rust: () => mat(0x8B4513, { roughness: 0.7, metalness: 0.3 }),
  num: () => mat(0xcccccc, { roughness: 0.5, metalness: 0.4 }),
  eelBody: () => mat(0x1a2a1a, { roughness: 0.6, metalness: 0.2 }),
  eelEye: () => mat(0xff0000, { emissive: 0xff0000, emissiveIntensity: 2.0 }),
  eelSpike: () => mat(0x333333, { roughness: 0.4, metalness: 0.6 }),
  hand: () => mat(0x666655, { roughness: 0.6, metalness: 0.2 }),
  handFinger: () => mat(0x777766, { roughness: 0.6, metalness: 0.2 }),
  diverBody: () => mat(0x1a1a2a, { roughness: 0.6, metalness: 0.2 }),
  diverSkin: () => mat(0xddaa88, { roughness: 0.7 }),
  diverFin: () => mat(0x222222, { roughness: 0.5 }),
  diverTank: () => mat(0x888888, { roughness: 0.3, metalness: 0.7 }),
  hullH: () => mat(0xcccccc, { roughness: 0.3, metalness: 0.4 }),
  deck: () => mat(0x888888, { roughness: 0.7, metalness: 0.1 }),
  cabin: () => mat(0xeeeeee, { roughness: 0.4, metalness: 0.2 }),
  rod: () => mat(0x886644, { roughness: 0.7 }),
  portholeGlass: () => mat(0x88ccff, { roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.5 }),
  boost: (isRed: boolean) => mat(isRed ? 0xff2200 : 0xffdd00, { emissive: isRed ? 0xff0000 : 0xff8800, emissiveIntensity: 0.8 }),
};

function mat(color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  const key = color.toString(16) + JSON.stringify(opts);
  let cached = cache.get(key);
  if (!cached) {
    cached = new THREE.MeshStandardMaterial({ color, ...opts });
    cache.set(key, cached);
  }
  return cached;
}

export function disposeAllMaterials(): void {
  cache.forEach(m => m.dispose());
  cache.clear();
}
