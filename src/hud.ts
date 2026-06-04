import { G, BOATS } from './shared';
import { RODS, UPGRADES, FISH, ACHIEVEMENTS, getCompletion, rarityColor } from './fishing';

export const drawHUD = () => {
  const dpr = devicePixelRatio || 1;
  G.hudEl.width = innerWidth * dpr;
  G.hudEl.height = innerHeight * dpr;
  G.hudEl.style.width = innerWidth + 'px';
  G.hudEl.style.height = innerHeight + 'px';
  const c = G.hudCtx;
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.clearRect(0, 0, innerWidth, innerHeight);

  if (G.state === 'MENU') drawMenu(c, innerWidth, innerHeight);
  else if (G.state === 'SELECT') drawSelect(c, innerWidth, innerHeight);
  else if (G.state === 'COUNTDOWN') drawCount(c, innerWidth, innerHeight);
  else if (G.state === 'RACING') drawRace(c, innerWidth, innerHeight);
  else if (G.state === 'RESULTS') drawResults(c, innerWidth, innerHeight);
  else if (G.state === 'FREE_ROAM') drawFreeRoam(c, innerWidth, innerHeight);
  else if (G.state === 'SHOP') drawShop(c, innerWidth, innerHeight);
  else if (G.state === 'DEX') drawDex(c, innerWidth, innerHeight);
  else if (G.state === 'IRON_LUNG') drawIronLung(c, innerWidth, innerHeight);
  else if (G.state === 'ACHIEVEMENTS') drawAchievements(c, innerWidth, innerHeight);
  else if (G.state === 'UPDATES') drawUpdates(c, innerWidth, innerHeight);
}

const drawMenu = (c, w, h) => {
  const p = 0.5 + 0.5 * Math.sin(performance.now() * 0.003);
  c.shadowColor = 'rgba(0,150,255,0.6)';
  c.shadowBlur = 30;
  c.fillStyle = '#ffffff';
  c.font = 'bold 56px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('LOST', w / 2, h * 0.22);
  c.font = 'bold 76px Orbitron, monospace';
  c.fillText('CURRENTS', w / 2, h * 0.32);
  c.shadowBlur = 0;
  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '14px Rajdhani, sans-serif';
  c.fillText('3D ARCADE RACING & FISHING', w / 2, h * 0.40);
  c.fillStyle = 'rgba(255,255,255,' + p + ')';
  c.font = '20px Rajdhani, sans-serif';
  c.fillText('ENTER \u2014 Race  |  F \u2014 Free Roam  |  A \u2014 Achievements  |  U \u2014 Updates', w / 2, h * 0.50);
  c.fillStyle = 'rgba(255,80,80,' + (0.4 + 0.3 * Math.sin(performance.now() * 0.002)) + ')';
  c.font = '18px Rajdhani, sans-serif';
  c.fillText('I \u2014 IRON LUNG (Secret)', w / 2, h * 0.58);
  c.fillStyle = 'rgba(255,255,255,0.2)';
  c.font = '12px Rajdhani, sans-serif';
  c.fillText('WASD: Steer  |  Space: Turbo  |  E: Stand  |  G: Dive  |  B: Shop  |  D: Dex', w / 2, h * 0.68);

  c.fillStyle = G.testingMode ? 'rgba(255,200,0,0.8)' : 'rgba(255,255,255,0.15)';
  c.font = '13px Rajdhani, sans-serif';
  c.fillText('T \u2014 Testing Mode: ' + (G.testingMode ? 'ON' : 'OFF'), w / 2, h * 0.78);
  if (G.testingMode) {
    c.fillStyle = 'rgba(255,200,0,0.5)';
    c.font = '10px Rajdhani, sans-serif';
    c.fillText('N: Meg  |  K: Sub44  |  O: Skel  |  P: Hand  |  U: Sub  |  J: Eel  |  C: Cam', w / 2, h * 0.83);
  }
}

