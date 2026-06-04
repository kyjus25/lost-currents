import * as THREE from 'three';

export const BOATS = [
  { name: 'Radical Reboot', color: 0xff4400, accent: 0xff8800, maxSpd: 85, accel: 1.2, turn: 0.045, turbo: 3, nozzles: 2, finScale: 0.7, hull: 'standard' },
  { name: 'Vortex', color: 0xff0066, accent: 0xff66aa, maxSpd: 92, accel: 1.0, turn: 0.038, turbo: 2, nozzles: 1, finScale: 0.5, hull: 'torpedo' },
  { name: 'Blaze', color: 0xff6600, accent: 0xffaa00, maxSpd: 90, accel: 1.1, turn: 0.040, turbo: 3, nozzles: 2, finScale: 0.8, hull: 'delta' },
  { name: 'Razor', color: 0x8800ff, accent: 0xbb66ff, maxSpd: 88, accel: 1.0, turn: 0.042, turbo: 2, nozzles: 1, finScale: 0.6, hull: 'arrow' },
  { name: 'Tempest', color: 0x0044ff, accent: 0x4488ff, maxSpd: 95, accel: 0.9, turn: 0.035, turbo: 2, nozzles: 1, finScale: 0.4, hull: 'catamaran' },
  { name: 'Sky Shark', color: 0x2288ff, accent: 0x66ccff, maxSpd: 80, accel: 1.2, turn: 0.060, turbo: 3, nozzles: 3, finScale: 1.0, hull: 'stealth' },
  { name: 'Stingray', color: 0x00cccc, accent: 0x66ffff, maxSpd: 82, accel: 1.1, turn: 0.065, turbo: 3, nozzles: 2, finScale: 1.2, hull: 'ufo' },
  { name: 'Piranha', color: 0x00ff66, accent: 0x66ffaa, maxSpd: 78, accel: 1.3, turn: 0.070, turbo: 4, nozzles: 4, finScale: 0.9, hull: 'hover' },
  { name: 'Barracuda', color: 0x88ff00, accent: 0xbbff66, maxSpd: 84, accel: 1.0, turn: 0.058, turbo: 3, nozzles: 4, finScale: 1.1, hull: 'torpedo' },
  { name: 'Marlin', color: 0x00ffcc, accent: 0x66ffdd, maxSpd: 80, accel: 1.2, turn: 0.062, turbo: 3, nozzles: 2, finScale: 1.4, hull: 'skiff' },
  { name: 'Mako', color: 0x22ff66, accent: 0x66ffaa, maxSpd: 84, accel: 1.6, turn: 0.045, turbo: 3, nozzles: 3, finScale: 0.8, hull: 'standard' },
  { name: 'Dolphin', color: 0x66aaff, accent: 0xaaccff, maxSpd: 82, accel: 1.8, turn: 0.042, turbo: 3, nozzles: 3, finScale: 0.6, hull: 'ufo' },
  { name: 'Orca', color: 0x222222, accent: 0x666666, maxSpd: 86, accel: 1.5, turn: 0.048, turbo: 2, nozzles: 4, finScale: 1.0, hull: 'stealth' },
  { name: 'Hammerhead', color: 0xffcc00, accent: 0xff6600, maxSpd: 80, accel: 1.7, turn: 0.050, turbo: 4, nozzles: 4, finScale: 0.7, hull: 'arrow' },
  { name: 'Leviathan', color: 0xcc22ff, accent: 0xff66ff, maxSpd: 88, accel: 1.9, turn: 0.040, turbo: 2, nozzles: 3, finScale: 1.2, hull: 'catamaran' },
];

export const TW = 24;
export const TSEG = 900;
export const WSIZE = 2500;

export const G: Record<string, any> = {
  scene: null,
  cam: null,
  ren: null,
  hudCtx: null,
  hudEl: null,
  audio: null,
  state: 'MENU',
  raceTime: 0,
  lastTime: 0,
  keys: {},
  prev: {},
  pBoat: null,
  aiList: [],
  trackPts: [],
  trackSeg: [],
  boostObjs: [],
  waterMesh: null,
  waterGeo: null,
  cliffMeshes: [],
  boatIdx: 0,
  countVal: 4,
  countTimer: 0.001,
  countDone: false,
  camShake: 0,
  cloudMeshes: [],
  boatThumbnails: {},
  pov: 'third',
  testingMode: false,
  freeCam: false,
  freeCamEuler: null,
  achievements: {},
  pp: null,
  debug: null,
  physics: null,
  waterMaterial: null,
  eelPhase: 'approach',
  eelPhaseTimer: 0,
  camZoomDist: 10,
};

export const kp = (k) => { return G.keys[k] && !G.prev[k]; }
