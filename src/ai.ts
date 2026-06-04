import * as THREE from 'three';
import { TW, TSEG } from './shared';
import { G } from './shared';
import { updateBoat } from './boats';

export function updateAI(b, dt) {
  if (b.finished) return;

  const prevIdx = Math.floor((b._trackT || 0) * TSEG) % TSEG;
  const searchRadius = 100;
  let bestDist = Infinity, bestIdx = prevIdx;
  for (let i = prevIdx - searchRadius; i <= prevIdx + searchRadius; i++) {
    const idx = ((i % TSEG) + TSEG) % TSEG;
    const d = b.pos.distanceTo(G.trackPts[idx].pos);
    if (d < bestDist) { bestDist = d; bestIdx = idx; }
  }

  const lookahead = 60;
  const targetIdx = (bestIdx + lookahead) % TSEG;
  const targetPos = G.trackPts[targetIdx].pos.clone();
  const toTarget = targetPos.clone().sub(b.pos);
  toTarget.y = 0;

  const desiredHeading = Math.atan2(-toTarget.z, toTarget.x);
  let headingDiff = desiredHeading - b.heading;
  while (headingDiff > Math.PI) headingDiff -= Math.PI * 2;
  while (headingDiff < -Math.PI) headingDiff += Math.PI * 2;
  b.steer = Math.max(-1, Math.min(1, -headingDiff * 2));

  let diff = (b._trackT || 0) - (G.pBoat._trackT || 0);
  if (diff > 0.5) diff -= 1;
  if (diff < -0.5) diff += 1;
  const rubber = diff > 0 ? 0.92 : 1.08;
  b.throttle = rubber;

  if (b.turboCharges > 0 && Math.random() < 0.003 * dt * 60 && Math.abs(b.speed) > 30) {
    b.turboActive = true;
    G.audio.sfx('boost');
  }
  if (b.turboActive && b.turboCharges <= 0) {
    b.turboActive = false;
  }

  const evt = updateBoat(b, dt);
  if (evt === 'crash') G.audio.sfx('crash');
  if (evt === 'finish') {
    setTimeout(() => { if (G.state === 'RACING') G.state = 'RESULTS'; }, 2000);
  }
}
