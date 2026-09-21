/* decor.js - tekeningen voor de meegroeiende werelden (ontwikkelplan §7.6): de boom van Aapje,
   de planeten van Raketje, de rifstukken van Vis en het ondergrondse nest van Mier.
   Zelfde stijl als js/icons.js: dikke ronde lijnen, vlakke zachte kleuren, geen tekst,
   geen id's en geen <defs>, zodat er tientallen tegelijk op een pagina kunnen staan.

   Gebruik: Decor.svg('planeetRing') geeft een SVG-string.
   Tekeningen die met hun vak mee moeten rekken (stam, hemel, zand) hebben
   preserveAspectRatio="none"; de rest houdt zijn verhoudingen. */

var Decor = (function () {
  'use strict';

  var W = 'stroke-linejoin="round" stroke-linecap="round"';

  /* Palet uit ontwikkelplan §6.2 */
  var STAM = '#8B5A2B', STAMDONKER = '#5E3C1B';
  var BLAD = '#7CB86A', BLADLICHT = '#CFE8C3', BLADDONKER = '#4C8A3C';
  var HEMEL = '#ECEBFA', STER = '#FFD23F';
  var ROOD = '#E8607A', GEEL = '#FFD23F', IJSBLAUW = '#8FD3FF', PAARS = '#B39DDB';
  var ZAND = '#F3E3B8', ZANDDONKER = '#D9C48C';
  var KORAAL = '#FF6F91', KORAALPAARS = '#9B5DE5', PLANT = '#6AA84F', PLANTDONKER = '#3F7A2E';
  var DONKER = '#3B2A1A', BRUIN = '#8B5A2B', LICHTBRUIN = '#D9A066', VLAGROOD = '#E63946';
  /* Het ondergrondse nest van Mier: aarde, uitgegraven kamers en gangen, en de mieren zelf. */
  var AARDE = '#C9A882', AARDEDONKER = '#A8814F', KAMER = '#F6E7C8';
  var MIER = '#A0522D', MIERDONKER = '#5A2D12';
  var OKER = '#9A7B00';

  function svg(vb, binnen) {
    return '<svg viewBox="' + vb + '" aria-hidden="true">' + binnen + '</svg>';
  }

  /* Rekt mee met de hoogte/breedte van zijn vak (stam, hemel, zandbodem). */
  function rek(vb, binnen) {
    return '<svg viewBox="' + vb + '" preserveAspectRatio="none" aria-hidden="true">' + binnen + '</svg>';
  }

  /* ---- Aapje: drie bomen (loofboom, palm, apenbroodboom) ----
     Een boom bestaat uit drie losse tekeningen: de stam (rekt mee met de hoogte),
     één tak (tien keer gebruikt, om en om gespiegeld) en de kruin bovenin.
     wereld.js zet ze op hun plek; de takhoogtes staan in Wereld.BOOM.takken. */

  function stam(kleur, donker, binnen) {
    return rek('0 0 40 100',
      '<path d="M13 100 C11 70 10 40 14 0 H26 C30 40 29 70 27 100 Z" fill="' + kleur + '" stroke="' + donker + '" stroke-width="2.5" ' + W + ' vector-effect="non-scaling-stroke"/>' +
      (binnen || ''));
  }

  function tak(kleur, donker, blad) {
    return svg('0 0 100 60',
      '<path d="M2 46 C28 44 52 36 88 22" fill="none" stroke="' + kleur + '" stroke-width="11" ' + W + '/>' +
      '<path d="M2 46 C28 44 52 36 88 22" fill="none" stroke="' + donker + '" stroke-width="3" opacity="0.5" ' + W + '/>' +
      blad);
  }

  /* Eén uitgegraven kamer in de aarde, met links en rechts een gang op loophoogte, zodat
     opeenvolgende kamers op elkaar aansluiten. De vloer ligt op y = 82; alles wat in de kamer
     staat, staat op die lijn. */
  function kamer(binnen) {
    return svg('0 0 100 100',
      '<rect x="6" y="18" width="88" height="64" rx="18" fill="' + KAMER + '" stroke="' + AARDEDONKER + '" stroke-width="4"/>' +
      '<rect x="-2" y="58" width="18" height="24" fill="' + KAMER + '"/>' +
      '<rect x="84" y="58" width="18" height="24" fill="' + KAMER + '"/>' +
      '<path d="M-2 58 H16 M-2 82 H16 M84 58 H102 M84 82 H102" fill="none" stroke="' + AARDEDONKER + '" stroke-width="4" ' + W + '/>' +
      (binnen || ''));
  }

  /* Klein blaadje voor in de kamers (eigen vorm, los van de teller-icoon in icons.js). */
  function blad(x, y, s) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M0 30 C-4 12 8 -2 28 -3 C29 14 18 30 0 30 Z" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="3" ' + W + '/>' +
      '<path d="M1 29 C9 21 18 12 27 -2" fill="none" stroke="' + BLADDONKER + '" stroke-width="2.4" ' + W + '/>' +
      '</g>';
  }

  /* Miertje van opzij, staand op (x, y); het kijkt naar links, net als de speelfiguur.
     `s` schaalt, `slapend` sluit het oog. */
  function mierZij(x, y, s, slapend) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M-2 -8 C-6 -3 -9 -1 -13 2 M2 -8 C2 -3 2 -1 2 2 M6 -8 C9 -3 12 -1 15 2" fill="none" stroke="' + MIERDONKER + '" stroke-width="2.4" ' + W + '/>' +
      '<ellipse cx="9" cy="-12" rx="8" ry="6.5" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="2.4"/>' +
      '<ellipse cx="0" cy="-12" rx="5" ry="4.5" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="2.4"/>' +
      '<circle cx="-8" cy="-13" r="5.5" fill="' + MIER + '" stroke="' + MIERDONKER + '" stroke-width="2.4"/>' +
      '<path d="M-11 -17 C-14 -21 -16 -23 -19 -25 M-7 -18 C-8 -22 -9 -25 -11 -27" fill="none" stroke="' + MIERDONKER + '" stroke-width="2" ' + W + '/>' +
      (slapend
        ? '<path d="M-11 -14 q2.5 2 5 0" fill="none" stroke="' + MIERDONKER + '" stroke-width="1.8" ' + W + '/>'
        : '<circle cx="-10" cy="-14" r="2" fill="#fff"/><circle cx="-10.5" cy="-14" r="1" fill="' + DONKER + '"/>') +
      '</g>';
  }

  var iconen = {

    /* 1. Loofboom: rechte stam, ronde bladerbossen aan de takken */
    stamLoof: stam(STAM, STAMDONKER,
      '<path d="M17 80 q4 -6 7 -1 M16 52 q5 -7 8 -1 M18 26 q4 -6 7 -1" fill="none" stroke="' + STAMDONKER + '" stroke-width="1.6" opacity="0.7" ' + W + ' vector-effect="non-scaling-stroke"/>'),
    takLoof: tak(STAM, STAMDONKER,
      '<circle cx="74" cy="20" r="17" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="4"/>' +
      '<circle cx="92" cy="26" r="12" fill="' + BLADLICHT + '" stroke="' + BLADDONKER + '" stroke-width="4"/>' +
      '<circle cx="56" cy="30" r="11" fill="' + BLADLICHT + '" stroke="' + BLADDONKER + '" stroke-width="4"/>'),
    kruinLoof: svg('0 0 100 100',
      '<circle cx="50" cy="56" r="33" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="5"/>' +
      '<circle cx="24" cy="44" r="21" fill="' + BLADLICHT + '" stroke="' + BLADDONKER + '" stroke-width="5"/>' +
      '<circle cx="76" cy="44" r="21" fill="' + BLADLICHT + '" stroke="' + BLADDONKER + '" stroke-width="5"/>' +
      '<circle cx="50" cy="26" r="19" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="5"/>'),

    /* 2. Palm: gebogen stam met ringen, geveerde bladeren */
    stamPalm: stam('#C39A63', '#8A6435',
      '<path d="M13 84 H27 M13 64 H27 M14 44 H27 M14 24 H26" fill="none" stroke="#8A6435" stroke-width="1.6" opacity="0.8" vector-effect="non-scaling-stroke"/>'),
    takPalm: tak('#C39A63', '#8A6435',
      '<path d="M40 40 C56 18 76 10 96 12" fill="none" stroke="' + BLAD + '" stroke-width="7" ' + W + '/>' +
      '<path d="M48 36 l-4 -12 M60 28 l-3 -13 M72 21 l-2 -13 M84 16 l0 -12" fill="none" stroke="' + BLADDONKER + '" stroke-width="4" ' + W + '/>' +
      '<path d="M48 38 l-6 10 M60 30 l-5 11 M73 23 l-4 11 M85 18 l-2 11" fill="none" stroke="' + BLAD + '" stroke-width="4" ' + W + '/>'),
    kruinPalm: svg('0 0 100 100',
      '<path d="M50 62 C34 40 20 32 6 32" fill="none" stroke="' + BLAD + '" stroke-width="8" ' + W + '/>' +
      '<path d="M50 62 C66 40 80 32 94 32" fill="none" stroke="' + BLAD + '" stroke-width="8" ' + W + '/>' +
      '<path d="M50 62 C42 34 34 18 26 8" fill="none" stroke="' + BLADDONKER + '" stroke-width="8" ' + W + '/>' +
      '<path d="M50 62 C58 34 66 18 74 8" fill="none" stroke="' + BLADDONKER + '" stroke-width="8" ' + W + '/>' +
      '<circle cx="42" cy="66" r="7" fill="#A0693A" stroke="#6E4520" stroke-width="3"/>' +
      '<circle cx="58" cy="68" r="7" fill="#A0693A" stroke="#6E4520" stroke-width="3"/>'),

    /* 3. Apenbroodboom: dikke stam, rode blaadjes */
    stamApenbrood: stam('#A8825A', '#6E543A',
      '<path d="M15 88 C18 70 16 52 19 30 M25 90 C22 68 25 50 23 28" fill="none" stroke="#6E543A" stroke-width="1.6" opacity="0.6" ' + W + ' vector-effect="non-scaling-stroke"/>'),
    takApenbrood: tak('#A8825A', '#6E543A',
      '<circle cx="72" cy="22" r="14" fill="#E8607A" stroke="#A83A52" stroke-width="4"/>' +
      '<circle cx="90" cy="30" r="10" fill="#F5A0B4" stroke="#A83A52" stroke-width="4"/>' +
      '<circle cx="56" cy="32" r="9" fill="#F5A0B4" stroke="#A83A52" stroke-width="4"/>'),
    kruinApenbrood: svg('0 0 100 100',
      '<path d="M50 88 C20 76 8 52 16 34 C30 44 38 40 50 30 C62 40 70 44 84 34 C92 52 80 76 50 88 Z" fill="#E8607A" stroke="#A83A52" stroke-width="5" ' + W + '/>' +
      '<circle cx="30" cy="44" r="11" fill="#F5A0B4"/>' +
      '<circle cx="68" cy="46" r="9" fill="#F5A0B4"/>'),

    /* ---- Raketje: sterrenhemel en tien planeten ---- */

    hemel: rek('0 0 100 300',
      '<rect x="0" y="0" width="100" height="300" fill="' + HEMEL + '"/>' +
      '<circle cx="18" cy="34" r="2.2" fill="' + STER + '"/><circle cx="72" cy="18" r="1.6" fill="' + STER + '"/>' +
      '<circle cx="46" cy="72" r="1.8" fill="' + STER + '"/><circle cx="84" cy="96" r="2.4" fill="' + STER + '"/>' +
      '<circle cx="22" cy="126" r="1.6" fill="' + STER + '"/><circle cx="62" cy="150" r="2.2" fill="' + STER + '"/>' +
      '<circle cx="32" cy="186" r="1.8" fill="' + STER + '"/><circle cx="80" cy="212" r="1.6" fill="' + STER + '"/>' +
      '<circle cx="14" cy="238" r="2.2" fill="' + STER + '"/><circle cx="56" cy="264" r="1.8" fill="' + STER + '"/>' +
      '<circle cx="88" cy="286" r="1.6" fill="' + STER + '"/><circle cx="38" cy="10" r="1.6" fill="' + STER + '"/>'),

    /* Twinkelende ster los in de hemel (CSS laat hem langzaam pulseren) */
    twinkel: svg('0 0 100 100',
      '<path d="M50 10 L58 42 L90 50 L58 58 L50 90 L42 58 L10 50 L42 42 Z" fill="' + STER + '" stroke="' + OKER + '" stroke-width="4" ' + W + '/>'),

    planeetMaan: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="#F3E6B0" stroke="#C9B36A" stroke-width="5"/>' +
      '<circle cx="36" cy="40" r="8" fill="#DCCB8C"/><circle cx="62" cy="62" r="11" fill="#DCCB8C"/>' +
      '<circle cx="64" cy="34" r="5" fill="#DCCB8C"/>'),
    planeetRood: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="' + ROOD + '" stroke="#A83A52" stroke-width="5"/>' +
      '<path d="M22 38 q14 -8 26 0 t28 2" fill="none" stroke="#A83A52" stroke-width="5" opacity="0.6" ' + W + '/>' +
      '<circle cx="38" cy="64" r="9" fill="#F5A0B4"/><circle cx="66" cy="58" r="6" fill="#F5A0B4"/>'),
    planeetRing: svg('0 0 100 100',
      '<ellipse cx="50" cy="54" rx="46" ry="13" fill="none" stroke="' + OKER + '" stroke-width="7"/>' +
      '<circle cx="50" cy="46" r="30" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5"/>' +
      '<path d="M4 54 a46 13 0 0 0 92 0" fill="none" stroke="' + OKER + '" stroke-width="7" ' + W + '/>' +
      '<circle cx="40" cy="38" r="6" fill="#FFE9A0"/>'),
    planeetGasreus: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="#F6C177" stroke="#B57F2E" stroke-width="5"/>' +
      '<path d="M12 36 H88 M9 50 H91 M14 64 H86 M22 78 H78" fill="none" stroke="#B57F2E" stroke-width="6" opacity="0.55" ' + W + '/>' +
      '<ellipse cx="62" cy="43" rx="10" ry="5" fill="#E8607A" stroke="#A83A52" stroke-width="3"/>'),
    planeetIjs: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="' + IJSBLAUW + '" stroke="#3D8FB8" stroke-width="5"/>' +
      '<path d="M16 30 a42 42 0 0 1 68 0 Z" fill="#FFFFFF" opacity="0.85"/>' +
      '<path d="M22 70 a42 42 0 0 0 56 0 Z" fill="#FFFFFF" opacity="0.55"/>'),
    planeetGroen: svg('0 0 100 100',
      '<circle cx="50" cy="56" r="36" fill="#9BD77A" stroke="#4C8A3C" stroke-width="5"/>' +
      '<path d="M50 30 V12" stroke="' + STAM + '" stroke-width="6" ' + W + '/>' +
      '<circle cx="50" cy="10" r="12" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="4"/>' +
      '<circle cx="34" cy="66" r="7" fill="#7CB86A"/><circle cx="64" cy="72" r="5" fill="#7CB86A"/>'),
    planeetGezicht: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="#FFB5C8" stroke="#C4667F" stroke-width="5"/>' +
      '<circle cx="36" cy="42" r="6" fill="' + DONKER + '"/><circle cx="64" cy="42" r="6" fill="' + DONKER + '"/>' +
      '<circle cx="34" cy="40" r="2" fill="#fff"/><circle cx="62" cy="40" r="2" fill="#fff"/>' +
      '<path d="M32 62 q18 18 36 0" fill="none" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<circle cx="24" cy="58" r="6" fill="#F5808F" opacity="0.7"/><circle cx="76" cy="58" r="6" fill="#F5808F" opacity="0.7"/>'),
    planeetKomeet: svg('0 0 100 100',
      '<path d="M62 50 L4 26 L26 50 L4 74 Z" fill="' + GEEL + '" opacity="0.65"/>' +
      '<circle cx="68" cy="50" r="24" fill="#DCE6F5" stroke="#8FA3C8" stroke-width="5"/>' +
      '<circle cx="60" cy="44" r="5" fill="#B8C6E0"/><circle cx="76" cy="58" r="7" fill="#B8C6E0"/>'),
    planeetPaars: svg('0 0 100 100',
      '<circle cx="46" cy="52" r="33" fill="' + PAARS + '" stroke="#6E4FA8" stroke-width="5"/>' +
      '<path d="M18 40 q14 8 28 2 t26 4" fill="none" stroke="#6E4FA8" stroke-width="4" opacity="0.6" ' + W + '/>' +
      '<circle cx="86" cy="22" r="10" fill="#D6C6F0" stroke="#6E4FA8" stroke-width="4"/>' +
      '<circle cx="88" cy="74" r="7" fill="#D6C6F0" stroke="#6E4FA8" stroke-width="4"/>'),
    planeetAarde: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="42" fill="#5BB8E8" stroke="#2F6FB5" stroke-width="5"/>' +
      '<path d="M16 38 q12 -10 24 -2 q10 7 4 16 q-8 10 -20 4 q-12 -6 -8 -18 Z" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '<path d="M56 30 q16 -4 24 8 q-6 10 -18 8 q-12 -2 -6 -16 Z" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="3.5" ' + W + '/>' +
      '<path d="M44 68 q14 -8 26 2 q-8 12 -22 8 q-10 -4 -4 -10 Z" fill="' + BLAD + '" stroke="' + BLADDONKER + '" stroke-width="3.5" ' + W + '/>'),

    /* Vlaggetje op de bereikte planeet */
    vlaggetje: svg('0 0 100 100',
      '<path d="M34 92 V14" stroke="#7A6A55" stroke-width="7" ' + W + '/>' +
      '<path d="M36 16 L82 28 L36 44 Z" fill="' + VLAGROOD + '" stroke="#8A2029" stroke-width="5" ' + W + '/>'),

    /* ---- Vis: het rif ---- */

    zandbodem: rek('0 0 100 30',
      '<path d="M0 12 q12 -8 25 -2 t25 1 t25 -3 t25 2 V30 H0 Z" fill="' + ZAND + '" stroke="' + ZANDDONKER + '" stroke-width="2" ' + W + ' vector-effect="non-scaling-stroke"/>'),
    /* Elk rifstuk staat met zijn voeten op y = 100 (de zandlijn). */
    rifKoraal: svg('0 0 100 100',
      '<path d="M50 100 V58 M50 74 L28 50 M50 66 L72 44 M28 50 L20 30 M28 50 L40 34 M72 44 L82 26 M72 44 L62 28" fill="none" stroke="' + KORAAL + '" stroke-width="11" ' + W + '/>' +
      '<circle cx="20" cy="28" r="7" fill="#FFB0C4"/><circle cx="40" cy="32" r="6" fill="#FFB0C4"/>' +
      '<circle cx="82" cy="24" r="7" fill="#FFB0C4"/><circle cx="62" cy="26" r="6" fill="#FFB0C4"/>'),
    rifWaaier: svg('0 0 100 100',
      '<path d="M50 100 V70" stroke="' + KORAALPAARS + '" stroke-width="10" ' + W + '/>' +
      '<path d="M50 74 C14 66 10 26 50 12 C90 26 86 66 50 74 Z" fill="#C9A6F0" stroke="' + KORAALPAARS + '" stroke-width="5" ' + W + '/>' +
      '<path d="M50 70 V18 M34 66 L30 26 M66 66 L70 26 M22 56 L20 34 M78 56 L80 34" fill="none" stroke="' + KORAALPAARS + '" stroke-width="3.5" opacity="0.8" ' + W + '/>'),
    rifWaterplant: svg('0 0 100 100',
      '<g class="wiegt">' +
      '<path d="M34 100 C22 72 34 46 26 18" fill="none" stroke="' + PLANT + '" stroke-width="9" ' + W + '/>' +
      '<path d="M52 100 C44 66 58 42 52 10" fill="none" stroke="' + PLANTDONKER + '" stroke-width="9" ' + W + '/>' +
      '<path d="M70 100 C66 76 78 54 74 30" fill="none" stroke="' + PLANT + '" stroke-width="9" ' + W + '/>' +
      '</g>'),
    rifZeewier: svg('0 0 100 100',
      '<g class="wiegt">' +
      '<path d="M46 100 C30 80 58 70 42 50 C28 34 54 24 44 6" fill="none" stroke="' + PLANTDONKER + '" stroke-width="8" ' + W + '/>' +
      '<path d="M66 100 C54 82 76 72 64 54 C54 40 74 32 68 18" fill="none" stroke="' + PLANT + '" stroke-width="8" ' + W + '/>' +
      '</g>'),
    rifAnemoon: svg('0 0 100 100',
      '<path d="M50 100 V72" stroke="#E8A0C8" stroke-width="16" ' + W + '/>' +
      '<g class="wiegt">' +
      '<path d="M50 76 L26 46 M50 76 L38 38 M50 76 L50 34 M50 76 L62 38 M50 76 L74 46" fill="none" stroke="#F0B8D8" stroke-width="9" ' + W + '/>' +
      '<circle cx="26" cy="44" r="5" fill="#FF6F91"/><circle cx="38" cy="36" r="5" fill="#FF6F91"/>' +
      '<circle cx="50" cy="32" r="5" fill="#FF6F91"/><circle cx="62" cy="36" r="5" fill="#FF6F91"/>' +
      '<circle cx="74" cy="44" r="5" fill="#FF6F91"/>' +
      '</g>' +
      '<ellipse cx="66" cy="66" rx="14" ry="9" fill="#FF9F1C" stroke="#B85C00" stroke-width="4"/>' +
      '<path d="M80 66 L92 58 L89 66 L92 74 Z" fill="#FF9F1C" stroke="#B85C00" stroke-width="4" ' + W + '/>' +
      '<path d="M62 57 V75 M70 58 V74" stroke="#fff" stroke-width="4"/>' +
      '<circle cx="57" cy="63" r="2.6" fill="' + DONKER + '"/>'),
    rifZeester: svg('0 0 100 100',
      '<path d="M50 44 L62 72 L92 74 L68 90 L76 100 L50 86 L24 100 L32 90 L8 74 L38 72 Z" fill="#FF9F1C" stroke="#B85C00" stroke-width="5" ' + W + '/>' +
      '<circle cx="50" cy="74" r="4" fill="#FFD98A"/><circle cx="38" cy="84" r="3" fill="#FFD98A"/>' +
      '<circle cx="62" cy="84" r="3" fill="#FFD98A"/>'),
    rifRots: svg('0 0 100 100',
      '<path d="M6 100 C10 74 26 56 48 56 C72 56 88 74 94 100 Z" fill="#B8C0CC" stroke="#7E8899" stroke-width="5" ' + W + '/>' +
      '<path d="M28 100 C30 84 38 72 50 70" fill="none" stroke="#7E8899" stroke-width="4" opacity="0.7" ' + W + '/>' +
      '<ellipse cx="50" cy="44" rx="16" ry="11" fill="' + VLAGROOD + '" stroke="#8A2029" stroke-width="4"/>' +
      '<path d="M34 42 L22 32 M66 42 L78 32" stroke="#8A2029" stroke-width="5" ' + W + '/>' +
      '<path d="M22 32 l-8 -4 l8 -3 M78 32 l8 -4 l-8 -3" fill="none" stroke="#8A2029" stroke-width="5" ' + W + '/>' +
      '<circle cx="44" cy="40" r="3" fill="' + DONKER + '"/><circle cx="56" cy="40" r="3" fill="' + DONKER + '"/>'),
    rifSchelpen: svg('0 0 100 100',
      '<path d="M32 100 L10 72 A22 22 0 0 1 54 72 Z" fill="#FFD6B0" stroke="#B36B2E" stroke-width="4" ' + W + '/>' +
      '<path d="M32 100 L20 68 M32 100 L32 64 M32 100 L44 68" fill="none" stroke="#B36B2E" stroke-width="3" ' + W + '/>' +
      '<path d="M70 100 L52 78 A18 18 0 0 1 88 78 Z" fill="#F5C0D8" stroke="#B36B8E" stroke-width="4" ' + W + '/>' +
      '<path d="M70 100 L60 76 M70 100 L70 72 M70 100 L80 76" fill="none" stroke="#B36B8E" stroke-width="3" ' + W + '/>'),
    rifBellen: svg('0 0 100 100',
      '<circle cx="34" cy="76" r="9" fill="rgba(143,211,255,0.35)" stroke="#7FC4E8" stroke-width="3.5"/>' +
      '<circle cx="58" cy="52" r="12" fill="rgba(143,211,255,0.35)" stroke="#7FC4E8" stroke-width="3.5"/>' +
      '<circle cx="38" cy="26" r="7" fill="rgba(143,211,255,0.35)" stroke="#7FC4E8" stroke-width="3.5"/>' +
      '<circle cx="66" cy="16" r="5" fill="rgba(143,211,255,0.35)" stroke="#7FC4E8" stroke-width="3.5"/>' +
      '<path d="M20 100 q10 -6 20 -2 q12 4 22 -2" fill="none" stroke="' + ZANDDONKER + '" stroke-width="4" ' + W + '/>'),
    rifWrak: svg('0 0 100 100',
      '<path d="M8 76 C24 96 76 96 94 74 L86 60 H16 Z" fill="' + BRUIN + '" stroke="#5A3A18" stroke-width="5" ' + W + '/>' +
      '<path d="M20 60 L26 34 M26 34 L62 44 L28 52" fill="none" stroke="#5A3A18" stroke-width="5" ' + W + '/>' +
      '<circle cx="42" cy="72" r="6" fill="#DCE6F5" stroke="#5A3A18" stroke-width="3.5"/>' +
      '<circle cx="62" cy="72" r="6" fill="#DCE6F5" stroke="#5A3A18" stroke-width="3.5"/>' +
      '<path d="M74 44 q10 -6 14 4" fill="none" stroke="' + PLANT + '" stroke-width="5" ' + W + '/>'),

    /* Finale van Vis: de schatkist die opengaat (deksel heeft een eigen klasse) */
    rifSchatkist: svg('0 0 100 100',
      '<g class="deksel">' +
      '<path d="M12 62 V48 A38 22 0 0 1 88 48 V62 Z" fill="' + BRUIN + '" stroke="' + DONKER + '" stroke-width="5" ' + W + '/>' +
      '<path d="M12 62 H88" stroke="' + DONKER + '" stroke-width="4"/>' +
      '</g>' +
      '<rect x="12" y="62" width="76" height="34" rx="6" fill="' + LICHTBRUIN + '" stroke="' + DONKER + '" stroke-width="5"/>' +
      '<path d="M30 62 V96 M70 62 V96" stroke="' + BRUIN + '" stroke-width="6"/>' +
      '<rect x="41" y="66" width="18" height="16" rx="4" fill="' + GEEL + '" stroke="' + DONKER + '" stroke-width="4"/>' +
      '<g class="glinster">' +
      '<circle cx="26" cy="40" r="6" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3"/>' +
      '<circle cx="50" cy="30" r="7" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3"/>' +
      '<circle cx="74" cy="40" r="6" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3"/>' +
      '</g>'),

    /* ---- Mier: het ondergrondse nest ----
       Tien kamers: negen gewone uit een shuffle-bag en de koninginnenkamer als finale. */

    kamerZaden: kamer(
      '<ellipse cx="34" cy="76" rx="9" ry="7" fill="#D9A066" stroke="#8A6435" stroke-width="3"/>' +
      '<ellipse cx="50" cy="72" rx="9" ry="7" fill="#E8C08A" stroke="#8A6435" stroke-width="3"/>' +
      '<ellipse cx="66" cy="76" rx="9" ry="7" fill="#D9A066" stroke="#8A6435" stroke-width="3"/>' +
      '<ellipse cx="42" cy="62" rx="8" ry="6.5" fill="#E8C08A" stroke="#8A6435" stroke-width="3"/>' +
      '<ellipse cx="58" cy="62" rx="8" ry="6.5" fill="#D9A066" stroke="#8A6435" stroke-width="3"/>'),

    kamerEitjes: kamer(
      '<ellipse cx="36" cy="75" rx="9" ry="7" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      '<ellipse cx="52" cy="77" rx="9" ry="7" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      '<ellipse cx="68" cy="75" rx="9" ry="7" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      '<ellipse cx="44" cy="63" rx="8" ry="6" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      '<ellipse cx="60" cy="63" rx="8" ry="6" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>'),

    kamerLarven: kamer(
      '<path d="M26 80 q4 -14 18 -12 q12 2 10 12 Z" fill="#FFF1DC" stroke="#C9A06A" stroke-width="3" ' + W + '/>' +
      '<path d="M54 80 q4 -16 20 -13 q13 3 10 13 Z" fill="#FFF1DC" stroke="#C9A06A" stroke-width="3" ' + W + '/>' +
      '<path d="M32 74 h10 M35 78 h11 M60 73 h12 M63 77 h12" stroke="#C9A06A" stroke-width="2.5" ' + W + '/>'),

    kamerPaddenstoel: kamer(
      '<rect x="30" y="64" width="8" height="18" rx="3" fill="#FFF1DC" stroke="#A8814F" stroke-width="3"/>' +
      '<path d="M18 64 a16 12 0 0 1 32 0 Z" fill="' + ROOD + '" stroke="#A83A52" stroke-width="3.5" ' + W + '/>' +
      '<circle cx="27" cy="58" r="2.8" fill="#fff"/><circle cx="40" cy="60" r="2.2" fill="#fff"/>' +
      '<rect x="63" y="70" width="7" height="12" rx="3" fill="#FFF1DC" stroke="#A8814F" stroke-width="3"/>' +
      '<path d="M55 70 a11 8 0 0 1 22 0 Z" fill="' + ROOD + '" stroke="#A83A52" stroke-width="3.5" ' + W + '/>' +
      '<circle cx="67" cy="66" r="2" fill="#fff"/>'),

    kamerWater: kamer(
      '<ellipse cx="50" cy="78" rx="28" ry="6" fill="#8FD3FF" stroke="#3D8FB8" stroke-width="3"/>' +
      '<path d="M22 78 q12 6 28 6 q16 0 28 -6 V82 H22 Z" fill="#8FD3FF"/>' +
      '<path d="M58 40 q11 14 11 20 a11 11 0 0 1 -22 0 q0 -6 11 -20 Z" fill="#BCE6F6" stroke="#3D8FB8" stroke-width="3.5" ' + W + '/>' +
      '<circle cx="54" cy="58" r="2.6" fill="#fff"/>'),

    kamerBladeren: kamer(
      blad(20, 48, 0.78) + blad(44, 54, 0.7) + blad(30, 60, 0.62)),

    kamerAfval: kamer(
      '<path d="M26 82 q10 -15 24 -13 q16 2 24 13 Z" fill="#C9B08A" stroke="#8A6435" stroke-width="3" ' + W + '/>' +
      '<path d="M34 76 l6 -6 M46 72 l7 -5 M58 75 l6 -6" stroke="#8A6435" stroke-width="3" ' + W + '/>' +
      '<ellipse cx="40" cy="64" rx="5" ry="3.5" fill="#E8C08A" stroke="#8A6435" stroke-width="2.5"/>' +
      '<ellipse cx="62" cy="62" rx="4" ry="3" fill="#E8C08A" stroke="#8A6435" stroke-width="2.5"/>'),

    kamerSlaap: kamer(
      mierZij(52, 80, 0.9, true) +
      '<path d="M70 52 q6 -5 0 -10 q-6 -5 0 -10" fill="none" stroke="' + AARDEDONKER + '" stroke-width="3" ' + W + '/>' +
      '<path d="M82 40 q4 -3 0 -7 q-4 -3 0 -7" fill="none" stroke="' + AARDEDONKER + '" stroke-width="2.5" ' + W + '/>'),

    kamerWortel: kamer(
      '<path d="M50 16 C48 36 56 48 52 82" fill="none" stroke="#B08A5A" stroke-width="9" ' + W + '/>' +
      '<path d="M51 34 C42 40 36 44 30 52 M53 54 C62 58 68 62 74 70" fill="none" stroke="#B08A5A" stroke-width="6" ' + W + '/>' +
      '<path d="M30 52 l-7 3 M74 70 l7 2" stroke="#B08A5A" stroke-width="5" ' + W + '/>' +
      '<circle cx="38" cy="70" r="4.5" fill="#9BD77A"/><circle cx="64" cy="60" r="4" fill="#9BD77A"/>'),

    kamerWerkers: kamer(
      mierZij(38, 82, 0.85, false) + mierZij(74, 82, 0.75, false) +
      blad(46, 52, 0.42)),

    /* De finale: de koninginnenkamer. De koningin is groter en heeft een kroontje. */
    kamerKoningin: kamer(
      '<ellipse cx="26" cy="78" rx="7" ry="5.5" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      '<ellipse cx="38" cy="76" rx="6" ry="5" fill="#FFFDF0" stroke="#C9B36A" stroke-width="3"/>' +
      mierZij(70, 82, 1.3, false) +
      '<g class="glinster">' +
      '<path d="M50 48 L53 38 L57 45 L61 35 L65 45 L69 38 L72 48 Z" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="3" ' + W + '/>' +
      '</g>'),

    /* De bovenkant van de aarde: een grasrand, zodat te zien is dat het nest ondergronds ligt. */
    grondlijn: rek('0 0 100 14',
      '<rect x="0" y="5" width="100" height="9" fill="' + AARDE + '"/>' +
      '<path d="M0 6 q6 -6 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t16 0 V14 H0 Z" fill="' + BLAD + '"/>'),

    /* ---- Attributen voor de kunstjes, in de stijl van het nest ---- */

    /* Rond zaadje waar de mier op balanceert en mee rolt */
    zaadje: svg('0 0 100 100',
      '<circle cx="50" cy="50" r="44" fill="#E8C08A" stroke="#8A6435" stroke-width="5"/>' +
      '<path d="M50 8 C34 28 34 72 50 92" fill="none" stroke="#C9A06A" stroke-width="7"/>' +
      '<path d="M50 8 C66 28 66 72 50 92" fill="none" stroke="#D9A066" stroke-width="7"/>' +
      '<ellipse cx="38" cy="32" rx="9" ry="5" fill="#F6E7C8" opacity="0.85"/>'),

    /* Boog van een plantenwortel waar de mier doorheen springt */
    wortelboog: svg('0 0 100 100',
      '<path d="M14 98 C10 46 38 14 50 14 C62 14 90 46 86 98" fill="none" stroke="#B08A5A" stroke-width="10" ' + W + '/>' +
      '<path d="M26 44 l-12 -8 M74 44 l12 -8 M50 16 l0 -12" fill="none" stroke="#B08A5A" stroke-width="6" ' + W + '/>' +
      '<circle cx="30" cy="34" r="5" fill="#9BD77A"/><circle cx="72" cy="36" r="4.5" fill="#9BD77A"/>'),

    /* Kroontje van de koningin: de mier tilt het op bij de finale */
    kroontje: svg('0 0 100 100',
      '<path d="M18 74 L24 34 L38 54 L50 26 L62 54 L76 34 L82 74 Z" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5" ' + W + '/>' +
      '<rect x="18" y="74" width="64" height="12" rx="5" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5"/>' +
      '<circle cx="50" cy="20" r="6" fill="' + ROOD + '" stroke="' + OKER + '" stroke-width="3"/>' +
      '<circle cx="34" cy="80" r="3.5" fill="' + ROOD + '"/><circle cx="66" cy="80" r="3.5" fill="' + ROOD + '"/>'),

    /* Wortelvezel dwars door de gang, voor het koorddansen (rekt mee met de afstand) */
    draad: rek('0 0 100 10',
      '<path d="M0 5 H100" stroke="#B08A5A" stroke-width="3" vector-effect="non-scaling-stroke"/>'),
    stokje: svg('0 0 100 20',
      '<path d="M4 10 H96" stroke="#7A6A55" stroke-width="7" ' + W + '/>' +
      '<circle cx="8" cy="10" r="7" fill="' + BLAD + '"/><circle cx="92" cy="10" r="7" fill="' + BLAD + '"/>'),
    stofwolk: svg('0 0 100 60',
      '<circle cx="26" cy="40" r="18" fill="#E8D8B8" opacity="0.9"/>' +
      '<circle cx="52" cy="32" r="22" fill="#F0E4C8" opacity="0.9"/>' +
      '<circle cx="76" cy="42" r="15" fill="#E8D8B8" opacity="0.9"/>'),
    sterretje: svg('0 0 100 100',
      '<path d="M50 14 L58 42 L86 50 L58 58 L50 86 L42 58 L14 50 L42 42 Z" fill="' + GEEL + '" stroke="' + OKER + '" stroke-width="5" ' + W + '/>')
  };

  function get(naam) { return iconen[naam] || ''; }

  return { svg: get, namen: Object.keys(iconen) };
})();
