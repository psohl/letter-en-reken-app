/* letters.js - letterset, klinker/medeklinker en shuffle-bag (ontwikkelplan §5.2).
   Pure functies zonder DOM, zodat test/test.html ze kan doorlopen.
   Geen ES-module: alles hangt aan het globale object `Letters`. */

var Letters = (function () {
  'use strict';

  var LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var KLINKERS = { a: true, e: true, i: true, o: true, u: true };

  function isKlinker(letter) {
    return KLINKERS[String(letter).toLowerCase()] === true;
  }

  /* CSS-klasse voor de kleur: klinkers blauw, medeklinkers roze/rood. */
  function kleurKlasse(letter) {
    return isKlinker(letter) ? 'klinker' : 'medeklinker';
  }

  /* Fisher-Yates op een kopie. `random` is injecteerbaar voor tests. */
  function schud(lijst, random) {
    var r = random || Math.random;
    var kopie = lijst.slice();
    for (var i = kopie.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = kopie[i]; kopie[i] = kopie[j]; kopie[j] = t;
    }
    return kopie;
  }

  /* Shuffle-bag: alle items in willekeurige volgorde; pas als de zak leeg is opnieuw
     schudden. Het eerste item van een nieuwe zak is nooit gelijk aan het laatste item
     van de vorige zak, zodat een letter niet twee keer achter elkaar voorkomt. */
  function ShuffleBag(items, random) {
    this._items = items.slice();
    this._random = random || Math.random;
    this._zak = [];
    this._laatste = null;
  }

  ShuffleBag.prototype._vul = function () {
    this._zak = schud(this._items, this._random);
    // Voorkom herhaling over de zakgrens heen (alleen zinvol bij >= 2 items).
    var laatsteIndex = this._zak.length - 1;
    if (this._items.length > 1 && this._zak[laatsteIndex] === this._laatste) {
      var ruil = Math.floor(this._random() * laatsteIndex); // 0 .. laatsteIndex-1
      var t = this._zak[laatsteIndex]; this._zak[laatsteIndex] = this._zak[ruil]; this._zak[ruil] = t;
    }
  };

  /* Volgend item; trekt van achteren uit de zak. */
  ShuffleBag.prototype.volgende = function () {
    if (this._zak.length === 0) this._vul();
    this._laatste = this._zak.pop();
    return this._laatste;
  };

  ShuffleBag.prototype.resterend = function () {
    return this._zak.length;
  };

  function nieuweLetterzak(random) {
    return new ShuffleBag(LETTERS, random);
  }

  /* ---- Lettersets (ontwikkelplan §5.2) ----
     Twee assen: schrift (schrijfletter of blokletter) en kast (klein of hoofd).
     Alle vier zijn los aan en uit te zetten; er moet er alleen altijd minstens
     één aan blijven staan. BASISSET is de set waarmee de app begint. */
  var SETS = ['schrijf-klein', 'schrijf-hoofd', 'blok-klein', 'blok-hoofd'];
  var BASISSET = 'schrijf-klein';
  var SET_INFO = {
    'schrijf-klein': { schrift: 'schrijf', kast: 'klein' },
    'schrijf-hoofd': { schrift: 'schrijf', kast: 'hoofd' },
    'blok-klein':    { schrift: 'blok',    kast: 'klein' },
    'blok-hoofd':    { schrift: 'blok',    kast: 'hoofd' }
  };

  function setInfo(set) {
    return SET_INFO[set] || SET_INFO[BASISSET];
  }

  /* Hoe de letter op de kaart staat: 'a' of 'A'. De letter zelf (het antwoord)
     blijft altijd kleinletterig; hoofdletters zijn alleen een andere vorm. */
  function vorm(letter, set) {
    var l = String(letter).toLowerCase();
    return setInfo(set).kast === 'hoofd' ? l.toUpperCase() : l;
  }

  /* CSS-klassen voor de kaart: het font en de kast, zodat de vier vormen
     apart op maat gezet kunnen worden (css/aapje.css). */
  function vormKlassen(set) {
    var info = setInfo(set);
    return (info.schrift === 'blok' ? 'blokletter' : 'schrijfletter') + ' kast-' + info.kast;
  }

  /* Kaartenzak: levert kaartjes { letter: 'a', set: 'blok-hoofd', vorm: 'A' }.
     De letter komt uit een shuffle-bag over alle 26 letters, de set uit een
     shuffle-bag over de aangezette sets: zo komen alle letters én alle
     aangezette vormen even vaak aan de beurt en nooit twee keer dezelfde
     letter achter elkaar. */
  function Kaartenzak(sets, random) {
    this._random = random || Math.random;
    this._letters = new ShuffleBag(LETTERS, this._random);
    this._sets = [];
    this._setzak = null;
    this.zetSets(sets || [BASISSET]);
  }

  /* Zet de aangezette sets. Onbekende namen worden genegeerd; blijft er niets
     over, dan verandert er niets (er moet altijd één soort letter aan staan). */
  Kaartenzak.prototype.zetSets = function (lijst) {
    var aan = {};
    (lijst || []).forEach(function (s) { if (SET_INFO[s]) aan[s] = true; });
    var nieuw = SETS.filter(function (s) { return aan[s]; });
    if (nieuw.length === 0) nieuw = this._sets.length ? this._sets.slice() : [BASISSET];
    if (nieuw.join(',') === this._sets.join(',')) return;   // niets veranderd: zak laten staan
    this._sets = nieuw;
    this._setzak = new ShuffleBag(nieuw, this._random);
  };

  Kaartenzak.prototype.sets = function () { return this._sets.slice(); };

  Kaartenzak.prototype.volgende = function () {
    var letter = this._letters.volgende();
    var set = this._setzak.volgende();
    return { letter: letter, set: set, vorm: vorm(letter, set) };
  };

  return {
    LETTERS: LETTERS,
    SETS: SETS,
    BASISSET: BASISSET,
    setInfo: setInfo,
    vorm: vorm,
    vormKlassen: vormKlassen,
    isKlinker: isKlinker,
    kleurKlasse: kleurKlasse,
    schud: schud,
    ShuffleBag: ShuffleBag,
    nieuweLetterzak: nieuweLetterzak,
    Kaartenzak: Kaartenzak
  };
})();