const drawSelect = (c, w, h) => {
  c.fillStyle = 'rgba(0,20,40,0.85)';
  c.fillRect(0, 0, w, h);
  c.fillStyle = '#ffffff';
  c.font = 'bold 30px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('SELECT YOUR BOAT', w / 2, h * 0.05);

  const tiers = ['SPEED', 'HANDLING', 'ACCELERATION'];
  const tierColors = ['#ff4444', '#44aaff', '#44ff88'];
  const cols = 5, rows = 3;
  const cw = 160, ch = 160, gapX = 16, gapY = 10;
  const gridW = cols * cw + (cols - 1) * gapX;
  const sx = (w - gridW) / 2;
  const startY = h * 0.10;

  for (let row = 0; row < rows; row++) {
    const rowY = startY + row * (ch + gapY + 18);
    c.fillStyle = tierColors[row];
    c.font = 'bold 13px Orbitron, monospace';
    c.textAlign = 'left';
    c.fillText(tiers[row], sx, rowY + 12);

    for (let col = 0; col < cols; col++) {
      const i = row * cols + col;
      if (i >= BOATS.length) continue;
      const bc = BOATS[i];
      const cx = sx + col * (cw + gapX);
      const cy = rowY + 18;
      const sel = i === G.boatIdx;

      c.fillStyle = sel ? 'rgba(0,150,255,0.25)' : 'rgba(255,255,255,0.05)';
      c.strokeStyle = sel ? '#00aaff' : 'rgba(255,255,255,0.12)';
      c.lineWidth = sel ? 2 : 1;
      c.fillRect(cx, cy, cw, ch);
      c.strokeRect(cx, cy, cw, ch);

      if (G.boatThumbnails[i]) {
        const img = new Image();
        img.src = G.boatThumbnails[i];
        c.save();
        c.beginPath();
        c.rect(cx + 4, cy + 4, cw - 8, ch - 52);
        c.clip();
        c.drawImage(img, cx + 4, cy + 4, cw - 8, ch - 52);
        c.restore();
      } else {
        c.fillStyle = '#' + bc.color.toString(16).padStart(6, '0');
        c.fillRect(cx + 30, cy + 20, cw - 60, 40);
      }

      c.fillStyle = '#fff';
      c.font = 'bold 11px Rajdhani, sans-serif';
      c.textAlign = 'center';
      c.fillText(bc.name, cx + cw / 2, cy + ch - 38);

      c.fillStyle = 'rgba(255,255,255,0.4)';
      c.font = '9px Rajdhani, sans-serif';
      c.fillText('SPD ' + bc.maxSpd + '  ACC ' + bc.accel + '  HDL ' + Math.round(bc.turn * 1000), cx + cw / 2, cy + ch - 22);
      c.fillText('Jets: ' + bc.nozzles + '  Fin: ' + Math.round(bc.finScale * 100) + '%  ' + (bc.hull || 'standard'), cx + cw / 2, cy + ch - 10);
    }
  }

  c.fillStyle = 'rgba(255,255,255,' + (0.4 + 0.3 * Math.sin(performance.now() * 0.003)) + ')';
  c.font = '14px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('\u2190 \u2191 \u2192 \u2193 Select  |  ENTER Confirm', w / 2, h * 0.95);
}

const drawCount = (c, w, h) => {
  if (G.countVal < 0) return;
  const disp = G.countVal > 0 ? String(G.countVal) : 'GO!';
  let a = 1;
  const t = G.countTimer;
  if (G.countVal > 0) { a = t < 0.15 ? t / 0.15 : t > 0.85 ? 0 : 1; }
  else { a = t < 0.15 ? t / 0.15 : t > 0.6 ? (0.8 - t) / 0.2 : 1; }
  if (a <= 0) return;
  c.save();
  c.globalAlpha = a;
  c.shadowColor = 'rgba(255,255,255,0.8)';
  c.shadowBlur = 20;
  c.fillStyle = '#ffffff';
  c.font = 'bold 110px Orbitron, monospace';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(disp, w / 2, h * 0.38);
  c.restore();
}

