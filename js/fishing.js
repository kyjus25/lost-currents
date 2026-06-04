import { G } from './shared.js';

export const FISH = [
  { id: 0, name: 'Minnow', rarity: 'common', minSize: 1, maxSize: 3, value: 5, color: '#aaaaaa' },
  { id: 1, name: 'Perch', rarity: 'common', minSize: 2, maxSize: 5, value: 10, color: '#ccaa44' },
  { id: 2, name: 'Bass', rarity: 'common', minSize: 3, maxSize: 8, value: 15, color: '#558833' },
  { id: 3, name: 'Trout', rarity: 'uncommon', minSize: 4, maxSize: 10, value: 25, color: '#dd8866' },
  { id: 4, name: 'Pike', rarity: 'uncommon', minSize: 5, maxSize: 12, value: 35, color: '#446644' },
  { id: 5, name: 'Catfish', rarity: 'uncommon', minSize: 6, maxSize: 15, value: 40, color: '#665544' },
  { id: 6, name: 'Salmon', rarity: 'rare', minSize: 8, maxSize: 20, value: 60, color: '#ee6644' },
  { id: 7, name: 'Swordfish', rarity: 'rare', minSize: 10, maxSize: 25, value: 80, color: '#4466aa' },
  { id: 8, name: 'Tuna', rarity: 'rare', minSize: 12, maxSize: 30, value: 100, color: '#334466' },
  { id: 9, name: 'Marlin', rarity: 'legendary', minSize: 15, maxSize: 40, value: 150, color: '#2244aa' },
  { id: 10, name: 'Golden Koi', rarity: 'legendary', minSize: 5, maxSize: 15, value: 200, color: '#ffcc00' },
  { id: 11, name: 'Kraken', rarity: 'legendary', minSize: 20, maxSize: 50, value: 500, color: '#440066' },
  { id: 12, name: 'Gay Fish', rarity: 'legendary', minSize: 3, maxSize: 8, value: 333, color: '#ff69b4' },
  { id: 13, name: 'Baby Eel', rarity: 'legendary', minSize: 2, maxSize: 5, value: 666, color: '#1a3a1a' },
  { id: 14, name: 'Rubber Duck', rarity: 'common', minSize: 1, maxSize: 2, value: 2, color: '#ffdd00' },
  { id: 15, name: 'Ancient Trident', rarity: 'rare', minSize: 4, maxSize: 6, value: 250, color: '#4488cc' },
  { id: 16, name: 'Crystal Jellyfish', rarity: 'uncommon', minSize: 2, maxSize: 5, value: 45, color: '#cc88ff' },
  { id: 17, name: 'Ghost Fish', rarity: 'rare', minSize: 3, maxSize: 10, value: 120, color: '#ddeeff' },
  { id: 18, name: 'Golden Boot', rarity: 'common', minSize: 1, maxSize: 2, value: 8, color: '#aa8833' },
  { id: 99, name: 'Mega Gay Fish', rarity: 'legendary', minSize: 5, maxSize: 12, value: 999, color: '#ff00ff' },
];

export const RODS = [
  { id: 0, name: 'Basic Rod', cost: 0, catchRate: 0.50, luckBonus: 0.0, desc: 'A stick with string. Gets the job done.' },
  { id: 1, name: 'Fiberglass Rod', cost: 100, catchRate: 0.62, luckBonus: 0.05, desc: 'Lightweight and flexible.' },
  { id: 2, name: 'Graphite Rod', cost: 250, catchRate: 0.74, luckBonus: 0.10, desc: 'Strong backbone, sensitive tip.' },
  { id: 3, name: 'Tournament Rod', cost: 500, catchRate: 0.85, luckBonus: 0.15, desc: 'Competition-grade equipment.' },
  { id: 4, name: 'Lucky Lure Rod', cost: 300, catchRate: 0.58, luckBonus: 0.35, desc: 'Attracts rare fish like a magnet.' },
  { id: 5, name: 'Deep Sea Rod', cost: 400, catchRate: 0.70, luckBonus: 0.08, desc: 'Built for the biggest catches.' },
];

export const UPGRADES = [
  { id: 0, name: 'Basic Booster', cost: 200, speedBonus: 0.10, desc: '+10% top speed. Bolt-on fins.' },
  { id: 1, name: 'Turbo Booster', cost: 500, speedBonus: 0.25, desc: '+25% top speed. Aftermarket exhaust.' },
  { id: 2, name: 'Nitro System', cost: 1000, speedBonus: 0.50, desc: '+50% top speed. Full NOS kit.' },
  { id: 3, name: 'Basic GPS', cost: 300, hasGPS: true, gpsRange: 30, desc: 'Shows treasure direction underwater.' },
  { id: 4, name: 'Fish Finder GPS', cost: 700, hasGPS: true, gpsRange: 60, desc: 'Shows treasure direction + distance.' },
];

