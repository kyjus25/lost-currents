import * as THREE from 'three';

export interface BoatConfig {
  name: string;
  color: number;
  accent: number;
  maxSpd: number;
  accel: number;
  turn: number;
  turbo: number;
  nozzles: number;
  finScale: number;
  hull: HullType;
}

export type HullType = 'standard' | 'torpedo' | 'delta' | 'ufo' | 'catamaran' | 'stealth' | 'arrow' | 'hover' | 'skiff';

export interface BoatState {
  mesh: THREE.Group;
  name: string;
  color: number;
  accent: number;
  maxSpd: number;
  accel: number;
  turnSpeed: number;
  turboMax: number;
  pos: THREE.Vector3;
  heading: number;
  speed: number;
  _trackT: number;
  turboCharges: number;
  turboActive: boolean;
  lap: number;
  cp: number;
  finished: boolean;
  finTime: number;
  colTimer: number;
  steer: number;
  throttle: number;
  isPlayer: boolean;
  aiTarget: number;
  aiTimer: number;
  airborne: boolean;
  airVY: number;
}

export interface TrackPoint {
  pos: THREE.Vector3;
  tan: THREE.Vector3;
  right: THREE.Vector3;
  up: THREE.Vector3;
  t: number;
}

export interface TrackSegment {
  pos: THREE.Vector3;
  right: THREE.Vector3;
  up: THREE.Vector3;
  tan: THREE.Vector3;
  halfW: number;
  t: number;
  boost: boolean;
  obstacle: boolean;
  ramp: boolean;
  checkpoint: number;
  finish: boolean;
}

export interface FishConfig {
  id: number;
  name: string;
  rarity: Rarity;
  minSize: number;
  maxSize: number;
  value: number;
  color: string;
}

export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythic';

export interface RodConfig {
  id: number;
  name: string;
  cost: number;
  catchRate: number;
  luckBonus: number;
  desc: string;
}

export interface UpgradeConfig {
  id: number;
  name: string;
  cost: number;
  desc: string;
  speedBonus?: number;
  hasGPS?: boolean;
  gpsRange?: number;
}

export interface Achievement {
  id: string;
  name: string;
  desc: string;
}

export interface FishingState {
  coins: number;
  ownedRods: number[];
  equippedRod: number;
  caughtFish: Record<string, { count: number; bestSize: number }>;
  tank: TankItem[];
  tankCapacity: number;
  grindTimer: number;
  grindRate: number;
  taxRate: number;
  totalTax: number;
  state: FishingPhase;
  timer: number;
  currentFish: FishConfig | null;
  currentSize: number;
  message: string;
  messageTimer: number;
  shopCursor: number;
  shopTab: number;
  dexCursor: number;
  ownedUpgrades: number[];
  upgrades: UpgradeState;
  lastCaughtFish: string | null;
  reelProgress: number;
  reelDecay: number;
  biteTimer: number;
}

export type FishingPhase = 'idle' | 'casting' | 'waiting' | 'bite' | 'caught';

export interface TankItem {
  fish: FishConfig;
  size: number;
  value: number;
}

export interface UpgradeState {
  speedBonus: number;
  hasGPS: boolean;
  gpsRange: number;
}

export interface GameState {
  scene: THREE.Scene;
  cam: THREE.PerspectiveCamera;
  ren: THREE.WebGLRenderer;
  hudCtx: CanvasRenderingContext2D;
  hudEl: HTMLCanvasElement;
  audio: any;
  state: GamePhase;
  raceTime: number;
  lastTime: number;
  keys: Record<string, boolean>;
  prev: Record<string, boolean>;
  pBoat: BoatState | null;
  aiList: BoatState[];
  trackPts: TrackPoint[];
  trackSeg: TrackSegment[];
  boostObjs: THREE.Mesh[];
  waterMesh: THREE.Mesh;
  waterGeo: THREE.PlaneGeometry;
  cliffMeshes: THREE.Mesh[];
  boatIdx: number;
  countVal: number;
  countTimer: number;
  countDone: boolean;
  camShake: number;
  cloudMeshes: THREE.Sprite[];
  boatThumbnails: Record<number, string>;
  pov: 'first' | 'third';
  testingMode: boolean;
  freeCam: boolean;
  freeCamEuler: THREE.Euler | null;
  achievements: Record<string, boolean>;
  fishing: FishingState;
  walkingMode: boolean;
  walkPos: { x: number; z: number };
  diving: boolean;
  oxygen: number;
  maxOxygen: number;
  oxygenDepleteRate: number;
  diverPos: { x: number; y: number; z: number };
  diverSpeed: number;
  tetherMaxDist: number;
  diverMesh: THREE.Group | null;
  underwaterLoot: LootItem[];
  megalodon: THREE.Group | null;
  megalodonMsg: string;
  giantHand: THREE.Group | null;
  hasMegalodonSkeleton: boolean;
  megalodonSkeletonPos: THREE.Vector3 | null;
  skeletonSeen: boolean;
  hasSub44: boolean;
  sub44Seen: boolean;
  sub44Pos: THREE.Vector3 | null;
  islands: THREE.Group[];
  oceanFloor: THREE.Group | null;
  testGround: THREE.Mesh | null;
  racingMeshes: THREE.Object3D[];
  displayBoats: THREE.Group[];
  displayStartIdx: number[];
  monsterEel: THREE.Group | null;
  eelSpawnTimer: number;
  eelFlashed: boolean;
  eelPhase: string;
  eelPhaseTimer: number;
  sub: THREE.Group | null;
  subHeading: number;
  xrayActive: boolean;
  ironLungState: string;
  jumpscareTimer: number;
  skeletonTarget: THREE.Group | null;
  megAttack: MegAttack | null;
  pp: any;
  debug: any;
  physics: any;
  waterMaterial: THREE.ShaderMaterial | null;
}

export type GamePhase = 'MENU' | 'SELECT' | 'COUNTDOWN' | 'RACING' | 'RESULTS' | 'FREE_ROAM' | 'SHOP' | 'DEX' | 'IRON_LUNG' | 'ACHIEVEMENTS' | 'UPDATES';

export interface MegAttack {
  phase: 'spotted' | 'stalking' | 'charging' | 'catch' | 'destroying' | 'respawning';
  timer: number;
  meg: THREE.Group | null;
  redAlpha: number;
}

export interface LootItem {
  mesh: THREE.Mesh;
  lootType: { name: string; value: number; color: string };
  size: number;
  value: number;
  collected: boolean;
}

export interface HydroAudioInterface {
  init(): void;
  updateEngine(speed: number, maxSpeed: number, turbo: boolean): void;
  sfx(type: string): void;
  startMusic(): void;
  stopMusic(): void;
  setVolume(v: number): void;
}