const drawRace = (c, w, h) => {
  if (!G.pBoat) return;
  const p = G.pBoat;
  const sf = p.speed / p.maxSpd;

  const scx = w * 0.11, scy = h - 80, sr = 45;
  c.strokeStyle = 'rgba(255,255,255,0.2)';
  c.lineWidth = 3;
  c.beginPath();
  c.arc(scx, scy, sr, Math.PI * 0.75, Math.PI * 2.25);
  c.stroke();

  c.strokeStyle = sf > 0.8 ? '#ff4444' : sf > 0.5 ? '#ffaa00' : '#00ccff';
  c.lineWidth = 4;
  c.lineCap = 'round';
  c.beginPath();
  c.arc(scx, scy, sr, Math.PI * 0.75, Math.PI * 0.75 + sf * Math.PI * 1.5);
  c.stroke();

  c.fillStyle = '#fff';
  c.font = 'bold 20px Orbitron, monospace';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(Math.round(p.speed * 1.4), scx, scy - 3);
  c.fillStyle = 'rgba(255,255,255,0.4)';
  c.font = '8px Orbitron, monospace';
  c.fillText('MPH', scx, scy + 16);

  const tx = w * 0.11, ty = h - 135;
  c.fillStyle = 'rgba(0,0,0,0.35)';
  c.fillRect(tx - 35, ty, 70, 8);
  const turboFill = Math.min(1, p.turboCharges / 10);
  if (turboFill > 0) {
    c.fillStyle = p.turboActive ? '#ffcc00' : '#ff8800';
    c.shadowColor = 'rgba(255,130,0,0.5)';
    c.shadowBlur = 6;
    c.fillRect(tx - 35 + 2, ty + 1, 66 * turboFill, 6);
  }
  c.shadowBlur = 0;
  c.fillStyle = 'rgba(255,255,255,0.4)';
  c.font = '7px Orbitron, monospace';
  c.fillText('TURBO', tx, ty - 4);

  c.fillStyle = '#fff';
  c.font = 'bold 26px Orbitron, monospace';
  c.textAlign = 'right';
  c.textBaseline = 'top';
  c.fillText('LAP ' + Math.min(p.lap + 1, 3) + '/3', w - 20, 20);

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.fillText(p.name, w - 20, 52);

  const entries = [{ name: p.name, t: p.t, lap: p.lap, col: '#00ccff', me: true }];
  G.aiList.forEach(a => entries.push({ name: a.name, t: a.t, lap: a.lap, col: '#' + a.color.toString(16).padStart(6, '0'), me: false }));
  entries.sort((a, b) => b.lap !== a.lap ? b.lap - a.lap : b.t - a.t);

  const ex = w - 20, ey = 72;
  c.fillStyle = 'rgba(0,0,0,0.3)';
  c.fillRect(ex - 175, ey - 5, 190, entries.length * 20 + 5);
  entries.forEach((e, i) => {
    const y = ey + i * 20;
    const medal = ['1ST', '2ND', '3RD'][i] || (i + 1) + 'TH';
    c.fillStyle = e.me ? '#00ccff' : 'rgba(255,255,255,0.4)';
    c.font = '9px Orbitron, monospace';
    c.textAlign = 'right';
    c.fillText(medal, ex - 5, y + 3);
    c.fillStyle = e.me ? '#00ccff' : e.col;
    c.font = (e.me ? 'bold ' : '') + '12px Rajdhani, sans-serif';
    c.fillText((e.me ? '>' : ' ') + e.name, ex - 10, y + 3);
  });

  const m = Math.floor(G.raceTime / 60), s = Math.floor(G.raceTime % 60), ms = Math.floor((G.raceTime % 1) * 100);
  c.fillStyle = 'rgba(255,255,255,0.5)';
  c.font = '13px Orbitron, monospace';
  c.textAlign = 'center';
  c.textBaseline = 'bottom';
  c.fillText(m + ':' + (s < 10 ? '0' : '') + s + '.' + (ms < 10 ? '0' : '') + ms, w / 2, h - 10);

  if (p.finished) {
    c.fillStyle = 'rgba(0,0,0,0.6)';
    c.fillRect(0, 0, w, h);
    c.shadowColor = 'rgba(0,200,255,0.5)';
    c.shadowBlur = 20;
    c.fillStyle = '#ffffff';
    c.font = 'bold 52px Orbitron, monospace';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('FINISH!', w / 2, h * 0.35);
    c.shadowBlur = 0;
    c.font = '22px Rajdhani, sans-serif';
    c.fillText('Time: ' + m + ':' + (s < 10 ? '0' : '') + s + '.' + (ms < 10 ? '0' : '') + ms, w / 2, h * 0.45);
  }

  if (G.state === 'RESULTS') drawResults(c, w, h);
}

const drawResults = (c, w, h) => {
  c.fillStyle = 'rgba(0,10,20,0.85)';
  c.fillRect(0, 0, w, h);
  c.shadowColor = 'rgba(0,150,255,0.5)';
  c.shadowBlur = 15;
  c.fillStyle = '#ffffff';
  c.font = 'bold 36px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('RACE RESULTS', w / 2, h * 0.1);
  c.shadowBlur = 0;

  const sy = h * 0.18, rh = 50;
  const entries = [{ name: G.pBoat.name, lap: G.pBoat.lap, col: '#00ccff', me: true }];
  G.aiList.forEach(a => entries.push({ name: a.name, lap: a.lap, col: '#' + a.color.toString(16).padStart(6, '0'), me: false }));
  entries.sort((a, b) => b.lap - a.lap);

  entries.forEach((e, i) => {
    const y = sy + i * rh;
    c.fillStyle = e.me ? 'rgba(0,150,255,0.15)' : 'rgba(255,255,255,0.05)';
    c.fillRect(w * 0.25, y, w * 0.5, rh - 5);
    const medal = ['1ST', '2ND', '3RD', '4TH'][i];
    c.fillStyle = ['#ffd700', '#c0c0c0', '#cd7f32', '#888'][i];
    c.font = 'bold 18px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText(medal, w * 0.32, y + rh / 2);
    c.fillStyle = e.me ? '#00ccff' : e.col;
    c.font = (e.me ? 'bold ' : '') + '16px Rajdhani, sans-serif';
    c.textAlign = 'left';
    c.fillText(e.name, w * 0.42, y + rh / 2);
    c.fillStyle = 'rgba(255,255,255,0.4)';
    c.font = '13px Rajdhani, sans-serif';
    c.textAlign = 'right';
    c.fillText('Lap ' + e.lap + '/3', w * 0.72, y + rh / 2);
  });

  c.globalAlpha = 0.4 + 0.6 * Math.sin(performance.now() * 0.003);
  c.fillStyle = '#fff';
  c.font = '16px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('Press ENTER to return', w / 2, h * 0.85);
  c.globalAlpha = 1;
}