export const ACHIEVEMENTS = [
  { id: 'gay_fish', name: 'Gay Fish Found', desc: 'You found the legendary Gay Fish!' },
  { id: 'mega_gay_fish', name: 'Mega Gay Fish', desc: 'Two Gay Fish in a row?! Incredible!' },
  { id: 'baby_eel', name: 'Baby Eel Found', desc: 'Congratulations, goo-goo ga-ga!' },
  { id: 'rubber_duck', name: 'Rubber Duck', desc: 'Quack.' },
  { id: 'golden_boot', name: 'Golden Boot', desc: 'You found a golden boot. Why?' },
  { id: 'kraken', name: 'Kraken Hunter', desc: 'You caught a Kraken. Brave.' },
  { id: 'iron_lung_win', name: 'Iron Lung Survivor', desc: 'You found the skeleton and survived!' },
  { id: 'eel_flash', name: 'Eel Slayer', desc: 'You flashed a monster eel!' },
  { id: 'full_dex', name: 'Master Angler', desc: 'Caught every single fish!' },
];

const RARITY_W = { common: 50, uncommon: 25, rare: 10, legendary: 2 };
export const RARITY_COLORS = { common: '#aaaaaa', uncommon: '#44cc44', rare: '#4488ff', legendary: '#ffaa00' };

export function initFishing() {
  G.fishing = {
    coins: 0,
    ownedRods: [0],
    equippedRod: 0,
    caughtFish: {},
    tank: [],
    tankCapacity: 10,
    grindTimer: 0,
    grindRate: 1.2,
    taxRate: 0.15,
    totalTax: 0,
    state: 'idle',
    timer: 0,
    currentFish: null,
    currentSize: 0,
    message: '',
    messageTimer: 0,
    shopCursor: 0,
    shopTab: 0,
    dexCursor: 0,
    ownedUpgrades: [],
    upgrades: { speedBonus: 0, hasGPS: false, gpsRange: 0 },
    lastCaughtFish: null,
    reelProgress: 0,
    reelDecay: 0.4,
    biteTimer: 0,
  };
}

export function unlockAchievement(id) {
  if (!G.achievements) G.achievements = {};
  if (!G.achievements[id]) {
    G.achievements[id] = true;
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach && G.fishing) {
      G.fishing.message = '🏆 ' + ach.name + '!';
      G.fishing.messageTimer = 3;
    }
  }
}

export function startFishing() {
  const f = G.fishing;
  if (f.state !== 'idle') return;
  if (f.tank.length >= f.tankCapacity) {
    f.message = 'Tank full! Wait for the grinder.';
    f.messageTimer = 2;
    return;
  }
  const rod = RODS[f.equippedRod];
  const fish = pickFish(rod.luckBonus);
  f.state = 'casting';
  f.timer = 0.8;
  f.currentFish = fish;
  f.currentSize = 0;
  f.reelProgress = 0;
  f.message = 'Casting line...';
}

