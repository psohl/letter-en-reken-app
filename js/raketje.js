/* raketje.js - spel Raketje: sommen intoetsen met automatische controle (ontwikkelplan §5.1, §5.2).
   Registreert zich bij App als scherm 'raketje'. */

var Raketje = (function () {
  'use strict';

  var HINT_NA_FOUTEN = 2;
  var DUBBELKLIK_MS = 300;     // tweede klik op dezelfde schakelaar binnen deze tijd wordt genegeerd

  var els = {};
  var generator = null;
  var som = null;
  var invoer = '';
  var fouten = 0;
  var bezig = false;
  var timer = null;
  var hint = null;
  var teller = null;
  var wereld = null;           // de planetenreis achter de raket (ontwikkelplan §7.6)
  var kralen = null;           // Montessori-kralen als visueel hulpmiddel
  var kralenAan = false;       // staat standaard uit
  var laatsteToggle = { sleutel: null, tijd: 0 };

  /* Tweede klik op dezelfde schakelaar binnen DUBBELKLIK_MS negeren (dubbelklik). */
  function dubbelklik(sleutel) {
    var nu = Date.now();
    if (laatsteToggle.sleutel === sleutel && nu - laatsteToggle.tijd < DUBBELKLIK_MS) return true;
    laatsteToggle = { sleutel: sleutel, tijd: nu };
    return false;
  }

  function init() {
    els.scherm = document.getElementById('scherm-raketje');
    els.som = document.getElementById('raketje-som');
    els.a = els.som.querySelector('.som-a');
    els.op = els.som.querySelector('.som-op');
    els.b = els.som.querySelector('.som-b');
    els.invul = els.som.querySelector('.invulvak');
    els.figuur = document.getElementById('raketje-figuur');
    els.effecten = document.getElementById('raketje-effecten');
    els.tellerEl = document.getElementById('raketje-teller');
    els.figuur.innerHTML = Icons.svg('raketFiguur');
    els.veld = document.getElementById('raketje-veld');
    els.toggles = Array.prototype.slice.call(els.scherm.querySelectorAll('.operator-toggle'));
    els.niveaus = Array.prototype.slice.call(els.scherm.querySelectorAll('.niveau-knop'));
    els.kralenKnop = els.scherm.querySelector('.kralen-toggle');

    hint = KeyboardHint.maak(document.getElementById('raketje-hint'), 'cijfers');
    teller = Teller.maak(els.tellerEl, 'ster', 'ster');
    kralen = Kralen.maak(document.getElementById('raketje-kralen'));
    wereld = Wereld.maak(document.getElementById('raketje-wereld'), 'ruimte', els.figuur);
    generator = new Sommen.Generator({ operators: ['plus'], niveaus: ['klein'] });

    els.toggles.forEach(function (knop) {
      knop.addEventListener('click', function () {
        wisselOperator(knop.getAttribute('data-op'));
        knop.blur();                       // spatie/Enter daarna niet per ongeluk nog eens toggelen
      });
    });
    els.niveaus.forEach(function (knop) {
      knop.addEventListener('click', function () {
        wisselNiveau(knop.getAttribute('data-niveau'));
        knop.blur();
      });
    });
    els.kralenKnop.addEventListener('click', function () {
      wisselKralen();
      els.kralenKnop.blur();
    });

    toonToggles();
    App.registreer('raketje', { binnen: binnen, buiten: buiten, toets: toets });
  }

  function binnen() {
    bezig = false;
    hint.verberg();
    if (wereld) wereld.zetStand(Wereld.stand(teller.waarde()));   // hemel volgt altijd de teller
    if (!som) volgendeSom();
  }

  function buiten() {
    if (timer) { clearTimeout(timer); timer = null; }
    els.invul.classList.remove('goed', 'schudt');
    Animaties.stop(els.figuur, els.effecten, wereld);
    if (bezig) { volgendeSom(); bezig = false; }
  }

  /* ---- Instellingen ---- */

  function wisselOperator(op) {
    if (Sommen.OPERATOREN.indexOf(op) < 0) return;
    var actief = generator.operators();
    var i = actief.indexOf(op);
    if (i >= 0 && actief.length === 1) return;                 // de laatste soort blijft aan
    if (dubbelklik('op:' + op)) return;

    if (i >= 0) actief.splice(i, 1); else actief.push(op);
    generator.zetOperators(actief);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    toonToggles();
    // Staat de operator van de huidige som nu uit? Dan meteen een nieuwe som.
    if (som && generator.operators().indexOf(som.op) < 0 && !bezig) volgendeSom();
  }

  /* Niveaus zijn net als de operatoren los aan en uit te zetten; staan er meerdere aan, dan
     komen de sommen door elkaar uit die niveaus. Het laatste aangezette niveau blijft staan. */
  function wisselNiveau(niveau) {
    if (Sommen.NIVEAUNAMEN.indexOf(niveau) < 0) return;
    var actief = generator.niveaus();
    var i = actief.indexOf(niveau);
    if (i >= 0 && actief.length === 1) return;                 // het laatste niveau blijft aan
    if (dubbelklik('niveau:' + niveau)) return;

    if (i >= 0) actief.splice(i, 1); else actief.push(niveau);
    generator.zetNiveaus(actief);
    Geluid.speel(i >= 0 ? 'toggleUit' : 'toggleAan');
    toonToggles();
    // Staat het niveau van de huidige som nu uit? Dan meteen een nieuwe som.
    if (som && generator.niveaus().indexOf(som.niveau) < 0 && !bezig) volgendeSom();
  }

  /* Montessori-kralen aan of uit. Het hulpmiddel laat de som in kralen zien;
     het antwoord blijft het kind zelf tellen en typen. */
  function wisselKralen() {
    if (dubbelklik('kralen')) return;
    kralenAan = !kralenAan;
    Geluid.speel(kralenAan ? 'toggleAan' : 'toggleUit');
    toonToggles();
    toonKralen();
  }

  function toonKralen() {
    if (kralenAan && som) kralen.toon(som); else kralen.verberg();
    els.veld.classList.toggle('met-kralen', kralenAan);
  }

  function toonToggles() {
    var actief = generator.operators();
    els.toggles.forEach(function (knop) {
      var op = knop.getAttribute('data-op');
      var aan = actief.indexOf(op) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    var niveaus = generator.niveaus();
    els.niveaus.forEach(function (knop) {
      var aan = niveaus.indexOf(knop.getAttribute('data-niveau')) >= 0;
      knop.classList.toggle('aan', aan);
      knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    els.kralenKnop.classList.toggle('aan', kralenAan);
    els.kralenKnop.setAttribute('aria-pressed', kralenAan ? 'true' : 'false');
  }

  /* ---- Spelloop ---- */

  function volgendeSom() {
    som = generator.volgende();
    invoer = '';
    fouten = 0;
    els.a.textContent = som.a;
    els.op.textContent = som.symbool;
    els.b.textContent = som.b;
    toonInvoer();
    toonKralen();
  }

  function toonInvoer() {
    els.invul.textContent = invoer;
    els.invul.classList.toggle('leeg', invoer === '');
  }

  function toets(e) {
    if (bezig) return;
    var k = e.key;

    if (k >= '0' && k <= '9' && k.length === 1) {   // bovenste rij en numpad geven dezelfde key
      e.preventDefault();
      verwerkCijfer(k);
      return;
    }
    if (k === 'Backspace') {                          // preventDefault is al gedaan in app.js
      invoer = invoer.slice(0, -1);
      toonInvoer();
      if (hint.isZichtbaar()) hint.toon(String(som.antwoord)[invoer.length]);
      return;
    }
    var op = Sommen.TOETS_NAAR_OPERATOR[k.toLowerCase()];
    if (op) { e.preventDefault(); wisselOperator(op); return; }

    if (k.length === 1 && k.toLowerCase() === 'k') { e.preventDefault(); wisselNiveau('klein'); return; }
    if (k.length === 1 && k.toLowerCase() === 'g') { e.preventDefault(); wisselNiveau('groot'); return; }
    if (k.length === 1 && k.toLowerCase() === 's') { e.preventDefault(); wisselNiveau('super'); return; }
    if (k.length === 1 && k.toLowerCase() === 'h') { e.preventDefault(); wisselKralen(); return; }   // hulpkralen
  }

  function verwerkCijfer(cijfer) {
    var nieuw = invoer + cijfer;
    var uitslag = Sommen.controleer(nieuw, som.antwoord);
    if (uitslag === 'goed') {
      invoer = nieuw;
      toonInvoer();
      goed();
    } else if (uitslag === 'wacht') {
      invoer = nieuw;
      toonInvoer();
      if (hint.isZichtbaar()) hint.toon(String(som.antwoord)[invoer.length]);
    } else {
      fout(nieuw);
    }
  }

  function goed() {
    bezig = true;
    hint.verberg();
    teller.plusEen();
    var stand = Wereld.stand(teller.waarde());
    Geluid.speel('goed');
    Geluid.speel('whoosh');
    Geluid.speel(stand.finale ? 'tada' : 'aankomst', 0.75);   // aankomst bij de volgende planeet
    els.invul.classList.remove('schudt');
    els.invul.classList.add('goed');
    var duur = Animaties.speel('raket', {
      figuur: els.figuur, laag: els.effecten, van: els.invul, naar: els.tellerEl, icoon: 'ster',
      wereld: wereld, stand: stand
    });
    timer = setTimeout(function () {
      timer = null;
      els.invul.classList.remove('goed');
      volgendeSom();
      bezig = false;
    }, duur);
  }

  function fout(getoond) {
    fouten++;
    Geluid.speel('fout');
    // Toon kort het foute cijfer, schud, en maak daarna leeg.
    els.invul.textContent = getoond;
    els.invul.classList.remove('leeg', 'schudt');
    void els.invul.offsetWidth;
    els.invul.classList.add('schudt');
    invoer = '';
    setTimeout(toonInvoer, 380);
    if (fouten >= HINT_NA_FOUTEN) hint.toon(String(som.antwoord)[0]);
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    huidigeSom: function () { return som; },
    niveaus: function () { return generator ? generator.niveaus() : []; },
    invoer: function () { return invoer; },
    kralenAan: function () { return kralenAan; },
    wereld: function () { return wereld; },
    isBezig: function () { return bezig; }
  };
})();
