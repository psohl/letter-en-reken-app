/* sommen.js - somgenerator per operator en niveau (ontwikkelplan §5.2), pure functies.
   Geen DOM, injecteerbare random, zodat test/test.html alles kan doorlopen.

   Operatoren: 'plus', 'min', 'maal', 'deel'.
   Niveaus:    'klein' (uitkomst t/m 10, tafels 1-5), 'groot' (uitkomst t/m 20, tafels 1-10),
               'super' (plus en min t/m 100; keer en delen blijven de tafels, want 10 x 10 = 100
                        is daar al de bovengrens). */

var Sommen = (function () {
  'use strict';

  var OPERATOREN = ['plus', 'min', 'maal', 'deel'];

  var SYMBOOL = { plus: '+', min: '−', maal: '×', deel: '÷' };

  /* maxTerm  = grootste getal in een plussom en grootste aftrekgetal bij min
     maxTafel = grootste tafel bij keer en delen (de andere factor is altijd 1..10) */
  var NIVEAUS = {
    klein: { maxTerm: 10,  maxUitkomst: 10,  maxAftrektal: 10,  maxTafel: 5 },
    groot: { maxTerm: 10,  maxUitkomst: 20,  maxAftrektal: 20,  maxTafel: 10 },
    'super': { maxTerm: 100, maxUitkomst: 100, maxAftrektal: 100, maxTafel: 10 }
  };

  /* Toetsen op het toetsenbord die een operator aan/uit zetten. */
  var TOETS_NAAR_OPERATOR = { '+': 'plus', '-': 'min', '*': 'maal', 'x': 'maal', '/': 'deel', ':': 'deel' };

  function randInt(r, min, max) {
    return min + Math.floor(r() * (max - min + 1));
  }

  /* Eén som voor een operator en niveau. */
  function maak(op, niveau, random) {
    var r = random || Math.random;
    var n = NIVEAUS[niveau] || NIVEAUS.klein;
    var a, b, antwoord, t;

    switch (op) {
      case 'plus':
        // a, b in 0..maxTerm, uitkomst <= maxUitkomst; beide volgordes komen vanzelf voor.
        do { a = randInt(r, 0, n.maxTerm); b = randInt(r, 0, n.maxTerm); } while (a + b > n.maxUitkomst);
        antwoord = a + b;
        break;
      case 'min':
        // a <= maxAftrektal, b <= maxTerm en b <= a: nooit negatief.
        a = randInt(r, 0, n.maxAftrektal);
        b = randInt(r, 0, Math.min(a, n.maxTerm));
        antwoord = a - b;
        break;
      case 'maal':
        // tafels 1..maxTafel x 1..10, in willekeurige volgorde (3 x 4 en 4 x 3).
        a = randInt(r, 1, n.maxTafel);
        b = randInt(r, 1, 10);
        if (r() < 0.5) { t = a; a = b; b = t; }
        antwoord = a * b;
        break;
      case 'deel':
        // omgekeerde tafel: (deler x quotient) : deler, altijd opgaand.
        b = randInt(r, 1, n.maxTafel);       // deler
        antwoord = randInt(r, 1, 10);        // quotient
        a = b * antwoord;
        break;
      default:
        throw new Error('Onbekende operator: ' + op);
    }

    return {
      op: op,
      a: a,
      b: b,
      antwoord: antwoord,
      symbool: SYMBOOL[op],
      tekst: a + ' ' + SYMBOOL[op] + ' ' + b,
      sleutel: op + ':' + a + ':' + b
    };
  }

  /* Triviale sommen komen hoogstens af en toe: + 0, x 0 (komt niet voor), : 1. */
  function isTriviaal(som) {
    if (som.op === 'plus') return som.a === 0 || som.b === 0;
    if (som.op === 'maal') return som.a === 0 || som.b === 0;
    if (som.op === 'deel') return som.b === 1;
    return false;
  }

  /* Automatisch controleren (§5.2 punt 3).
     Geeft 'goed', 'wacht' (invoer is begin van het antwoord) of 'fout'. */
  function controleer(invoer, antwoord) {
    var A = String(antwoord), s = String(invoer);
    if (s === A) return 'goed';
    if (A.indexOf(s) === 0) return 'wacht';
    return 'fout';
  }

  /* Generator: actieve operatoren even vaak, nooit twee keer dezelfde som achter elkaar,
     triviale sommen meestal overgeslagen. `plus` staat altijd aan. */
  function Generator(opties, random) {
    opties = opties || {};
    this._random = random || Math.random;
    this._niveau = opties.niveau || 'klein';
    this._operators = [];
    this._vorige = null;
    this.zetOperators(opties.operators || ['plus']);
  }

  Generator.prototype.zetOperators = function (lijst) {
    var set = {};
    lijst.forEach(function (op) { if (OPERATOREN.indexOf(op) >= 0) set[op] = true; });
    set.plus = true;                         // vergrendeld
    this._operators = OPERATOREN.filter(function (op) { return set[op]; });
  };

  Generator.prototype.operators = function () { return this._operators.slice(); };

  Generator.prototype.zetNiveau = function (niveau) {
    if (NIVEAUS[niveau]) this._niveau = niveau;
  };

  Generator.prototype.niveau = function () { return this._niveau; };

  Generator.prototype.volgende = function () {
    var r = this._random, som;
    for (var poging = 0; poging < 100; poging++) {
      var op = this._operators[Math.floor(r() * this._operators.length)];
      som = maak(op, this._niveau, r);
      if (this._vorige && som.sleutel === this._vorige.sleutel) continue;
      if (isTriviaal(som) && r() < 0.85) continue;
      break;
    }
    this._vorige = som;
    return som;
  };

  return {
    OPERATOREN: OPERATOREN,
    SYMBOOL: SYMBOOL,
    NIVEAUS: NIVEAUS,
    TOETS_NAAR_OPERATOR: TOETS_NAAR_OPERATOR,
    maak: maak,
    isTriviaal: isTriviaal,
    controleer: controleer,
    Generator: Generator
  };
})();