const drawFreeRoam = (c, w, h) => {
  const f = G.fishing;
  const rod = RODS[f.equippedRod];

  c.fillStyle = '#fff';
  c.font = 'bold 16px Orbitron, monospace';
  c.textAlign = 'left';
  c.fillText('$' + f.coins, 20, 30);
  c.fillStyle = 'rgba(255,255,255,0.5)';
  c.font = '12px Rajdhani, sans-serif';
  c.fillText(rod.name, 20, 50);

  const tankFill = f.tank.length / f.tankCapacity;
  c.fillStyle = 'rgba(0,0,0,0.4)'; c.fillRect(20, 60, 120, 10);
  c.fillStyle = f.tank.length > 0 ? '#44aaff' : 'rgba(255,255,255,0.15)';
  c.fillRect(20, 60, 120 * tankFill, 10);
  c.fillStyle = 'rgba(255,255,255,0.5)'; c.font = '9px Rajdhani, sans-serif';
  c.fillText('Tank: ' + f.tank.length + '/' + f.tankCapacity, 20, 82);
  if (f.tank.length > 0) {
    c.fillStyle = 'rgba(255,255,255,0.35)'; c.font = '9px Rajdhani, sans-serif';
    c.fillText('Grinding in ' + Math.ceil(f.grindTimer * 10) / 10 + 's...', 20, 96);
  }

  if (G.diving) {
    const oxFill = G.oxygen / G.maxOxygen;
    c.fillStyle = 'rgba(0,0,0,0.5)'; c.fillRect(w - 170, 20, 150, 14);
    c.fillStyle = oxFill > 0.3 ? '#44ccff' : '#ff4444'; c.fillRect(w - 168, 22, 146 * oxFill, 10);
    c.fillStyle = '#fff'; c.font = 'bold 10px Orbitron, monospace'; c.textAlign = 'right';
    c.fillText('O\u2082 ' + Math.ceil(G.oxygen) + '%', w - 24, 31);

    const dist = Math.sqrt(G.diverPos.x * G.diverPos.x + G.diverPos.z * G.diverPos.z);
    const tFill = dist / G.tetherMaxDist;
    c.fillStyle = 'rgba(0,0,0,0.5)'; c.fillRect(w - 170, 40, 150, 14);
    c.fillStyle = tFill < 0.7 ? '#44ff88' : tFill < 0.9 ? '#ffaa00' : '#ff4444';
    c.fillRect(w - 168, 42, 146 * tFill, 10);
    c.fillStyle = '#fff'; c.font = 'bold 10px Orbitron, monospace';
    c.fillText('Tether ' + Math.round(dist) + '/' + G.tetherMaxDist + 'm', w - 24, 51);

    c.fillStyle = 'rgba(0,40,80,0.6)'; c.fillRect(w - 170, 60, 150, 18);
    c.fillStyle = '#88ddff'; c.font = '10px Rajdhani, sans-serif'; c.textAlign = 'right';
    c.fillText('Loot nearby: ' + (G.underwaterLoot ? G.underwaterLoot.filter(l => !l.collected).length : 0), w - 24, 74);

    if (G.megalodon) {
      c.fillStyle = 'rgba(180,0,0,0.8)';
      c.font = 'bold 18px Orbitron, monospace'; c.textAlign = 'center';
      c.fillText('! MEGALODON DETECTED !', w / 2, h * 0.15);
      c.fillStyle = 'rgba(255,100,100,0.6)';
      c.font = '12px Rajdhani, sans-serif';
      c.fillText('A massive shadow passes through the deep...', w / 2, h * 0.15 + 22);
    }
    if (G.giantHand) {
      c.fillStyle = 'rgba(100,0,0,0.9)';
      c.font = 'bold 22px Orbitron, monospace'; c.textAlign = 'center';
      c.fillText('SOMETHING IS GRABBING YOU', w / 2, h * 0.25);
      c.fillStyle = 'rgba(200,80,80,0.7)';
      c.font = '13px Rajdhani, sans-serif';
      c.fillText('A massive hand rises from the abyss...', w / 2, h * 0.25 + 24);
    }
  }

  if (G.megAttack) {
    const phase = G.megAttack.phase;
    c.fillStyle = 'rgba(180,0,0,0.9)';
    c.font = 'bold 28px Orbitron, monospace'; c.textAlign = 'center';
    if (phase === 'spotted') c.fillText('A MEGALODON HAS SPOTTED YOU!', w / 2, h * 0.2);
    else if (phase === 'stalking') c.fillText('MASH SPACE TO ESCAPE!', w / 2, h * 0.2);
    else if (phase === 'charging') c.fillText("IT'S TOO LATE...", w / 2, h * 0.2);
    else if (phase === 'catch') c.fillText('YOU HAVE BEEN EATEN.', w / 2, h * 0.2);
    c.fillStyle = 'rgba(255,100,100,0.5)';
    c.font = '13px Rajdhani, sans-serif';
    if (phase === 'spotted') c.fillText('Mash SPACE to swim away!', w / 2, h * 0.2 + 30);
    else if (phase === 'stalking') c.fillText('Keep mashing! The beast approaches...', w / 2, h * 0.2 + 30);
  }

  if (f.message) {
    const isCatch = f.state === 'caught';
    c.fillStyle = isCatch ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)';
    const mw = Math.min(400, c.measureText(f.message).width + 40);
    c.fillRect(w / 2 - mw / 2, h * 0.35, mw, 36);
    c.fillStyle = isCatch ? '#ffcc00' : '#fff';
    c.font = 'bold 16px Rajdhani, sans-serif'; c.textAlign = 'center';
    c.fillText(f.message, w / 2, h * 0.35 + 24);

    if (f.state === 'bite') {
      const barW = 200, barH = 14;
      const bx = w / 2 - barW / 2, by = h * 0.35 + 44;
      c.fillStyle = 'rgba(0,0,0,0.5)';
      c.fillRect(bx, by, barW, barH);
      c.fillStyle = f.reelProgress > 0.7 ? '#44ff88' : f.reelProgress > 0.3 ? '#ffcc00' : '#ff4444';
      c.fillRect(bx + 2, by + 2, (barW - 4) * f.reelProgress, barH - 4);
      c.fillStyle = '#fff';
      c.font = 'bold 10px Orbitron, monospace';
      c.fillText('MASH SPACE!', w / 2, by + barH + 14);
    }
  }

  c.fillStyle = 'rgba(255,255,255,0.25)';
  c.font = '11px Rajdhani, sans-serif'; c.textAlign = 'center';
  if (G.testingMode) {
    c.fillStyle = 'rgba(255,200,0,0.7)';
    c.font = 'bold 10px Orbitron, monospace';
    c.fillText('TESTING MODE | N: Meg  K: Sub  O: Skel  P: Hand  C: Cam', w / 2, h - 30);
  }
  if (G.diving) {
    c.fillText('WASD/Arrows: Swim  |  Space: Up  |  Shift: Down  |  G: Surface  |  B: Shop  |  D: Dex', w / 2, h - 15);
  } else if (G.walkingMode) {
    c.fillText('WASD/Arrows: Walk  |  E: Sit  |  G: Dive  |  F: Fish  |  B: Shop  |  D: Dex', w / 2, h - 15);
  } else {
    c.fillText('WASD/Arrows: Drive  |  E: Stand  |  F: Fish  |  V: POV  |  B: Shop  |  D: Dex', w / 2, h - 15);
  }
}

