/* woorden.js - woordenlijst, letterkleuren en opgavezak voor het spel Vis (ontwikkelplan §5.5).
   Pure functies zonder DOM, zodat test/test.html ze kan doorlopen.
   Gebruikt Letters.ShuffleBag en Letters.schud uit letters.js (dus na letters.js laden).
   Geen ES-module: alles hangt aan het globale object `Woorden`.

   Drie niveaus, gebaseerd op de leerlijn technisch lezen van groep 3 (zie woordenlijst-vis.md):
     klein  kleine vis  klankzuivere (m)k(m)-woorden met één klinker(teken): vis, boom, koe
     groot  grote vis   eenlettergrepig met tweetekenklank en/of medeklinkercluster: muis, trein, hond
     haai   haai        twee- en drielettergrepige woorden en samenstellingen: konijn, paraplu, vuurtoren
   Elk woord heeft een eigen plaatje in js/plaatjes.js (Plaatjes.svg(woord)). */

var Woorden = (function () {
  'use strict';

  var NIVEAUS = ['klein', 'groot', 'haai'];
  var BASISNIVEAU = 'klein';

  var LIJST = {
    klein: [
      'bal', 'kat', 'jas', 'zak', 'pan', 'kam', 'rat', 'tas',
      'pen', 'bed', 'hek', 'mes', 'pet',
      'vis', 'kip', 'wip',
      'zon', 'pop', 'vos', 'bos', 'tol', 'mol', 'rok', 'sok', 'pot',
      'bus', 'mug', 'put', 'mus', 'hut',
      'maan', 'aap', 'haan', 'kaas', 'raam', 'vaas', 'zaag',
      'beer', 'peer', 'zeep', 'fee',
      'boom', 'boot', 'roos', 'doos',
      'vuur', 'muur',
      'boek', 'koe', 'doek', 'hoed', 'voet', 'koek', 'boer',
      'mier', 'wiel'
    ],
    groot: [
      'muis', 'huis', 'duif', 'trui', 'ui',
      'ijs', 'bij', 'pijl',
      'ei', 'geit', 'trein',
      'reus', 'deur', 'neus', 'leeuw',
      'touw', 'hout', 'pauw',
      'bril', 'vlag', 'slak', 'spin', 'kraan', 'trap', 'klok', 'stoel', 'brood', 'fles',
      'bloem', 'kroon', 'draak', 'zwaan', 'knoop', 'plant', 'spook', 'snoep', 'broek',
      'schoen', 'schaap', 'schip', 'vlieg',
      'hond', 'kast', 'lamp', 'tent', 'bank', 'ring', 'tand', 'melk', 'worst', 'berg',
      'mand', 'fiets', 'wolk', 'vork', 'kwast'
    ],
    haai: [
      'appel', 'banaan', 'konijn', 'vlinder', 'olifant', 'tomaat', 'panda', 'paraplu',
      'voetbal', 'zebra', 'aardbei', 'wortel', 'tandenborstel', 'kikker', 'tijger', 'vogel',
      'auto', 'tafel', 'kasteel', 'kabouter', 'piraat', 'robot', 'raket', 'ballon',
      'egel', 'spiegel', 'ladder', 'emmer', 'schommel', 'vliegtuig', 'dolfijn', 'krokodil',
      'papegaai', 'schildpad', 'eekhoorn', 'kameel', 'zeehond', 'walvis', 'regenboog', 'sneeuwpop',
      'zonnebril', 'pannenkoek', 'boterham', 'sleutel', 'gitaar', 'trommel', 'telefoon', 'paddenstoel',
      'glijbaan', 'potlood', 'rugzak', 'molen', 'toren', 'prinses', 'vuurtoren', 'ijsbeer'
    ]
  };

  /* ---- Spelvormen ----
     'woord'   : het woord staat in beeld, het kind kiest het juiste plaatje uit drie
     'plaatje' : het plaatje staat in beeld, het kind kiest het juiste woord uit drie
     Beide zijn los aan en uit te zetten; er moet er altijd minstens één aan staan. */
  var VORMEN = ['woord', 'plaatje'];
  var BASISVORM = 'woord';

  /* ---- Schrift (lettersoort) voor de woorden: schrijfletters of blokletters, altijd kleine letters. */
  var SCHRIFTEN = ['schrijf', 'blok'];
  var BASISSCHRIFT = 'schrijf';

  function schriftKlasse(schrift) {
    return schrift === 'blok' ? 'blokletter' : 'schrijfletter';
  }

  function lijst(niveau) {
    return (LIJST[niveau] || LIJST[BASISNIVEAU]).slice();
  }

  function alle() {
    return LIJST.klein.concat(LIJST.groot, LIJST.haai);
  }

  /* ---- Letters met kleur ----
     Klinkers blauw, medeklinkers rood, zoals bij Aapje (Letters.isKlinker). De ij telt als
     één klinker: beide letters worden blauw, want het kind leert de ij als één klank. */
  function letters(woord) {
    var w = String(woord).toLowerCase();
    var uit = [];
    for (var i = 0; i < w.length; i++) {
      var klinker = Letters.isKlinker(w[i]);
      if (w[i] === 'j' && i > 0 && w[i - 1] === 'i') klinker = true;      // de j van ij
      uit.push({ teken: w[i], klinker: klinker });
    }
    return uit;
  }

  /* HTML voor een woord: elke letter in een eigen span met kleurklasse. */
  function html(woord) {
    return letters(woord).map(function (l) {
      return '<span class="letter ' + (l.klinker ? 'klinker' : 'medeklinker') + '">' + l.teken + '</span>';
    }).join('');
  }

  /* ---- Afleiders ----
     Kleine vis: twee willekeurige andere woorden van hetzelfde niveau.
     Grote vis en haai: woorden die op het doelwoord lijken (zelfde beginletter, lengte of
     eindletter) krijgen voorrang, zodat het kind echt moet lezen en niet alleen naar de
     eerste letter kijkt. De eerste afleider is een van de meest gelijkende woorden, de
     tweede komt willekeurig uit de zes meest gelijkende. */
  function gelijkenis(a, b) {
    var score = 0;
    if (a[0] === b[0]) score += 2;
    if (a.length === b.length) score += 1;
    if (a[a.length - 1] === b[b.length - 1]) score += 1;
    return score;
  }

  function afleiders(woord, niveau, random) {
    var r = random || Math.random;
    var rest = lijst(niveau).filter(function (w) { return w !== woord; });
    var geschud = Letters.schud(rest, r);
    if (niveau === 'klein') return geschud.slice(0, 2);
    geschud.sort(function (a, b) { return gelijkenis(woord, b) - gelijkenis(woord, a); });   // stabiel: volgorde binnen gelijke score blijft geschud
    var eerste = geschud[0];                                  // meest gelijkend (bij gelijke score willekeurig)
    var tweede = Letters.schud(geschud.slice(1, 6), r)[0];    // willekeurig uit de rest van de top zes
    return [eerste, tweede];
  }

  /* ---- Opgavezak ----
     Levert opgaven { woord, niveau, vorm, keuzes: [w, w, w], antwoord: index }.
     Het woord komt uit een shuffle-bag over alle woorden van het niveau (elk woord even vaak,
     nooit twee keer hetzelfde achter elkaar); de spelvorm uit een tweede shuffle-bag over de
     aangezette vormen. De drie keuzes staan in willekeurige volgorde. */
  function Opgavezak(niveau, vormen, random) {
    this._random = random || Math.random;
    this._niveau = null;
    this._woorden = null;
    this._vormen = [];
    this._vormzak = null;
    this.zetNiveau(niveau || BASISNIVEAU);
    this.zetVormen(vormen || [BASISVORM]);
  }

  Opgavezak.prototype.zetNiveau = function (niveau) {
    if (!LIJST[niveau] || niveau === this._niveau) return;
    this._niveau = niveau;
    this._woorden = new Letters.ShuffleBag(LIJST[niveau], this._random);
  };

  Opgavezak.prototype.niveau = function () { return this._niveau; };

  /* Onbekende namen worden genegeerd; een lege lijst verandert niets (minstens één vorm aan). */
  Opgavezak.prototype.zetVormen = function (lijst) {
    var aan = {};
    (lijst || []).forEach(function (v) { if (VORMEN.indexOf(v) >= 0) aan[v] = true; });
    var nieuw = VORMEN.filter(function (v) { return aan[v]; });
    if (nieuw.length === 0) nieuw = this._vormen.length ? this._vormen.slice() : [BASISVORM];
    if (nieuw.join(',') === this._vormen.join(',')) return;
    this._vormen = nieuw;
    this._vormzak = new Letters.ShuffleBag(nieuw, this._random);
  };

  Opgavezak.prototype.vormen = function () { return this._vormen.slice(); };

  Opgavezak.prototype.volgende = function () {
    var woord = this._woorden.volgende();
    var vorm = this._vormzak.volgende();
    var keuzes = Letters.schud([woord].concat(afleiders(woord, this._niveau, this._random)), this._random);
    return { woord: woord, niveau: this._niveau, vorm: vorm, keuzes: keuzes, antwoord: keuzes.indexOf(woord) };
  };

  return {
    NIVEAUS: NIVEAUS,
    BASISNIVEAU: BASISNIVEAU,
    LIJST: LIJST,
    VORMEN: VORMEN,
    BASISVORM: BASISVORM,
    SCHRIFTEN: SCHRIFTEN,
    BASISSCHRIFT: BASISSCHRIFT,
    schriftKlasse: schriftKlasse,
    lijst: lijst,
    alle: alle,
    letters: letters,
    html: html,
    gelijkenis: gelijkenis,
    afleiders: afleiders,
    Opgavezak: Opgavezak
  };
})();
