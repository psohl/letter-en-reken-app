/* aapje.js - spel Aapje: letter herkennen en intoetsen (ontwikkelplan §5.1, §5.2).
   Registreert zich bij App als scherm 'aapje'. */

var Aapje = (function () {
  'use strict';

  var HINT_NA_FOUTEN = 2;
  var DUBBELKLIK_MS = 300;     // tweede klik op dezelfde schakelaar binnen deze tijd wordt genegeerd

  var els = {};
  var zak = null;
  var kaart = null;            // { letter: 'a', set: 'blok-hoofd', vorm: 'A' }
  var huidigeLetter = null;    // altijd de kleine letter: dat is het antwoord
  var fouten = 0;
  var bezig = false;           // beloningsanimatie loopt: toetsen worden genegeerd
  var timer = null;
  var hint = null;
  var teller = null;
  var wereld = null;           // de boom waarin het aapje klimt (ontwikkelplan §7.6)
  var laatsteToggle = { set: null, tijd: 0 };

  /* Tweede actie op dezelfde schakelaar binnen DUBBELKLIK_MS negeren (dubbelklik). */
  function dubbelklik(set) {
    var nu = Date.now();
    if (laatsteToggle.set === set && nu - laatsteToggle.tijd < DUBBELKLIK_MS) return true;
    laatsteToggle = { set: set, tijd: nu };
    return false;
  }

  function init() {
    els.scherm = document.getElementById('scherm-aapje');
    els.kaart = document.getElementById('aapje-kaart');
    els.letter = document.getElementById('aapje-letter');
    els.figuur = document.getElementById('aapje-figuur');
    els.effecten = document.getElementById('aapje-effecten');
    els.tellerEl = document.getElementById('aapje-teller');
    els.figuur.innerHTML = Icons.svg('aapjeFiguur');
    els.toggles = Array.prototype.slice.call(els.scherm.querySelectorAll('.letterset-toggle'));

    hint = KeyboardHint.maak(document.getElementById('aapje-hint'), 'letters');
    teller = Teller.maak(els.tellerEl, 'banaan', 'bananentros');
    zak = new Letters.Kaartenzak([Letters.BASISSET]);
    wereld = Wereld.maak(document.getElementById('aapje-wereld'), 'boom', els.figuur);

    els.toggles.forEach(function (knop) {
      knop.addEventListener('click', function () {
        wisselSet(knop.getAttribute('data-set'));
        knop.blur();                       // spatie/Enter daarna niet per ongeluk nog eens toggelen
      });
    });

    toonToggles();
    App.registreer('aapje', { binnen: binnen, buiten: buiten, toets: toets });
  }

  function binnen() {
    bezig = false;
    hint.verberg();
    // De boom volgt altijd de teller: zo klopt hij ook na een bezoek aan het menu of
    // na een animatie die met Escape is afgebroken.
    if (wereld) wereld.zetStand(Wereld.stand(teller.waarde()));
    if (!kaart) volgendeLetter();
  }

  function buiten() {
    if (timer) { clearTimeout(timer); timer = null; }
    els.kaart.classList.remove('goed', 'schudt');
    Animaties.stop(els.figuur, els.effecten, wereld);
    if (bezig) { volgendeLetter(); bezig = false; }   // animatie afgebroken: toch door naar de volgende
  }

  /* ---- Lettersets (schrijf/blok, klein/hoofd) ---- */

  function wisselSet(set) {
    if (!set) return;
    var actief = zak.sets();
    var i = actief.indexOf(set);
    if (i >= 0 && actief.length === 1) return;                 // de laatste soort blijft aan
    if (dubbelklik(set)) return;

    if (i >= 0) actief.splice(i, 1); else actief.push(set);
    zak.zetSets(actief);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    toonToggles();
    // Staat de soort letter op de kaart nu uit? Dan meteen een nieuwe letter.
    if (kaart && zak.sets().indexOf(kaart.set) < 0 && !bezig) volgendeLetter();
  }

  function toonToggles() {
    var actief = zak.sets();
    els.toggles.forEach(function (knop) {
      var aan = actief.indexOf(knop.getAttribute('data-set')) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
  }

  /* ---- Spelloop ---- */

  function volgendeLetter() {
    kaart = zak.volgende();
    huidigeLetter = kaart.letter;
    fouten = 0;
    els.letter.textContent = kaart.vorm;
    els.letter.className = 'letter-groot ' + Letters.vormKlassen(kaart.set);
    els.kaart.classList.remove('klinker', 'medeklinker');
    els.kaart.classList.add(Letters.kleurKlasse(huidigeLetter));
  }

  function toets(e) {
    if (bezig) return;
    if (e.key.length !== 1) return;            // alleen echte tekens (geen Shift, F-toetsen, ...)

    // 1 t/m 4 zetten de lettersoorten aan of uit; letters zijn allemaal antwoord,
    // dus daar is geen toets voor over.
    if (e.key >= '1' && e.key <= '4') {
      e.preventDefault();
      wisselSet(Letters.SETS[Number(e.key) - 1]);
      return;
    }

    var k = e.key.toLowerCase();               // Caps Lock en Shift maken geen verschil
    if (k < 'a' || k > 'z') return;            // cijfers en leestekens tellen niet als poging
    e.preventDefault();
    if (k === huidigeLetter) goed(); else fout();
  }

  function goed() {
    bezig = true;
    hint.verberg();
    teller.plusEen();
    var stand = Wereld.stand(teller.waarde());
    Geluid.speel('goed');
    Geluid.speel('oe-oe');
    Geluid.speel(stand.finale ? 'tada' : 'klim', 0.75);   // klinkt als het aapje op de tak landt
    els.kaart.classList.remove('schudt');
    els.kaart.classList.add('goed');
    var duur = Animaties.speel('aapje', {
      figuur: els.figuur, laag: els.effecten, van: els.kaart, naar: els.tellerEl, icoon: 'banaan',
      wereld: wereld, stand: stand
    });
    timer = setTimeout(function () {
      timer = null;
      els.kaart.classList.remove('goed');
      volgendeLetter();
      bezig = false;
    }, duur);
  }

  function fout() {
    fouten++;
    Geluid.speel('fout');
    // Klasse opnieuw zetten zodat de schud-animatie ook bij snel achter elkaar fout opnieuw speelt.
    els.kaart.classList.remove('schudt');
    void els.kaart.offsetWidth;
    els.kaart.classList.add('schudt');
    if (fouten >= HINT_NA_FOUTEN) hint.toon(huidigeLetter);
  }

  document.addEventListener('DOMContentLoaded', init);

  /* Voor tests en ontwikkeling. */
  return {
    huidigeLetter: function () { return huidigeLetter; },
    huidigeKaart: function () { return kaart; },
    sets: function () { return zak ? zak.sets() : []; },
    wereld: function () { return wereld; },
    isBezig: function () { return bezig; }
  };
})();