const drawShop = (c, w, h) => {
  c.fillStyle = 'rgba(0,20,40,0.92)';
  c.fillRect(0, 0, w, h);

  c.fillStyle = '#ff6644';
  c.font = 'bold 28px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('BAIT & TACKLE', w / 2, 40);

  c.fillStyle = 'rgba(255,255,255,0.2)';
  c.font = 'italic 11px Rajdhani, sans-serif';
  c.fillText('All purchases are 100% tax-free. We definitely pay all our taxes. Wink.', w / 2, 60);

  const f = G.fishing;
  c.fillStyle = '#ffcc00';
  c.font = 'bold 14px Orbitron, monospace';
  c.textAlign = 'left';
  c.fillText('Your cash: $' + f.coins, 40, 85);

  const tabY = 95;
  ['FISHING RODS', 'BOAT UPGRADES'].forEach((label, i) => {
    const tabW = 180;
    const tabX = w / 2 - 190 + i * 200;
    c.fillStyle = f.shopTab === i ? 'rgba(0,150,255,0.3)' : 'rgba(255,255,255,0.05)';
    c.fillRect(tabX, tabY, tabW, 28);
    c.strokeStyle = f.shopTab === i ? '#00aaff' : 'rgba(255,255,255,0.15)';
    c.lineWidth = f.shopTab === i ? 2 : 1;
    c.strokeRect(tabX, tabY, tabW, 28);
    c.fillStyle = f.shopTab === i ? '#fff' : 'rgba(255,255,255,0.4)';
    c.font = 'bold 12px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText(label, tabX + tabW / 2, tabY + 19);
  });

  c.fillStyle = 'rgba(255,255,255,0.2)';
  c.font = '10px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('TAB to switch', w / 2, tabY + 42);

  const sx = 40, sy = 145, rh = 50;
  const items = f.shopTab === 0 ? RODS : UPGRADES;
  items.forEach((item, i) => {
    const y = sy + i * rh;
    const sel = i === f.shopCursor;
    const owned = f.shopTab === 0 ? f.ownedRods.includes(i) : f.ownedUpgrades.includes(i);
    const equipped = f.shopTab === 0 && i === f.equippedRod;

    c.fillStyle = sel ? 'rgba(0,150,255,0.2)' : 'rgba(255,255,255,0.03)';
    c.fillRect(sx, y, w - 80, rh - 4);
    if (sel) { c.strokeStyle = '#00aaff'; c.lineWidth = 2; c.strokeRect(sx, y, w - 80, rh - 4); }

    c.fillStyle = equipped ? '#00ccff' : owned ? '#44cc44' : '#fff';
    c.font = 'bold 13px Rajdhani, sans-serif';
    c.textAlign = 'left';
    c.fillText(item.name + (equipped ? ' [EQUIPPED]' : owned ? ' [OWNED]' : ''), sx + 10, y + 17);

    c.fillStyle = 'rgba(255,255,255,0.5)';
    c.font = '10px Rajdhani, sans-serif';
    c.fillText(item.desc, sx + 10, y + 32);

    c.textAlign = 'right';
    if (f.shopTab === 0) {
      c.fillStyle = 'rgba(255,255,255,0.4)';
      c.font = '10px Rajdhani, sans-serif';
      c.fillText('Catch: ' + Math.round(item.catchRate * 100) + '%  Luck: +' + Math.round(item.luckBonus * 100) + '%', sx + w - 90, y + 17);
    } else {
      c.fillStyle = 'rgba(255,255,255,0.4)';
      c.font = '10px Rajdhani, sans-serif';
      c.fillText(item.speedBonus ? 'Speed: +' + Math.round(item.speedBonus * 100) + '%' : 'GPS Range: ' + item.gpsRange + 'm', sx + w - 90, y + 17);
    }
    if (!owned) {
      c.fillStyle = f.coins >= item.cost ? '#ffcc00' : '#ff4444';
      c.font = 'bold 12px Rajdhani, sans-serif';
      c.fillText('$' + item.cost, sx + w - 90, y + 32);
    }
  });

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('\u2191\u2193 Navigate  |  TAB Switch  |  ENTER Buy/Equip  |  B Close', w / 2, h - 15);
}

