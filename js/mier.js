/* mier.js - spel Mier: woorden bouwen met het bewegend alfabet (ontwikkelplan §5.1, §5.6).
   Er staat één plaatje in beeld; daaronder staat een rij lege klankvakjes en het kind typt het
   woord van links naar rechts. Eén vakje per *klank*, niet per letter: in "maan" typt het kind
   m, dan a-a in één vakje, dan n (Woorden.klanken). Drie niveaus met de woordenlijsten van Vis,
   twee lettersoorten en het voorbeeldwoord als hulpmiddel.
   Registreert zich bij App als scherm 'mier'.

   Toetsen: alle letters zijn antwoord, dus de schakelaars staan op de cijfers (zoals bij Aapje):
   1/2/3 = niveaus, 4/5 = schrijf-/blokletters, 6 = voorbeeldwoord. Backspace wist de laatste klank. */

var Mier = (function () {
  'use strict';

  var HINT_NA_FOUTEN = 2;      // daarna pulseert de juiste toets op het hint-toetsenbord
  var DUBBELKLIK_MS = 300;     // tweede klik op dezelfde schakelaar binnen deze tijd wordt genegeerd

  var els = {};
  var zak = null;
  var opgave = null;           // { woord, niveau, klanken }
  var vak = 0;                 // het vakje waar het kind nu in typt
  var deel = '';               // wat er in dat vakje al goed staat ('a' van 'aa')
  var fouten = 0;              // foute toetsen op dit vakje
  var schriften = [Woorden.BASISSCHRIFT];   // aangezette lettersoorten
  var schriftzak = null;       // wisselt ze af als er meer dan één aan staat
  var schrift = Woorden.BASISSCHRIFT;       // de lettersoort die nu in beeld staat
  var voorbeeldAan = false;    // hulpmiddel: het woord klein boven de vakjes
  var bezig = false;           // beloningsanimatie loopt: toetsen worden genegeerd
  var timer = null;
  var hint = null;
  var teller = null;
  var laatsteToggle = { sleutel: null, tijd: 0 };

  function dubbelklik(sleutel) {
    var nu = Date.now();
    if (laatsteToggle.sleutel === sleutel && nu - laatsteToggle.tijd < DUBBELKLIK_MS) return true;
    laatsteToggle = { sleutel: sleutel, tijd: nu };
    return false;
  }

  function init() {
    els.scherm = document.getElementById('scherm-mier');
    els.veld = document.getElementById('mier-veld');
    els.plaatje = document.getElementById('mier-plaatje');
    els.vakjes = document.getElementById('mier-vakjes');
    els.voorbeeld = document.getElementById('mier-voorbeeld');
    els.figuur = document.getElementById('mier-figuur');
    els.effecten = document.getElementById('mier-effecten');
    els.tellerEl = document.getElementById('mier-teller');
    els.figuur.innerHTML = Icons.svg('mierFiguur');
    els.niveaus = Array.prototype.slice.call(els.scherm.querySelectorAll('.mier-niveau'));
    els.schriften = Array.prototype.slice.call(els.scherm.querySelectorAll('.schrift-knop'));
    els.voorbeeldKnop = els.scherm.querySelector('.voorbeeld-toggle');

    hint = KeyboardHint.maak(document.getElementById('mier-hint'), 'letters');
    teller = Teller.maak(els.tellerEl, 'blaadje', 'mierenhoop');
    zak = new Woorden.Woordzak([Woorden.BASISNIVEAU]);
    schriftzak = new Letters.ShuffleBag(schriften);

    els.niveaus.forEach(function (knop) {
      knop.addEventListener('click', function () { wisselNiveau(knop.getAttribute('data-niveau')); knop.blur(); });
    });
    els.schriften.forEach(function (knop) {
      knop.addEventListener('click', function () { wisselSchrift(knop.getAttribute('data-schrift')); knop.blur(); });
    });
    els.voorbeeldKnop.addEventListener('click', function () { wisselVoorbeeld(); els.voorbeeldKnop.blur(); });

    toonToggles();
    App.registreer('mier', { binnen: binnen, buiten: buiten, toets: toets });
  }

  function binnen() {
    bezig = false;
    hint.verberg();
    if (!opgave) volgendWoord();
  }

  function buiten() {
    if (timer) { clearTimeout(timer); timer = null; }
    els.vakjes.classList.remove('goed');
    Animaties.stop(els.figuur, els.effecten);
    if (bezig) { volgendWoord(); bezig = false; }   // animatie afgebroken: toch door naar het volgende woord
  }

  /* ---- Instellingen ---- */

  /* Niveaus zijn los aan en uit te zetten; het laatste aangezette niveau blijft staan. */
  function wisselNiveau(niveau) {
    if (Woorden.NIVEAUS.indexOf(niveau) < 0) return;
    var actief = zak.niveaus();
    var i = actief.indexOf(niveau);
    if (i >= 0 && actief.length === 1) return;                 // het laatste niveau blijft aan
    if (dubbelklik('niveau:' + niveau)) return;
    if (i >= 0) actief.splice(i, 1); else actief.push(niveau);
    zak.zetNiveaus(actief);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    toonToggles();
    // Staat het niveau van het woord in beeld nu uit? Dan meteen een nieuw woord.
    if (opgave && zak.niveaus().indexOf(opgave.niveau) < 0 && !bezig) volgendWoord();
  }

  /* Schrijf- en blokletters zijn los aan en uit te zetten; staan ze allebei aan, dan wisselen ze
     elkaar per woord af. De soort bepaalt alleen hoe het getypte woord eruitziet: het kind typt
     sowieso gewone lettertoetsen. Een net aangezette soort komt meteen in beeld. */
  function wisselSchrift(soort) {
    if (Woorden.SCHRIFTEN.indexOf(soort) < 0) return;
    var i = schriften.indexOf(soort);
    if (i >= 0 && schriften.length === 1) return;              // de laatste soort letters blijft aan
    if (dubbelklik('schrift:' + soort)) return;
    if (i >= 0) schriften.splice(i, 1); else schriften.push(soort);
    schriften = Woorden.SCHRIFTEN.filter(function (s) { return schriften.indexOf(s) >= 0; });
    schriftzak = new Letters.ShuffleBag(schriften);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    if (i < 0) schrift = soort;                                // net aangezet: meteen laten zien
    else if (schriften.indexOf(schrift) < 0) schrift = schriften[0];
    toonToggles();
    toonVakjes(-1);
    toonVoorbeeld();
  }

  /* Voorbeeldwoord: het woord klein boven de vakjes, zodat het kind het kan overschrijven.
     Standaard uit; het is ook de uitweg als een plaatje niet eenduidig te benoemen is. */
  function wisselVoorbeeld() {
    if (dubbelklik('voorbeeld')) return;
    voorbeeldAan = !voorbeeldAan;
    Geluid.speel(voorbeeldAan ? 'toggleAan' : 'toggleUit');
    toonToggles();
    toonVoorbeeld();
  }

  function toonToggles() {
    var niveaus = zak.niveaus();
    els.niveaus.forEach(function (knop) {
      var aan = niveaus.indexOf(knop.getAttribute('data-niveau')) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    els.schriften.forEach(function (knop) {
      var aan = schriften.indexOf(knop.getAttribute('data-schrift')) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    els.voorbeeldKnop.classList.toggle('aan', voorbeeldAan);
    els.voorbeeldKnop.setAttribute('aria-pressed', voorbeeldAan ? 'true' : 'false');
  }

  /* ---- Weergave ---- */

  function woordHtml(woord) {
    return '<span class="woord ' + Woorden.schriftKlasse(schrift) + '" style="--letters:' + woord.length + '">' +
           Woorden.html(woord) + '</span>';
  }

  function toonVoorbeeld() {
    els.voorbeeld.innerHTML = (voorbeeldAan && opgave) ? woordHtml(opgave.woord) : '';
    els.voorbeeld.classList.toggle('aan', voorbeeldAan);
  }

  /* Alle vakjes opnieuw tekenen. `pop` is het vakje dat net een letter erbij kreeg; alleen dat
     vakje krijgt de pop-animatie. Een klank houdt één kleur: klinkers blauw, medeklinkers rood. */
  function toonVakjes(pop) {
    var html = '';
    opgave.klanken.forEach(function (klank, i) {
      var tekst = i < vak ? klank : (i === vak ? deel : '');
      var klassen = 'klankvak';
      if (i < vak) klassen += ' gevuld';
      if (i === vak && !bezig) klassen += ' actief';
      if (i === pop) klassen += ' pop';
      html += '<span class="' + klassen + '">' +
              (tekst ? '<span class="woord ' + Woorden.schriftKlasse(schrift) + '" style="--letters:' + tekst.length + '">' +
                       '<span class="letter ' + Woorden.klankKlasse(klank) + '">' + tekst + '</span></span>' : '') +
              '</span>';
    });
    els.vakjes.innerHTML = html;
    els.vakjes.style.setProperty('--vakjes', opgave.klanken.length);
  }

  /* ---- Spelloop ---- */

  function volgendWoord() {
    opgave = zak.volgende();
    schrift = schriftzak.volgende();     // met één soort letters komt daar altijd dezelfde uit
    vak = 0;
    deel = '';
    fouten = 0;
    els.vakjes.classList.remove('goed');
    els.plaatje.innerHTML = '<span class="plaatje">' + Plaatjes.svg(opgave.woord) + '</span>';
    els.plaatje.setAttribute('aria-label', opgave.woord);
    toonVakjes(-1);
    toonVoorbeeld();
  }

  /* De letter die het kind nu moet typen: de eerstvolgende letter van de klank in het vakje. */
  function doelLetter() {
    return opgave.klanken[vak] ? opgave.klanken[vak][deel.length] : null;
  }

  function verwerkLetter(letter) {
    var klank = opgave.klanken[vak];
    if (letter !== klank[deel.length]) { fout(); return; }

    deel += letter;
    Geluid.speel('klik');
    if (deel === klank) {                 // vakje vol: door naar het volgende
      vak++;
      deel = '';
      fouten = 0;
      hint.verberg();
      toonVakjes(vak - 1);
      if (vak >= opgave.klanken.length) { goed(); return; }
    } else {
      toonVakjes(vak);
      if (hint.isZichtbaar()) hint.toon(doelLetter());
    }
  }

  /* Backspace legt de laatste klank terug: eerst wat er half in het vakje staat, anders het
     vorige vakje. Wat goed staat blijft verder staan - het materiaal blijft liggen. */
  function wisLaatste() {
    if (deel) deel = '';
    else if (vak > 0) vak--;
    else return;
    fouten = 0;
    toonVakjes(-1);
    if (hint.isZichtbaar()) hint.toon(doelLetter());
  }

  function goed() {
    bezig = true;
    hint.verberg();
    teller.plusEen();
    Geluid.speel('goed');
    Geluid.speel('trippel');
    els.vakjes.classList.add('goed');
    toonVakjes(-1);
    var duur = Animaties.speel('mier', {
      figuur: els.figuur, laag: els.effecten, van: els.vakjes, naar: els.tellerEl, icoon: 'blaadje'
    });
    timer = setTimeout(function () {
      timer = null;
      volgendWoord();
      bezig = false;
    }, duur);
  }

  /* Foute letter: het vakje schudt, de letter verschijnt niet en wat al goed staat blijft staan.
     (Bewust anders dan Raketje, waar één fout cijfer de hele invoer wist: bij een woord van acht
     klanken zou dat ontmoedigen.) */
  function fout() {
    fouten++;
    Geluid.speel('fout');
    var el = els.vakjes.children[vak];
    if (el) {
      // Klasse opnieuw zetten zodat de schud-animatie ook bij snel achter elkaar fout opnieuw speelt.
      el.classList.remove('schudt');
      void el.offsetWidth;
      el.classList.add('schudt');
    }
    if (fouten >= HINT_NA_FOUTEN) hint.toon(doelLetter());
  }

  function toets(e) {
    if (bezig) return;
    var k = e.key;

    if (k === 'Backspace') { wisLaatste(); return; }   // preventDefault is al gedaan in app.js
    if (k.length !== 1) return;

    // Alle letters zijn antwoord, dus de schakelaars staan op de cijfers (zoals bij Aapje).
    if (k >= '1' && k <= '6') {
      e.preventDefault();
      if (k === '1') wisselNiveau('klein');
      if (k === '2') wisselNiveau('groot');
      if (k === '3') wisselNiveau('haai');
      if (k === '4') wisselSchrift('schrijf');
      if (k === '5') wisselSchrift('blok');
      if (k === '6') wisselVoorbeeld();
      return;
    }

    var l = k.toLowerCase();               // Caps Lock en Shift maken geen verschil
    if (l < 'a' || l > 'z') return;        // cijfers en leestekens tellen niet als poging
    e.preventDefault();
    verwerkLetter(l);
  }

  document.addEventListener('DOMContentLoaded', init);

  /* Voor tests en ontwikkeling. */
  return {
    huidigWoord: function () { return opgave; },
    gebouwd: function () { return opgave ? opgave.klanken.slice(0, vak).join('') + deel : ''; },
    vak: function () { return vak; },
    niveaus: function () { return zak ? zak.niveaus() : []; },
    schrift: function () { return schrift; },
    schriften: function () { return schriften.slice(); },
    voorbeeld: function () { return voorbeeldAan; },
    isBezig: function () { return bezig; }
  };
})();
