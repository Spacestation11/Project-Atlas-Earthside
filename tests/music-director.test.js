/* Tests for the music director in index.html (the part between the
   MUSIC-DIRECTOR markers). Run with:  node --test tests/
   The director is pure logic: these tests drive it with a fake clock and
   fake track positions, exactly as the engine does every 100 ms. */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const a = html.indexOf('/* MUSIC-DIRECTOR-BEGIN */');
const b = html.indexOf('/* MUSIC-DIRECTOR-END */');
assert.ok(a > 0 && b > a, 'director markers found in index.html');
const ctx = {};
vm.runInNewContext(html.slice(a, b) + '\nthis.MUSIC_T=MUSIC_T;this.musicDirector=musicDirector;', ctx);
const T = ctx.MUSIC_T;

/* real lengths of the files (ffprobe) */
const LEN = { ashen_road: 238.0, unbroken: 224.8, lamplight: 193.92, low_power: 193.6, relay_hum: 202.8, overhead: 178.0, brownout: 189.88 };

function seeded(n) { let s = n >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* a fake engine: follows the director's commands, keeps the current track's position */
function rig(seed) {
  const d = ctx.musicDirector(T, seeded(seed || 1));
  const r = { d, log: [], pos: 0, track: '', fades: [] };
  r.exec = (cmds) => { for (const c of cmds) { if (c.op === 'play') { r.track = c.track; r.pos = 0; r.log.push(c.track); r.fades.push(c.fade); } else { r.track = ''; r.fades.push(c.fade); } } };
  r.run = (secs, cond) => { for (let t = 0; t < secs; t += 0.1) { if (cond && d.scene === 'shelter' && Math.round(t * 10) % 10 === 0) r.exec(d.report(cond)); if (r.track) r.pos += 0.1; r.exec(d.tick(0.1, r.pos, r.track ? LEN[r.track] : NaN, false)); } };
  /* play until n more tracks have started */
  r.tracks = (n, cond) => { const start = r.log.length; let guard = 0; while (r.log.length < start + n && guard++ < 200000) r.run(0.1, cond); return r.log.slice(start); };
  r.tap = () => r.exec(d.firstInput());
  r.scene = (s, fresh) => r.exec(d.setScene(s, fresh));
  return r;
}
const CALM = { crisis: false, storm: false, night: false, low_power: false, work: false };

test('menu waits for the first tap, then Ashen Road fades in', () => {
  const r = rig();
  r.scene('menu');
  assert.deepEqual(r.log, []);
  r.run(5);
  assert.deepEqual(r.log, [], 'nothing before the first tap');
  r.tap();
  assert.deepEqual(r.log, ['ashen_road']);
  assert.equal(r.fades[0], T.first_input_fade);
});

test('menu: no restart between menu screens, crossfades into itself at its end', () => {
  const r = rig(); r.d.waiting = false;
  r.scene('menu'); r.scene('menu'); r.scene('menu');
  assert.deepEqual(r.log, ['ashen_road']);
  r.run(100);
  assert.deepEqual(r.log, ['ashen_road'], 'still the same playthrough');
  /* it starts again menu_xfade seconds before the end */
  let at = 0;
  while (r.log.length < 2 && at < 400) { at = r.pos; r.run(0.1); }
  assert.deepEqual(r.log, ['ashen_road', 'ashen_road']);
  assert.ok(Math.abs(at - (LEN.ashen_road - T.menu_xfade)) < 0.25, 'crossfade at ' + at);
  assert.equal(r.fades.at(-1), T.menu_xfade);
});

test('menu -> game: Lamplight; game -> title: Ashen Road with their fades', () => {
  const r = rig(); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter');
  assert.deepEqual(r.log, ['ashen_road', 'lamplight']);
  assert.equal(r.fades.at(-1), T.menu_to_game_fade);
  assert.ok(T.menu_to_game_fade >= 4 && T.menu_to_game_fade <= 6);
  r.scene('menu');
  assert.equal(r.log.at(-1), 'ashen_road');
  assert.equal(r.fades.at(-1), T.game_to_menu_fade);
  assert.ok(T.game_to_menu_fade >= 3 && T.game_to_menu_fade <= 4);
});

test('sortie: random start (both seen), alternates, never the same twice in a row', () => {
  const firsts = new Set();
  for (let s = 1; s <= 40; s++) {
    const r = rig(s); r.d.waiting = false;
    r.scene('shelter'); r.scene('sortie', true);
    firsts.add(r.log.at(-1));
    const seq = [r.log.at(-1)].concat(r.tracks(6));
    for (let i = 1; i < seq.length; i++) assert.notEqual(seq[i], seq[i - 1]);
    for (const tr of seq) assert.ok(T.sortie_playlist.includes(tr));
    assert.equal(r.fades.at(-1), T.sortie_xfade);
  }
  assert.equal(firsts.size, 2);
});

test('sortie: rarely starts with the same track as the last sortie', () => {
  const r = rig(7); r.d.waiting = false;
  r.scene('shelter');
  let same = 0, n = 2000, prev = '';
  for (let i = 0; i < n; i++) { r.scene('sortie', true); const f = r.log.at(-1); if (f === prev) same++; prev = f; r.scene('shelter'); r.run(2, CALM); }
  const share = same / n; /* weight 0.25 against 1: about 20% */
  assert.ok(share > 0.12 && share < 0.28, 'repeat share ' + share);
});

test('shelter: first entry starts the opening order, then weighted picks', () => {
  const r = rig(3); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  const seq = ['lamplight'].concat(r.tracks(6, CALM));
  assert.deepEqual(seq, [...T.shelter_opening]);
  assert.deepEqual([...T.shelter_opening], ['lamplight', 'relay_hum', 'brownout', 'low_power', 'relay_hum', 'overhead', 'brownout']);
  assert.equal(r.fades.at(-1), T.shelter_xfade);
  r.tracks(20, CALM);
  for (const tr of r.log.slice(-20)) assert.ok(T.shelter_tracks.includes(tr));
});

test('shelter: never the same twice in a row, every track in every 8 picks, shares near target', () => {
  const count = {};
  let total = 0;
  for (let s = 1; s <= 8; s++) {
    const r = rig(100 + s); r.d.waiting = false;
    r.scene('menu'); r.scene('shelter');
    const conds = [CALM, { ...CALM, night: true }, { ...CALM, work: true }, { ...CALM, low_power: true, work: true }];
    let seq = ['lamplight'];
    for (let k = 0; k < 30; k++) seq = seq.concat(r.tracks(10, conds[k % conds.length]));
    for (let i = 1; i < seq.length; i++) assert.notEqual(seq[i], seq[i - 1], 'repeat at ' + i);
    for (let i = 0; i + 8 <= seq.length; i++) {
      const w = new Set(seq.slice(i, i + 8));
      assert.equal(w.size, 5, 'window at ' + i + ': ' + seq.slice(i, i + 8).join(' '));
    }
    for (const tr of seq.slice(7)) { count[tr] = (count[tr] || 0) + 1; total++; }
  }
  for (const tr of T.shelter_tracks) {
    const share = count[tr] / total;
    assert.ok(Math.abs(share - T.shelter_share[tr]) < 0.07, tr + ' share ' + share.toFixed(3));
  }
});

test('shelter: context bias (night favours Low Power, work favours Relay Hum)', () => {
  function share(cond, tr) {
    let n = 0, c = 0;
    for (let s = 1; s <= 6; s++) {
      const r = rig(200 + s); r.d.waiting = false;
      r.scene('menu'); r.scene('shelter');
      r.tracks(6, cond);
      const seq = r.tracks(120, cond);
      n += seq.length; c += seq.filter(x => x === tr).length;
    }
    return c / n;
  }
  assert.ok(share({ ...CALM, night: true }, 'low_power') > share(CALM, 'low_power') + 0.03);
  assert.ok(share({ ...CALM, work: true }, 'relay_hum') > share(CALM, 'relay_hum') + 0.03);
});

test('crisis: after ~10 s it crossfades into Brownout and holds, then lets it finish and the rotation continues', () => {
  const r = rig(11); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  r.run(30, CALM);
  assert.equal(r.track, 'lamplight');
  const crisis = { ...CALM, crisis: true };
  r.run(9, crisis);
  assert.equal(r.track, 'lamplight', 'not yet at 9 s');
  r.run(1.5, crisis);
  assert.equal(r.track, 'brownout');
  assert.equal(r.d.state(), 'crisis');
  assert.equal(r.fades.at(-1), T.crisis_fade);
  assert.ok(T.crisis_fade >= 14 && T.crisis_fade <= 20);
  const openingAt = r.d.openingI;
  /* it holds through the end of the track: Brownout again */
  const n = r.tracks(1, crisis);
  assert.deepEqual(n, ['brownout']);
  assert.equal(r.d.openingI, openingAt, 'interrupts do not advance the opening order');
  /* clear: after 30 s the crisis lets go, but Brownout plays to its end */
  r.run(31, CALM);
  assert.equal(r.d.on.crisis, false);
  assert.equal(r.track, 'brownout');
  const after = r.tracks(1, CALM)[0];
  assert.notEqual(after, 'brownout');
  assert.equal(r.d.state(), 'shelter');
  assert.equal(after, 'relay_hum', 'the opening order carries on where it was');
});

test('crisis: when Brownout already plays it is not restarted', () => {
  const r = rig(12); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  r.tracks(2, CALM); /* lamplight -> relay_hum -> brownout */
  assert.equal(r.track, 'brownout');
  const before = r.log.length;
  r.run(15, { ...CALM, crisis: true });
  assert.equal(r.d.intr, 'crisis');
  assert.equal(r.log.length, before, 'no new start');
});

test('storm: Overhead after the hysteresis and the 30 s guard; held 45 s after it clears', () => {
  const r = rig(13); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  const storm = { ...CALM, storm: true };
  r.run(10, storm);
  assert.equal(r.track, 'lamplight', 'guard: within 30 s of the last switch');
  r.run(21, storm);
  assert.equal(r.track, 'overhead');
  assert.equal(r.d.state(), 'storm');
  assert.equal(r.fades.at(-1), T.storm_fade);
  r.run(40, CALM);
  assert.equal(r.d.on.storm, true, 'still held at 40 s clear');
  r.run(6, CALM);
  assert.equal(r.d.on.storm, false);
  assert.equal(r.track, 'overhead', 'plays to its end');
  const after = r.tracks(1, CALM)[0];
  assert.notEqual(after, 'overhead');
});

test('a crisis outranks a storm', () => {
  const r = rig(14); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  r.run(40, { ...CALM, storm: true });
  assert.equal(r.track, 'overhead');
  r.run(11, { ...CALM, storm: true, crisis: true });
  assert.equal(r.track, 'brownout');
  assert.equal(r.d.state(), 'crisis');
});

test('back from a sortie: waits for the report, then a rotation pick with the return bias', () => {
  const r = rig(15); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
  r.scene('sortie', true);
  const s = r.log.at(-1);
  assert.ok(T.sortie_playlist.includes(s));
  r.scene('shelter');
  assert.equal(r.track, '', 'sortie track fading, nothing new yet');
  assert.equal(r.fades.at(-1), T.sortie_fade);
  r.exec(r.d.report(CALM));
  assert.ok(T.shelter_tracks.includes(r.track));
  assert.notEqual(r.track, 'lamplight', 'not a fresh opening (lamplight was the last shelter track)');
});

test('without a report the shelter pick comes after report_wait', () => {
  const r = rig(16); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.scene('sortie', true); r.scene('shelter');
  r.run(1.0);
  assert.equal(r.track, '');
  r.run(0.7);
  assert.ok(T.shelter_tracks.includes(r.track));
});

test('return or loss during a sortie crossfade is clean', () => {
  const r = rig(17); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.scene('sortie', true);
  /* run into the crossfade window */
  const first = r.track;
  r.run(LEN[first] - T.sortie_xfade + 0.5);
  assert.notEqual(r.track, first, 'crossfade started');
  const mid = r.track;
  /* return in the middle of it */
  r.scene('shelter'); r.exec(r.d.report(CALM));
  assert.ok(T.shelter_tracks.includes(r.track));
  /* a new sortie, then lost in its crossfade */
  r.scene('sortie', true);
  r.run(LEN[r.track] - T.sortie_xfade + 0.5);
  const cmds = r.d.stop(T.stop_fade);
  assert.deepEqual(JSON.parse(JSON.stringify(cmds)), [{ op: 'fade', fade: T.stop_fade }]);
  r.exec(cmds);
  assert.equal(r.d.state(), 'silent');
  r.run(400);
  assert.equal(r.track, '', 'stays silent while stopped');
  r.scene('shelter'); r.exec(r.d.report(CALM));
  assert.ok(T.shelter_tracks.includes(r.track), 'the shelter music comes back');
  assert.ok(mid);
});

test('game over then a new game: the opening order again', () => {
  const r = rig(18); r.d.waiting = false;
  r.scene('menu'); r.scene('shelter'); r.tracks(3, CALM);
  r.exec(r.d.stop(T.stop_fade, 'shelter'));
  r.scene('shelter');
  assert.equal(r.track, 'lamplight');
  assert.equal(r.d.openingI, 1);
});

test('loading a game from the title: shelter starts with Lamplight; a sortie with a random track', () => {
  const r = rig(19);
  r.scene('menu'); r.tap();
  r.scene('shelter');
  assert.equal(r.track, 'lamplight');
  const r2 = rig(20); r2.scene('menu'); r2.tap(); r2.scene('sortie', true);
  assert.ok(T.sortie_playlist.includes(r2.track));
});

test('the first tap in the shelter (no menu seen) starts the opening order', () => {
  const r = rig(21);
  r.scene('shelter');
  assert.equal(r.track, '');
  r.tap();
  assert.equal(r.track, 'lamplight');
  assert.equal(r.fades.at(-1), T.first_input_fade);
});

test('peekNext matches the next pick when nothing changes (preloading)', () => {
  for (let s = 1; s <= 10; s++) {
    const r = rig(300 + s); r.d.waiting = false;
    r.scene('menu'); r.scene('shelter'); r.exec(r.d.report(CALM));
    for (let k = 0; k < 25; k++) {
      r.run(5, CALM);
      const peek = r.d.peekNext();
      const got = r.tracks(1, CALM)[0];
      assert.equal(got, peek, 'pick ' + k);
    }
  }
});

test('the tuning table holds the values asked for', () => {
  assert.ok(T.menu_xfade >= 5 && T.menu_xfade <= 6);
  assert.ok(T.sortie_xfade >= 5 && T.sortie_xfade <= 6);
  assert.ok(T.shelter_xfade >= 8 && T.shelter_xfade <= 10);
  assert.ok(T.sortie_fade >= 4 && T.sortie_fade <= 6);
  assert.ok(T.stop_fade >= 3 && T.stop_fade <= 5);
  assert.ok(T.storm_fade >= 8 && T.storm_fade <= 12);
  assert.ok(T.storm_exit >= 30 && T.storm_exit <= 60);
  assert.ok(T.duck_db >= 2 && T.duck_db <= 4);
  assert.ok(-T.pause_db >= 8 && -T.pause_db <= 10);
  const sum = Object.values(T.shelter_share).reduce((x, y) => x + y, 0);
  assert.ok(Math.abs(sum - 1) < 1e-9);
  for (const k of Object.keys(T.tracks)) assert.ok(fs.existsSync(path.join(__dirname, '..', T.dir, T.tracks[k].file)), T.tracks[k].file);
});