const drawDex = (c, w, h) => {
  c.fillStyle = 'rgba(0,20,40,0.92)';
  c.fillRect(0, 0, w, h);

  c.fillStyle = '#44cc88';
  c.font = 'bold 28px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('FISH DEX', w / 2, 45);

  const comp = getCompletion();
  c.fillStyle = 'rgba(255,255,255,0.4)';
  c.font = '13px Rajdhani, sans-serif';
  c.fillText('Completion: ' + comp + '%  (' + Object.keys(G.fishing.caughtFish).length + '/' + FISH.length + ')', w / 2, 68);

  const f = G.fishing;
  const sx = 40, sy = 82, rh = 42;
  const visibleStart = Math.max(0, f.dexCursor - 10);
  const visibleEnd = Math.min(FISH.length, visibleStart + 12);

  FISH.slice(visibleStart, visibleEnd).forEach((fish, vi) => {
    const i = visibleStart + vi;
    const y = sy + vi * rh;
    const sel = i === f.dexCursor;
    const caught = !!f.caughtFish[fish.id];

    c.fillStyle = sel ? 'rgba(0,150,255,0.15)' : 'rgba(255,255,255,0.02)';
    c.fillRect(sx, y, w - 80, rh - 2);
    if (sel) { c.strokeStyle = '#00aaff'; c.lineWidth = 1; c.strokeRect(sx, y, w - 80, rh - 2); }

    if (caught && fish.name === 'Gay Fish') {
      const hue = (performance.now() * 0.001) % 1;
      c.fillStyle = `hsl(${hue * 360}, 80%, 60%)`;
    } else if (caught && fish.name === 'Mega Gay Fish') {
      const hue = (performance.now() * 0.002) % 1;
      c.fillStyle = `hsl(${hue * 360}, 100%, 50%)`;
    } else if (caught && fish.name === 'Baby Eel') {
      c.fillStyle = '#44ff44';
    } else if (caught && fish.name === 'Ghost Fish') {
      c.fillStyle = 'rgba(200,220,255,0.7)';
    } else {
      c.fillStyle = caught ? rarityColor(fish.rarity) : 'rgba(255,255,255,0.2)';
    }
    c.font = 'bold 13px Rajdhani, sans-serif';
    c.textAlign = 'left';
    c.fillText(caught ? fish.name : '???', sx + 10, y + 16);

    if (caught) {
      const data = f.caughtFish[fish.id];
      c.fillStyle = 'rgba(255,255,255,0.4)';
      c.font = '10px Rajdhani, sans-serif';
      c.fillText(fish.rarity.toUpperCase() + '  |  ' + fish.minSize + '-' + fish.maxSize + 'cm  |  $' + fish.value, sx + 10, y + 32);
      c.textAlign = 'right';
      c.fillText('Caught: ' + data.count + '  Best: ' + data.bestSize + 'cm', sx + w - 90, y + 16);
    } else {
      c.fillStyle = 'rgba(255,255,255,0.15)';
      c.font = '10px Rajdhani, sans-serif';
      c.fillText(fish.rarity.toUpperCase(), sx + 10, y + 32);
    }
  });

  if (visibleStart > 0) {
    c.fillStyle = 'rgba(255,255,255,0.3)';
    c.font = '12px Rajdhani, sans-serif';
    c.textAlign = 'center';
    c.fillText('\u25B2 More', w / 2, sy - 5);
  }
  if (visibleEnd < FISH.length) {
    c.fillStyle = 'rgba(255,255,255,0.3)';
    c.font = '12px Rajdhani, sans-serif';
    c.textAlign = 'center';
    c.fillText('\u25BC More', w / 2, sy + 12 * rh + 12);
  }

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('\u2191\u2193 Scroll  |  D Close', w / 2, h - 15);
}

