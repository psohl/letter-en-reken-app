/* vis.js - spel Vis: woorden lezen (ontwikkelplan §5.1, §5.5).
   Twee spelvormen: woord in beeld → kies het juiste plaatje uit drie; plaatje in beeld →
   kies het juiste woord uit drie. Drie niveaus (kleine vis, grote vis, haai), schrijf- of
   blokletters, klinkers blauw en medeklinkers rood. Registreert zich bij App als scherm 'vis'. */

var Vis = (function () {
  'use strict';

  var HINT_NA_FOUTEN = 2;      // daarna pulseert het juiste antwoord (er is dan nog één keuze over)
  var DUBBELKLIK_MS = 300;     // tweede klik op dezelfde schakelaar binnen deze tijd wordt genegeerd

  var els = {};
  var zak = null;
  var opgave = null;           // { woord, niveau, vorm, keuzes, antwoord }
  var schrift = Woorden.BASISSCHRIFT;
  var fouten = 0;
  var bezig = false;           // beloningsanimatie loopt: klikken en toetsen worden genegeerd
  var timer = null;
  var teller = null;
  var laatsteToggle = { sleutel: null, tijd: 0 };

  function dubbelklik(sleutel) {
    var nu = Date.now();
    if (laatsteToggle.sleutel === sleutel && nu - laatsteToggle.tijd < DUBBELKLIK_MS) return true;
    laatsteToggle = { sleutel: sleutel, tijd: nu };
    return false;
  }

  function init() {
    els.scherm = document.getElementById('scherm-vis');
    els.veld = document.getElementById('vis-veld');
    els.opgave = document.getElementById('vis-opgave');
    els.keuzes = document.getElementById('vis-keuzes');
    els.knoppen = Array.prototype.slice.call(els.keuzes.querySelectorAll('.keuze'));
    els.figuur = document.getElementById('vis-figuur');
    els.effecten = document.getElementById('vis-effecten');
    els.tellerEl = document.getElementById('vis-teller');
    els.figuur.innerHTML = Icons.svg('visFiguur');
    els.vormToggles = Array.prototype.slice.call(els.scherm.querySelectorAll('.vorm-toggle'));
    els.niveaus = Array.prototype.slice.call(els.scherm.querySelectorAll('.vis-niveau'));
    els.schriften = Array.prototype.slice.call(els.scherm.querySelectorAll('.schrift-knop'));

    teller = Teller.maak(els.tellerEl, 'schelp', 'schatkist');
    zak = new Woorden.Opgavezak(Woorden.BASISNIVEAU, [Woorden.BASISVORM]);

    els.vormToggles.forEach(function (knop) {
      knop.addEventListener('click', function () { wisselVorm(knop.getAttribute('data-vorm')); knop.blur(); });
    });
    els.niveaus.forEach(function (knop) {
      knop.addEventListener('click', function () { zetNiveau(knop.getAttribute('data-niveau')); knop.blur(); });
    });
    els.schriften.forEach(function (knop) {
      knop.addEventListener('click', function () { zetSchrift(knop.getAttribute('data-schrift')); knop.blur(); });
    });
    els.knoppen.forEach(function (knop, i) {
      knop.addEventListener('click', function () { kies(i); });
    });

    toonToggles();
    App.registreer('vis', { binnen: binnen, buiten: buiten, toets: toets });
  }

  function binnen() {
    bezig = false;
    if (!opgave) volgendeOpgave();
  }

  function buiten() {
    if (timer) { clearTimeout(timer); timer = null; }
    Animaties.stop(els.figuur, els.effecten);
    if (bezig) { volgendeOpgave(); bezig = false; }   // animatie afgebroken: toch door naar de volgende
  }

  /* ---- Instellingen ---- */

  function wisselVorm(vorm) {
    if (!vorm) return;
    var actief = zak.vormen();
    var i = actief.indexOf(vorm);
    if (i >= 0 && actief.length === 1) return;                 // de laatste vorm blijft aan
    if (dubbelklik('vorm:' + vorm)) return;
    if (i >= 0) actief.splice(i, 1); else actief.push(vorm);
    zak.zetVormen(actief);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    toonToggles();
    // Staat de vorm van de opgave in beeld nu uit? Dan meteen een nieuwe opgave.
    if (opgave && zak.vormen().indexOf(opgave.vorm) < 0 && !bezig) volgendeOpgave();
  }

  function zetNiveau(niveau) {
    if (!niveau || niveau === zak.niveau()) return;
    zak.zetNiveau(niveau);
    Geluid.speel('klik');
    toonToggles();
    if (!bezig) volgendeOpgave();
  }

  function zetSchrift(nieuw) {
    if (!nieuw || nieuw === schrift || Woorden.SCHRIFTEN.indexOf(nieuw) < 0) return;
    schrift = nieuw;
    Geluid.speel('klik');
    toonToggles();
    toonSchrift();
  }

  function toonToggles() {
    var vormen = zak.vormen();
    els.vormToggles.forEach(function (knop) {
      var aan = vormen.indexOf(knop.getAttribute('data-vorm')) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    els.niveaus.forEach(function (knop) {
      var aan = knop.getAttribute('data-niveau') === zak.niveau();
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    els.schriften.forEach(function (knop) {
      var aan = knop.getAttribute('data-schrift') === schrift;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
  }

  /* Alle woorden in beeld krijgen de gekozen lettersoort (schrijf- of blokletters). */
  function toonSchrift() {
    var woorden = els.veld.querySelectorAll('.woord');
    for (var i = 0; i < woorden.length; i++) {
      woorden[i].classList.remove('schrijfletter', 'blokletter');
      woorden[i].classList.add(Woorden.schriftKlasse(schrift));
    }
  }

  /* ---- Spelloop ---- */

  function woordHtml(woord) {
    return '<span class="woord ' + Woorden.schriftKlasse(schrift) + '" style="--letters:' + woord.length + '">' +
           Woorden.html(woord) + '</span>';
  }

  function plaatjeHtml(woord) {
    return '<span class="plaatje">' + Plaatjes.svg(woord) + '</span>';
  }

  function volgendeOpgave() {
    opgave = zak.volgende();
    fouten = 0;
    var woordVorm = opgave.vorm === 'woord';           // woord in beeld, plaatjes kiezen
    els.veld.classList.toggle('vorm-woord', woordVorm);
    els.veld.classList.toggle('vorm-plaatje', !woordVorm);
    els.opgave.innerHTML = woordVorm ? woordHtml(opgave.woord) : plaatjeHtml(opgave.woord);
    els.opgave.setAttribute('aria-label', opgave.woord);
    els.knoppen.forEach(function (knop, i) {
      var w = opgave.keuzes[i];
      knop.innerHTML = woordVorm ? plaatjeHtml(w) : woordHtml(w);
      knop.className = 'keuze ' + (woordVorm ? 'keuze-plaatje' : 'keuze-woord');
      knop.disabled = false;
      knop.setAttribute('aria-label', w);
    });
  }

  function kies(i) {
    if (bezig || !opgave) return;
    var knop = els.knoppen[i];
    if (!knop || knop.disabled) return;
    knop.blur();                          // Enter/spatie kiest daarna niet per ongeluk nog eens
    if (i === opgave.antwoord) goed(knop); else fout(knop);
  }

  function goed(knop) {
    bezig = true;
    teller.plusEen();
    Geluid.speel('goed');
    Geluid.speel('blub');
    els.knoppen.forEach(function (k) { k.classList.remove('pulseer'); k.disabled = true; });
    knop.classList.add('goed');
    var duur = Animaties.speel('vis', {
      figuur: els.figuur, laag: els.effecten, van: knop, naar: els.tellerEl, icoon: 'schelp'
    });
    timer = setTimeout(function () {
      timer = null;
      volgendeOpgave();
      bezig = false;
    }, duur);
  }

  function fout(knop) {
    fouten++;
    Geluid.speel('fout');
    // Klasse opnieuw zetten zodat de schud-animatie ook bij snel achter elkaar fout opnieuw speelt.
    knop.classList.remove('schudt');
    void knop.offsetWidth;
    knop.classList.add('schudt', 'fout');
    knop.disabled = true;                 // een foute keuze doet niet meer mee: geen straf, wel duidelijkheid
    if (fouten >= HINT_NA_FOUTEN) els.knoppen[opgave.antwoord].classList.add('pulseer');
  }

  /* Pijltjes links/rechts verplaatsen de focus over de drie keuzes; Enter of spatie kiest. */
  function verplaatsFocus(richting) {
    var actieve = els.knoppen.filter(function (k) { return !k.disabled; });
    if (!actieve.length) return;
    var i = actieve.indexOf(document.activeElement);
    var n = actieve.length;
    var volgende = i < 0 ? (richting > 0 ? 0 : n - 1) : (i + richting + n) % n;
    actieve[volgende].focus();
  }

  function toets(e) {
    if (bezig) return;
    var k = e.key;

    if (k === 'ArrowLeft' || k === 'ArrowRight') { e.preventDefault(); verplaatsFocus(k === 'ArrowRight' ? 1 : -1); return; }
    if (k >= '1' && k <= '3' && k.length === 1) { e.preventDefault(); kies(Number(k) - 1); return; }
    if (k.length !== 1) return;

    var l = k.toLowerCase();
    if (l === 'w') { e.preventDefault(); wisselVorm('woord'); return; }
    if (l === 'p') { e.preventDefault(); wisselVorm('plaatje'); return; }
    if (l === 'k') { e.preventDefault(); zetNiveau('klein'); return; }
    if (l === 'g') { e.preventDefault(); zetNiveau('groot'); return; }
    if (l === 'h') { e.preventDefault(); zetNiveau('haai'); return; }
    if (l === 's') { e.preventDefault(); zetSchrift('schrijf'); return; }
    if (l === 'b') { e.preventDefault(); zetSchrift('blok'); return; }
  }

  document.addEventListener('DOMContentLoaded', init);

  /* Voor tests en ontwikkeling. */
  return {
    huidigeOpgave: function () { return opgave; },
    vormen: function () { return zak ? zak.vormen() : []; },
    niveau: function () { return zak ? zak.niveau() : null; },
    schrift: function () { return schrift; },
    isBezig: function () { return bezig; }
  };
})();
