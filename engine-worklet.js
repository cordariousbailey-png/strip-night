const VOICE = {
  v8:     { bk: BK.chev, body: 82,  bd: 11, crack: .55, cd: 3.2, pipe: 148, cut: 3536, drive: 2.0, amp: 1.0,  lope: .32, intake: .22, hpf: 85 },
  bb:     { bk: BK.chev, body: 62,  bd: 15, crack: .45, cd: 3.6, pipe: 118, cut: 3042, drive: 2.4, amp: 1.2,  lope: .48, intake: .30, hpf: 72 },
  ls:     { bk: BK.ls,   body: 100, bd: 9,  crack: .75, cd: 2.4, pipe: 190, cut: 4805, drive: 1.8, amp: .95,  lope: .10, intake: .34, hpf: 85 },
  coy:    { bk: BK.ls,   body: 112, bd: 8,  crack: .85, cd: 2.2, pipe: 235, cut: 6084, drive: 1.7, amp: .9,   lope: .06, intake: .42, hpf: 90 },
  ford:   { bk: BK.ford, body: 92,  bd: 10, crack: .62, cd: 2.8, pipe: 172, cut: 4680, drive: 2.0, amp: .95,  lope: .26, intake: .24 },
  mopar:  { bk: BK.chev, body: 76,  bd: 10, crack: .72, cd: 2.6, pipe: 165, cut: 4940, drive: 2.7, amp: 1.05, lope: .34, intake: .26 },
  hemi:   { bk: BK.chev, body: 68,  bd: 13, crack: .55, cd: 3.0, pipe: 128, cut: 3770, drive: 2.4, amp: 1.15, lope: .52, intake: .28 },
  hell:   { bk: BK.chev, body: 74,  bd: 11, crack: .60, cd: 2.8, pipe: 140, cut: 4290, drive: 2.3, amp: 1.2,  lope: .22, intake: .22, whine: 1 },
  sc:     { bk: BK.chev, body: 70,  bd: 12, crack: .55, cd: 3.0, pipe: 132, cut: 3900, drive: 2.3, amp: 1.1,  lope: .40, intake: .24, whine: 1 },
  turbo:  { bk: BK.v6,   body: 95,  bd: 8,  crack: .60, cd: 2.6, pipe: 210, cut: 3400, drive: 1.9, amp: .85,  lope: .15, intake: .20, whistle: 1 },
  ttv8:   { bk: BK.ls,   body: 92,  bd: 9,  crack: .60, cd: 2.6, pipe: 165, cut: 3510, drive: 2.1, amp: 1.0,  lope: .18, intake: .26, whistle: 1, hpf: 90 },
  jz2:    { bk: BK.i6,   body: 88,  bd: 10, crack: .62, cd: 2.6, pipe: 205, cut: 3600, drive: 1.9, amp: .95, lope: .10, intake: .22, whistle: 1, mech: .4, tw: 2 },
  jz1:    { bk: BK.i6,   body: 92,  bd: 9,  crack: .58, cd: 2.7, pipe: 218, cut: 3300, drive: 1.8, amp: .92, lope: .12, intake: .20, whistle: 1, mech: .35, tw: 2 },
  rb:     { bk: BK.i6,   body: 100, bd: 8,  crack: .88, cd: 2.0, pipe: 262, cut: 5000, drive: 2.3, amp: .95, lope: .12, intake: .30, whistle: 1, mech: .6, scream: 1, tw: 2 },
  sr:     { bk: BK.i4,   body: 118, bd: 7,  crack: 2.40, cd: 2.8, pipe: 340, cut: 5600, drive: 3.2, amp: .90, lope: .10, intake: .30, whistle: 1, mech: .5, tw: 1, hpf: 150 },
  g63:    { bk: BK.i4,   body: 112, bd: 7,  crack: 1.45, cd: 3.1, pipe: 320, cut: 4700, drive: 3.0, amp: .95, lope: .14, intake: .30, whistle: 1, mech: .3, wg: 1, tw: 1, hpf: 145 },
  ej:     { bk: BK.bx,   body: 78,  bd: 12, crack: .55, cd: 3.2, pipe: 172, cut: 3750, drive: 2.0, amp: 1.0, lope: .45, intake: .24, whistle: 1, mech: .4, skew: 1.22, tw: 1 },
  b16:    { bk: BK.i4,   body: 142, bd: 6,  crack: 2.0, cd: 2.4, pipe: 420, cut: 5600, drive: 2.4, amp: .80, lope: .05, intake: .50, mech: .7, vt: 5700, scream: 1, hpf: 170 },
  b18:    { bk: BK.i4,   body: 135, bd: 6,  crack: 1.9, cd: 2.5, pipe: 400, cut: 5200, drive: 2.4, amp: .82, lope: .06, intake: .50, mech: .7, vt: 5700, scream: 1, hpf: 160 },
  k20:    { bk: BK.i4,   body: 128, bd: 7,  crack: 2.4, cd: 2.2, pipe: 390, cut: 5800, drive: 2.5, amp: .85, lope: .05, intake: .62, mech: .6, vt: 5900, scream: 1, hpf: 160 },
  k24:    { bk: BK.i4,   body: 104, bd: 9,  crack: 2.3, cd: 3.6, pipe: 330, cut: 4800, drive: 2.5, amp: .85, lope: .06, intake: .56, mech: .5, vt: 4900, hpf: 130 },
  r13:    { bk: BK.rot,  body: 160, bd: 5,  crack: 1.9, cd: 1.3, pipe: 380, cut: 9100, drive: 3.0, amp: .92, lope: .50, intake: .12, whistle: 1, mech: .4, scream: 1, tw: 2, hpf: 110 },
  r20:    { bk: BK.rot,  body: 175, bd: 6,  crack: 1.9, cd: 1.3, pipe: 350, cut: 8580, drive: 3.0, amp: .95, lope: .35, intake: .12, whistle: 1, mech: .4, scream: 1, tw: 2, hpf: 115 },
  r26:    { bk: BK.rot,  body: 200, bd: 7,  crack: 2.1, cd: 1.3, pipe: 330, cut: 10660, drive: 3.4, amp: 1.05, lope: .10, intake: .14, mech: .5, scream: 1, hpf: 125 },
  vr:     { bk: BK.v6,   body: 86,  bd: 10, crack: .72, cd: 2.4, pipe: 186, cut: 3600, drive: 2.3, amp: 1.1, lope: .12, intake: .42, whistle: 1, mech: .8, tw: 2 },
  b58:    { bk: BK.i6,   body: 96,  bd: 9,  crack: .60, cd: 2.5, pipe: 228, cut: 4200, drive: 1.6, amp: .85, lope: .05, intake: .26, whistle: 1, mech: .3, tw: 1 },
  g64:    { bk: BK.i4,   body: 108, bd: 8,  crack: 2.03, cd: 3.3, pipe: 278, cut: 4370, drive: 2.7, amp: .82, lope: .20, intake: .36, mech: .5 },
  rotary: { bk: BK.rot,  body: 150, bd: 5,  crack: 1.0, cd: 1.8, pipe: 290, cut: 6500, drive: 3.0, amp: .9,   lope: .55, intake: .10 }
};
/* turn a voice plus the installed parts into sound settings */
function voiceParams(id, snd, over) {
  const v = VOICE[id] || VOICE.v8, s = snd || {}, o = over || {};
  const cam = s.cam | 0, hdr = s.hdr | 0, exh = s.exh | 0, port = s.port | 0, dp = s.dp | 0, itb = s.itb | 0, ind = (s.intake | 0) + (s.induct | 0) + 2 * itb;
  /* boxer engines: unequal-length headers give the rumble, equal-length ones (any good header) even the pulses out */
  const skew = v.skew ? (hdr >= 2 || s.eql ? 1.02 : v.skew) : 1.035;
  const pr = 0.22 * port;
  return {
    id: VOICE[id] ? id : 'v8', v, cam, hdr, exh, ind, port, dp, itb, skew,
    lope: Math.min(0.95, v.lope + 0.11 * cam + pr * 1.3),
    crack: v.crack * (1 + 0.12 * hdr + 0.06 * cam + 0.14 * port + 0.1 * dp),
    pipe: v.pipe * (1 + 0.05 * hdr - 0.045 * exh + 0.06 * port - 0.04 * dp),
    g: Math.min(0.8, 0.55 + 0.045 * exh + 0.02 * hdr + 0.03 * dp),
    cut: v.cut * (1 + 0.35 * exh + 0.1 * hdr + 0.3 * dp + 0.12 * port),
    loud: v.amp * (1 + 0.12 * exh + 0.06 * hdr + 0.08 * dp + 0.05 * port),
    intake: v.intake * (1 + 0.08 * ind + 0.14 * itb),
    popP: 0.10 + 0.08 * cam + 0.05 * hdr + 0.04 * exh + 0.05 * dp + 0.04 * port + ((s.ecu | 0) >= 5 ? 0.1 : 0) + (o.turbo ? 0.1 : 0)
  };
}
class EngSynth {
  constructor(sr, seed) {
    this.sr = sr; this.s = (seed || 2463534242) >>> 0; this.ph = 0; this.slot = 0; this.t = 0;
    this.rpm = 900; this.load = 0.1; this.amp = 0; this.vid = ''; this.nb = 0; this.len = 1; this.plen = 1;
    this.p = { rpm: 900, load: 0.1, amp: 0, cut: 1, nos: 0, lope: .3, crack: .5, pipe: 150, g: .6, scKind: 0, scAmp: 0, scRatio: 6, on: 0, skew: 1.035, dmg: 0 };
    this.pa = new Float32Array(64); this.pc = new Float32Array(64); this.pt = new Int32Array(64); this.pb = new Uint8Array(64); this.pv = new Uint8Array(64); this.pk = new Uint8Array(64);
    this.na = 0; this.cb = [new Float32Array(4096), new Float32Array(4096)]; this.cw = 0; this.cs = [0, 0];
    this.pat = new Float32Array(16); for (let i = 0; i < 16; i++) this.pat[i] = 0.3 + 0.7 * this.rnd();
    this.scPh = 0; this.scLev = 0; this.scTab = null; this.scK = -1; this.jit = 0; this.cj = 0; this.ip = 0; this.il = 0;
    this.popB = null; this.popC = null; this.bt = []; this.ct = [];
  }
  rnd() { let x = this.s; x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; this.s = x; return x / 4294967296; }
  setVoice(id) {
    if (this.vid === id) return; this.vid = id; const v = VOICE[id] || VOICE.v8, sr = this.sr;
    this.nb = v.bk.length; this.bk = v.bk; this.len = Math.floor(sr * 0.04); this.bt = []; this.ct = [];
    for (let k = 0; k < 4; k++) {
      const b = new Float32Array(this.len), c = new Float32Array(this.len); let ph = 0, lp = 0;
      const f0 = v.body * (1 + 0.08 * (this.rnd() - 0.5));
      for (let i = 0; i < this.len; i++) {
        const t = i / sr; ph += 2 * Math.PI * f0 * (1.5 - 0.7 * Math.min(1, t / 0.02)) / sr;
        b[i] = (Math.sin(ph) + 0.38 * Math.sin(2 * ph + 0.6) * Math.exp(-t / 0.004) + 0.45 * Math.exp(-t / (v.bd * 2.4 / 1000))) * Math.exp(-t / (v.bd / 1000)) * (1 - Math.exp(-t / 0.0008));
        lp += 0.14 * ((this.rnd() * 2 - 1) - lp); c[i] = 2.2 * lp * Math.exp(-t / (v.cd / 1000));
      }
      let mb = 0, mc = 0; for (let i = 0; i < this.len; i++) { mb += b[i]; mc += c[i]; } mb /= this.len; mc /= this.len;
      for (let i = 0; i < this.len; i++) { b[i] -= mb; c[i] -= mc; }
      this.bt.push(b); this.ct.push(c);
    }
    this.plen = Math.floor(sr * 0.16); this.popB = new Float32Array(this.plen); this.popC = new Float32Array(this.plen); let ph = 0, lp = 0;
    for (let i = 0; i < this.plen; i++) {
      const t = i / sr; ph += 2 * Math.PI * (70 - 35 * Math.min(1, t / 0.08)) / sr;
      this.popB[i] = Math.sin(ph) * Math.exp(-t / 0.035) * (1 - Math.exp(-t / 0.001));
      lp += 0.25 * ((this.rnd() * 2 - 1) - lp); this.popC[i] = 2 * lp * Math.exp(-t / 0.007);
    }
  }
  setSc(k) {
    if (this.scK === k) return; this.scK = k; const n = 2048, T = new Float32Array(n);
    const H = k === 1 ? [1, .85, .7, .55, .42, .32, .24, .17, .12] : k === 2 ? [1, .8, .6, .45, .32, .22, .15] : [1, .55, .38, .26, .16, .1];
    for (let i = 0; i < n; i++) { let s = 0; for (let h = 0; h < H.length; h++) s += H[h] * Math.sin(2 * Math.PI * (h + 1) * i / n + h * 0.7); T[i] = s; }
    let m = 0; for (let i = 0; i < n; i++) m = Math.max(m, Math.abs(T[i])); for (let i = 0; i < n; i++) T[i] /= m; this.scTab = T;
  }
  pop(a) { this.enq(a, 0, 0, 1, 0); this.enq(a * 0.8, 0, 1, 1, 0); }
  enq(a, c, bank, kind, vr) {
    let k = this.na; if (k >= 64) k = 63; else this.na++;
    this.pa[k] = a; this.pc[k] = c; this.pt[k] = 0; this.pb[k] = bank; this.pk[k] = kind; this.pv[k] = vr;
  }
  fire(slot, iF) {
    const p = this.p, L = this.load, a0 = 0.20 + 0.80 * Math.pow(L, 1.2);
    const la = Math.min(0.95, p.lope * (0.3 + 0.7 * iF)), pat = Math.max(0.2, Math.min(1, this.pat[slot & 15] + 0.12 * Math.sin(this.t * 0.9 + slot * 1.7)));
    let a = a0 * (1 - la * (1 - pat));
    if (this.rnd() < la * 0.30 * iF) a *= 0.18;
    if (p.dmg > 0) { if (this.rnd() < p.dmg * 0.14) a *= 0.12; if (this.rnd() < p.dmg * 0.035) this.enq(0.55, 0, 0, 1, 0); }
    a *= (0.9 + 0.2 * this.rnd()) * p.cut * (1 + 0.15 * p.nos);
    this.ip = Math.min(1.5, this.ip + a * (0.5 + 0.6 * L));
    this.enq(a, a * p.crack * (0.35 + 0.65 * L) * (1 + 0.3 * p.nos), this.bk[slot], 0, (this.rnd() * 4) | 0);
  }
  process(o0, o1, o2) {
    const n = o0.length, p = this.p, sr = this.sr, bt = this.bt, ct = this.ct, len = this.len, plen = this.plen;
    const D0 = Math.max(8, Math.min(4000, Math.round(sr / p.pipe))), D1 = Math.max(8, Math.min(4000, Math.round(sr / (p.pipe * (p.skew || 1.035)))));
    const Db = Math.max(5, Math.min(2000, Math.round(sr / (p.pipe * 2.37)))), g = p.g, ga = 0.42, cb0 = this.cb[0], cb1 = this.cb[1], N = this.nb;
    let w = this.cw, s0 = this.cs[0], s1 = this.cs[1];
    for (let i = 0; i < n; i++) {
      this.t += 1 / sr;
      this.rpm += (p.rpm - this.rpm) * 0.002; this.load += (p.load - this.load) * (p.load > this.load ? 0.003 : 0.0012); this.amp += (p.amp - this.amp) * 0.0015;
      const iF = Math.max(0, Math.min(1, (2600 - this.rpm) / 1300));
      const rpm = this.rpm * (1 + p.on * iF * p.lope * 0.015 * Math.sin(6.9 * this.t) + p.on * iF * 0.006 * Math.sin(23 * this.t));
      this.cj += 0.003 * ((this.rnd() * 2 - 1) - this.cj);
      this.ph += rpm / 120 / sr * (1 + 0.035 * this.cj * (0.4 + 0.6 * Math.min(1, this.load + 0.2)));
      while (this.ph >= (this.slot + 1) / N) { this.fire(this.slot, iF); this.slot++; if (this.slot >= N) { this.slot = 0; this.ph -= 1; } }
      let x0 = 0, x1 = 0;
      for (let k = 0; k < this.na;) {
        const age = this.pt[k], kind = this.pk[k], lim = kind ? plen : len;
        const v = kind ? this.pa[k] * this.popB[age] + this.pa[k] * 0.8 * this.popC[age] : this.pa[k] * bt[this.pv[k]][age] + this.pc[k] * ct[this.pv[k]][age];
        if (this.pb[k]) x1 += v; else x0 += v;
        this.pt[k] = age + 1;
        if (age + 1 >= lim) { const l = --this.na; this.pa[k] = this.pa[l]; this.pc[k] = this.pc[l]; this.pt[k] = this.pt[l]; this.pb[k] = this.pb[l]; this.pk[k] = this.pk[l]; this.pv[k] = this.pv[l]; } else k++;
      }
      let d0 = cb0[(w - D0 + 4096) & 4095], d1 = cb1[(w - D1 + 4096) & 4095];
      s0 += ga * (d0 - s0); s1 += ga * (d1 - s1);
      const y0 = x0 + g * s0 + 0.2 * g * cb0[(w - Db + 4096) & 4095], y1 = x1 + g * s1 + 0.2 * g * cb1[(w - Db + 4096) & 4095]; cb0[w] = y0; cb1[w] = y1; w = (w + 1) & 4095;
      o0[i] = Math.tanh((y0 + y1) * 0.55 * this.amp);
      let sc = 0;
      if (this.scTab) {
        this.jit += 0.0004 * ((this.rnd() * 2 - 1) - this.jit);
        this.scPh += (this.rpm / 60 * p.scRatio) * (1 + this.jit * 2 + 0.004 * Math.sin(5.3 * this.t)) / sr; this.scPh -= Math.floor(this.scPh);
        this.scLev += (p.scAmp - this.scLev) * 0.002;
        const q = this.scPh * 2048, q0 = q | 0, f = q - q0;
        sc = (this.scTab[q0 & 2047] * (1 - f) + this.scTab[(q0 + 1) & 2047] * f) * this.scLev * (0.8 + 0.4 * this.rnd());
      }
      o1[i] = sc;
      if (o2) { this.ip *= 0.9985; this.il += 0.32 * ((this.rnd() * 2 - 1) - this.il); o2[i] = this.il * this.ip; }
    }
    this.cw = w; this.cs[0] = s0; this.cs[1] = s1;
  }
}

class StripEngineProcessor extends AudioWorkletProcessor {
 constructor(options) {
  super(); this.syn = new EngSynth(sampleRate, options.processorOptions.seed);
  this.port.onmessage = e => { const d=e.data; if(d.type==='voice') this.syn.setVoice(d.id); else if(d.type==='sc') this.syn.setSc(d.kind); else if(d.type==='pop') this.syn.pop(d.amount); else if(d.type==='params') Object.assign(this.syn.p,d.params); };
 }
 process(inputs, outputs) {
  const o=outputs[0]; if(o && o.length>=3) this.syn.process(o[0],o[1],o[2]);
  return true;
 }
}
registerProcessor('strip-engine', StripEngineProcessor);