const drawIronLung = (c, w, h) => {
  c.fillStyle = 'rgba(200,0,0,0.15)';
  c.fillRect(0, 0, w, h);

  c.fillStyle = '#ff2200';
  c.font = 'bold 22px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('IRON LUNG', w / 2, 30);

  if (G.sub) {
    const depth = Math.abs(G.sub.position.y);
    c.fillStyle = '#fff';
    c.font = 'bold 14px Orbitron, monospace';
    c.textAlign = 'left';
    c.fillText('DEPTH: ' + Math.round(depth) + 'm', 20, 60);

    c.fillStyle = G.xrayActive ? '#00ff88' : '#ff4444';
    c.fillText('X-RAY: ' + (G.xrayActive ? 'ACTIVE' : 'OFF'), 20, 85);
  }

  if (G.ironLungState === 'found') {
    c.fillStyle = 'rgba(255,0,0,0.8)';
    c.font = 'bold 28px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText('THE SKELETON IS ALIVE...', w / 2, h * 0.3);
  }
  if (G.ironLungState === 'eaten') {
    c.fillStyle = 'rgba(255,0,0,0.9)';
    c.font = 'bold 28px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText('THE BEAST CONSUMED YOU', w / 2, h * 0.3);
  }

  if (G.monsterEel) {
    c.fillStyle = 'rgba(255,0,0,0.9)';
    c.font = 'bold 22px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText('SOMETHING APPROACHES!', w / 2, h * 0.2);
    c.font = '14px Rajdhani, sans-serif';
    c.fillText('Press ANY KEY to flash the beast!', w / 2, h * 0.2 + 28);
  }

  if (G.jumpscareTimer > 0) {
    const jt = G.jumpscareTimer;
    const flash = Math.sin(jt * 20) * 0.3 + 0.5;
    c.fillStyle = `rgba(180,0,0,${flash})`;
    c.fillRect(0, 0, w, h);

    c.fillStyle = '#ff0000';
    c.shadowColor = '#ff0000';
    c.shadowBlur = 40;
    c.font = 'bold 40px Orbitron, monospace';
    c.textAlign = 'center';
    c.fillText('👀', w / 2 - 80, h * 0.35);
    c.fillText('👀', w / 2 + 80, h * 0.35);
    c.shadowBlur = 0;

    c.fillStyle = 'rgba(255,255,255,0.9)';
    c.font = 'bold 14px Orbitron, monospace';
    c.fillText('Press ANY KEY to flash!', w / 2, h * 0.55);

    const shakeX = (Math.random() - 0.5) * 20;
    const shakeY = (Math.random() - 0.5) * 20;
    c.setTransform(1, 0, 0, 1, shakeX, shakeY);
  } else {
    c.setTransform(1, 0, 0, 1, 0, 0);
  }

  if (G.xrayActive) {
    c.fillStyle = 'rgba(255,255,255,0.7)';
    c.font = 'bold 10px Orbitron, monospace';
    c.textAlign = 'left';
    c.fillText('X-RAY ACTIVE', 20, 105);
  }

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('WASD: Move  |  Space/Shift: Up/Down  |  X: X-Ray  |  ESC: Exit', w / 2, h - 15);
}

