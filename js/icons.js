/* icons.js - alle iconen als eigen SVG-strings (ontwikkelplan §6.3), één consistente stijl:
   dikke ronde lijnen, zachte felle kleuren. Geen materiaal van derden.
   Gebruik: Icons.svg('huisje') geeft een SVG-string; Icons.vul() vult alle
   elementen met data-icoon="naam". */

var Icons = (function () {
  'use strict';

  var W = 'stroke-linejoin="round" stroke-linecap="round"';
  var BRUIN = '#8B5A2B', LICHTBRUIN = '#D9A066', HUID = '#FFF1DC', DONKER = '#3B2A1A';
  var ROOD = '#E63946', DONKERROOD = '#7A1F28', GRIJS = '#B8C0CC', VLAM = '#FF9F1C', GEEL = '#FFD23F';
  var OKER = '#9A7B00';
  var VIS = '#FF9F1C', VISDONKER = '#B85C00', VISBUIK = '#FFD98A', ZEE = '#2A9D8F', ZEEDONKER = '#1B6F66';
  var MIER = '#A0522D', MIERDONKER = '#5A2D12', GRAS = '#6AA84F', GRASDONKER = '#3F7A2E';

  function svg(vb, binnen) {
    return '<svg viewBox="' + vb + '" aria-hidden="true">' + binnen + '</svg>';
  }

  function cirkel(kleur, binnen) {
    return svg('0 0 100 100',
      '<circle cx="50" cy="50" r="44" fill="' + kleur + '" stroke="rgba(0,0,0,0.22)" stroke-width="5"/>' + binnen);
  }

  /* Aapjeskop; `oogKlasse` maakt de ogen animeerbaar (knipperen). */
  function aapjesKop(cx, cy, r, oogKlasse) {
    var oor = r * 0.34, oogY = cy - r * 0.15, oogX = r * 0.3, sw = Math.max(3, r / 8);
    return '<circle cx="' + (cx - r * 0.9) + '" cy="' + (cy - r * 0.25) + '" r="' + oor + '" fill="' + LICHTBRUIN + '" stroke="' + BRUIN + '" stroke-width="' + sw + '"/>' +
      '<circle cx="' + (cx - r * 0.9) + '" cy="' + (cy - r * 0.25) + '" r="' + oor * 0.45 + '" fill="' + HUID + '"/>' +
      '<circle cx="' + (cx + r * 0.9) + '" cy="' + (cy - r * 0.25) + '" r="' + oor + '" fill="' + LICHTBRUIN + '" stroke="' + BRUIN + '" stroke-width="' + sw + '"/>' +
      '<circle cx="' + (cx + r * 0.9) + '" cy="' + (cy - r * 0.25) + '" r="' + oor * 0.45 + '" fill="' + HUID + '"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + LICHTBRUIN + '" stroke="' + BRUIN + '" stroke-width="' + sw + '"/>' +
      '<path d="M' + (cx - r * 0.62) + ' ' + (cy + r * 0.1) + ' a' + (r * 0.62) + ' ' + (r * 0.62) + ' 0 0 0 ' + (r * 1.24) + ' 0 a' + (r * 0.62) + ' ' + (r * 0.5) + ' 0 0 0 -' + (r * 1.24) + ' 0 Z" fill="' + HUID + '"/>' +
      '<ellipse cx="' + cx + '" cy="' + (cy - r * 0.2) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.4) + '" fill="' + HUID + '"/>' +
      '<ellipse class="' + (oogKlasse || 'oog') + '" cx="' + (cx - oogX) + '" cy="' + oogY + '" rx="' + (r * 0.1) + '" ry="' + (r * 0.12) + '" fill="' + DONKER + '"/>' +
      '<ellipse class="' + (oogKlasse || 'oog') + '" cx="' + (cx + oogX) + '" cy="' + oogY + '" rx="' + (r * 0.1) + '" ry="' + (r * 0.12) + '" fill="' + DONKER + '"/>' +
      '<circle cx="' + (cx - oogX + r * 0.04) + '" cy="' + (oogY - r * 0.04) + '" r="' + (r * 0.03) + '" fill="#fff"/>' +
      '<circle cx="' + (cx + oogX + r * 0.04) + '" cy="' + (oogY - r * 0.04) + '" r="' + (r * 0.03) + '" fill="#fff"/>' +
      '<circle cx="' + (cx - r * 0.1) + '" cy="' + (cy + r * 0.22) + '" r="' + (r * 0.05) + '" fill="' + BRUIN + '"/>' +
      '<circle cx="' + (cx + r * 0.1) + '" cy="' + (cy + r * 0.22) + '" r="' + (r * 0.05) + '" fill="' + BRUIN + '"/>' +
      '<path d="M' + (cx - r * 0.3) + ' ' + (cy + r * 0.45) + ' Q' + cx + ' ' + (cy + r * 0.72) + ' ' + (cx + r * 0.3) + ' ' + (cy + r * 0.45) + '" stroke="' + DONKER + '" stroke-width="' + (sw * 0.8) + '" fill="none" ' + W + '/>';
  }

  function raketLijf(schaal) {
    var s = schaal || 1, t = (1 - s) * 50;
    return '<g transform="translate(' + t + ' ' + t + ') scale(' + s + ')">' +
      '<path class="vlam" d="M38 78 Q50 104 62 78 Z" fill="' + VLAM + '"/>' +
      '<path class="vlam" d="M44 78 Q50 94 56 78 Z" fill="' + GEEL + '"/>' +
      '<path d="M50 4 C68 20 72 48 68 72 H32 C28 48 32 20 50 4 Z" fill="' + ROOD + '" stroke="' + DONKERROOD + '" stroke-width="6" ' + W + '/>' +
      '<path d="M50 4 C58 12 63 24 65 36 H35 C37 24 42 12 50 4 Z" fill="' + GRIJS + '" stroke="' + DONKERROOD + '" stroke-width="5" ' + W + '/>' +
      '<circle cx="50" cy="48" r="10" fill="#8FD3FF" stroke="' + DONKERROOD + '" stroke-width="5"/>' +
      '<circle cx="47" cy="45" r="3" fill="#fff"/>' +
      '<path d="M32 56 L16 78 H32 Z" fill="' + GRIJS + '" stroke="' + DONKERROOD + '" stroke-width="5" ' + W + '/>' +
      '<path d="M68 56 L84 78 H68 Z" fill="' + GRIJS + '" stroke="' + DONKERROOD + '" stroke-width="5" ' + W + '/>' +
      '<rect x="38" y="70" width="24" height="8" rx="3" fill="' + DONKERROOD + '"/>' +
      '</g>';
  }

  /* Letterset-iconen: de lettervorm zelf in een bruine cirkel. De <text> krijgt
     dezelfde fontklasse als de letterkaart, dus schrijfletters komen uit
     Lusletters (met aanhaal) en blokletters uit de drukletter-fontstapel.
     `style="color:#fff"` is nodig omdat .schrijfletter een text-stroke in
     currentColor zet. */
  function letterIcoon(teken, klasse, maat, grondlijn) {
    return svg('0 0 100 100',
      '<circle cx="50" cy="50" r="44" fill="' + BRUIN + '" stroke="rgba(0,0,0,0.22)" stroke-width="5"/>' +
      '<text class="' + klasse + '" x="50" y="' + grondlijn + '" text-anchor="middle" font-size="' + maat +
      '" fill="#fff" style="color:#fff">' + teken + '</text>');
  }

  /* Visje voor het spel Vis: kijkt naar links, staart en vin hebben klassen zodat CSS ze kan
     animeren (staart zwaait). `s` schaalt het visje binnen 100 x 100 (niveau-iconen). */
  function visLijf(s) {
    var sc = s || 1, t = (1 - sc) * 50;
    return '<g transform="translate(' + t + ' ' + t + ') scale(' + sc + ')">' +
      '<path class="staart" d="M74 50 L96 28 L91 50 L96 72 Z" fill="' + VIS + '" stroke="' + VISDONKER + '" stroke-width="5" ' + W + '/>' +
      '<ellipse cx="46" cy="50" rx="35" ry="23" fill="' + VIS + '" stroke="' + VISDONKER + '" stroke-width="5"/>' +
      '<path d="M18 58 Q46 78 74 56 Q48 68 18 58 Z" fill="' + VISBUIK + '"/>' +
      '<path class="vin" d="M38 30 Q46 8 64 28 Z" fill="' + VIS + '" stroke="' + VISDONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M42 70 Q50 84 62 70 Z" fill="' + VIS + '" stroke="' + VISDONKER + '" stroke-width="4" ' + W + '/>' +
      '<path d="M56 40 Q64 50 56 60" fill="none" stroke="' + VISDONKER + '" stroke-width="4" ' + W + '/>' +
      '<circle class="oog" cx="26" cy="44" r="5.5" fill="' + DONKER + '"/>' +
      '<circle cx="24.5" cy="42" r="2" fill="#fff"/>' +
      '<path d="M13 54 Q17 59 22 55" fill="none" stroke="' + VISDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '</g>';
  }

  /* Mier voor het spel Mier: kijkt naar links (naar de klankvakjes), drie lijfdelen.
     De voelsprieten en de poten hebben klassen zodat CSS ze kan animeren (trippelen en
     zwaaien). `s` schaalt de mier binnen 100 x 100 (niveau-iconen). */
  function mierLijf(s) {
    var sc = s || 1, t = (1 - sc) * 50;
    return '<g transform="translate(' + t + ' ' + t + ') scale(' + sc + ')">' +
      '<path class="poot poot-1" d="M44 58 C36 70 30 74 22 79" fill="none" stroke="' + MIERDONKER + '" stroke-width="5" ' + W + '/>' +
      '<path class="poot poot-2" d="M50 60 C48 72 46 78 44 86" fill="none" stroke="' + MIERDONKER + '" stroke-width="5" ' + W + '/>' +
      '<path class="poot poot-3" d="M56 58 C60 70 64 76 72 82" fill="none" stroke="' + MIERDONKER + '" stroke-width="5" ' + W + '/>' +
      '<path class="voelspriet voelspriet-1" d="M24 38 C18 30 12 26 6 22" fill="none" stroke="' + MIERDONKER + '" stroke-width="4.5" ' + W + '/>' +
      '<path class="voelspriet voelspriet-2" d="M33 33 C31 25 27 19 22 14" fill="none" stroke="' + MIERDONKER + '" stroke-width="4.5" ' + W + '/>' +
      '<ellipse cx="75" cy="50" rx="20" ry="16" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="5"/>' +
      '<ellipse cx="50" cy="52" rx="12" ry="11" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="5"/>' +
      '<circle cx="29" cy="47" r="14" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="5"/>' +
      '<path d="M64 44 Q70 50 64 57" fill="none" stroke="' + MIERDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '<circle class="oog" cx="24" cy="44" r="4.5" fill="#fff"/>' +
      '<circle cx="23" cy="44.5" r="2.4" fill="' + DONKER + '"/>' +
      '<path d="M19 54 Q24 58 29 55" fill="none" stroke="' + MIERDONKER + '" stroke-width="3" ' + W + '/>' +
      '</g>';
  }

  /* Blaadje: de beloning van Mier (sessieteller), ook los als icoon te gebruiken. */
  function bladVorm() {
    return '<path d="M16 84 C10 46 34 14 86 12 C88 56 58 86 16 84 Z" fill="' + GRAS + '" stroke="' + GRASDONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M18 82 C40 62 62 38 84 16" fill="none" stroke="' + GRASDONKER + '" stroke-width="4" ' + W + '/>' +
      '<path d="M34 68 L34 50 M50 54 L52 34 M62 42 L68 26" fill="none" stroke="' + GRASDONKER + '" stroke-width="3" ' + W + '/>';
  }

  /* Eén kralenstaafje voor het kralen-icoon: n kralen aan een draadje. */
  function kralenStaaf(n, y, kleur) {
    var r = 10, stap = 22, breed = (n - 1) * stap, x0 = 50 - breed / 2;
    var s = '<path d="M' + (x0 - r) + ' ' + y + ' H' + (x0 + breed + r) + '" stroke="#9A9A9A" stroke-width="3" ' + W + '/>';
    for (var i = 0; i < n; i++) {
      s += '<circle cx="' + (x0 + i * stap) + '" cy="' + y + '" r="' + r + '" fill="' + kleur +
           '" stroke="rgba(0,0,0,0.28)" stroke-width="2.5"/>';
    }
    return s;
  }

  var iconen = {
    /* Hoofdmenu: aapjeskop en raket */
    aapje: svg('0 0 100 100', aapjesKop(50, 54, 34, 'oog')),
    raket: svg('0 0 100 110', raketLijf(1)),

    /* Huisje met pijl: terug naar menu */
    huisje: svg('0 0 100 100',
      '<path d="M50 12 L12 46 H24 V88 H76 V46 H88 Z" fill="' + GEEL + '" stroke="#7A5A00" stroke-width="6" ' + W + '/>' +
      '<rect x="40" y="62" width="20" height="26" rx="4" fill="#7A5A00"/>' +
      '<path d="M50 26 L64 40 H36 Z" fill="#fff" opacity="0.5"/>'),

    /* Luidspreker aan / uit */
    luidspreker: svg('0 0 100 100',
      '<path d="M18 38 H34 L54 22 V78 L34 62 H18 Z" fill="' + '#2F6FB5' + '" stroke="#1F4A7A" stroke-width="6" ' + W + '/>' +
      '<path d="M64 38 Q74 50 64 62 M74 28 Q90 50 74 72" fill="none" stroke="#1F4A7A" stroke-width="6" ' + W + '/>'),
    luidsprekerUit: svg('0 0 100 100',
      '<path d="M18 38 H34 L54 22 V78 L34 62 H18 Z" fill="#C8C8C8" stroke="#8A8A8A" stroke-width="6" ' + W + '/>' +
      '<path d="M66 40 L86 60 M86 40 L66 60" fill="none" stroke="' + ROOD + '" stroke-width="8" ' + W + '/>'),

    /* Volledig scherm: vier pijltjes naar buiten / naar binnen */
    fullscreen: svg('0 0 100 100',
      '<path d="M16 38 V16 H38 M62 16 H84 V38 M84 62 V84 H62 M38 84 H16 V62" fill="none" stroke="#1F4A7A" stroke-width="8" ' + W + '/>' +
      '<path d="M16 16 L36 36 M84 16 L64 36 M84 84 L64 64 M16 84 L36 64" fill="none" stroke="#2F6FB5" stroke-width="8" ' + W + '/>'),
    fullscreenUit: svg('0 0 100 100',
      '<path d="M40 14 V40 H14 M60 14 V40 H86 M60 86 V60 H86 M40 86 V60 H14" fill="none" stroke="#1F4A7A" stroke-width="8" ' + W + '/>'),

    /* Toetsenbord op het scherm (aanraakstand, §4.5): toetsenrijen en een spatiebalk */
    toetsenbord: svg('0 0 100 100',
      '<rect x="6" y="24" width="88" height="52" rx="12" fill="#2F6FB5" stroke="#1F4A7A" stroke-width="6"/>' +
      '<g fill="#fff">' +
        '<rect x="16" y="34" width="11" height="10" rx="2.5"/><rect x="31" y="34" width="11" height="10" rx="2.5"/>' +
        '<rect x="46" y="34" width="11" height="10" rx="2.5"/><rect x="61" y="34" width="11" height="10" rx="2.5"/>' +
        '<rect x="76" y="34" width="8" height="10" rx="2.5"/>' +
        '<rect x="16" y="48" width="8" height="10" rx="2.5"/><rect x="28" y="48" width="11" height="10" rx="2.5"/>' +
        '<rect x="43" y="48" width="11" height="10" rx="2.5"/><rect x="58" y="48" width="11" height="10" rx="2.5"/>' +
        '<rect x="73" y="48" width="11" height="10" rx="2.5"/>' +
        '<rect x="30" y="62" width="40" height="7" rx="2.5"/>' +
      '</g>'),

    /* Banaan en bananentros */
    banaan: svg('0 0 100 100',
      '<path d="M24 26 C16 58 40 86 78 82 C84 81 86 75 80 73 C52 76 34 56 32 26 C31 20 25 20 24 26 Z" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M36 34 C38 54 50 68 66 74" fill="none" stroke="#fff" stroke-width="4" opacity="0.6" ' + W + '/>' +
      '<path d="M26 26 L22 16" stroke="#6B4F00" stroke-width="7" ' + W + '/>'),
    bananentros: svg('0 0 100 100',
      '<path d="M30 18 C22 50 40 80 74 82" fill="none" stroke="' + OKER + '" stroke-width="17" ' + W + '/>' +
      '<path d="M30 18 C22 50 40 80 74 82" fill="none" stroke="' + GEEL + '" stroke-width="10" ' + W + '/>' +
      '<path d="M46 14 C40 46 54 74 84 74" fill="none" stroke="' + OKER + '" stroke-width="17" ' + W + '/>' +
      '<path d="M46 14 C40 46 54 74 84 74" fill="none" stroke="' + GEEL + '" stroke-width="10" ' + W + '/>' +
      '<path d="M62 12 C60 40 70 62 90 62" fill="none" stroke="' + OKER + '" stroke-width="17" ' + W + '/>' +
      '<path d="M62 12 C60 40 70 62 90 62" fill="none" stroke="' + GEEL + '" stroke-width="10" ' + W + '/>' +
      '<path d="M28 18 L64 12" stroke="#6B4F00" stroke-width="9" ' + W + '/>'),

    /* Ster */
    ster: svg('0 0 100 100',
      '<path d="M50 8 L62 36 L92 39 L69 59 L76 89 L50 73 L24 89 L31 59 L8 39 L38 36 Z" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M50 24 L56 38" stroke="#fff" stroke-width="4" opacity="0.7" ' + W + '/>'),

    /* Operatoren in gekleurde cirkels */
    plus: cirkel('#4CAF50', '<path d="M50 28 V72 M28 50 H72" stroke="#fff" stroke-width="12" ' + W + '/>'),
    min:  cirkel('#2F6FB5', '<path d="M28 50 H72" stroke="#fff" stroke-width="12" ' + W + '/>'),
    maal: cirkel('#E8607A', '<path d="M32 32 L68 68 M68 32 L32 68" stroke="#fff" stroke-width="12" ' + W + '/>'),
    deel: cirkel('#FF9F1C', '<path d="M28 50 H72" stroke="#fff" stroke-width="12" ' + W + '/><circle cx="50" cy="30" r="7" fill="#fff"/><circle cx="50" cy="70" r="7" fill="#fff"/>'),

    /* Lettersets voor Aapje: kleine en hoofdletters, schrijf- en blokletters */
    letterSchrijfKlein: letterIcoon('a', 'schrijfletter', 74, 68),
    letterSchrijfHoofd: letterIcoon('A', 'schrijfletter', 60, 70),
    letterBlokKlein:    letterIcoon('a', 'blokletter', 66, 67),
    letterBlokHoofd:    letterIcoon('A', 'blokletter', 60, 71),

    /* Montessori-kralen: kralentrap van 1, 2 en 3 (visueel hulpmiddel bij de sommen) */
    kralen: cirkel('#FFF1DC',
      kralenStaaf(1, 26, '#E63946') + kralenStaaf(2, 50, '#4CAF50') + kralenStaaf(3, 74, '#F2A0B4')),

    /* Slotje (sinds fase 13 nergens meer in gebruik: geen enkele schakelaar is nog vergrendeld) */
    slot: svg('0 0 100 100',
      '<rect x="22" y="44" width="56" height="44" rx="10" fill="#7A5A00"/>' +
      '<path d="M34 44 V32 a16 16 0 0 1 32 0 V44" fill="none" stroke="#7A5A00" stroke-width="10"/>' +
      '<circle cx="50" cy="64" r="6" fill="' + GEEL + '"/>'),

    /* Niveau: klein, groot en superraketje; drie duidelijk verschillende maten */
    raketKlein: svg('0 0 100 100', raketLijf(0.5)),
    raketGroot: svg('0 0 100 100', raketLijf(0.72)),
    raketSuper: svg('0 0 100 100', raketLijf(0.95)),

    /* Maan voor de raket-animatie 'langs de maan' */
    maan: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="#F3E6B0" stroke="#C9B36A" stroke-width="5"/>' +
      '<circle cx="36" cy="40" r="8" fill="#DCCB8C"/><circle cx="62" cy="62" r="11" fill="#DCCB8C"/><circle cx="64" cy="34" r="5" fill="#DCCB8C"/>'),

    /* Liaan voor de slinger-animatie */
    liaan: '<svg viewBox="0 0 20 100" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="M10 0 V100" stroke="#5E8C3A" stroke-width="8" ' + W + ' vector-effect="non-scaling-stroke"/>' +
      '<path d="M10 30 q8 -3 12 1 M10 60 q-8 -3 -12 1 M10 85 q8 -3 12 1" stroke="#5E8C3A" stroke-width="5" fill="none" ' + W + ' vector-effect="non-scaling-stroke"/></svg>',

    /* Speelfiguur: het hele aapje, armen omhoog, met staart */
    aapjeFiguur: svg('0 0 100 130',
      '<path class="staart" d="M56 96 Q86 104 84 76" fill="none" stroke="' + BRUIN + '" stroke-width="7" ' + W + '/>' +
      '<path class="arm arm-l" d="M32 78 L14 54" stroke="' + BRUIN + '" stroke-width="9" ' + W + '/>' +
      '<path class="arm arm-r" d="M68 78 L86 54" stroke="' + BRUIN + '" stroke-width="9" ' + W + '/>' +
      '<ellipse cx="50" cy="94" rx="25" ry="28" fill="' + LICHTBRUIN + '" stroke="' + BRUIN + '" stroke-width="5"/>' +
      '<ellipse cx="50" cy="98" rx="14" ry="17" fill="' + HUID + '"/>' +
      '<path d="M34 120 L30 128 M66 120 L70 128" stroke="' + BRUIN + '" stroke-width="9" ' + W + '/>' +
      aapjesKop(50, 44, 27, 'oog')),

    /* Speelfiguur: de raket */
    raketFiguur: svg('0 0 100 110', raketLijf(1)),

    /* ---- Vis (woorden lezen) ---- */

    /* Hoofdmenu en speelfiguur: het visje, met een paar bubbels */
    vis: svg('0 0 100 100', visLijf(0.92) +
      '<circle cx="9" cy="30" r="4" fill="none" stroke="' + ZEE + '" stroke-width="3"/>' +
      '<circle cx="16" cy="18" r="3" fill="none" stroke="' + ZEE + '" stroke-width="3"/>'),
    visFiguur: svg('0 0 100 100', visLijf(1)),

    /* Niveau: kleine vis, grote vis en haai */
    visKlein: svg('0 0 100 100', visLijf(0.55)),
    visGroot: svg('0 0 100 100', visLijf(0.85)),
    haai: svg('0 0 100 100',
      '<path d="M84 50 L98 26 L95 50 L98 74 Z" fill="' + GRIJS + '" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M44 34 L54 8 L68 34 Z" fill="' + GRIJS + '" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M4 52 Q28 24 62 30 Q82 34 90 50 Q82 68 60 72 Q28 76 4 52 Z" fill="' + GRIJS + '" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M10 56 Q34 74 66 68 Q40 78 12 60 Z" fill="#fff"/>' +
      '<path d="M46 66 Q52 82 64 70 Z" fill="' + GRIJS + '" stroke="' + DONKER + '" stroke-width="4" ' + W + '/>' +
      '<path d="M12 54 Q26 66 44 62" fill="none" stroke="' + DONKER + '" stroke-width="4" ' + W + '/>' +
      '<path d="M16 56 l4 -5 l4 5 l4 -5 l4 5 l4 -4" fill="none" stroke="#fff" stroke-width="3" ' + W + '/>' +
      '<circle cx="28" cy="44" r="5" fill="' + DONKER + '"/><circle cx="26.5" cy="42.5" r="1.8" fill="#fff"/>'),

    /* Spelvorm: woord in beeld, plaatje kiezen / plaatje in beeld, woord kiezen */
    vormWoord: cirkel(ZEE,
      '<rect x="22" y="22" width="56" height="22" rx="8" fill="#fff"/>' +
      '<path d="M30 33 q4 -6 8 0 t8 0 t8 0 t8 0 t6 0" fill="none" stroke="' + ZEEDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '<rect x="22" y="54" width="15" height="15" rx="4" fill="#fff"/><circle cx="29.5" cy="61.5" r="4" fill="' + VIS + '"/>' +
      '<rect x="42.5" y="54" width="15" height="15" rx="4" fill="#fff"/><circle cx="50" cy="61.5" r="4" fill="' + GEEL + '"/>' +
      '<rect x="63" y="54" width="15" height="15" rx="4" fill="#fff"/><circle cx="70.5" cy="61.5" r="4" fill="' + ROOD + '"/>'),
    vormPlaatje: cirkel(ZEE,
      '<rect x="36" y="18" width="28" height="28" rx="6" fill="#fff"/><circle cx="50" cy="32" r="8" fill="' + VIS + '"/>' +
      '<rect x="22" y="54" width="56" height="8" rx="4" fill="#fff"/>' +
      '<rect x="22" y="67" width="56" height="8" rx="4" fill="#fff"/>' +
      '<rect x="22" y="80" width="40" height="6" rx="3" fill="#fff" opacity="0.8"/>'),

    /* Sessieteller bij Vis: schelp, en een schatkist als het meer dan tien zijn */
    schelp: svg('0 0 100 100',
      '<path d="M50 88 L14 46 A38 38 0 0 1 86 46 Z" fill="#FFD6B0" stroke="#B36B2E" stroke-width="5" ' + W + '/>' +
      '<path d="M50 88 L28 36 M50 88 L42 30 M50 88 L58 30 M50 88 L72 36" fill="none" stroke="#B36B2E" stroke-width="3.5" ' + W + '/>' +
      '<rect x="40" y="82" width="20" height="12" rx="4" fill="#B36B2E"/>'),
    schatkist: svg('0 0 100 100',
      '<path d="M14 48 V34 A36 20 0 0 1 86 34 V48 Z" fill="' + BRUIN + '" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<rect x="14" y="48" width="72" height="40" rx="6" fill="' + LICHTBRUIN + '" stroke="' + DONKER + '" stroke-width="5"/>' +
      '<path d="M30 48 V88 M70 48 V88" stroke="' + BRUIN + '" stroke-width="6"/>' +
      '<rect x="41" y="52" width="18" height="18" rx="4" fill="' + GEEL + '" stroke="' + DONKER + '" stroke-width="4"/>' +
      '<circle cx="50" cy="60" r="3" fill="' + DONKER + '"/>' +
      '<circle cx="28" cy="24" r="6" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3"/>' +
      '<circle cx="72" cy="22" r="6" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3"/>'),

    /* ---- Mier (woorden bouwen) ---- */

    /* Hoofdmenu: de mier met een blaadje erboven; speelfiguur: de mier alleen */
    mier: svg('0 0 100 100', '<g transform="translate(6 14) scale(0.86)">' + mierLijf(1) + '</g>' +
      '<g transform="translate(58 0) scale(0.34)">' + bladVorm() + '</g>'),
    mierFiguur: svg('0 0 100 100', mierLijf(1)),

    /* Niveau: kleine mier, grote mier en puike mier (drie maten, zoals de raketjes en de vissen) */
    mierKlein: svg('0 0 100 100', mierLijf(0.55)),
    mierGroot: svg('0 0 100 100', mierLijf(0.8)),
    mierPuik:  svg('0 0 100 100', mierLijf(1)),

    /* Sessieteller bij Mier: blaadje, en een mierenhoop als het er meer dan tien zijn */
    blaadje: svg('0 0 100 100', bladVorm()),
    mierenhoop: svg('0 0 100 100',
      '<path d="M6 86 C16 46 36 18 50 12 C64 18 84 46 94 86 Z" fill="' + LICHTBRUIN + '" stroke="' + BRUIN + '" stroke-width="5" ' + W + '/>' +
      '<path d="M22 74 L44 56 M34 84 L58 58 M54 84 L74 62 M40 44 L58 40 M50 28 L62 34" fill="none" stroke="' + BRUIN + '" stroke-width="4" ' + W + '/>' +
      '<ellipse cx="66" cy="78" rx="7" ry="5.5" fill="' + MIERDONKER + '"/>' +
      '<circle cx="56" cy="78" r="4.5" fill="' + MIERDONKER + '"/>' +
      '<circle cx="48" cy="76" r="4" fill="' + MIERDONKER + '"/>'),

    /* Hulpmiddel: het voorbeeldwoord klein boven de lege klankvakjes */
    voorbeeldwoord: cirkel(GRAS,
      '<rect x="24" y="22" width="52" height="18" rx="7" fill="#fff"/>' +
      '<path d="M31 31 q4 -5 8 0 t8 0 t8 0 t8 0" fill="none" stroke="' + GRASDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '<rect x="22" y="54" width="17" height="20" rx="5" fill="none" stroke="#fff" stroke-width="4"/>' +
      '<rect x="41.5" y="54" width="17" height="20" rx="5" fill="none" stroke="#fff" stroke-width="4"/>' +
      '<rect x="61" y="54" width="17" height="20" rx="5" fill="none" stroke="#fff" stroke-width="4"/>')
  };

  function get(naam) {
    return iconen[naam] || '';
  }

  /* Vult alle elementen met data-icoon="naam". */
  function vul(root) {
    var lijst = (root || document).querySelectorAll('[data-icoon]');
    for (var i = 0; i < lijst.length; i++) {
      lijst[i].innerHTML = get(lijst[i].getAttribute('data-icoon'));
    }
  }

  return { svg: get, vul: vul, namen: Object.keys(iconen) };
})();
