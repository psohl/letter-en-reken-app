/* audio.js - gesynthetiseerde geluidseffecten met Web Audio (ontwikkelplan §7.3).
   Geen audiobestanden. De AudioContext wordt pas aangemaakt na de eerste klik of toets
   (browservereiste). Globale naam is `Geluid` (niet `Audio`, dat is al een browserobject).

   Geluid.ontgrendel()      aanroepen vanuit een klik/toets-handler
   Geluid.speel(naam, na)   'goed' | 'fout' | 'whoosh' | 'oe-oe' | 'blub' | 'trippel' | 'klik' |
                            'toggleAan' | 'toggleUit' | 'klim' | 'aankomst' | 'plons' |
                            'tromroffel' | 'tada'
                            `na` (seconden, optioneel) speelt het geluid later, bijvoorbeeld op het
                            moment dat de figuur bij het volgende station aankomt (§7.6)
   Geluid.zetAan(bool) / Geluid.wissel() / Geluid.isAan()
   Geluid.bijWissel(cb)     cb(aan) wordt aangeroepen bij elke wissel */

var Geluid = (function () {
  'use strict';

  var ctx = null;
  var aan = true;                 // alleen binnen de sessie onthouden, niets opslaan
  var luisteraars = [];
  var VOLUME = 0.35;

  function ontgrendel() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      try { ctx = new AC(); } catch (e) { ctx = null; return false; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  /* Eén toon met zachte aanzet en uitloop; optioneel glijdend naar freqEind. */
  function toon(freq, start, duur, vorm, vol, freqEind) {
    var osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = vorm || 'sine';
    osc.frequency.setValueAtTime(freq, start);
    if (freqEind) osc.frequency.exponentialRampToValueAtTime(freqEind, start + duur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol * VOLUME, start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, start + duur);
    osc.connect(g).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duur + 0.02);
  }

  /* Ruis door een glijdend bandfilter: "whoosh". */
  function ruis(start, duur, vol, fVan, fNaar) {
    var n = Math.floor(ctx.sampleRate * duur), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    var src = ctx.createBufferSource(); src.buffer = buf;
    var filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.Q.value = 1.2;
    filt.frequency.setValueAtTime(fVan, start);
    filt.frequency.exponentialRampToValueAtTime(fNaar, start + duur);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol * VOLUME, start + duur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, start + duur);
    src.connect(filt).connect(g).connect(ctx.destination);
    src.start(start);
    src.stop(start + duur + 0.02);
  }

  var GELUIDEN = {
    /* Korte vrolijke drieklank omhoog: do-mi-sol */
    goed: function (t) {
      toon(523.25, t, 0.16, 'triangle', 0.5);
      toon(659.25, t + 0.11, 0.16, 'triangle', 0.5);
      toon(783.99, t + 0.22, 0.32, 'triangle', 0.5);
    },
    /* Zacht, laag "boing": nooit hard of schril */
    fout: function (t) {
      toon(260, t, 0.28, 'sine', 0.35, 150);
    },
    /* Korte whoosh voor de raket */
    whoosh: function (t) {
      ruis(t, 0.5, 0.45, 400, 2600);
    },
    /* Aapje: twee stijgende "oe"-tonen met vibrato-achtige glij */
    'oe-oe': function (t) {
      toon(392, t, 0.16, 'sine', 0.4, 587);
      toon(392, t + 0.2, 0.2, 'sine', 0.4, 659);
    },
    /* Zachte klik/pop */
    klik: function (t) {
      toon(900, t, 0.05, 'square', 0.12, 500);
    },
    /* Vis: twee korte "blub"-bubbeltjes omhoog */
    blub: function (t) {
      toon(300, t, 0.12, 'sine', 0.35, 720);
      toon(380, t + 0.14, 0.14, 'sine', 0.3, 960);
    },
    /* Mier: drie heel korte tikjes, als trippelende pootjes */
    trippel: function (t) {
      toon(880, t, 0.05, 'triangle', 0.22, 700);
      toon(990, t + 0.09, 0.05, 'triangle', 0.22, 780);
      toon(1120, t + 0.18, 0.06, 'triangle', 0.22, 880);
    },
    toggleAan: function (t) { toon(420, t, 0.12, 'triangle', 0.3, 640); },
    toggleUit: function (t) { toon(640, t, 0.12, 'triangle', 0.3, 420); },

    /* ---- Fase 16: aankomen bij het volgende station van de wereld (§7.6) ---- */

    /* Aapje klimt een tak hoger: drie zachte plopjes omhoog */
    klim: function (t) {
      toon(330, t, 0.09, 'sine', 0.3, 430);
      toon(400, t + 0.12, 0.09, 'sine', 0.3, 520);
      toon(480, t + 0.24, 0.13, 'sine', 0.3, 650);
    },
    /* Raket bij de volgende planeet: korte glijtoon omhoog met een tik bij de landing */
    aankomst: function (t) {
      toon(300, t, 0.34, 'triangle', 0.3, 720);
      toon(190, t + 0.38, 0.08, 'sine', 0.26, 120);
    },
    /* Vis bij het volgende rifstuk: de blub een paar tonen lager */
    plons: function (t) {
      toon(220, t, 0.14, 'sine', 0.32, 460);
      toon(280, t + 0.16, 0.16, 'sine', 0.28, 600);
    },
    /* Mier: korte tromroffel bij het kunstje (acht heel korte tikjes) */
    tromroffel: function (t) {
      for (var i = 0; i < 8; i++) toon(160 + (i % 2) * 26, t + i * 0.045, 0.04, 'triangle', 0.16, 110);
    },
    /* Finale van een ronde, bij alle vier de onderdelen: drieklank met een hoge slottoon */
    tada: function (t) {
      toon(523.25, t, 0.12, 'triangle', 0.45);
      toon(659.25, t + 0.1, 0.12, 'triangle', 0.45);
      toon(783.99, t + 0.2, 0.14, 'triangle', 0.45);
      toon(1046.5, t + 0.34, 0.42, 'triangle', 0.5);
    }
  };

  function speel(naam, na) {
    if (!aan) return;
    if (!ctx && !ontgrendel()) return;
    var fn = GELUIDEN[naam];
    if (!fn) return;
    try { fn(ctx.currentTime + (na || 0)); } catch (e) { /* geluid mag nooit het spel breken */ }
  }

  function zetAan(waarde) {
    aan = !!waarde;
    luisteraars.forEach(function (cb) { cb(aan); });
  }

  return {
    ontgrendel: ontgrendel,
    speel: speel,
    zetAan: zetAan,
    wissel: function () { zetAan(!aan); },
    isAan: function () { return aan; },
    bijWissel: function (cb) { luisteraars.push(cb); },
    NAMEN: Object.keys(GELUIDEN)
  };
})();