export function updateFishing(dt) {
  const f = G.fishing;
  if (f.messageTimer > 0) { f.messageTimer -= dt; if (f.messageTimer <= 0) f.message = ''; }

  if (f.state === 'casting') {
    f.timer -= dt;
    if (f.timer <= 0) {
      f.state = 'waiting';
      f.timer = 1.5 + Math.random() * 3;
      f.message = 'Waiting for a bite...';
    }
  } else if (f.state === 'waiting') {
    f.timer -= dt;
    if (f.timer <= 0) {
      f.state = 'bite';
      f.biteTimer = 4 + Math.random() * 3;
      f.reelProgress = 0;
      const rod = RODS[f.equippedRod];
      const caught = Math.random() < rod.catchRate;
      if (caught) {
        const fish = f.currentFish;
        const sz = fish.minSize + (fish.maxSize - fish.minSize) * (0.4 + Math.random() * 0.6);
        f.currentSize = Math.round(sz * 10) / 10;
        f.message = 'BITE! Mash SPACE to reel!';
      } else {
        f.currentSize = 0;
        f.message = 'BITE! Mash SPACE!';
      }
    }
  } else if (f.state === 'bite') {
    f.biteTimer -= dt;
    f.reelProgress -= f.reelDecay * dt;
    if (f.reelProgress < 0) f.reelProgress = 0;

    if (G.keys[' '] && !G.prev[' ']) {
      f.reelProgress += 0.12 + RODS[f.equippedRod].catchRate * 0.08;
      if (f.reelProgress > 1) f.reelProgress = 1;
    }

    if (f.reelProgress >= 1 && f.currentSize > 0) {
      let fish = f.currentFish;
      const lastCaught = f.lastCaughtFish;
      f.lastCaughtFish = fish.name;

      if (fish.name === 'Gay Fish' && lastCaught === 'Gay Fish') {
        fish = { id: 99, name: 'Mega Gay Fish', rarity: 'legendary', minSize: 5, maxSize: 12, value: 999, color: '#ff00ff' };
        f.lastCaughtFish = 'Mega Gay Fish';
        unlockAchievement('mega_gay_fish');
      }

      if (fish.name === 'Gay Fish') unlockAchievement('gay_fish');
      if (fish.name === 'Baby Eel') unlockAchievement('baby_eel');
      if (fish.name === 'Rubber Duck') unlockAchievement('rubber_duck');
      if (fish.name === 'Golden Boot') unlockAchievement('golden_boot');
      if (fish.name === 'Kraken') unlockAchievement('kraken');

      if (!f.caughtFish[fish.name]) f.caughtFish[fish.name] = { count: 0, bestSize: 0 };
      f.caughtFish[fish.name].count++;
      if (f.currentSize > f.caughtFish[fish.name].bestSize) f.caughtFish[fish.name].bestSize = f.currentSize;

      const val = Math.round(fish.value * (f.currentSize / fish.maxSize));
      f.tank.push({ fish, size: f.currentSize, value: val });
      f.state = 'caught';
      f.timer = 2.5;
      const msgs = {
        'Gay Fish': '🌈 Gay Fish! ' + f.currentSize + 'cm → tank 🌈',
        'Mega Gay Fish': '🌈🌈 MEGA GAY FISH!!! ' + f.currentSize + 'cm → tank 🌈🌈',
        'Baby Eel': 'A baby monster eel?! It\'s cute... for now. ' + f.currentSize + 'cm → tank',
        'Rubber Duck': 'Just a rubber duck. ' + f.currentSize + 'cm → tank',
        'Golden Boot': 'A golden boot! Fancy. ' + f.currentSize + 'cm → tank',
        'Ancient Trident': 'An ancient trident! ' + f.currentSize + 'cm → tank',
        'Ghost Fish': 'It\'s... transparent? ' + f.currentSize + 'cm → tank',
      };
      f.message = msgs[fish.name] || fish.name + '! ' + f.currentSize + 'cm → tank';
    } else if (f.biteTimer <= 0) {
      f.state = 'idle';
      f.message = f.currentSize > 0 ? 'Too slow! It got away!' : 'It got away...';
      f.messageTimer = 2;
      f.currentSize = 0;
    }
  } else if (f.state === 'caught') {
    f.timer -= dt;
    if (f.timer <= 0) { f.state = 'idle'; f.message = ''; }
  }

  if (f.tank.length > 0) {
    f.grindTimer -= dt;
    if (f.grindTimer <= 0) {
      f.grindTimer = f.grindRate;
      const item = f.tank.shift();
      const tax = Math.round(item.value * f.taxRate);
      const earned = item.value - tax;
      f.coins += earned;
      f.totalTax += tax;
      f.message = 'Ground ' + item.fish.name + ' → $' + earned + ' (taxed $' + tax + ')';
      f.messageTimer = 2;
    }
  } else {
    f.grindTimer = 0;
  }
}

function pickFish(luck) {
  const pool = FISH.map(f => {
    const base = RARITY_W[f.rarity] || 1;
    return f.rarity === 'rare' ? base + luck * 20 : f.rarity === 'legendary' ? base + luck * 12 : base;
  });
  const total = pool.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < FISH.length; i++) { r -= pool[i]; if (r <= 0) return FISH[i]; }
  return FISH[0];
}

export function buyRod(id) {
  const rod = RODS[id];
  const f = G.fishing;
  if (f.ownedRods.includes(id)) { f.equippedRod = id; return true; }
  if (f.coins >= rod.cost) {
    f.coins -= rod.cost;
    f.ownedRods.push(id);
    f.equippedRod = id;
    return true;
  }
  return false;
}

export function buyUpgrade(id) {
  const up = UPGRADES[id];
  const f = G.fishing;
  if (f.ownedUpgrades.includes(id)) return false;
  if (f.coins >= up.cost) {
    f.coins -= up.cost;
    f.ownedUpgrades.push(id);
    if (up.speedBonus) f.upgrades.speedBonus = Math.max(f.upgrades.speedBonus, up.speedBonus);
    if (up.hasGPS) { f.upgrades.hasGPS = true; f.upgrades.gpsRange = Math.max(f.upgrades.gpsRange, up.gpsRange); }
    return true;
  }
  return false;
}

export function getCompletion() {
  return Math.round((Object.keys(G.fishing.caughtFish).length / FISH.length) * 100);
}

export function rarityColor(r) { return RARITY_COLORS[r] || '#fff'; }
