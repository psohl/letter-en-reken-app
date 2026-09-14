/* woorden.js - woordenlijst, letterkleuren, klanken en woordzakken voor de spellen Vis
   (woorden lezen, §5.5) en Mier (woorden bouwen, §5.6).
   Pure functies zonder DOM, zodat test/test.html ze kan doorlopen.
   Gebruikt Letters.ShuffleBag en Letters.schud uit letters.js (dus na letters.js laden).
   Geen ES-module: alles hangt aan het globale object `Woorden`.

   Drie niveaus, gebaseerd op de leerlijn technisch lezen van groep 3 (zie woordenlijst-vis.md):
     klein  kleine vis  klankzuivere (m)k(m)-woorden met één klinker(teken): vis, boom, koe
     groot  grote vis   eenlettergrepig met tweetekenklank en/of medeklinkercluster: muis, trein, hond
     haai   haai        twee- en drielettergrepige woorden en samenstellingen: konijn, paraplu, vuurtoren
   De niveaus zijn los aan en uit te zetten; staan er meerdere aan, dan komen de woorden om de
   beurt uit die niveaus. Er staat er altijd minstens één aan.
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

  /* ---- Schrift (lettersoort) voor de woorden: schrijfletters of blokletters, altijd kleine
     letters. Beide zijn los aan en uit te zetten; staan ze allebei aan, dan wisselen ze elkaar
     per opgave af. Er moet er altijd minstens één aan staan. */
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

  /* ---- Klanken (fase 14, Mier) ----
     Het bewegend alfabet legt een woord in *klanken*, niet in losse letters: maan is m + aa + n,
     drie kaartjes. `klanken(woord)` splitst een woord zo: een greedy match van links naar rechts
     op KLANKEN, dat van lang naar kort staat, zodat 'eeuw' vóór 'ee' en 'ee' vóór 'e' komt.
     Wat niet in de lijst staat, wordt één losse letter. 'sch' staat er bewust niet in: dat is
     s + ch, twee klanken.
     SPLITSINGEN is de uitweg voor woorden waar de greedy match het verkeerde antwoord geeft:
     daar staat de splitsing met de hand. Van de 168 woorden is dat er één (pannen|koek: de n en
     de k horen bij verschillende delen van het woord en zijn samen geen "nk"-klank).
     test/klankproef.html toont alle splitsingen ter beoordeling. */
  var KLANKEN = ['eeuw', 'ieuw', 'aai', 'ooi', 'oei', 'ouw', 'auw',
                 'aa', 'ee', 'oo', 'uu', 'oe', 'ie', 'ui', 'ij', 'ei', 'eu', 'ou', 'au',
                 'ch', 'ng', 'nk'];
  var SPLITSINGEN = {          // woord -> ['k', 'l', 'a', 'n', 'k'], alleen waar nodig
    pannenkoek: ['p', 'a', 'n', 'n', 'e', 'n', 'k', 'oe', 'k']
  };

  function klanken(woord) {
    var w = String(woord).toLowerCase();
    if (SPLITSINGEN[w]) return SPLITSINGEN[w].slice();
    var uit = [];
    for (var i = 0; i < w.length; ) {
      var deel = w[i];
      for (var k = 0; k < KLANKEN.length; k++) {
        if (w.substr(i, KLANKEN[k].length) === KLANKEN[k]) { deel = KLANKEN[k]; break; }
      }
      uit.push(deel);
      i += deel.length;
    }
    return uit;
  }

  /* Kleur van een klankvakje: een klank die met een klinker begint is blauw (ook aa, oe, eeuw),
     de ij is dat ook; ch, ng en nk zijn medeklinkers en dus rood. Eén klank = één kleur. */
  function klankKlasse(klank) {
    var k = String(klank).toLowerCase();
    return (Letters.isKlinker(k[0]) || k === 'ij') ? 'klinker' : 'medeklinker';
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

  /* ---- Niveaus aan en uit ----
     Gedeeld door de Opgavezak van Vis en de Woordzak van Mier: beide houden per niveau een eigen
     woordzak bij (die blijft staan als een niveau tussendoor uit en weer aan gaat) en loten het
     niveau uit een shuffle-bag over de aangezette niveaus. Onbekende namen worden genegeerd;
     blijft er niets over, dan verandert er niets (er staat altijd minstens één niveau aan).
     De lijst staat altijd in de vaste volgorde klein-groot-haai. */
  function zetNiveausOp(zak, lijst) {
    if (typeof lijst === 'string') lijst = [lijst];
    var aan = {};
    (lijst || []).forEach(function (n) { if (LIJST[n]) aan[n] = true; });
    var nieuw = NIVEAUS.filter(function (n) { return aan[n]; });
    if (nieuw.length === 0) nieuw = zak._niveaus.length ? zak._niveaus.slice() : [BASISNIVEAU];
    if (nieuw.join(',') === zak._niveaus.join(',')) return;
    nieuw.forEach(function (n) {
      if (!zak._woordzakken[n]) zak._woordzakken[n] = new Letters.ShuffleBag(LIJST[n], zak._random);
    });
    zak._niveaus = nieuw;
    zak._niveauzak = new Letters.ShuffleBag(nieuw, zak._random);
  }

  /* ---- Woordzak (fase 14, Mier) ----
     Levert woorden { woord, niveau, klanken } uit de aangezette niveaus: dezelfde aanpak als de
     Opgavezak van Vis, maar zonder afleiders en zonder spelvorm — bij Mier tikt het kind het
     woord zelf in. */
  function Woordzak(niveaus, random) {
    this._random = random || Math.random;
    this._niveaus = [];
    this._woordzakken = {};
    this._niveauzak = null;
    this.zetNiveaus(niveaus || [BASISNIVEAU]);
  }

  Woordzak.prototype.zetNiveaus = function (lijst) { zetNiveausOp(this, lijst); };
  Woordzak.prototype.zetNiveau = function (niveau) { zetNiveausOp(this, [niveau]); };
  Woordzak.prototype.niveaus = function () { return this._niveaus.slice(); };
  Woordzak.prototype.niveau = function () { return this._niveaus[0]; };

  Woordzak.prototype.volgende = function () {
    var niveau = this._niveauzak.volgende();
    var woord = this._woordzakken[niveau].volgende();
    return { woord: woord, niveau: niveau, klanken: klanken(woord) };
  };

  /* ---- Opgavezak ----
     Levert opgaven { woord, niveau, vorm, keuzes: [w, w, w], antwoord: index }.
     Het niveau komt uit een shuffle-bag over de aangezette niveaus, het woord uit een eigen
     shuffle-bag per niveau (elk woord even vaak, nooit twee keer hetzelfde achter elkaar); de
     spelvorm uit een derde shuffle-bag over de aangezette vormen. De afleiders komen altijd uit
     hetzelfde niveau als het woord, zodat de drie keuzes even moeilijk zijn. De drie keuzes
     staan in willekeurige volgorde.
     Het eerste argument mag een lijst niveaus zijn of één losse niveaunaam. */
  function Opgavezak(niveaus, vormen, random) {
    this._random = random || Math.random;
    this._niveaus = [];
    this._woordzakken = {};      // per niveau een eigen shuffle-bag, blijft staan bij aan/uit zetten
    this._niveauzak = null;
    this._vormen = [];
    this._vormzak = null;
    this.zetNiveaus(niveaus || [BASISNIVEAU]);
    this.zetVormen(vormen || [BASISVORM]);
  }

  /* Accepteert een lijst of één naam. Onbekende namen worden genegeerd; een lege lijst verandert
     niets (minstens één niveau aan). */
  Opgavezak.prototype.zetNiveaus = function (lijst) { zetNiveausOp(this, lijst); };

  Opgavezak.prototype.niveaus = function () { return this._niveaus.slice(); };

  /* Eén niveau tegelijk: handig voor tests en voor code die maar één stand kent. */
  Opgavezak.prototype.zetNiveau = function (niveau) { zetNiveausOp(this, [niveau]); };

  Opgavezak.prototype.niveau = function () { return this._niveaus[0]; };

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
    var niveau = this._niveauzak.volgende();
    var woord = this._woordzakken[niveau].volgende();
    var vorm = this._vormzak.volgende();
    var keuzes = Letters.schud([woord].concat(afleiders(woord, niveau, this._random)), this._random);
    return { woord: woord, niveau: niveau, vorm: vorm, keuzes: keuzes, antwoord: keuzes.indexOf(woord) };
  };

  return {
    NIVEAUS: NIVEAUS,
    BASISNIVEAU: BASISNIVEAU,
    LIJST: LIJST,
    VORMEN: VORMEN,
    BASISVORM: BASISVORM,
    SCHRIFTEN: SCHRIFTEN,
    BASISSCHRIFT: BASISSCHRIFT,
    KLANKEN: KLANKEN,
    SPLITSINGEN: SPLITSINGEN,
    schriftKlasse: schriftKlasse,
    lijst: lijst,
    alle: alle,
    letters: letters,
    html: html,
    klanken: klanken,
    klankKlasse: klankKlasse,
    gelijkenis: gelijkenis,
    afleiders: afleiders,
    Opgavezak: Opgavezak,
    Woordzak: Woordzak
  };
})();
