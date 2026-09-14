/* app.js - schermwisseling, globale toetsafhandeling, geluid aan/uit, volledig scherm
   en de aanraakstand (toetsenbord op het scherm voor tablet/telefoon)
   (ontwikkelplan §4.4, §4.5, §5.1, §7.3).
   Schermen registreren zich met App.registreer(naam, { binnen, buiten, toets }).
   Laadvolgorde: app.js vóór aapje.js, raketje.js, vis.js en mier.js; alle init gebeurt op DOMContentLoaded
   in scriptvolgorde, dus App.start draait eerst. */

var App = (function () {
  'use strict';

  var huidig = null;
  var schermen = {};     // naam -> { el, binnen, buiten, toets }

  function registreer(naam, handlers) {
    var el = document.getElementById('scherm-' + naam);
    if (!el) return;
    schermen[naam] = {
      el: el,
      binnen: (handlers && handlers.binnen) || null,
      buiten: (handlers && handlers.buiten) || null,
      toets: (handlers && handlers.toets) || null
    };
  }

  function toon(naam) {
    if (!schermen[naam] || naam === huidig) return;
    if (huidig) {
      var oud = schermen[huidig];
      if (oud.buiten) oud.buiten();
      oud.el.classList.remove('actief');
      oud.el.hidden = true;
    }
    var nieuw = schermen[naam];
    nieuw.el.hidden = false;
    nieuw.el.classList.add('actief');
    huidig = naam;
    if (nieuw.binnen) nieuw.binnen();

    // Menu: focus op de eerste grote knop zodat pijltjes + Enter direct werken.
    // Spelschermen: focus op het scherm zelf, zodat Enter/spatie niet per ongeluk
    // de terugknop activeert terwijl het kind typt.
    var doel = nieuw.el.classList.contains('spel') ? nieuw.el : nieuw.el.querySelector('.menu-knop');
    if (doel) doel.focus({ preventScroll: true });
  }

  function huidigScherm() { return huidig; }

  /* ---- Geluid aan/uit: alle luidsprekerknoppen tonen dezelfde stand ---- */
  function toonGeluidsknoppen(aan) {
    var knoppen = document.querySelectorAll('.knop-geluid');
    for (var i = 0; i < knoppen.length; i++) {
      knoppen[i].innerHTML = Icons.svg(aan ? 'luidspreker' : 'luidsprekerUit');
      knoppen[i].setAttribute('aria-pressed', aan ? 'true' : 'false');
      knoppen[i].classList.toggle('uit', !aan);
    }
  }

  function wisselGeluid() {
    Geluid.wissel();
    if (Geluid.isAan()) Geluid.speel('toggleAan');   // even laten horen dat het weer aan staat
  }

  /* ---- Volledig scherm ----
     Safari op de iPad kende lange tijd alleen de webkit-variant; op de iPhone bestaat de
     functie niet voor webpagina's (daar verbergt de knop zichzelf; zie README.md). */
  var docEl = document.documentElement;

  function fullscreenBeschikbaar() {
    return !!((docEl.requestFullscreen && document.exitFullscreen) ||
              (docEl.webkitRequestFullscreen && document.webkitExitFullscreen));
  }

  function inFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function wisselFullscreen() {
    if (!fullscreenBeschikbaar()) return;
    if (inFullscreen()) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else {
      var p = (docEl.requestFullscreen || docEl.webkitRequestFullscreen).call(docEl);
      if (p && p.catch) p.catch(function () { /* geweigerd: niets doen */ });
    }
  }

  function toonFullscreenknoppen() {
    var aan = inFullscreen();
    var knoppen = document.querySelectorAll('.knop-fullscreen');
    for (var i = 0; i < knoppen.length; i++) {
      knoppen[i].innerHTML = Icons.svg(aan ? 'fullscreenUit' : 'fullscreen');
      knoppen[i].setAttribute('aria-pressed', aan ? 'true' : 'false');
      knoppen[i].hidden = !fullscreenBeschikbaar();
    }
  }

  /* ---- Aanraakstand: toetsenbord op het scherm (ontwikkelplan §4.5) ----
     Aan: het hint-toetsenbord onderin staat altijd in beeld en is tikbaar, met een
     wistoets achter de cijfers. Staat vanzelf aan op een tablet of telefoon en is in
     het menu handmatig te wisselen met de toetsenbordknop (of toets T). */
  var aanraak = false;
  var laatsteAanraakWissel = 0;
  var DUBBELKLIK_MS = 300;

  function aanraakScherm() {
    // De primaire aanwijzer is een vinger: tablet of telefoon. Een laptop met aanraakscherm
    // heeft muis of trackpad als primaire aanwijzer en houdt dus de pc-stand.
    return !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  }

  function zetAanraak(aan) {
    aanraak = !!aan;
    document.body.classList.toggle('aanraak', aanraak);
    KeyboardHint.zetTikbaar(aanraak);
    var knoppen = document.querySelectorAll('.knop-toetsenbord');
    for (var i = 0; i < knoppen.length; i++) {
      knoppen[i].classList.toggle('aan', aanraak);
      knoppen[i].setAttribute('aria-pressed', aanraak ? 'true' : 'false');
    }
  }

  function wisselAanraak() {
    var nu = Date.now();
    if (nu - laatsteAanraakWissel < DUBBELKLIK_MS) return;    // dubbelklik/dubbeltik negeren
    laatsteAanraakWissel = nu;
    zetAanraak(!aanraak);
    Geluid.speel(aanraak ? 'toggleAan' : 'toggleUit');
  }

  function isAanraak() { return aanraak; }

  /* ---- Klikken ---- */
  function koppelKnoppen() {
    document.addEventListener('click', function (e) {
      var nav = e.target.closest('[data-ga-naar]');
      if (nav) { Geluid.speel('klik'); toon(nav.getAttribute('data-ga-naar')); return; }
      var actie = e.target.closest('[data-actie]');
      if (!actie) return;
      var naam = actie.getAttribute('data-actie');
      if (naam === 'geluid') wisselGeluid();
      if (naam === 'fullscreen') { Geluid.speel('klik'); wisselFullscreen(); }
      if (naam === 'toetsenbord') wisselAanraak();
      actie.blur();
    });
  }

  /* ---- Toetsen ---- */
  function opToets(e) {
    // Herhaling en toetsen met Ctrl/Alt/Meta negeren.
    if (e.repeat || e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.key === 'Escape') {
      // In volledig scherm sluit Escape eerst het volledig scherm (browsergedrag); daarna pas terug.
      e.preventDefault();
      if (huidig !== 'menu') toon('menu');
      return;
    }
    // Backspace mag nooit de browser laten terugnavigeren; het spel krijgt de toets wel.
    if (e.key === 'Backspace') e.preventDefault();
    // Spatie laat het venster niet scrollen; op een gefocuste knop werkt hij nog als klik.
    if (e.key === ' ' && !(e.target instanceof HTMLButtonElement)) e.preventDefault();

    var s = schermen[huidig];
    if (s && s.toets) s.toets(e);
  }

  function menuToets(e) {
    var k = e.key.toLowerCase();
    if (k === 'a' || k === '1') { e.preventDefault(); Geluid.speel('klik'); toon('aapje'); return; }
    if (k === 'r' || k === '2') { e.preventDefault(); Geluid.speel('klik'); toon('raketje'); return; }
    if (k === 'v' || k === '3') { e.preventDefault(); Geluid.speel('klik'); toon('vis'); return; }
    if (k === 'm' || k === '4') { e.preventDefault(); Geluid.speel('klik'); toon('mier'); return; }
    if (k === 't') { e.preventDefault(); wisselAanraak(); return; }     // toetsenbord op het scherm
    // Pijltjes lopen over de knoppen: links/rechts één verder, omhoog/omlaag een rij
    // (het menu is sinds fase 14 een 2x2-raster).
    var stap = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 2, ArrowUp: -2 }[e.key];
    if (stap) {
      e.preventDefault();
      var knoppen = Array.prototype.slice.call(schermen.menu.el.querySelectorAll('.menu-knop'));
      var i = knoppen.indexOf(document.activeElement);
      var n = knoppen.length;
      var volgende = i < 0 ? 0 : (i + stap + n) % n;
      knoppen[volgende].focus();
    }
    // Enter en Space activeren de gefocuste knop via het standaard gedrag van <button>.
  }

  function start() {
    Icons.vul();
    registreer('menu', { toets: menuToets });
    koppelKnoppen();
    document.addEventListener('keydown', opToets);

    // Web Audio mag pas starten na een gebruikersactie: de eerste klik of toets ontgrendelt.
    var ontgrendel = function () { Geluid.ontgrendel(); };
    document.addEventListener('pointerdown', ontgrendel, true);
    document.addEventListener('keydown', ontgrendel, true);

    Geluid.bijWissel(toonGeluidsknoppen);
    toonGeluidsknoppen(Geluid.isAan());
    document.addEventListener('fullscreenchange', toonFullscreenknoppen);
    document.addEventListener('webkitfullscreenchange', toonFullscreenknoppen);
    toonFullscreenknoppen();

    // Tablet of telefoon: toetsenbord op het scherm meteen aan (in het menu te wisselen).
    zetAanraak(aanraakScherm());

    // Beginstand: alleen het menu zichtbaar. De spellen registreren zich hierna zelf.
    var alle = document.querySelectorAll('.scherm');
    for (var i = 0; i < alle.length; i++) {
      alle[i].classList.remove('actief');
      alle[i].hidden = true;
    }
    toon('menu');
  }

  document.addEventListener('DOMContentLoaded', start);

  return { registreer: registreer, toon: toon, huidigScherm: huidigScherm, wisselGeluid: wisselGeluid,
           wisselFullscreen: wisselFullscreen, zetAanraak: zetAanraak, wisselAanraak: wisselAanraak, isAanraak: isAanraak };
})();