const drawAchievements = (c, w, h) => {
  c.fillStyle = 'rgba(0,20,40,0.92)';
  c.fillRect(0, 0, w, h);

  c.fillStyle = '#ffcc00';
  c.font = 'bold 28px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('ACHIEVEMENTS', w / 2, 45);

  const unlocked = G.achievements ? Object.keys(G.achievements).length : 0;
  c.fillStyle = 'rgba(255,255,255,0.4)';
  c.font = '13px Rajdhani, sans-serif';
  c.fillText(unlocked + '/' + ACHIEVEMENTS.length + ' Unlocked', w / 2, 68);

  const sx = w * 0.15, sy = 85, rh = 42;
  ACHIEVEMENTS.forEach((ach, i) => {
    const y = sy + i * rh;
    const isUnlocked = G.achievements && G.achievements[ach.id];

    c.fillStyle = isUnlocked ? 'rgba(255,200,0,0.12)' : 'rgba(255,255,255,0.02)';
    c.fillRect(sx, y, w * 0.7, rh - 4);
    if (isUnlocked) { c.strokeStyle = 'rgba(255,200,0,0.3)'; c.lineWidth = 1; c.strokeRect(sx, y, w * 0.7, rh - 4); }

    c.fillStyle = isUnlocked ? '#ffcc00' : 'rgba(255,255,255,0.15)';
    c.font = 'bold 13px Rajdhani, sans-serif';
    c.textAlign = 'left';
    c.fillText(isUnlocked ? ach.name : '???', sx + 12, y + 16);

    c.fillStyle = isUnlocked ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)';
    c.font = '10px Rajdhani, sans-serif';
    c.fillText(isUnlocked ? ach.desc : 'Locked', sx + 12, y + 30);
  });

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('A Close', w / 2, h - 15);
}

const drawUpdates = (c, w, h) => {
  c.fillStyle = 'rgba(0,20,40,0.92)';
  c.fillRect(0, 0, w, h);

  c.fillStyle = '#44ccff';
  c.font = 'bold 28px Orbitron, monospace';
  c.textAlign = 'center';
  c.fillText('UPDATE LOG', w / 2, 45);

  const updates = [
    { version: '1.0', date: 'Day 1', items: ['Initial release', 'Racing mode with 5 boats', 'Track with boosts and ramps', 'AI opponents', 'HUD with speed/lap/timer'] },
    { version: '1.1', date: 'Day 1', items: ['Modular file structure', 'Boost pickups with yellow/red variants', 'Jet flame visual effects', 'Free roam ocean mode'] },
    { version: '1.2', date: 'Day 2', items: ['15 unique boats across 3 tiers', 'Boat upgrades shop', 'Fish Dex system', 'Achievement system', 'Testing mode'] },
    { version: '1.3', date: 'Day 2', items: ['Iron Lung secret mode', 'Submarine with X-ray camera', 'Monster eel boss fight', 'Blood ocean effect'] },
    { version: '1.4', date: 'Day 3', items: ['Fishing with space mashing', 'Gay Fish + Mega Gay Fish easter egg', 'Baby Eel catch', 'Treasure chests underwater', 'Giant hand grab event'] },
    { version: '1.5', date: 'Day 3', items: ['Visible fishing rod', 'Reel progress bar', 'Open ocean with islands', 'Scuba diving with oxygen', 'Sharks underwater'] },
  ];

  const sx = w * 0.1, sy = 70, rh = 65;
  updates.forEach((update, i) => {
    const y = sy + i * rh;
    c.fillStyle = 'rgba(0,150,255,0.08)';
    c.fillRect(sx, y, w * 0.8, rh - 4);

    c.fillStyle = '#44ccff';
    c.font = 'bold 14px Orbitron, monospace';
    c.textAlign = 'left';
    c.fillText('v' + update.version, sx + 10, y + 18);

    c.fillStyle = 'rgba(255,255,255,0.4)';
    c.font = '11px Rajdhani, sans-serif';
    c.textAlign = 'right';
    c.fillText(update.date, sx + w * 0.8 - 10, y + 18);

    c.fillStyle = 'rgba(255,255,255,0.6)';
    c.font = '11px Rajdhani, sans-serif';
    c.textAlign = 'left';
    update.items.forEach((item, j) => {
      c.fillText('• ' + item, sx + 15, y + 32 + j * 14);
    });
  });

  c.fillStyle = 'rgba(255,255,255,0.3)';
  c.font = '11px Rajdhani, sans-serif';
  c.textAlign = 'center';
  c.fillText('U Close', w / 2, h - 15);
}
