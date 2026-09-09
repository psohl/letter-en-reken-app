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

    /* Slotje: plus staat altijd aan */
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
    raketFiguur: svg('0 0 100 110', raketLijf(1))
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
