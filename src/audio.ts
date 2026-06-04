export const HydroAudio = (function() {
  const NOTES = {
    A2: 110, C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196,
    A3: 220, B3: 246.94, C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
    G4: 392, A4: 440, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25
  };
  const MELODY = [
    NOTES.A3, NOTES.C4, NOTES.E4, NOTES.A4,
    NOTES.G4, NOTES.E4, NOTES.D4, NOTES.C4,
    NOTES.E4, NOTES.G4, NOTES.B4, NOTES.C5,
    NOTES.A4, NOTES.E4, NOTES.A3, -1
  ];
  const BASS = [
    NOTES.A2, NOTES.E3, NOTES.A2, NOTES.E3,
    NOTES.D3, NOTES.A3, NOTES.D3, NOTES.E3
  ];

  function HydroAudio() {
    this.ctx = null;
    this.master = null;
    this.engineGain = null;
    this.engineOsc1 = null;
    this.engineOsc2 = null;
    this.engineFilter = null;
    this.musicGain = null;
    this.musicPlaying = false;
    this.beatTime = 0;
    this.melIdx = 0;
    this.bassIdx = 0;
    this.initialized = false;
    this.volume = 0.5;
    this.sfxCh = [];
    for (let i = 0; i < 6; i++) this.sfxCh.push({ busy: false });
  }

  HydroAudio.prototype.init = function() {
    if (this.initialized) return;
    try {
      this.ctx = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
      this.initEngine();
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0;
      this.musicGain.connect(this.master);
      this.initialized = true;
    } catch(e) {
      console.warn('Audio unavailable');
    }
  };

  HydroAudio.prototype.initEngine = function() {
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineGain.connect(this.master);

    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.value = 60;
    this.engineOsc1.start(0);

    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'sawtooth';
    this.engineOsc2.frequency.value = 62;
    this.engineOsc2.start(0);

    const g2 = this.ctx.createGain();
    g2.gain.value = 0.12;
    this.engineOsc2.connect(g2);
    g2.connect(this.engineGain);

    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 300;
    this.engineFilter.Q.value = 3;
    this.engineOsc1.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);

    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = 30;
    sub.start(0);
    const sg = this.ctx.createGain();
    sg.gain.value = 0.06;
    sub.connect(sg);
    sg.connect(this.engineGain);
    this.subOsc = sub;
    this.subGain = sg;
  };

  HydroAudio.prototype.updateEngine = function(speed, maxSpeed, turbo) {
    if (!this.initialized) return;
    const t = Math.min(1, speed / maxSpeed);
    const freq = 50 + t * 160 + (turbo ? 50 : 0);
    this.engineOsc1.frequency.linearRampToValueAtTime(freq, this.ctx.currentTime + 0.05);
    this.engineOsc2.frequency.linearRampToValueAtTime(freq + 4, this.ctx.currentTime + 0.05);
    this.subOsc.frequency.linearRampToValueAtTime(freq * 0.5, this.ctx.currentTime + 0.05);
    const vol = 0.03 + t * 0.1;
    this.engineGain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + 0.05);
    this.engineFilter.frequency.value = 150 + t * 700 + (turbo ? 500 : 0);
    this.subGain.gain.value = 0.02 + t * 0.08;
  };

  HydroAudio.prototype.sfx = function(type) {
    if (!this.initialized) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const ch = this.sfxCh.find(c => !c.busy) || this.sfxCh[0];
    ch.busy = true;
    const rel = (t) => { ch.busy = false; };

    switch(type) {
      case 'boost': {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(300, now);
        o.frequency.exponentialRampToValueAtTime(1200, now + 0.5);
        g.gain.setValueAtTime(0.18, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        o.connect(g); g.connect(this.master);
        o.start(now); o.stop(now + 0.6);
        setTimeout(rel, 600);
        break;
      }
      case 'boost_end': {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(800, now);
        o.frequency.exponentialRampToValueAtTime(100, now + 0.4);
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        o.connect(g); g.connect(this.master);
        o.start(now); o.stop(now + 0.45);
        setTimeout(rel, 450);
        break;
      }
      case 'crash': {
        const len = ctx.sampleRate * 0.25;
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = (Math.random()*2-1) * Math.exp(-i/(ctx.sampleRate*0.04));
        const s = ctx.createBufferSource();
        s.buffer = buf;
        const f = ctx.createBiquadFilter();
        f.type = 'lowpass'; f.frequency.value = 250;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.25, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        s.connect(f); f.connect(g); g.connect(this.master);
        s.start(now);
        setTimeout(rel, 250);
        break;
      }
      case 'splash': {
        const len = ctx.sampleRate * 0.1;
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = (Math.random()*2-1) * Math.exp(-i/(ctx.sampleRate*0.015));
        const s = ctx.createBufferSource();
        s.buffer = buf;
        const f = ctx.createBiquadFilter();
        f.type = 'bandpass'; f.frequency.value = 1500; f.Q.value = 0.5;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.1, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        s.connect(f); f.connect(g); g.connect(this.master);
        s.start(now);
        setTimeout(rel, 100);
        break;
      }
      case 'pickup': {
        const notes = [880, 1100, 1320];
        notes.forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.12, now + i*0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + i*0.06 + 0.15);
          o.connect(g); g.connect(this.master);
          o.start(now + i*0.06);
          o.stop(now + i*0.06 + 0.15);
        });
        setTimeout(rel, 300);
        break;
      }
      case 'lap': {
        [523, 659, 784].forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'triangle';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.15, now + i*0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i*0.08 + 0.3);
          o.connect(g); g.connect(this.master);
          o.start(now + i*0.08);
          o.stop(now + i*0.08 + 0.3);
        });
        setTimeout(rel, 400);
        break;
      }
      case 'count': {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'square';
        o.frequency.value = 880;
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        o.connect(g); g.connect(this.master);
        o.start(now); o.stop(now + 0.2);
        setTimeout(rel, 200);
        break;
      }
      case 'go': {
        [440, 554, 659].forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.18, now + i*0.05);
          g.gain.exponentialRampToValueAtTime(0.001, now + i*0.05 + 0.4);
          o.connect(g); g.connect(this.master);
          o.start(now + i*0.05);
          o.stop(now + i*0.05 + 0.4);
        });
        setTimeout(rel, 500);
        break;
      }
      case 'finish': {
        [523, 659, 784, 1047].forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'triangle';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.18, now + i*0.12);
          g.gain.exponentialRampToValueAtTime(0.001, now + i*0.12 + 0.6);
          o.connect(g); g.connect(this.master);
          o.start(now + i*0.12);
          o.stop(now + i*0.12 + 0.6);
        });
        setTimeout(rel, 700);
        break;
      }
      case 'select': {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = 660;
        g.gain.setValueAtTime(0.08, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        o.connect(g); g.connect(this.master);
        o.start(now); o.stop(now + 0.1);
        setTimeout(rel, 100);
        break;
      }
    }
  };

  HydroAudio.prototype.startMusic = function() {
    if (!this.initialized || this.musicPlaying) return;
    this.musicPlaying = true;
    this.beatTime = 0;
    this.melIdx = 0;
    this.bassIdx = 0;
    this.musicGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 1);
    this.sched();
  };

  HydroAudio.prototype.sched = function() {
    if (!this.musicPlaying) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const dt = 0.214;

    while (this.beatTime < now + 1) {
      const b = this.beatTime;

      const kg = ctx.createGain();
      kg.gain.setValueAtTime(0.18, b);
      kg.gain.exponentialRampToValueAtTime(0.001, b + 0.08);
      const k = ctx.createOscillator();
      k.type = 'sine';
      k.frequency.setValueAtTime(120, b);
      k.frequency.exponentialRampToValueAtTime(40, b + 0.06);
      k.connect(kg); kg.connect(this.musicGain);
      k.start(b); k.stop(b + 0.08);

      if (Math.random() < 0.4) {
        const hg = ctx.createGain();
        hg.gain.setValueAtTime(0.03, b);
        hg.gain.exponentialRampToValueAtTime(0.001, b + 0.04);
        const len = ctx.sampleRate * 0.04;
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = (Math.random()*2-1) * Math.exp(-i/(ctx.sampleRate*0.008));
        const s = ctx.createBufferSource();
        s.buffer = buf;
        s.connect(hg); hg.connect(this.musicGain);
        s.start(b);
      }

      if (this.beatTime % (dt*4) < dt) {
        const bn = BASS[this.bassIdx % BASS.length];
        const bg = ctx.createGain();
        bg.gain.setValueAtTime(0.1, b);
        bg.gain.exponentialRampToValueAtTime(0.001, b + 0.25);
        const bs = ctx.createOscillator();
        bs.type = 'square';
        bs.frequency.value = bn;
        bs.connect(bg); bg.connect(this.musicGain);
        bs.start(b); bs.stop(b + 0.25);
        this.bassIdx++;
      }

      if (this.beatTime % (dt*2) < dt) {
        const mn = MELODY[this.melIdx % MELODY.length];
        if (mn > 0) {
          const mg = ctx.createGain();
          mg.gain.setValueAtTime(0.05, b);
          mg.gain.setValueAtTime(0.05, b + 0.08);
          mg.gain.exponentialRampToValueAtTime(0.001, b + 0.4);
          const ms = ctx.createOscillator();
          ms.type = 'triangle';
          ms.frequency.value = mn;
          const mf = ctx.createBiquadFilter();
          mf.type = 'lowpass'; mf.frequency.value = 2000;
          ms.connect(mf); mf.connect(mg); mg.connect(this.musicGain);
          ms.start(b); ms.stop(b + 0.4);
        }
        this.melIdx++;
      }

      this.beatTime += dt;
    }

    requestAnimationFrame(() => this.sched());
  };

  HydroAudio.prototype.stopMusic = function() {
    this.musicPlaying = false;
    this.beatTime = 0;
    if (this.musicGain) this.musicGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);
  };

  HydroAudio.prototype.setVolume = function(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.master) this.master.gain.value = this.volume;
  };

  return HydroAudio;
})();
