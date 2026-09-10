/* plaatjes.js - de plaatjes bij de woorden van het spel Vis (ontwikkelplan §5.5).
   Alle plaatjes zijn eigen SVG-tekeningen in dezelfde stijl als js/icons.js: dikke ronde
   omtreklijn, vlakke zachte kleuren, geen tekst, geen materiaal van derden.
   Gebruik: Plaatjes.svg('kat') geeft een SVG-string; Plaatjes.heeft('kat'); Plaatjes.namen(). */

var Plaatjes = (function () {
  'use strict';

  var W = 'stroke-linejoin="round" stroke-linecap="round"';
  var LIJN = '#3B2A1A';                                   /* omtreklijn van alle tekeningen */
  var ROOD = '#E63946', ROZE = '#F2A0B4', ORANJE = '#FF9F1C', GEEL = '#FFD23F', GROEN = '#4CAF50',
      DONKERGROEN = '#2E7D32', BLAUW = '#2F6FB5', LICHTBLAUW = '#8FD3FF', PAARS = '#8E5BC2',
      BRUIN = '#8B5A2B', LICHTBRUIN = '#D9A066', HUID = '#FFF1DC', GRIJS = '#B8C0CC',
      DONKERGRIJS = '#6B7280', WIT = '#FFFFFF', ZWART = '#222222', CREME = '#FFF8E7', OKER = '#9A7B00';

  var p = {};

  function svg(binnen) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true">' + binnen + '</svg>';
  }

  /* Omtreklijn-attributen: dikke, ronde lijn in de vaste lijnkleur. */
  function lijn(dikte) {
    return 'stroke="' + LIJN + '" stroke-width="' + (dikte || 4) + '" ' + W;
  }

  /* ===== FRAGMENTEN ===== */

  /* ---- deel1 ---- */
/* bal: rode bal met witte band en glans */
  p.bal = svg('<circle cx="50" cy="52" r="36" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M18 44 Q50 62 82 44" fill="none" stroke="' + WIT + '" stroke-width="6" opacity="0.85" ' + W + '/>' +
    '<ellipse cx="36" cy="34" rx="9" ry="6" fill="' + WIT + '" opacity="0.7" transform="rotate(-30 36 34)"/>');

  /* kat: grijze zittende kat met puntoren, snorharen en staart */
  p.kat = svg('<path d="M70 80 Q94 82 90 58" fill="none" ' + lijn(11) + '/>' +
    '<path d="M70 80 Q94 82 90 58" fill="none" stroke="' + GRIJS + '" stroke-width="5" ' + W + '/>' +
    '<ellipse cx="50" cy="72" rx="26" ry="20" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M30 30 L26 8 L46 20 Z M70 30 L74 8 L54 20 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M32 26 L30 14 L42 21 Z M68 26 L70 14 L58 21 Z" fill="' + ROZE + '"/>' +
    '<circle cx="50" cy="40" r="22" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="42" cy="37" r="3" fill="' + LIJN + '"/><circle cx="58" cy="37" r="3" fill="' + LIJN + '"/>' +
    '<path d="M46 45 H54 L50 50 Z" fill="' + ROZE + '"/>' +
    '<path d="M44 53 Q50 58 56 53 M16 44 L40 47 M16 54 L40 50 M84 44 L60 47 M84 54 L60 50" fill="none" ' + lijn(3) + '/>');

  /* jas: blauwe jas met kraag, mouwen en gele knopen */
  p.jas = svg('<path d="M36 14 L18 22 L10 58 L26 62 L26 90 H74 V62 L90 58 L82 22 L64 14 L50 26 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M38 14 L50 28 L62 14 L56 36 L50 30 L44 36 Z" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M50 30 V90 M26 62 V56 M74 62 V56" fill="none" ' + lijn(3) + '/>' +
    '<circle cx="57" cy="48" r="3.5" fill="' + GEEL + '"/><circle cx="57" cy="62" r="3.5" fill="' + GEEL + '"/><circle cx="57" cy="76" r="3.5" fill="' + GEEL + '"/>');

  /* zak: bruine jutezak, dichtgebonden met touw */
  p.zak = svg('<path d="M34 30 Q18 44 16 64 Q14 90 50 90 Q86 90 84 64 Q82 44 66 30 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M34 30 Q50 38 66 30 L70 12 Q50 6 30 12 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M32 30 Q50 40 68 30" fill="none" stroke="' + BRUIN + '" stroke-width="5" ' + W + '/>' +
    '<path d="M34 54 L40 60 M40 54 L34 60 M58 66 L64 72 M64 66 L58 72 M44 76 L50 82 M50 76 L44 82" fill="none" stroke="' + BRUIN + '" stroke-width="3" ' + W + '/>');

  /* pan: koekenpan van bovenaf met lange bruine steel */
  p.pan = svg('<path d="M64 52 L92 30" fill="none" ' + lijn(13) + '/>' +
    '<path d="M64 52 L92 30" fill="none" stroke="' + BRUIN + '" stroke-width="6" ' + W + '/>' +
    '<circle cx="42" cy="58" r="30" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="42" cy="58" r="21" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<ellipse cx="34" cy="48" rx="7" ry="3" fill="' + WIT + '" opacity="0.6" transform="rotate(-35 34 48)"/>');

  /* kam: blauwe kam met tanden */
  p.kam = svg('<path d="M14 42 v38 h4 v-38 M22 42 v38 h4 v-38 M30 42 v38 h4 v-38 M38 42 v38 h4 v-38 M46 42 v38 h4 v-38 M54 42 v38 h4 v-38 M62 42 v38 h4 v-38 M70 42 v38 h4 v-38 M78 42 v38 h4 v-38" fill="' + BLAUW + '" ' + lijn(3) + '/>' +
    '<rect x="8" y="22" width="84" height="22" rx="9" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M18 30 H80" stroke="' + WIT + '" stroke-width="3" opacity="0.5" ' + W + '/>');

  /* rat: grijze rat met spitse snuit, rond oor en lange roze staart */
  p.rat = svg('<path d="M18 66 Q4 70 10 86 Q14 96 28 92" fill="none" ' + lijn(9) + '/>' +
    '<path d="M18 66 Q4 70 10 86 Q14 96 28 92" fill="none" stroke="' + ROZE + '" stroke-width="4" ' + W + '/>' +
    '<path d="M16 62 Q16 36 48 36 Q76 38 92 62 Q76 78 48 80 Q16 80 16 62 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="62" cy="40" r="9" fill="' + GRIJS + '" ' + lijn(4) + '/><circle cx="62" cy="40" r="4" fill="' + ROZE + '"/>' +
    '<circle cx="74" cy="56" r="3" fill="' + LIJN + '"/>' +
    '<circle cx="92" cy="62" r="4" fill="' + ROZE + '" ' + lijn(2) + '/>' +
    '<path d="M84 58 L95 52 M84 66 L95 72" fill="none" ' + lijn(2) + '/>' +
    '<path d="M36 80 V88 M56 80 V88" fill="none" ' + lijn(4) + '/>');

  /* tas: rode handtas met hengsel, klep en gouden sluiting */
  p.tas = svg('<path d="M34 46 Q34 16 50 16 Q66 16 66 46" fill="none" ' + lijn(6) + '/>' +
    '<path d="M22 44 H78 L86 88 H14 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M22 44 H78 L80 60 H20 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="60" r="5" fill="' + GEEL + '" ' + lijn(3) + '/>');

  /* pen: blauwe pen, schuin, met punt en dopje */
  p.pen = svg('<g transform="rotate(40 50 50)">' +
    '<rect x="41" y="10" width="18" height="58" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M41 68 H59 L52 84 H48 Z" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M48 84 H52 L50 92 Z" fill="' + LIJN + '"/>' +
    '<rect x="41" y="10" width="18" height="10" rx="4" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<path d="M62 14 V44" fill="none" ' + lijn(4) + '/>' +
    '</g>');

  /* bed: bed met hoofdeinde, kussen en blauwe deken */
  p.bed = svg('<rect x="10" y="20" width="14" height="60" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="80" y="40" width="10" height="40" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="14" y="60" width="76" height="14" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="26" y="36" width="22" height="12" rx="5" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="24" y="46" width="60" height="16" rx="5" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M16 74 V88 M86 74 V88" fill="none" ' + lijn(5) + '/>');

  /* hek: houten hek met puntige planken en twee dwarslatten */
  p.hek = svg('<path d="M10 34 L17 22 L24 34 V86 H10 Z M32 34 L39 22 L46 34 V86 H32 Z M54 34 L61 22 L68 34 V86 H54 Z M76 34 L83 22 L90 34 V86 H76 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="6" y="44" width="88" height="9" rx="2" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="6" y="66" width="88" height="9" rx="2" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* mes: mes met grijs lemmet en bruin handvat, schuin */
  p.mes = svg('<g transform="rotate(-35 50 50)">' +
    '<path d="M58 36 H34 Q10 38 6 50 Q14 62 30 62 H58 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M16 56 H54" stroke="' + WIT + '" stroke-width="3" opacity="0.7" ' + W + '/>' +
    '<rect x="56" y="38" width="36" height="24" rx="6" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="66" cy="50" r="2.5" fill="' + LIJN + '"/><circle cx="82" cy="50" r="2.5" fill="' + LIJN + '"/>' +
    '</g>');

  /* pet: rode pet met klep naar rechts */
  p.pet = svg('<path d="M18 60 Q18 22 50 22 Q82 22 82 60 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M50 22 V60 M34 26 Q30 42 30 60 M66 26 Q70 42 70 60" fill="none" ' + lijn(3) + '/>' +
    '<path d="M16 60 Q50 54 94 64 Q92 74 70 74 Q40 74 16 66 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="22" r="4" fill="' + ROOD + '" ' + lijn(3) + '/>');

  /* vis: oranje vis met staart, vinnen, strepen en oog */
  p.vis = svg('<path d="M70 50 L94 30 L90 50 L94 70 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M40 34 Q48 14 62 32 Z M40 66 Q48 86 62 68 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<ellipse cx="44" cy="50" rx="32" ry="20" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M56 36 Q66 50 56 64 M44 32 Q54 50 44 68" fill="none" ' + lijn(3) + '/>' +
    '<circle cx="26" cy="46" r="6" fill="' + WIT + '" ' + lijn(3) + '/><circle cx="27" cy="46" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M14 56 Q18 60 22 56" fill="none" ' + lijn(3) + '/>');

  /* kip: witte kip met rode kam, gele snavel en oranje poten */
  p.kip = svg('<path d="M74 60 Q94 44 88 26 Q84 46 70 52 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="52" cy="62" rx="30" ry="22" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M44 58 Q64 50 72 66 Q56 78 44 58 Z" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<path d="M20 26 Q20 12 28 20 Q30 8 36 18 Q40 10 42 24 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<circle cx="30" cy="36" r="14" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M17 34 L6 40 L17 44 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<ellipse cx="20" cy="49" rx="4" ry="5" fill="' + ROOD + '" ' + lijn(2) + '/>' +
    '<circle cx="28" cy="33" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M42 84 V92 M38 92 H46 M58 84 V92 M54 92 H62" fill="none" ' + lijn(7) + '/>' +
    '<path d="M42 84 V92 M38 92 H46 M58 84 V92 M54 92 H62" fill="none" stroke="' + ORANJE + '" stroke-width="3" ' + W + '/>');

  /* zon: gele zon met stralen en lachend gezicht */
  p.zon = svg('<path d="M77 50 H94 M69 69 L81 81 M50 77 V94 M31 69 L19 81 M23 50 H6 M31 31 L19 19 M50 23 V6 M69 31 L81 19" fill="none" ' + lijn(10) + '/>' +
    '<path d="M77 50 H94 M69 69 L81 81 M50 77 V94 M31 69 L19 81 M23 50 H6 M31 31 L19 19 M50 23 V6 M69 31 L81 19" fill="none" stroke="' + GEEL + '" stroke-width="5" ' + W + '/>' +
    '<circle cx="50" cy="50" r="27" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="41" cy="46" r="3" fill="' + LIJN + '"/><circle cx="59" cy="46" r="3" fill="' + LIJN + '"/>' +
    '<path d="M40 56 Q50 66 60 56" fill="none" ' + lijn(3) + '/>');

  /* pop: pop met bruine vlechtjes, roze jurk en rode wangen */
  p.pop = svg('<path d="M36 52 L28 70 M64 52 L72 70" fill="none" ' + lijn(9) + '/>' +
    '<path d="M36 52 L28 70 M64 52 L72 70" fill="none" stroke="' + HUID + '" stroke-width="4" ' + W + '/>' +
    '<path d="M42 82 V94 M58 82 V94" fill="none" ' + lijn(9) + '/>' +
    '<path d="M42 82 V94 M58 82 V94" fill="none" stroke="' + HUID + '" stroke-width="4" ' + W + '/>' +
    '<path d="M36 94 H46 M54 94 H64" fill="none" ' + lijn(5) + '/>' +
    '<path d="M38 50 H62 L72 84 H28 Z" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="26" cy="40" r="7" fill="' + BRUIN + '" ' + lijn(3) + '/><circle cx="74" cy="40" r="7" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<circle cx="50" cy="30" r="20" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M30 30 Q30 8 50 8 Q70 8 70 30 Q62 18 50 20 Q38 18 30 30 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<circle cx="42" cy="32" r="3" fill="' + LIJN + '"/><circle cx="58" cy="32" r="3" fill="' + LIJN + '"/>' +
    '<circle cx="37" cy="40" r="3" fill="' + ROZE + '"/><circle cx="63" cy="40" r="3" fill="' + ROZE + '"/>' +
    '<path d="M44 42 Q50 48 56 42" fill="none" ' + lijn(3) + '/>');

  /* vos: oranje vos met puntoren, witte snuit en pluimstaart met witte punt */
  p.vos = svg('<path d="M68 82 Q94 86 90 62" fill="none" ' + lijn(18) + '/>' +
    '<path d="M68 82 Q94 86 90 62" fill="none" stroke="' + ORANJE + '" stroke-width="12" ' + W + '/>' +
    '<circle cx="90" cy="62" r="6" fill="' + WIT + '"/>' +
    '<ellipse cx="50" cy="80" rx="26" ry="14" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M14 30 L24 6 L44 22 H56 L76 6 L86 30 Q86 62 50 72 Q14 62 14 30 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M24 16 L28 30 L38 24 Z M76 16 L72 30 L62 24 Z" fill="' + WIT + '"/>' +
    '<ellipse cx="50" cy="56" rx="17" ry="13" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="37" cy="40" r="3.5" fill="' + LIJN + '"/><circle cx="63" cy="40" r="3.5" fill="' + LIJN + '"/>' +
    '<ellipse cx="50" cy="60" rx="5" ry="4" fill="' + LIJN + '"/>');

  /* bos: drie dennenbomen naast elkaar */
  p.bos = svg('<path d="M22 74 V88 M78 74 V88 M50 78 V94" fill="none" ' + lijn(10) + '/>' +
    '<path d="M22 74 V88 M78 74 V88 M50 78 V94" fill="none" stroke="' + BRUIN + '" stroke-width="5" ' + W + '/>' +
    '<path d="M22 32 L38 74 H6 Z M78 32 L94 74 H62 Z" fill="' + DONKERGROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 6 L68 42 H58 L76 78 H24 L42 42 H32 Z" fill="' + GROEN + '" ' + lijn(4) + '/>');

  /* tol: rode tol met gele band, steeltje en draaistreepjes */
  p.tol = svg('<path d="M50 92 L22 50 Q22 30 50 30 Q78 30 78 50 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M26 56 Q50 66 74 56" fill="none" stroke="' + GEEL + '" stroke-width="7" ' + W + '/>' +
    '<path d="M22 46 Q50 56 78 46" fill="none" ' + lijn(3) + '/>' +
    '<rect x="45" y="12" width="10" height="20" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M10 40 Q4 52 10 64 M90 40 Q96 52 90 64" fill="none" ' + lijn(3) + '/>');

  /* mol: donkere mol met roze snuit en grote graafpoten op een molshoop */
  p.mol = svg('<path d="M6 90 Q50 62 94 90 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="56" rx="32" ry="24" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M76 46 Q92 50 90 60 Q84 66 76 62 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="90" cy="58" r="6" fill="' + ROZE + '" ' + lijn(3) + '/>' +
    '<circle cx="72" cy="48" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M74 58 Q78 62 82 60" fill="none" ' + lijn(2.5) + '/>' +
    '<ellipse cx="32" cy="80" rx="11" ry="7" fill="' + ROZE + '" ' + lijn(3) + '/>' +
    '<ellipse cx="62" cy="80" rx="11" ry="7" fill="' + ROZE + '" ' + lijn(3) + '/>' +
    '<path d="M26 80 V86 M32 81 V87 M38 80 V86 M56 80 V86 M62 81 V87 M68 80 V86" fill="none" ' + lijn(2.5) + '/>');

  /* rok: paarse rok met roze band en plooien */
  p.rok = svg('<path d="M32 28 H68 L86 84 H14 Z" fill="' + PAARS + '" ' + lijn(4) + '/>' +
    '<path d="M44 34 L38 84 M50 34 V84 M56 34 L62 84" fill="none" ' + lijn(3) + '/>' +
    '<rect x="30" y="18" width="40" height="12" rx="4" fill="' + ROZE + '" ' + lijn(4) + '/>');

  /* sok: groene sok met witte boord, strepen en teen */
  p.sok = svg('<path d="M26 16 H52 V54 Q52 60 58 64 L72 74 Q82 82 74 90 H44 Q26 90 26 76 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M66 70 Q82 82 74 90 H60 Q68 82 62 74 Z" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M28 34 H50 M28 44 H50" fill="none" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<rect x="23" y="10" width="32" height="12" rx="4" fill="' + WIT + '" ' + lijn(4) + '/>');

  /* pot: blauwe kookpot met deksel, knop en twee oren */
  p.pot = svg('<rect x="6" y="52" width="18" height="10" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="76" y="52" width="18" height="10" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="20" y="44" width="60" height="44" rx="8" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M28 56 V78" stroke="' + WIT + '" stroke-width="4" opacity="0.5" ' + W + '/>' +
    '<rect x="16" y="36" width="68" height="10" rx="5" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="30" r="6" fill="' + GRIJS + '" ' + lijn(4) + '/>');

  /* bus: gele bus met ramen, deur, koplamp en wielen */
  p.bus = svg('<rect x="6" y="24" width="88" height="50" rx="10" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<rect x="14" y="32" width="16" height="16" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<rect x="36" y="32" width="16" height="16" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<rect x="58" y="32" width="16" height="36" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<rect x="80" y="32" width="8" height="30" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M6 56 H56" fill="none" ' + lijn(3) + '/>' +
    '<rect x="86" y="64" width="6" height="6" rx="2" fill="' + ORANJE + '"/>' +
    '<circle cx="26" cy="76" r="10" fill="' + ZWART + '" ' + lijn(4) + '/><circle cx="26" cy="76" r="4" fill="' + GRIJS + '"/>' +
    '<circle cx="72" cy="76" r="10" fill="' + ZWART + '" ' + lijn(4) + '/><circle cx="72" cy="76" r="4" fill="' + GRIJS + '"/>');

  /* mug: mug met gestreept lijf, vleugels, zes pootjes en lange zuigsnuit */
  p.mug = svg('<path d="M32 46 L6 62" fill="none" ' + lijn(3) + '/>' +
    '<path d="M38 56 L22 80 M44 60 L36 86 M52 62 L54 88 M62 60 L74 86 M68 56 L88 76 M42 40 L24 30" fill="none" ' + lijn(3) + '/>' +
    '<ellipse cx="56" cy="28" rx="22" ry="7" fill="' + LICHTBLAUW + '" opacity="0.85" transform="rotate(-25 56 28)" ' + lijn(3) + '/>' +
    '<ellipse cx="64" cy="36" rx="22" ry="7" fill="' + LICHTBLAUW + '" opacity="0.85" transform="rotate(5 64 36)" ' + lijn(3) + '/>' +
    '<ellipse cx="64" cy="56" rx="20" ry="8" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M56 49 V63 M64 48 V64 M72 50 V62" fill="none" ' + lijn(2.5) + '/>' +
    '<circle cx="44" cy="50" r="10" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="32" cy="46" r="7" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="30" cy="44" r="2.5" fill="' + WIT + '"/>');

  /* put: stenen waterput met rood dak, touw en houten emmer */
  p.put = svg('<rect x="30" y="28" width="6" height="34" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="64" y="28" width="6" height="34" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<path d="M50 6 L10 34 H90 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<rect x="26" y="32" width="48" height="6" rx="2" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<path d="M50 38 V50 M42 56 Q50 44 58 56" fill="none" ' + lijn(2.5) + '/>' +
    '<rect x="40" y="54" width="20" height="14" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<path d="M18 62 H82 V90 H18 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M18 72 H82 M18 82 H82 M34 62 V72 M50 62 V72 M66 62 V72 M26 72 V82 M42 72 V82 M58 72 V82 M74 72 V82 M34 82 V90 M50 82 V90 M66 82 V90" fill="none" ' + lijn(2.5) + '/>');

  /* mus: bruin musje met lichte buik op een takje */
  p.mus = svg('<path d="M4 84 H96" fill="none" ' + lijn(6) + '/>' +
    '<path d="M4 84 H96" fill="none" stroke="' + BRUIN + '" stroke-width="3" ' + W + '/>' +
    '<path d="M22 58 L4 46 L10 66 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="48" cy="58" rx="28" ry="20" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="52" cy="66" rx="18" ry="10" fill="' + CREME + '"/>' +
    '<path d="M28 52 Q46 38 66 56 Q48 70 28 52 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<circle cx="72" cy="40" r="14" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M84 38 L96 43 L84 47 Z" fill="' + OKER + '" ' + lijn(3) + '/>' +
    '<circle cx="76" cy="37" r="3" fill="' + LIJN + '"/>' +
    '<path d="M42 76 V84 M56 76 V84" fill="none" ' + lijn(4) + '/>');

  /* hut: houten blokhut met rieten puntdak, deur en raampje */
  p.hut = svg('<rect x="18" y="46" width="64" height="42" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M18 56 H82 M18 66 H82 M18 76 H82" fill="none" ' + lijn(2.5) + '/>' +
    '<rect x="42" y="60" width="16" height="28" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="54" cy="75" r="2" fill="' + GEEL + '"/>' +
    '<rect x="24" y="56" width="12" height="12" rx="2" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M50 10 L6 48 H94 Z" fill="' + OKER + '" ' + lijn(4) + '/>');

  /* maan: gele halve maan met gezichtje en sterretjes */
  p.maan = svg('<path d="M66 8 A42 42 0 1 0 66 92 A48 48 0 0 1 66 8 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="32" cy="44" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M30 58 Q34 63 39 60" fill="none" ' + lijn(2.5) + '/>' +
    '<path transform="translate(78 26)" d="M0 -7 L1.8 -2.4 L6.7 -2.2 L2.9 0.9 L4.1 5.7 L0 3 L-4.1 5.7 L-2.9 0.9 L-6.7 -2.2 L-1.8 -2.4 Z" fill="' + GEEL + '" ' + lijn(2.5) + '/>' +
    '<path transform="translate(86 54) scale(1.4)" d="M0 -7 L1.8 -2.4 L6.7 -2.2 L2.9 0.9 L4.1 5.7 L0 3 L-4.1 5.7 L-2.9 0.9 L-6.7 -2.2 L-1.8 -2.4 Z" fill="' + GEEL + '" ' + lijn(2) + '/>' +
    '<path transform="translate(74 78)" d="M0 -7 L1.8 -2.4 L6.7 -2.2 L2.9 0.9 L4.1 5.7 L0 3 L-4.1 5.7 L-2.9 0.9 L-6.7 -2.2 L-1.8 -2.4 Z" fill="' + GEEL + '" ' + lijn(2.5) + '/>');

  /* aap: lichtbruin aapje met lichte snuit, ronde oren en krulstaart */
  p.aap = svg('<path d="M68 82 Q92 84 88 64" fill="none" ' + lijn(9) + '/>' +
    '<path d="M68 82 Q92 84 88 64" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="4" ' + W + '/>' +
    '<ellipse cx="50" cy="78" rx="22" ry="16" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="80" rx="12" ry="10" fill="' + HUID + '"/>' +
    '<circle cx="24" cy="40" r="9" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><circle cx="24" cy="40" r="4" fill="' + HUID + '"/>' +
    '<circle cx="76" cy="40" r="9" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><circle cx="76" cy="40" r="4" fill="' + HUID + '"/>' +
    '<circle cx="50" cy="40" r="24" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M32 42 a18 18 0 0 0 36 0 a18 15 0 0 0 -36 0 Z" fill="' + HUID + '"/>' +
    '<ellipse cx="50" cy="34" rx="13" ry="10" fill="' + HUID + '"/>' +
    '<circle cx="43" cy="36" r="3" fill="' + LIJN + '"/><circle cx="57" cy="36" r="3" fill="' + LIJN + '"/>' +
    '<circle cx="47" cy="46" r="1.8" fill="' + LIJN + '"/><circle cx="53" cy="46" r="1.8" fill="' + LIJN + '"/>' +
    '<path d="M42 52 Q50 60 58 52" fill="none" ' + lijn(3) + '/>');

  /* haan: oranje haan met grote rode kam, gele snavel en bonte staart */
  p.haan = svg('<path d="M70 58 Q96 44 88 14 M70 58 Q92 56 92 26 M70 58 Q80 62 78 36" fill="none" ' + lijn(12) + '/>' +
    '<path d="M70 58 Q96 44 88 14" fill="none" stroke="' + DONKERGROEN + '" stroke-width="7" ' + W + '/>' +
    '<path d="M70 58 Q92 56 92 26" fill="none" stroke="' + BLAUW + '" stroke-width="7" ' + W + '/>' +
    '<path d="M70 58 Q80 62 78 36" fill="none" stroke="' + GROEN + '" stroke-width="7" ' + W + '/>' +
    '<path d="M16 36 L40 30 L52 58 L30 64 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<ellipse cx="52" cy="66" rx="26" ry="18" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M44 62 Q62 54 70 70 Q54 82 44 62 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<path d="M18 22 Q14 6 24 12 Q26 0 32 10 Q38 2 40 16 Q44 12 40 24 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<circle cx="28" cy="32" r="13" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<path d="M16 30 L4 35 L16 40 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<ellipse cx="22" cy="46" rx="4" ry="6" fill="' + ROOD + '" ' + lijn(2) + '/>' +
    '<circle cx="26" cy="29" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M44 84 V92 M40 92 H50 M60 84 V92 M56 92 H66" fill="none" ' + lijn(7) + '/>' +
    '<path d="M44 84 V92 M40 92 H50 M60 84 V92 M56 92 H66" fill="none" stroke="' + GEEL + '" stroke-width="3" ' + W + '/>');

  /* kaas: gele kaaspunt met oranje korst en gaten */
  p.kaas = svg('<path d="M18 82 L88 82 L88 56 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M18 82 L88 56 L76 40 L6 66 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M88 82 V56 L76 40 V66 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<circle cx="60" cy="76" r="4" fill="' + OKER + '" opacity="0.45"/><circle cx="76" cy="73" r="3" fill="' + OKER + '" opacity="0.45"/>' +
    '<circle cx="46" cy="78" r="2.5" fill="' + OKER + '" opacity="0.45"/><circle cx="40" cy="66" r="4" fill="' + OKER + '" opacity="0.45"/>' +
    '<circle cx="60" cy="54" r="3" fill="' + OKER + '" opacity="0.45"/><circle cx="24" cy="70" r="2.5" fill="' + OKER + '" opacity="0.45"/>');

  /* raam: raam met bruin kozijn, lichtblauw glas, rode gordijnen en vensterbank */
  p.raam = svg('<rect x="14" y="12" width="72" height="72" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="22" y="20" width="56" height="56" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M50 20 V76 M22 48 H78" fill="none" stroke="' + BRUIN + '" stroke-width="6" ' + W + '/>' +
    '<path d="M22 20 H34 Q28 48 36 76 H22 Z M78 20 H66 Q72 48 64 76 H78 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<rect x="8" y="82" width="84" height="8" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* vaas: blauwe vaas met drie bloemen */
  p.vaas = svg('<path d="M50 50 L30 28 M50 50 V16 M50 50 L70 28" fill="none" stroke="' + DONKERGROEN + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="30" cy="26" r="9" fill="' + ROOD + '" ' + lijn(3) + '/><circle cx="30" cy="26" r="3.5" fill="' + GEEL + '"/>' +
    '<circle cx="50" cy="14" r="9" fill="' + ROZE + '" ' + lijn(3) + '/><circle cx="50" cy="14" r="3.5" fill="' + GEEL + '"/>' +
    '<circle cx="70" cy="26" r="9" fill="' + GEEL + '" ' + lijn(3) + '/><circle cx="70" cy="26" r="3.5" fill="' + ORANJE + '"/>' +
    '<path d="M38 44 H62 L66 54 Q74 68 74 76 Q74 92 50 92 Q26 92 26 76 Q26 68 34 54 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M36 60 Q32 74 36 84" fill="none" stroke="' + WIT + '" stroke-width="3" opacity="0.5" ' + W + '/>');

  /* zaag: handzaag met bruin handvat en getand grijs blad */
  p.zaag = svg('<path d="M30 32 H94 L92 58 L88 68 L84 60 L80 68 L76 60 L72 68 L68 60 L64 68 L60 60 L56 68 L52 60 L48 68 L44 60 L40 68 L36 60 L30 60 Z" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<rect x="6" y="30" width="28" height="40" rx="9" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="13" y="41" width="12" height="18" rx="5" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<path d="M40 44 H84" stroke="' + WIT + '" stroke-width="3" opacity="0.6" ' + W + '/>');

  /* beer: bruine beer met ronde oren, lichte snuit en lichte buik */
  p.beer = svg('<ellipse cx="50" cy="76" rx="26" ry="18" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="80" rx="14" ry="11" fill="' + LICHTBRUIN + '"/>' +
    '<path d="M24 72 L14 86 M76 72 L86 86" fill="none" ' + lijn(11) + '/>' +
    '<path d="M24 72 L14 86 M76 72 L86 86" fill="none" stroke="' + BRUIN + '" stroke-width="6" ' + W + '/>' +
    '<circle cx="28" cy="24" r="9" fill="' + BRUIN + '" ' + lijn(4) + '/><circle cx="28" cy="24" r="4" fill="' + LICHTBRUIN + '"/>' +
    '<circle cx="72" cy="24" r="9" fill="' + BRUIN + '" ' + lijn(4) + '/><circle cx="72" cy="24" r="4" fill="' + LICHTBRUIN + '"/>' +
    '<circle cx="50" cy="40" r="24" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="49" rx="12" ry="9" fill="' + LICHTBRUIN + '"/>' +
    '<ellipse cx="50" cy="46" rx="5" ry="3.5" fill="' + LIJN + '"/>' +
    '<circle cx="41" cy="36" r="3" fill="' + LIJN + '"/><circle cx="59" cy="36" r="3" fill="' + LIJN + '"/>' +
    '<path d="M46 53 Q50 57 54 53" fill="none" ' + lijn(2.5) + '/>');

  /* peer: groene peer met steeltje en blaadje */
  p.peer = svg('<path d="M50 24 C40 24 38 40 32 52 C20 72 32 92 50 92 C68 92 80 72 68 52 C62 40 60 24 50 24 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 24 Q50 14 56 8" fill="none" ' + lijn(7) + '/>' +
    '<path d="M50 24 Q50 14 56 8" fill="none" stroke="' + BRUIN + '" stroke-width="3" ' + W + '/>' +
    '<path d="M52 18 Q62 8 74 14 Q66 26 52 18 Z" fill="' + DONKERGROEN + '" ' + lijn(3) + '/>' +
    '<ellipse cx="40" cy="70" rx="6" ry="10" fill="' + WIT + '" opacity="0.5" transform="rotate(15 40 70)"/>');

  /* zeep: roze stuk zeep met schuim en zeepbellen */
  p.zeep = svg('<circle cx="30" cy="30" r="9" fill="' + LICHTBLAUW + '" opacity="0.85" ' + lijn(3) + '/>' +
    '<circle cx="58" cy="20" r="12" fill="' + LICHTBLAUW + '" opacity="0.85" ' + lijn(3) + '/>' +
    '<circle cx="80" cy="38" r="7" fill="' + LICHTBLAUW + '" opacity="0.85" ' + lijn(3) + '/>' +
    '<circle cx="54" cy="16" r="3" fill="' + WIT + '"/><circle cx="27" cy="27" r="2" fill="' + WIT + '"/>' +
    '<rect x="14" y="50" width="72" height="34" rx="14" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<path d="M22 50 Q28 40 36 50 Q44 42 52 50 Q60 40 68 50 Q74 44 80 50 Z" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M24 64 H50" stroke="' + WIT + '" stroke-width="4" opacity="0.6" ' + W + '/>');

  /* fee: fee met vleugels, paarse jurk, geel haar en toverstaf met ster */
  p.fee = svg('<ellipse cx="28" cy="52" rx="14" ry="22" fill="' + LICHTBLAUW + '" opacity="0.85" transform="rotate(20 28 52)" ' + lijn(3) + '/>' +
    '<ellipse cx="72" cy="52" rx="14" ry="22" fill="' + LICHTBLAUW + '" opacity="0.85" transform="rotate(-20 72 52)" ' + lijn(3) + '/>' +
    '<path d="M40 50 L30 66 M60 50 L74 40" fill="none" ' + lijn(9) + '/>' +
    '<path d="M40 50 L30 66 M60 50 L74 40" fill="none" stroke="' + HUID + '" stroke-width="4" ' + W + '/>' +
    '<path d="M74 40 L88 22" fill="none" ' + lijn(3) + '/>' +
    '<path transform="translate(89 20)" d="M0 -7 L1.8 -2.4 L6.7 -2.2 L2.9 0.9 L4.1 5.7 L0 3 L-4.1 5.7 L-2.9 0.9 L-6.7 -2.2 L-1.8 -2.4 Z" fill="' + GEEL + '" ' + lijn(2.5) + '/>' +
    '<path d="M44 82 V94 M56 82 V94" fill="none" ' + lijn(9) + '/>' +
    '<path d="M44 82 V94 M56 82 V94" fill="none" stroke="' + HUID + '" stroke-width="4" ' + W + '/>' +
    '<path d="M40 48 H60 L70 84 H30 Z" fill="' + PAARS + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="30" r="18" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M32 30 Q32 10 50 10 Q68 10 68 30 Q60 20 50 22 Q40 20 32 30 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<circle cx="43" cy="32" r="2.5" fill="' + LIJN + '"/><circle cx="57" cy="32" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M45 41 Q50 46 55 41" fill="none" ' + lijn(2.5) + '/>');

  /* boom: boom met bruine stam, ronde groene kruin en rode appels */
  p.boom = svg('<path d="M42 58 L40 92 H60 L58 58 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M50 8 Q74 8 78 30 Q94 42 80 58 Q74 70 58 66 H42 Q26 70 20 58 Q6 42 22 30 Q26 8 50 8 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="36" cy="46" r="4" fill="' + ROOD + '"/><circle cx="60" cy="30" r="4" fill="' + ROOD + '"/><circle cx="66" cy="52" r="4" fill="' + ROOD + '"/>' +
    '<ellipse cx="38" cy="26" rx="8" ry="4" fill="' + WIT + '" opacity="0.35" transform="rotate(-30 38 26)"/>');

  /* boot: rode boot met wit en geel zeil op blauw water */
  p.boot = svg('<path d="M50 14 V62" fill="none" ' + lijn(4) + '/>' +
    '<path d="M54 18 L84 58 H54 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M46 26 L24 58 H46 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M8 62 H92 L80 82 H20 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="34" cy="72" r="3.5" fill="' + WIT + '"/><circle cx="50" cy="72" r="3.5" fill="' + WIT + '"/><circle cx="66" cy="72" r="3.5" fill="' + WIT + '"/>' +
    '<path d="M6 90 Q14 84 22 90 T38 90 T54 90 T70 90 T86 90 T96 90" fill="none" stroke="' + BLAUW + '" stroke-width="4" ' + W + '/>');

  /* ---- deel2 ---- */
/* roos: rode roos met groene steel en twee blaadjes */
  p.roos = svg('<path d="M50 56 V94" ' + lijn(5) + '/>' +
    '<path d="M50 82 Q34 84 30 70 Q46 68 50 82 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 74 Q66 76 70 62 Q54 60 50 74 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M26 42 Q24 20 42 22 Q50 10 58 22 Q76 20 74 42 Q74 60 50 60 Q26 60 26 42 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M40 44 Q42 28 58 32 Q66 46 50 52 Q38 50 44 40 Q50 34 56 40" fill="none" ' + lijn(4) + '/>');

  /* doos: open kartonnen doos met twee opstaande flappen */
  p.doos = svg('<path d="M20 40 L50 52 L80 40 V80 L50 92 L20 80 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M50 52 V92" ' + lijn(4) + '/>' +
    '<path d="M20 40 L50 28 L80 40 L50 52 Z" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M20 40 L10 20 L40 8 L50 28 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M80 40 L90 20 L60 8 L50 28 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>');

  /* vuur: kampvuur met oranje vlammen en gekruiste houtblokken */
  p.vuur = svg('<path d="M50 10 Q68 30 66 46 Q74 42 72 34 Q86 56 74 74 Q50 86 26 74 Q14 56 28 34 Q26 42 34 46 Q32 30 50 10 Z" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<path d="M50 40 Q62 54 60 66 Q58 78 50 78 Q42 78 40 66 Q38 54 50 40 Z" fill="' + GEEL + '"/>' +
    '<path d="M18 88 L82 74 M18 74 L82 88" fill="none" stroke="' + LIJN + '" stroke-width="14" ' + W + '/>' +
    '<path d="M18 88 L82 74 M18 74 L82 88" fill="none" stroke="' + BRUIN + '" stroke-width="8" ' + W + '/>');

  /* muur: rode bakstenen muur met lichte voegen */
  p.muur = svg('<rect x="10" y="22" width="80" height="60" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M10 37 H90 M10 52 H90 M10 67 H90 M30 22 V37 M50 22 V37 M70 22 V37 M20 37 V52 M40 37 V52 M60 37 V52 M80 37 V52 M30 52 V67 M50 52 V67 M70 52 V67 M20 67 V82 M40 67 V82 M60 67 V82 M80 67 V82" fill="none" stroke="' + CREME + '" stroke-width="3"/>' +
    '<rect x="10" y="22" width="80" height="60" fill="none" ' + lijn(5) + '/>');

  /* boek: opengeslagen boek met blauwe kaft */
  p.boek = svg('<path d="M6 30 Q28 20 50 34 Q72 20 94 30 V82 Q72 72 50 86 Q28 72 6 82 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M12 36 Q30 28 47 40 V78 Q30 66 12 74 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M88 36 Q70 28 53 40 V78 Q70 66 88 74 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M20 46 Q30 42 40 48 M20 54 Q30 50 40 56 M20 62 Q30 58 40 64 M60 48 Q70 42 80 46 M60 56 Q70 50 80 54 M60 64 Q70 58 80 62" fill="none" stroke="' + GRIJS + '" stroke-width="3" ' + W + '/>' +
    '<path d="M50 36 V84" ' + lijn(4) + '/>');

  /* koe: zwart-witte koe met roze snuit en hoorns */
  p.koe = svg('<path d="M16 50 Q4 60 10 76" fill="none" ' + lijn(4) + '/><circle cx="10" cy="77" r="4" fill="' + ZWART + '"/>' +
    '<rect x="22" y="68" width="9" height="20" rx="3" fill="' + WIT + '" ' + lijn(4) + '/><rect x="34" y="68" width="9" height="20" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="56" y="68" width="9" height="20" rx="3" fill="' + WIT + '" ' + lijn(4) + '/><rect x="68" y="68" width="9" height="20" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<ellipse cx="48" cy="56" rx="34" ry="20" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M28 46 Q40 36 50 48 Q46 62 32 60 Z" fill="' + ZWART + '"/><ellipse cx="62" cy="64" rx="9" ry="6" fill="' + ZWART + '"/>' +
    '<ellipse cx="44" cy="76" rx="9" ry="5" fill="' + ROZE + '" ' + lijn(3) + '/>' +
    '<ellipse cx="64" cy="34" rx="6" ry="4" fill="' + WIT + '" ' + lijn(4) + '/><ellipse cx="88" cy="34" rx="6" ry="4" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M69 27 Q66 14 74 17 M83 27 Q86 14 78 17" fill="none" ' + lijn(5) + '/>' +
    '<circle cx="76" cy="40" r="15" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="69" cy="36" rx="7" ry="6" fill="' + ZWART + '"/>' +
    '<circle cx="70" cy="37" r="3" fill="' + WIT + '"/><circle cx="70" cy="37" r="1.5" fill="' + ZWART + '"/><circle cx="82" cy="37" r="2" fill="' + ZWART + '"/>' +
    '<ellipse cx="78" cy="49" rx="10" ry="7" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="74" cy="49" r="1.5" fill="' + LIJN + '"/><circle cx="82" cy="49" r="1.5" fill="' + LIJN + '"/>');

  /* doek: rood-wit geblokte theedoek over een stang */
  p.doek = svg('<rect x="26" y="10" width="48" height="76" fill="' + WIT + '"/>' +
    '<path d="M38 10 V86 M50 10 V86 M62 10 V86 M26 24 H74 M26 38 H74 M26 52 H74 M26 66 H74 M26 80 H74" fill="none" stroke="' + ROOD + '" stroke-width="5"/>' +
    '<rect x="26" y="10" width="48" height="76" fill="none" ' + lijn(5) + '/>' +
    '<path d="M8 14 H92" ' + lijn(6) + '/>');

  /* hoed: bruine hoed met brede rand en rode band */
  p.hoed = svg('<ellipse cx="50" cy="68" rx="42" ry="12" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M26 78 V40 Q26 20 50 20 Q74 20 74 40 V78 Q50 84 26 78 Z" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M26 62 H74 V72 Q50 78 26 72 Z" fill="' + ROOD + '" ' + lijn(4) + '/>');

  /* voet: blote voet van boven gezien met vijf tenen */
  p.voet = svg('<path d="M20 34 L82 38 Q82 56 72 70 Q68 78 66 84 Q64 94 52 94 Q40 94 38 84 Q34 74 30 62 Q24 50 20 44 Z" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<circle cx="30" cy="26" r="11" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<circle cx="46" cy="20" r="7.5" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<circle cx="58" cy="21" r="7" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<circle cx="69" cy="25" r="6.5" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<circle cx="79" cy="33" r="6" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<ellipse cx="30" cy="22" rx="4.5" ry="3.2" fill="' + ROZE + '" ' + lijn(2) + '/><ellipse cx="46" cy="17" rx="3" ry="2.2" fill="' + ROZE + '" ' + lijn(2) + '/>' +
    '<ellipse cx="58" cy="18" rx="2.8" ry="2" fill="' + ROZE + '" ' + lijn(2) + '/><ellipse cx="69" cy="22" rx="2.6" ry="1.9" fill="' + ROZE + '" ' + lijn(2) + '/>' +
    '<ellipse cx="79" cy="30" rx="2.4" ry="1.8" fill="' + ROZE + '" ' + lijn(2) + '/>');

  /* koek: rond koekje met stukjes chocolade */
  p.koek = svg('<circle cx="50" cy="50" r="38" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="36" cy="38" rx="5" ry="4" fill="' + LIJN + '"/><ellipse cx="58" cy="30" rx="5" ry="4" fill="' + LIJN + '"/>' +
    '<ellipse cx="66" cy="52" rx="5" ry="4" fill="' + LIJN + '"/><ellipse cx="46" cy="52" rx="5" ry="4" fill="' + LIJN + '"/>' +
    '<ellipse cx="30" cy="58" rx="5" ry="4" fill="' + LIJN + '"/><ellipse cx="54" cy="68" rx="5" ry="4" fill="' + LIJN + '"/>');

  /* boer: boer met strohoed, rode trui, blauwe overall en een riek */
  p.boer = svg('<path d="M78 92 V24" stroke="' + LIJN + '" stroke-width="9" ' + W + '/><path d="M78 92 V24" stroke="' + BRUIN + '" stroke-width="4" ' + W + '/>' +
    '<path d="M66 24 V10 M78 24 V8 M90 24 V10 M66 24 H90" fill="none" ' + lijn(4) + '/>' +
    '<rect x="30" y="64" width="12" height="26" rx="3" fill="' + BLAUW + '" ' + lijn(4) + '/><rect x="46" y="64" width="12" height="26" rx="3" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<ellipse cx="35" cy="91" rx="9" ry="4" fill="' + LIJN + '"/><ellipse cx="53" cy="91" rx="9" ry="4" fill="' + LIJN + '"/>' +
    '<path d="M28 50 L18 66 M60 50 L74 60" fill="none" stroke="' + LIJN + '" stroke-width="11" ' + W + '/>' +
    '<rect x="22" y="42" width="44" height="20" rx="7" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M28 50 L18 66 M60 50 L74 60" fill="none" stroke="' + ROOD + '" stroke-width="6" ' + W + '/>' +
    '<circle cx="18" cy="68" r="5" fill="' + HUID + '" ' + lijn(3) + '/><circle cx="76" cy="62" r="5" fill="' + HUID + '" ' + lijn(3) + '/>' +
    '<rect x="32" y="44" width="24" height="24" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<circle cx="44" cy="30" r="13" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<circle cx="39" cy="31" r="2" fill="' + ZWART + '"/><circle cx="49" cy="31" r="2" fill="' + ZWART + '"/>' +
    '<path d="M39 36 Q44 41 49 36" fill="none" ' + lijn(3) + '/>' +
    '<ellipse cx="44" cy="21" rx="26" ry="6" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M32 21 V10 Q44 4 56 10 V21 Z" fill="' + GEEL + '" ' + lijn(4) + '/>');

  /* mier: bruine mier met drie lijfdelen, zes pootjes en voelsprieten */
  p.mier = svg('<path d="M38 56 L28 72 L20 76 M46 60 L46 76 L40 82 M56 58 L66 72 L74 76" fill="none" ' + lijn(4) + '/>' +
    '<path d="M18 40 L10 26 M28 38 L32 24" ' + lijn(4) + '/>' +
    '<circle cx="10" cy="25" r="3" fill="' + LIJN + '"/><circle cx="32" cy="23" r="3" fill="' + LIJN + '"/>' +
    '<ellipse cx="74" cy="54" rx="18" ry="13" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="47" cy="52" rx="12" ry="9" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<circle cx="24" cy="50" r="12" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<circle cx="21" cy="47" r="3.5" fill="' + WIT + '"/><circle cx="21" cy="47" r="1.8" fill="' + ZWART + '"/>' +
    '<path d="M16 55 Q20 58 24 55" fill="none" ' + lijn(2.5) + '/>');

  /* wiel: wiel met donkere band, lichte velg en spaken */
  p.wiel = svg('<circle cx="50" cy="50" r="42" fill="' + DONKERGRIJS + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="50" r="30" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M50 20 V80 M20 50 H80 M29 29 L71 71 M71 29 L29 71" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="50" r="8" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>');

  /* muis: grijze muis met grote ronde oren en lange staart */
  p.muis = svg('<path d="M84 68 Q96 62 92 46 Q90 38 96 32" fill="none" stroke="' + LIJN + '" stroke-width="8" ' + W + '/>' +
    '<path d="M84 68 Q96 62 92 46 Q90 38 96 32" fill="none" stroke="' + ROZE + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="34" cy="30" r="12" fill="' + GRIJS + '" ' + lijn(5) + '/><circle cx="58" cy="26" r="12" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<circle cx="34" cy="30" r="6" fill="' + ROZE + '"/><circle cx="58" cy="26" r="6" fill="' + ROZE + '"/>' +
    '<ellipse cx="60" cy="66" rx="28" ry="18" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<ellipse cx="38" cy="52" rx="22" ry="15" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<circle cx="17" cy="54" r="4" fill="' + ROZE + '" ' + lijn(3) + '/>' +
    '<circle cx="32" cy="48" r="2.5" fill="' + ZWART + '"/>' +
    '<path d="M14 50 L4 46 M14 58 L4 62" ' + lijn(2.5) + '/>' +
    '<ellipse cx="48" cy="84" rx="7" ry="4" fill="' + ROZE + '" ' + lijn(3) + '/><ellipse cx="72" cy="84" rx="7" ry="4" fill="' + ROZE + '" ' + lijn(3) + '/>');

  /* huis: huis met rood dak, schoorsteen, deur en twee ramen */
  p.huis = svg('<rect x="64" y="18" width="10" height="20" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="22" y="46" width="56" height="44" fill="' + CREME + '" ' + lijn(5) + '/>' +
    '<path d="M14 48 L50 14 L86 48 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<rect x="42" y="66" width="16" height="24" rx="2" fill="' + BRUIN + '" ' + lijn(4) + '/><circle cx="54" cy="79" r="1.8" fill="' + GEEL + '"/>' +
    '<rect x="27" y="54" width="12" height="12" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/><rect x="61" y="54" width="12" height="12" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M33 54 V66 M27 60 H39 M67 54 V66 M61 60 H73" ' + lijn(2) + '/>');

  /* duif: witte duif met grijze vleugel en oranje snavel */
  p.duif = svg('<path d="M72 56 L96 50 L94 62 L92 72 L76 70 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M46 76 V90 M56 76 V90" stroke="' + ORANJE + '" stroke-width="4" ' + W + '/>' +
    '<ellipse cx="52" cy="60" rx="28" ry="18" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M40 50 Q52 34 68 38 L88 42 Q74 58 48 60 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M52 44 L74 44 M50 52 L76 50" fill="none" stroke="' + WIT + '" stroke-width="2.5" ' + W + '/>' +
    '<circle cx="26" cy="42" r="12" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M15 41 L6 46 L15 48 Z" fill="' + ORANJE + '" ' + lijn(3) + '/>' +
    '<circle cx="24" cy="40" r="2.5" fill="' + ZWART + '"/>');

  /* trui: rode trui met gele streep en kraag */
  p.trui = svg('<path d="M30 28 Q50 42 70 28 L82 34 L92 62 L76 68 L72 58 V92 H28 V58 L24 68 L8 62 L18 34 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<rect x="28" y="46" width="44" height="10" fill="' + GEEL + '"/>' +
    '<path d="M28 84 H72 M28 58 V92 M72 58 V92" fill="none" ' + lijn(3) + '/>' +
    '<path d="M36 28 Q50 42 64 28 Q50 20 36 28 Z" fill="' + CREME + '" ' + lijn(4) + '/>');

  /* ui: ui met bruine schil, droge steel en worteltjes */
  p.ui = svg('<path d="M46 20 L44 8 M50 18 V6 M54 20 L56 8" ' + lijn(4) + '/>' +
    '<path d="M44 86 L40 94 M50 86 V95 M56 86 L60 94" ' + lijn(3) + '/>' +
    '<path d="M50 18 Q26 30 22 56 Q22 84 50 86 Q78 84 78 56 Q74 30 50 18 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M40 26 Q30 56 40 84 M60 26 Q70 56 60 84" fill="none" ' + lijn(3) + '/>');

  /* ijs: ijshoorntje met twee bolletjes */
  p.ijs = svg('<path d="M30 54 L50 94 L70 54 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M34 62 L66 54 M40 74 L66 62 M46 86 L62 70 M34 54 L64 68 M34 62 L58 82 M40 74 L52 90" fill="none" ' + lijn(2.5) + '/>' +
    '<path d="M30 54 L50 94 L70 54 Z" fill="none" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="44" r="20" fill="' + ROZE + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="26" r="15" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<circle cx="44" cy="22" r="3" fill="' + WIT + '"/>');

  /* bij: geel-zwart gestreepte bij met lichtblauwe vleugels */
  p.bij = svg('<ellipse cx="44" cy="34" rx="15" ry="9" transform="rotate(-30 44 34)" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<ellipse cx="62" cy="34" rx="12" ry="8" transform="rotate(-10 62 34)" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M76 56 L88 58 L76 60 Z" fill="' + LIJN + '"/>' +
    '<path d="M40 76 L36 84 M52 76 L52 86 M62 74 L66 82" ' + lijn(3) + '/>' +
    '<ellipse cx="50" cy="58" rx="26" ry="18" fill="' + GEEL + '"/>' +
    '<path d="M42 41 V75 M56 40 V76 M67 45 V71" stroke="' + ZWART + '" stroke-width="7" stroke-linecap="butt"/>' +
    '<ellipse cx="50" cy="58" rx="26" ry="18" fill="none" ' + lijn(5) + '/>' +
    '<path d="M18 47 Q12 38 8 40 M28 46 Q28 36 34 34" fill="none" ' + lijn(3) + '/>' +
    '<circle cx="8" cy="40" r="2.5" fill="' + LIJN + '"/><circle cx="34" cy="34" r="2.5" fill="' + LIJN + '"/>' +
    '<circle cx="24" cy="58" r="13" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<circle cx="20" cy="55" r="2.5" fill="' + ZWART + '"/><circle cx="28" cy="55" r="2.5" fill="' + ZWART + '"/>' +
    '<path d="M20 62 Q24 66 28 62" fill="none" ' + lijn(3) + '/>');

  /* pijl: schuine pijl met houten schacht, grijze punt en rode veren */
  p.pijl = svg('<polygon points="18,82 26.5,73.5 20.8,67.8 9.5,79.1" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<polygon points="18,82 26.5,73.5 32.2,79.2 20.9,90.5" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M18 82 L74 26" stroke="' + LIJN + '" stroke-width="9" ' + W + '/>' +
    '<path d="M18 82 L74 26" stroke="' + LICHTBRUIN + '" stroke-width="4" ' + W + '/>' +
    '<polygon points="88,12 80,36 64,20" fill="' + GRIJS + '" ' + lijn(4) + '/>');

  /* ei: gebakken ei met wit en een gele dooier */
  p.ei = svg('<path d="M50 16 Q78 12 84 40 Q92 66 70 80 Q50 92 30 80 Q8 66 16 42 Q24 18 50 16 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="52" r="17" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="44" cy="46" r="3.5" fill="' + WIT + '"/>');

  /* geit: lichtbruine geit met hoorns, sik en korte staart */
  p.geit = svg('<path d="M20 44 L36 40 L44 56 L30 60 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="30" y="66" width="7" height="24" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><rect x="40" y="66" width="7" height="24" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="60" y="66" width="7" height="24" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><rect x="70" y="66" width="7" height="24" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M82 52 L92 42" ' + lijn(5) + '/>' +
    '<ellipse cx="54" cy="56" rx="30" ry="17" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M16 30 Q12 14 26 10 M26 30 Q28 14 40 12" fill="none" ' + lijn(5) + '/>' +
    '<ellipse cx="32" cy="32" rx="7" ry="3.5" transform="rotate(-20 32 32)" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<ellipse cx="22" cy="40" rx="14" ry="11" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M16 50 L14 63 L25 51 Z" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="18" cy="38" r="2.2" fill="' + ZWART + '"/><circle cx="9.5" cy="42" r="1.6" fill="' + LIJN + '"/>' +
    '<path d="M11 46 Q15 48 19 46" fill="none" ' + lijn(2.5) + '/>');

  /* trein: stoomlocomotief met blauwe ketel, rode cabine en rook */
  p.trein = svg('<path d="M4 94 H96" ' + lijn(4) + '/>' +
    '<circle cx="24" cy="20" r="6" fill="' + WIT + '" ' + lijn(3) + '/><circle cx="33" cy="10" r="8" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<rect x="18" y="28" width="12" height="18" rx="2" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="56" y="26" width="34" height="46" rx="4" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<rect x="63" y="33" width="20" height="16" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="52" y="22" width="42" height="8" rx="3" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="8" y="44" width="52" height="28" rx="8" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="8" cy="58" r="4" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<rect x="6" y="70" width="88" height="8" rx="2" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="22" cy="83" r="8" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/><circle cx="42" cy="83" r="8" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/><circle cx="74" cy="83" r="8" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<circle cx="22" cy="83" r="2.5" fill="' + GRIJS + '"/><circle cx="42" cy="83" r="2.5" fill="' + GRIJS + '"/><circle cx="74" cy="83" r="2.5" fill="' + GRIJS + '"/>');

  /* reus: grote vriendelijke reus naast een piepklein huisje */
  p.reus = svg('<path d="M4 94 H96" ' + lijn(4) + '/>' +
    '<rect x="26" y="60" width="14" height="34" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/><rect x="42" y="60" width="14" height="34" rx="4" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M22 40 L10 62 M60 40 L72 60" fill="none" stroke="' + LIJN + '" stroke-width="12" ' + W + '/>' +
    '<rect x="20" y="32" width="42" height="34" rx="8" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<path d="M22 40 L10 62 M60 40 L72 60" fill="none" stroke="' + GROEN + '" stroke-width="7" ' + W + '/>' +
    '<circle cx="10" cy="64" r="5" fill="' + HUID + '" ' + lijn(3) + '/><circle cx="72" cy="62" r="5" fill="' + HUID + '" ' + lijn(3) + '/>' +
    '<circle cx="41" cy="18" r="14" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<path d="M27 16 Q30 4 41 4 Q52 4 55 16 Q48 10 41 12 Q34 10 27 16 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<circle cx="36" cy="18" r="2" fill="' + ZWART + '"/><circle cx="46" cy="18" r="2" fill="' + ZWART + '"/>' +
    '<path d="M35 24 Q41 30 47 24" fill="none" ' + lijn(3) + '/>' +
    '<rect x="76" y="82" width="16" height="12" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<path d="M74 82 L84 72 L94 82 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<rect x="82" y="87" width="4" height="7" fill="' + BRUIN + '"/>');

  /* deur: blauwe deur in een houten kozijn met gele knop */
  p.deur = svg('<rect x="22" y="6" width="56" height="88" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<rect x="28" y="12" width="44" height="82" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="34" y="18" width="26" height="30" rx="2" fill="none" ' + lijn(3) + '/>' +
    '<rect x="34" y="56" width="26" height="32" rx="2" fill="none" ' + lijn(3) + '/>' +
    '<circle cx="66" cy="52" r="4" fill="' + GEEL + '" ' + lijn(3) + '/>');

  /* neus: grote neus met twee neusgaten */
  p.neus = svg('<path d="M42 14 Q50 8 58 14 Q60 40 68 58 Q78 66 70 78 Q60 88 50 80 Q40 88 30 78 Q22 66 32 58 Q40 40 42 14 Z" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<path d="M32 74 Q38 66 46 76 M54 76 Q62 66 68 74" fill="none" ' + lijn(4) + '/>');

  /* leeuw: leeuwenkop met grote oranje manen */
  p.leeuw = svg('<polygon points="93,50 85,59 87,71.5 75.5,75.5 71.5,87 59,85 50,93 41,85 28.5,87 24.5,75.5 13,71.5 15,59 7,50 15,41 13,28.5 24.5,24.5 28.5,13 41,15 50,7 59,15 71.5,13 75.5,24.5 87,28.5 85,41" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<circle cx="29" cy="31" r="8" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><circle cx="71" cy="31" r="8" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="52" r="27" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="50" cy="63" rx="12" ry="8" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<path d="M44 58 L56 58 L50 65 Z" fill="' + LIJN + '"/>' +
    '<path d="M50 65 V69 M43 70 Q50 75 57 70" fill="none" ' + lijn(3) + '/>' +
    '<circle cx="40" cy="46" r="3" fill="' + ZWART + '"/><circle cx="60" cy="46" r="3" fill="' + ZWART + '"/>');

  /* touw: opgerold touw met een los uiteinde */
  p.touw = svg('<ellipse cx="48" cy="44" rx="32" ry="14" fill="none" stroke="' + LIJN + '" stroke-width="11"/>' +
    '<ellipse cx="48" cy="54" rx="32" ry="14" fill="none" stroke="' + LIJN + '" stroke-width="11"/>' +
    '<ellipse cx="48" cy="64" rx="32" ry="14" fill="none" stroke="' + LIJN + '" stroke-width="11"/>' +
    '<path d="M78 68 Q90 74 84 84 Q80 90 86 94" fill="none" stroke="' + LIJN + '" stroke-width="11" ' + W + '/>' +
    '<ellipse cx="48" cy="44" rx="32" ry="14" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="6"/>' +
    '<ellipse cx="48" cy="54" rx="32" ry="14" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="6"/>' +
    '<ellipse cx="48" cy="64" rx="32" ry="14" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="6"/>' +
    '<path d="M78 68 Q90 74 84 84 Q80 90 86 94" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="6" ' + W + '/>' +
    '<path d="M31 28 L34 36 M47 26 L50 34 M63 28 L66 36 M31 72 L34 80 M47 74 L50 82 M63 72 L66 80" ' + lijn(2.5) + '/>');

  /* hout: stapel houtblokken van de kopse kant gezien */
  p.hout = svg('<circle cx="30" cy="70" r="17" fill="' + BRUIN + '" ' + lijn(5) + '/><circle cx="30" cy="70" r="11" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/><circle cx="30" cy="70" r="5" fill="none" ' + lijn(2.5) + '/>' +
    '<circle cx="70" cy="70" r="17" fill="' + BRUIN + '" ' + lijn(5) + '/><circle cx="70" cy="70" r="11" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/><circle cx="70" cy="70" r="5" fill="none" ' + lijn(2.5) + '/>' +
    '<circle cx="50" cy="40" r="17" fill="' + BRUIN + '" ' + lijn(5) + '/><circle cx="50" cy="40" r="11" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/><circle cx="50" cy="40" r="5" fill="none" ' + lijn(2.5) + '/>');

  /* pauw: blauwe pauw met uitgewaaierde groene staart met oogvlekken */
  p.pauw = svg('<path d="M50 62 L7 46 A46 46 0 1 1 93 46 Z" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<path d="M50 62 L16 34 M50 62 L35 21 M50 62 L65 21 M50 62 L84 34" fill="none" stroke="' + DONKERGROEN + '" stroke-width="3" ' + W + '/>' +
    '<circle cx="19" cy="48" r="5.5" fill="' + BLAUW + '" ' + lijn(3) + '/><circle cx="30" cy="34" r="5.5" fill="' + BLAUW + '" ' + lijn(3) + '/><circle cx="50" cy="28" r="5.5" fill="' + BLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="70" cy="34" r="5.5" fill="' + BLAUW + '" ' + lijn(3) + '/><circle cx="81" cy="48" r="5.5" fill="' + BLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="19" cy="48" r="2.2" fill="' + GEEL + '"/><circle cx="30" cy="34" r="2.2" fill="' + GEEL + '"/><circle cx="50" cy="28" r="2.2" fill="' + GEEL + '"/><circle cx="70" cy="34" r="2.2" fill="' + GEEL + '"/><circle cx="81" cy="48" r="2.2" fill="' + GEEL + '"/>' +
    '<path d="M45 86 V94 M55 86 V94" stroke="' + ORANJE + '" stroke-width="4" ' + W + '/>' +
    '<path d="M45 66 Q45 50 50 46 Q55 50 55 66 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="72" rx="13" ry="14" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M46 37 L42 29 M50 36 V27 M54 37 L58 29" ' + lijn(2.5) + '/>' +
    '<circle cx="42" cy="28" r="2.5" fill="' + BLAUW + '" ' + lijn(2) + '/><circle cx="50" cy="26" r="2.5" fill="' + BLAUW + '" ' + lijn(2) + '/><circle cx="58" cy="28" r="2.5" fill="' + BLAUW + '" ' + lijn(2) + '/>' +
    '<circle cx="50" cy="44" r="8" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M57 43 L65 46 L57 48 Z" fill="' + GEEL + '" ' + lijn(2.5) + '/>' +
    '<circle cx="52" cy="42" r="2.5" fill="' + WIT + '"/><circle cx="52.5" cy="42" r="1.2" fill="' + ZWART + '"/>');

  /* bril: bril met twee ronde lichtblauwe glazen */
  p.bril = svg('<path d="M13 48 L4 40 M87 48 L96 40" ' + lijn(5) + '/>' +
    '<circle cx="30" cy="52" r="18" fill="' + LICHTBLAUW + '" ' + lijn(6) + '/>' +
    '<circle cx="70" cy="52" r="18" fill="' + LICHTBLAUW + '" ' + lijn(6) + '/>' +
    '<path d="M48 50 Q50 44 52 50" fill="none" ' + lijn(5) + '/>' +
    '<path d="M22 44 L26 40 M62 44 L66 40" stroke="' + WIT + '" stroke-width="3" ' + W + '/>');

  /* vlag: rood-wit-blauwe vlag aan een stok */
  p.vlag = svg('<rect x="22" y="14" width="64" height="14" fill="' + ROOD + '"/>' +
    '<rect x="22" y="28" width="64" height="14" fill="' + WIT + '"/>' +
    '<rect x="22" y="42" width="64" height="14" fill="' + BLAUW + '"/>' +
    '<rect x="22" y="14" width="64" height="42" fill="none" ' + lijn(5) + '/>' +
    '<path d="M18 10 V94" stroke="' + LIJN + '" stroke-width="9" ' + W + '/>' +
    '<path d="M18 10 V94" stroke="' + LICHTBRUIN + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="18" cy="8" r="4.5" fill="' + GEEL + '" ' + lijn(3) + '/>');

  /* slak: slak met oranje spiraalhuisje en oogsprieten */
  p.slak = svg('<path d="M10 84 Q4 74 12 64 Q16 54 22 54 Q34 54 34 66 V70 H88 Q94 76 90 84 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M22 54 L18 36 M28 54 L32 38" ' + lijn(4) + '/>' +
    '<circle cx="18" cy="35" r="4.5" fill="' + WIT + '" ' + lijn(3) + '/><circle cx="32" cy="37" r="4.5" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="18" cy="35" r="1.8" fill="' + ZWART + '"/><circle cx="32" cy="37" r="1.8" fill="' + ZWART + '"/>' +
    '<path d="M14 66 Q18 70 22 66" fill="none" ' + lijn(2.5) + '/>' +
    '<circle cx="60" cy="50" r="26" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<path d="M60 50 q6 -4 6 4 q0 10 -12 8 q-12 -4 -6 -18 q8 -14 24 -6 q12 8 6 26" fill="none" ' + lijn(4) + '/>');

  /* spin: zwarte spin aan een draadje met acht poten */
  p.spin = svg('<path d="M50 2 V32" ' + lijn(3) + '/>' +
    '<path d="M34 50 Q16 42 12 26 M32 58 Q12 56 6 42 M32 66 Q14 72 8 86 M36 74 Q22 86 20 94 M66 50 Q84 42 88 26 M68 58 Q88 56 94 42 M68 66 Q86 72 92 86 M64 74 Q78 86 80 94" fill="none" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="40" r="11" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="62" r="20" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="45" cy="38" r="4" fill="' + WIT + '"/><circle cx="55" cy="38" r="4" fill="' + WIT + '"/>' +
    '<circle cx="46" cy="39" r="2" fill="' + ZWART + '"/><circle cx="56" cy="39" r="2" fill="' + ZWART + '"/>' +
    '<path d="M46 45 Q50 48 54 45" fill="none" stroke="' + WIT + '" stroke-width="2" ' + W + '/>');

  /* kraan: grijze waterkraan met rode knop en een druppel */
  p.kraan = svg('<rect x="4" y="30" width="10" height="20" rx="2" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M40 24 V36" stroke="' + LIJN + '" stroke-width="7" ' + W + '/>' +
    '<circle cx="40" cy="20" r="9" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M10 40 H56 Q70 40 70 54 V62" fill="none" stroke="' + LIJN + '" stroke-width="16" ' + W + '/>' +
    '<path d="M10 40 H56 Q70 40 70 54 V62" fill="none" stroke="' + GRIJS + '" stroke-width="10" ' + W + '/>' +
    '<rect x="62" y="60" width="16" height="8" rx="2" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M70 74 Q62 86 70 92 Q78 86 70 74 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>');

  /* trap: houten trap met vier treden en een leuning */
  p.trap = svg('<path d="M6 92 V72 H26 V52 H46 V32 H66 V12 H94 V92 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M14 72 V54 M34 52 V34 M54 32 V14" ' + lijn(4) + '/>' +
    '<path d="M12 56 L58 10" ' + lijn(5) + '/>');

  /* klok: ronde wandklok met streepjes en twee wijzers, zonder cijfers */
  p.klok = svg('<circle cx="50" cy="50" r="42" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="50" r="34" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M76 50 H80 M72.5 63 L76 65 M63 72.5 L65 76 M50 76 V80 M37 72.5 L35 76 M27.5 63 L24 65 M24 50 H20 M27.5 37 L24 35 M37 27.5 L35 24 M50 24 V20 M63 27.5 L65 24 M72.5 37 L76 35" ' + lijn(3) + '/>' +
    '<path d="M50 50 L38 36" ' + lijn(6) + '/>' +
    '<path d="M50 50 L70 40" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="50" r="3.5" fill="' + ROOD + '"/>');

  /* stoel: houten stoel met rugleuning en vier poten */
  p.stoel = svg('<path d="M34 62 V86 M66 62 V86" fill="none" stroke="' + LIJN + '" stroke-width="9" ' + W + '/>' +
    '<path d="M34 62 V86 M66 62 V86" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="4" ' + W + '/>' +
    '<rect x="26" y="6" width="48" height="46" rx="6" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M38 12 V46 M50 12 V46 M62 12 V46" ' + lijn(3) + '/>' +
    '<rect x="18" y="50" width="64" height="12" rx="3" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M24 62 V94 M76 62 V94" fill="none" stroke="' + LIJN + '" stroke-width="10" ' + W + '/>' +
    '<path d="M24 62 V94 M76 62 V94" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="5" ' + W + '/>');

  /* brood: bruin brood met drie inkepingen */
  p.brood = svg('<path d="M10 70 Q10 40 30 34 Q50 24 70 34 Q90 40 90 70 Q90 82 76 82 H24 Q10 82 10 70 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M32 40 Q38 48 32 56 M48 34 Q54 42 48 50 M64 40 Q70 48 64 56" fill="none" ' + lijn(3) + '/>');

  /* fles: groene fles met gele dop en wit etiket */
  p.fles = svg('<rect x="38" y="4" width="24" height="10" rx="2" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M40 12 H60 V26 Q76 34 76 50 V88 Q76 94 70 94 H30 Q24 94 24 88 V50 Q24 34 40 26 Z" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<rect x="30" y="56" width="40" height="22" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M32 40 V50" stroke="' + WIT + '" stroke-width="3" opacity="0.7" ' + W + '/>');

  /* ---- deel3 ---- */
/* ----- deel 3 ----- */

  /* bloem: roze bloem met geel hart, groene steel en twee blaadjes */
  p.bloem = svg('<path d="M50 56 V94" ' + lijn(10) + '/>' +
    '<path d="M50 56 V94" stroke="' + DONKERGROEN + '" stroke-width="5" ' + W + '/>' +
    '<path d="M50 82 Q30 86 26 70 Q46 68 50 82 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 72 Q70 76 74 60 Q54 58 50 72 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="67" cy="40" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="58" cy="55" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="42" cy="55" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="33" cy="40" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="42" cy="25" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="58" cy="25" r="12" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="40" r="11" fill="' + GEEL + '" ' + lijn(4) + '/>');

  /* kroon: gouden kroon met drie punten en edelstenen */
  p.kroon = svg('<path d="M14 82 V42 L32 58 L50 26 L68 58 L86 42 V82 Z" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<path d="M14 70 H86" ' + lijn(3) + '/>' +
    '<circle cx="14" cy="40" r="5" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<circle cx="50" cy="24" r="5" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<circle cx="86" cy="40" r="5" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<circle cx="50" cy="56" r="6" fill="' + BLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="30" cy="76" r="4" fill="' + ROOD + '" ' + lijn(2.5) + '/>' +
    '<circle cx="50" cy="76" r="4" fill="' + GROEN + '" ' + lijn(2.5) + '/>' +
    '<circle cx="70" cy="76" r="4" fill="' + ROOD + '" ' + lijn(2.5) + '/>');

  /* draak: groene draak met vleugel, staart, hoorntjes en een vlammetje */
  p.draak = svg('<path d="M54 50 L60 20 L68 34 L80 22 L84 48 Z" fill="' + DONKERGROEN + '" ' + lijn(4) + '/>' +
    '<path d="M80 64 Q96 64 92 48" fill="none" ' + lijn(13) + '/>' +
    '<path d="M80 64 Q96 64 92 48" fill="none" stroke="' + GROEN + '" stroke-width="7" ' + W + '/>' +
    '<rect x="46" y="74" width="10" height="16" rx="4" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<rect x="66" y="74" width="10" height="16" rx="4" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M38 46 L54 62" fill="none" ' + lijn(24) + '/>' +
    '<path d="M38 46 L54 62" fill="none" stroke="' + GROEN + '" stroke-width="16" ' + W + '/>' +
    '<ellipse cx="62" cy="64" rx="24" ry="17" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="62" cy="70" rx="14" ry="8" fill="' + GEEL + '"/>' +
    '<path d="M26 30 L20 16 L34 26 Z M42 28 L46 14 L50 30 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<circle cx="36" cy="40" r="15" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="22" cy="46" rx="9" ry="6" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="18" cy="45" r="1.5" fill="' + LIJN + '"/>' +
    '<circle cx="34" cy="36" r="3" fill="' + LIJN + '"/>' +
    '<path d="M14 48 Q4 40 2 50 Q0 62 14 58 Z" fill="' + ORANJE + '"/>' +
    '<path d="M13 50 Q8 47 7 52 Q7 57 13 55 Z" fill="' + GEEL + '"/>');

  /* zwaan: witte zwaan met gebogen hals en oranje snavel op blauw water */
  p.zwaan = svg('<path d="M44 68 C24 66 16 44 30 30" fill="none" ' + lijn(15) + '/>' +
    '<path d="M44 68 C24 66 16 44 30 30" fill="none" stroke="' + WIT + '" stroke-width="9" ' + W + '/>' +
    '<ellipse cx="58" cy="66" rx="28" ry="16" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M44 68 Q56 44 90 46 Q84 68 44 68 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M2 76 Q12 70 22 76 T42 76 T62 76 T82 76 T102 76 V98 H2 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<circle cx="31" cy="29" r="9" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M23 27 L8 32 L23 34 Z" fill="' + ORANJE + '" ' + lijn(3) + '/>' +
    '<circle cx="29" cy="27" r="2" fill="' + LIJN + '"/>');

  /* knoop: blauwe knoop met vier gaatjes en een wit draadje */
  p.knoop = svg('<circle cx="50" cy="50" r="40" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="50" r="30" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="40" cy="40" r="5" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="60" cy="40" r="5" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="40" cy="60" r="5" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="60" cy="60" r="5" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<path d="M40 40 L60 60 M60 40 L40 60" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<path d="M22 38 Q26 24 40 18" fill="none" stroke="' + WIT + '" stroke-width="4" opacity="0.7" ' + W + '/>');

  /* plant: groene plant met vijf bladeren in een bruine pot */
  p.plant = svg('<path d="M50 62 V22" ' + lijn(8) + '/>' +
    '<path d="M50 62 V22" stroke="' + DONKERGROEN + '" stroke-width="4" ' + W + '/>' +
    '<path d="M50 46 Q30 44 24 24 Q46 26 50 46 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 46 Q70 44 76 24 Q54 26 50 46 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 34 Q40 20 50 6 Q60 20 50 34 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 58 Q34 58 28 44 Q46 44 50 58 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M50 58 Q66 58 72 44 Q54 44 50 58 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M28 64 H72 L66 92 H34 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<rect x="24" y="58" width="52" height="10" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* spook: vriendelijk wit spookje met armpjes, ogen en blosjes */
  p.spook = svg('<path d="M24 58 Q10 60 12 72" fill="none" ' + lijn(12) + '/>' +
    '<path d="M24 58 Q10 60 12 72" fill="none" stroke="' + WIT + '" stroke-width="6" ' + W + '/>' +
    '<path d="M76 58 Q90 60 88 72" fill="none" ' + lijn(12) + '/>' +
    '<path d="M76 58 Q90 60 88 72" fill="none" stroke="' + WIT + '" stroke-width="6" ' + W + '/>' +
    '<path d="M24 90 V46 a26 26 0 0 1 52 0 V90 L66 80 L58 90 L50 80 L42 90 L34 80 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="40" cy="46" rx="4" ry="6" fill="' + LIJN + '"/>' +
    '<ellipse cx="60" cy="46" rx="4" ry="6" fill="' + LIJN + '"/>' +
    '<path d="M44 60 Q50 67 56 60" fill="none" ' + lijn(4) + '/>' +
    '<circle cx="32" cy="56" r="3.5" fill="' + ROZE + '"/>' +
    '<circle cx="68" cy="56" r="3.5" fill="' + ROZE + '"/>');

  /* snoep: rood snoepje in een wikkel en een roze lolly */
  p.snoep = svg('<path d="M72 46 L84 90" ' + lijn(8) + '/>' +
    '<path d="M72 46 L84 90" stroke="' + WIT + '" stroke-width="3.5" ' + W + '/>' +
    '<circle cx="68" cy="32" r="17" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<path d="M59 32 A9 9 0 1 1 68 41 M63 32 A5 5 0 1 1 68 37" fill="none" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<path d="M22 66 L10 56 L14 66 L10 76 Z M56 66 L68 56 L64 66 L68 76 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<ellipse cx="39" cy="66" rx="18" ry="13" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M35 57 L31 75 M47 57 L43 75" stroke="' + WIT + '" stroke-width="4" ' + W + '/>');

  /* broek: blauwe spijkerbroek met band, zakken en knoop */
  p.broek = svg('<path d="M22 10 H78 V90 H60 L50 50 L40 90 H22 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M22 22 H78" ' + lijn(3) + '/>' +
    '<path d="M50 22 V38" ' + lijn(3) + '/>' +
    '<path d="M27 27 Q36 37 45 27 M55 27 Q64 37 73 27" fill="none" stroke="' + LICHTBLAUW + '" stroke-width="3" ' + W + '/>' +
    '<circle cx="50" cy="16" r="3" fill="' + GEEL + '"/>');

  /* schoen: rode sportschoen met witte zool en veters */
  p.schoen = svg('<path d="M12 72 V50 Q12 44 20 44 H40 L52 32 C66 30 76 44 88 70 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<ellipse cx="30" cy="45" rx="9" ry="3.5" fill="' + LIJN + '"/>' +
    '<path d="M42 46 L54 42 M44 54 L56 50 M47 62 L59 58" stroke="' + WIT + '" stroke-width="3.5" ' + W + '/>' +
    '<path d="M64 40 Q74 52 82 66" fill="none" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<path d="M10 78 Q8 70 16 70 H88 Q94 70 92 78 Q92 86 84 86 H16 Q8 86 10 78 Z" fill="' + WIT + '" ' + lijn(5) + '/>');

  /* schaap: wollig wit schaap met zwart gezicht en zwarte pootjes */
  p.schaap = svg('<rect x="34" y="70" width="8" height="22" rx="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<rect x="46" y="70" width="8" height="22" rx="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<rect x="62" y="70" width="8" height="22" rx="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<rect x="74" y="70" width="8" height="22" rx="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<circle cx="30" cy="44" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="42" cy="34" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="56" cy="32" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="70" cy="36" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="80" cy="48" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="78" cy="64" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="64" cy="74" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="48" cy="76" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="32" cy="68" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="24" cy="56" r="11" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<ellipse cx="52" cy="55" rx="30" ry="22" fill="' + WIT + '"/>' +
    '<ellipse cx="12" cy="46" rx="5" ry="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<ellipse cx="36" cy="46" rx="5" ry="3" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<ellipse cx="24" cy="50" rx="12" ry="14" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="24" cy="36" r="8" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="20" cy="50" r="3" fill="' + WIT + '"/><circle cx="28" cy="50" r="3" fill="' + WIT + '"/>' +
    '<circle cx="20" cy="50" r="1.5" fill="' + LIJN + '"/><circle cx="28" cy="50" r="1.5" fill="' + LIJN + '"/>' +
    '<path d="M21 58 Q24 61 27 58" fill="none" stroke="' + WIT + '" stroke-width="2" ' + W + '/>');

  /* schip: groot blauw schip met witte opbouw, rode schoorsteen en rook */
  p.schip = svg('<circle cx="56" cy="16" r="6" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="66" cy="10" r="7" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<rect x="42" y="22" width="14" height="24" rx="2" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<path d="M42 30 H56" ' + lijn(3) + '/>' +
    '<rect x="26" y="44" width="48" height="18" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="36" cy="53" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2.5) + '/>' +
    '<circle cx="50" cy="53" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2.5) + '/>' +
    '<circle cx="64" cy="53" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2.5) + '/>' +
    '<path d="M6 62 H94 L82 84 H18 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="30" cy="72" r="4" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="50" cy="72" r="4" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="70" cy="72" r="4" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M2 90 Q10 84 18 90 T34 90 T50 90 T66 90 T82 90 T98 90" fill="none" stroke="' + LICHTBLAUW + '" stroke-width="4" ' + W + '/>');

  /* vlieg: zwarte vlieg met rode ogen, pootjes en doorzichtige vleugels */
  p.vlieg = svg('<path d="M40 54 L22 62 M40 64 L20 78 M42 74 L28 90 M60 54 L78 62 M60 64 L80 78 M58 74 L72 90" fill="none" ' + lijn(3) + '/>' +
    '<ellipse cx="50" cy="62" rx="14" ry="22" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<path d="M38 58 H62 M38 68 H62 M40 78 H60" stroke="' + DONKERGRIJS + '" stroke-width="3" ' + W + '/>' +
    '<ellipse cx="30" cy="52" rx="10" ry="22" fill="' + WIT + '" fill-opacity="0.7" transform="rotate(-25 30 52)" ' + lijn(3) + '/>' +
    '<ellipse cx="70" cy="52" rx="10" ry="22" fill="' + WIT + '" fill-opacity="0.7" transform="rotate(25 70 52)" ' + lijn(3) + '/>' +
    '<circle cx="50" cy="32" r="12" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="43" cy="30" r="5.5" fill="' + ROOD + '" ' + lijn(2.5) + '/>' +
    '<circle cx="57" cy="30" r="5.5" fill="' + ROOD + '" ' + lijn(2.5) + '/>' +
    '<path d="M46 20 L42 10 M54 20 L58 10" ' + lijn(3) + '/>');

  /* hond: bruine hond op vier poten met kwispelstaart, flapoor en snuit */
  p.hond = svg('<path d="M80 52 Q94 42 90 30" fill="none" ' + lijn(11) + '/>' +
    '<path d="M80 52 Q94 42 90 30" fill="none" stroke="' + BRUIN + '" stroke-width="5" ' + W + '/>' +
    '<rect x="32" y="66" width="9" height="24" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="44" y="66" width="9" height="24" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="60" y="66" width="9" height="24" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="72" y="66" width="9" height="24" rx="4" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="54" cy="58" rx="28" ry="17" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="62" cy="54" rx="10" ry="7" fill="' + LICHTBRUIN + '"/>' +
    '<circle cx="26" cy="40" r="16" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M30 26 Q44 24 44 42 Q42 52 34 50 Q38 40 30 26 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="14" cy="46" rx="9" ry="7" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="8" cy="44" r="3" fill="' + LIJN + '"/>' +
    '<circle cx="22" cy="36" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M12 52 Q16 56 20 52" fill="none" ' + lijn(2.5) + '/>');

  /* kast: houten kledingkast met twee deuren en knopjes */
  p.kast = svg('<rect x="24" y="86" width="8" height="7" rx="2" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="68" y="86" width="8" height="7" rx="2" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="22" y="12" width="56" height="74" rx="2" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M50 12 V86" ' + lijn(3) + '/>' +
    '<rect x="28" y="18" width="16" height="62" rx="2" fill="none" ' + lijn(2.5) + '/>' +
    '<rect x="56" y="18" width="16" height="62" rx="2" fill="none" ' + lijn(2.5) + '/>' +
    '<circle cx="45" cy="50" r="3" fill="' + GEEL + '" ' + lijn(2) + '/>' +
    '<circle cx="55" cy="50" r="3" fill="' + GEEL + '" ' + lijn(2) + '/>' +
    '<rect x="18" y="6" width="64" height="8" rx="2" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* lamp: brandende bureaulamp met rode kap, arm en voet */
  p.lamp = svg('<path d="M56 64 L52 78 M66 66 V82 M78 64 L84 78" stroke="' + GEEL + '" stroke-width="4" ' + W + '/>' +
    '<path d="M30 86 L40 50 L60 30" fill="none" ' + lijn(10) + '/>' +
    '<path d="M30 86 L40 50 L60 30" fill="none" stroke="' + GRIJS + '" stroke-width="5" ' + W + '/>' +
    '<ellipse cx="30" cy="88" rx="20" ry="6" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M48 22 H74 L86 56 H38 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<circle cx="64" cy="56" r="6" fill="' + GEEL + '" ' + lijn(3) + '/>');

  /* tent: oranje kampeertent met donkere opening en scheerlijnen */
  p.tent = svg('<path d="M50 14 L6 86 H94 Z" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<path d="M50 34 L36 86 H64 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M50 14 V4" ' + lijn(4) + '/>' +
    '<path d="M6 86 L2 96 M94 86 L98 96" ' + lijn(3) + '/>');

  /* bank: blauwe bank met lichtblauwe kussens, armleuningen en pootjes */
  p.bank = svg('<rect x="14" y="78" width="8" height="10" rx="2" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="78" y="78" width="8" height="10" rx="2" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="12" y="26" width="76" height="40" rx="8" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M50 26 V56" ' + lijn(3) + '/>' +
    '<rect x="18" y="54" width="32" height="18" rx="5" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="50" y="54" width="32" height="18" rx="5" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="4" y="48" width="16" height="30" rx="7" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="80" y="48" width="16" height="30" rx="7" fill="' + BLAUW + '" ' + lijn(4) + '/>');

  /* ring: gouden ring met een lichtblauwe edelsteen */
  p.ring = svg('<circle cx="50" cy="60" r="26" fill="none" ' + lijn(14) + '/>' +
    '<circle cx="50" cy="60" r="26" fill="none" stroke="' + GEEL + '" stroke-width="8"/>' +
    '<path d="M30 68 Q34 78 44 84" fill="none" stroke="' + WIT + '" stroke-width="3" opacity="0.7" ' + W + '/>' +
    '<path d="M50 10 L68 26 L50 44 L32 26 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M32 26 H68 M42 26 L50 10 L58 26 M42 26 L50 44 L58 26" fill="none" stroke="' + WIT + '" stroke-width="2"/>');

  /* tand: witte tand met twee wortels en een blij gezichtje */
  p.tand = svg('<path d="M26 40 C26 16 74 16 74 40 C74 56 70 66 66 84 C64 92 56 92 54 80 L50 66 L46 80 C44 92 36 92 34 84 C30 66 26 56 26 40 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<circle cx="42" cy="42" r="2.5" fill="' + LIJN + '"/>' +
    '<circle cx="58" cy="42" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M43 52 Q50 59 57 52" fill="none" ' + lijn(3) + '/>' +
    '<path d="M34 30 Q40 22 50 22" fill="none" stroke="' + LICHTBLAUW + '" stroke-width="3" ' + W + '/>');

  /* melk: wit melkpak met lichtblauwe top en een glas melk ernaast */
  p.melk = svg('<rect x="10" y="40" width="36" height="50" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="12" y="60" width="32" height="14" fill="' + LICHTBLAUW + '"/>' +
    '<path d="M10 40 L18 22 H38 L46 40 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="24" y="16" width="8" height="8" rx="1" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M56 42 L61 90 H85 L90 42 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M60 54 L63 87 H83 L86 54 Z" fill="' + WIT + '"/>');

  /* worst: streng van drie bruine worstjes met touwtjes aan de uiteinden */
  p.worst = svg('<path d="M12 18 Q4 14 6 22 M88 82 Q96 86 94 78" fill="none" ' + lijn(3.5) + '/>' +
    '<ellipse cx="24" cy="28" rx="17" ry="10" transform="rotate(40 24 28)" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="50" rx="17" ry="10" transform="rotate(40 50 50)" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="76" cy="72" rx="17" ry="10" transform="rotate(40 76 72)" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="37" cy="39" r="3" fill="' + LIJN + '"/><circle cx="63" cy="61" r="3" fill="' + LIJN + '"/>' +
    '<path d="M20 19 L33 31 M46 41 L59 53 M72 63 L85 75" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="3" ' + W + '/>');

  /* berg: grijze bergen met sneeuwtoppen en een zonnetje */
  p.berg = svg('<circle cx="84" cy="22" r="9" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M52 88 L74 44 L98 88 Z" fill="' + DONKERGRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M74 44 L66 58 L71 55 L75 60 L80 55 L84 58 Z" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M2 88 L42 18 L80 88 Z" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M42 18 L30 40 L36 36 L42 42 L48 36 L54 40 Z" fill="' + WIT + '" ' + lijn(4) + '/>');

  /* mand: rieten mand met hengsel en vlechtwerk */
  p.mand = svg('<path d="M26 44 Q50 4 74 44" fill="none" ' + lijn(12) + '/>' +
    '<path d="M26 44 Q50 4 74 44" fill="none" stroke="' + LICHTBRUIN + '" stroke-width="6" ' + W + '/>' +
    '<path d="M14 44 H86 L78 88 H22 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M18 58 H82 M21 72 H79" stroke="' + BRUIN + '" stroke-width="3" ' + W + '/>' +
    '<path d="M30 46 L32 86 M42 46 L43 86 M58 46 L57 86 M70 46 L68 86" stroke="' + BRUIN + '" stroke-width="3" ' + W + '/>' +
    '<rect x="12" y="40" width="76" height="8" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* fiets: rode fiets met twee wielen, zadel en stuur */
  p.fiets = svg('<circle cx="26" cy="68" r="20" fill="none" ' + lijn(5) + '/>' +
    '<circle cx="74" cy="68" r="20" fill="none" ' + lijn(5) + '/>' +
    '<path d="M26 48 V88 M6 68 H46 M74 48 V88 M54 68 H94" stroke="' + GRIJS + '" stroke-width="2"/>' +
    '<path d="M26 68 L40 40 H64 L74 68 M40 40 L52 68 H26 M52 68 L64 40" fill="none" stroke="' + ROOD + '" stroke-width="5" ' + W + '/>' +
    '<path d="M64 40 L60 28 M52 30 L68 26" fill="none" ' + lijn(4) + '/>' +
    '<path d="M40 40 L38 32 M30 32 H46" fill="none" ' + lijn(5) + '/>' +
    '<circle cx="52" cy="68" r="5" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<path d="M52 68 L58 78" ' + lijn(3) + '/>' +
    '<circle cx="26" cy="68" r="3" fill="' + LIJN + '"/><circle cx="74" cy="68" r="3" fill="' + LIJN + '"/>');

  /* wolk: lichtblauwe wolk met vlakke onderkant */
  p.wolk = svg('<circle cx="28" cy="62" r="14" fill="' + LICHTBLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="52" r="24" fill="' + LICHTBLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="72" cy="60" r="16" fill="' + LICHTBLAUW + '" ' + lijn(5) + '/>' +
    '<circle cx="28" cy="62" r="11.5" fill="' + LICHTBLAUW + '"/>' +
    '<circle cx="50" cy="52" r="21.5" fill="' + LICHTBLAUW + '"/>' +
    '<circle cx="72" cy="60" r="13.5" fill="' + LICHTBLAUW + '"/>' +
    '<rect x="28" y="66" width="44" height="10" fill="' + LICHTBLAUW + '"/>' +
    '<path d="M28 76 H72" ' + lijn(5) + '/>' +
    '<path d="M38 40 Q46 34 56 36" fill="none" stroke="' + WIT + '" stroke-width="4" ' + W + '/>');

  /* vork: grijze vork met vier tanden */
  p.vork = svg('<path d="M34 10 V38 M45 10 V38 M55 10 V38 M66 10 V38" fill="none" ' + lijn(9) + '/>' +
    '<path d="M34 10 V38 M45 10 V38 M55 10 V38 M66 10 V38" fill="none" stroke="' + GRIJS + '" stroke-width="4" ' + W + '/>' +
    '<path d="M50 52 V92" ' + lijn(14) + '/>' +
    '<path d="M50 52 V92" stroke="' + GRIJS + '" stroke-width="8" ' + W + '/>' +
    '<path d="M30 36 Q30 52 50 54 Q70 52 70 36 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>');

  /* kwast: verfkwast met houten steel en blauwe verf aan de haren */
  p.kwast = svg('<g transform="rotate(-45 50 50)">' +
    '<rect x="45" y="52" width="10" height="42" rx="4" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M41 40 Q38 24 43 10 H57 Q62 24 59 40 Z" fill="' + OKER + '" ' + lijn(4) + '/>' +
    '<path d="M44 11 H56 Q58 17 57.5 24 H42.5 Q42 17 44 11 Z" fill="' + BLAUW + '"/>' +
    '<circle cx="50" cy="4" r="3.5" fill="' + BLAUW + '"/>' +
    '<rect x="41" y="38" width="18" height="16" rx="2" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '</g>');

  /* appel: rode appel met steeltje, blad en glimlicht */
  p.appel = svg('<path d="M50 28 C34 18 18 34 20 56 C22 76 36 90 50 86 C64 90 78 76 80 56 C82 34 66 18 50 28 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M50 28 V14" ' + lijn(5) + '/>' +
    '<path d="M52 20 Q64 8 74 16 Q66 28 52 20 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="36" cy="46" rx="5" ry="8" fill="' + WIT + '" opacity="0.7"/>');

  /* banaan: gele banaan met bruin steeltje */
  p.banaan = svg('<path d="M24 26 C16 58 40 86 78 82 C84 81 86 75 80 73 C52 76 34 56 32 26 C31 20 25 20 24 26 Z" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<path d="M36 34 C38 54 50 68 66 74" fill="none" stroke="' + WIT + '" stroke-width="4" opacity="0.6" ' + W + '/>' +
    '<path d="M26 26 L22 16" stroke="' + BRUIN + '" stroke-width="7" ' + W + '/>');

  /* konijn: wit konijn met lange oren, roze neus en tandjes */
  p.konijn = svg('<ellipse cx="38" cy="20" rx="8" ry="17" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<ellipse cx="62" cy="20" rx="8" ry="17" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<ellipse cx="38" cy="22" rx="3.5" ry="11" fill="' + ROZE + '"/>' +
    '<ellipse cx="62" cy="22" rx="3.5" ry="11" fill="' + ROZE + '"/>' +
    '<ellipse cx="50" cy="72" rx="24" ry="19" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="50" cy="76" rx="12" ry="10" fill="' + HUID + '"/>' +
    '<ellipse cx="36" cy="88" rx="10" ry="5" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<ellipse cx="64" cy="88" rx="10" ry="5" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="44" r="19" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<circle cx="43" cy="42" r="2.5" fill="' + LIJN + '"/>' +
    '<circle cx="57" cy="42" r="2.5" fill="' + LIJN + '"/>' +
    '<ellipse cx="50" cy="50" rx="3" ry="2" fill="' + ROZE + '"/>' +
    '<path d="M28 50 H40 M60 50 H72" ' + lijn(2) + '/>' +
    '<path d="M44 52 Q47 55 50 52 Q53 55 56 52" fill="none" ' + lijn(2) + '/>' +
    '<rect x="47" y="53" width="6" height="6" rx="1" fill="' + WIT + '" ' + lijn(2) + '/>');

  /* vlinder: kleurige vlinder met oranje en paarse vleugels */
  p.vlinder = svg('<ellipse cx="30" cy="42" rx="20" ry="18" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<ellipse cx="70" cy="42" rx="20" ry="18" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<ellipse cx="34" cy="70" rx="15" ry="13" fill="' + PAARS + '" ' + lijn(4) + '/>' +
    '<ellipse cx="66" cy="70" rx="15" ry="13" fill="' + PAARS + '" ' + lijn(4) + '/>' +
    '<circle cx="28" cy="42" r="5" fill="' + GEEL + '"/><circle cx="72" cy="42" r="5" fill="' + GEEL + '"/>' +
    '<circle cx="34" cy="70" r="3" fill="' + WIT + '"/><circle cx="66" cy="70" r="3" fill="' + WIT + '"/>' +
    '<ellipse cx="50" cy="56" rx="5" ry="24" fill="' + LIJN + '"/>' +
    '<circle cx="50" cy="30" r="6" fill="' + LIJN + '"/>' +
    '<path d="M47 26 Q40 14 34 12 M53 26 Q60 14 66 12" fill="none" ' + lijn(3) + '/>');

  /* olifant: grijze olifant met slurf, groot oor en slagtand */
  p.olifant = svg('<rect x="40" y="70" width="13" height="22" rx="5" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="68" y="70" width="13" height="22" rx="5" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M86 52 Q94 60 90 72" fill="none" ' + lijn(4) + '/>' +
    '<ellipse cx="58" cy="56" rx="30" ry="24" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M18 50 Q6 62 8 78 Q10 88 20 84" fill="none" ' + lijn(13) + '/>' +
    '<path d="M18 50 Q6 62 8 78 Q10 88 20 84" fill="none" stroke="' + GRIJS + '" stroke-width="7" ' + W + '/>' +
    '<circle cx="28" cy="44" r="18" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<ellipse cx="38" cy="44" rx="10" ry="14" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M22 58 Q16 62 14 68" fill="none" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="23" cy="40" r="2.5" fill="' + LIJN + '"/>');

  /* tomaat: rode, platte tomaat met groen kroontje */
  p.tomaat = svg('<ellipse cx="50" cy="58" rx="36" ry="30" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<ellipse cx="32" cy="50" rx="5" ry="8" fill="' + WIT + '" opacity="0.6"/>' +
    '<path d="M50 34 L28 30 M50 34 L38 20 M50 34 V18 M50 34 L62 20 M50 34 L72 30" fill="none" ' + lijn(9) + '/>' +
    '<path d="M50 34 L28 30 M50 34 L38 20 M50 34 V18 M50 34 L62 20 M50 34 L72 30" fill="none" stroke="' + DONKERGROEN + '" stroke-width="5" ' + W + '/>');

  /* panda: zwart-witte panda met oogvlekken en ronde oren */
  p.panda = svg('<circle cx="28" cy="22" r="9" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="72" cy="22" r="9" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<ellipse cx="36" cy="88" rx="9" ry="6" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<ellipse cx="64" cy="88" rx="9" ry="6" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<ellipse cx="50" cy="72" rx="26" ry="16" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="27" cy="70" rx="8" ry="13" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<ellipse cx="73" cy="70" rx="8" ry="13" fill="' + ZWART + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="42" r="26" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="39" cy="42" rx="8" ry="10" fill="' + ZWART + '"/>' +
    '<ellipse cx="61" cy="42" rx="8" ry="10" fill="' + ZWART + '"/>' +
    '<circle cx="40" cy="41" r="3" fill="' + WIT + '"/><circle cx="60" cy="41" r="3" fill="' + WIT + '"/>' +
    '<circle cx="40" cy="41" r="1.5" fill="' + LIJN + '"/><circle cx="60" cy="41" r="1.5" fill="' + LIJN + '"/>' +
    '<ellipse cx="50" cy="54" rx="5" ry="3.5" fill="' + ZWART + '"/>' +
    '<path d="M46 60 Q50 64 54 60" fill="none" ' + lijn(2.5) + '/>');

  /* paraplu: rode paraplu met geel middenvak en gebogen handvat */
  p.paraplu = svg('<path d="M8 54 A42 42 0 0 1 92 54 Q81 48 71 54 Q61 48 50 54 Q39 48 29 54 Q19 48 8 54 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M29 54 Q34 30 50 12 Q66 30 71 54 Q61 48 50 54 Q39 48 29 54 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<path d="M50 12 V4" ' + lijn(5) + '/>' +
    '<path d="M50 54 V82 A8 8 0 0 1 34 82" fill="none" ' + lijn(5) + '/>');

  /* voetbal: witte voetbal met zwarte vijfhoeken */
  p.voetbal = svg('<circle cx="50" cy="50" r="40" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M50 38 L61.4 46.3 L57.1 59.7 L42.9 59.7 L38.6 46.3 Z" fill="' + ZWART + '"/>' +
    '<path d="M61.2 34.7 L58.3 25.7 L65.9 20.2 L73.5 25.7 L70.6 34.7 Z" fill="' + ZWART + '"/>' +
    '<path d="M68.1 55.8 L75.7 50.3 L83.3 55.8 L80.4 64.8 L71 64.8 Z" fill="' + ZWART + '"/>' +
    '<path d="M50 69 L57.6 74.5 L54.7 83.5 L45.3 83.5 L42.4 74.5 Z" fill="' + ZWART + '"/>' +
    '<path d="M31.9 55.8 L29 64.8 L19.6 64.8 L16.7 55.8 L24.3 50.3 Z" fill="' + ZWART + '"/>' +
    '<path d="M38.8 34.7 L29.4 34.7 L26.5 25.7 L34.1 20.2 L41.7 25.7 Z" fill="' + ZWART + '"/>' +
    '<path d="M50 38 V22 M61.4 46.3 L78.5 40.7 M57.1 59.7 L67.6 74.3 M42.9 59.7 L32.4 74.3 M38.6 46.3 L21.5 40.7" fill="none" ' + lijn(3) + '/>');

  /* zebra: witte zebra met zwarte strepen en manen */
  p.zebra = svg('<rect x="36" y="68" width="8" height="22" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="46" y="68" width="8" height="22" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="64" y="68" width="8" height="22" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="74" y="68" width="8" height="22" rx="3" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M84 52 L92 70" ' + lijn(4) + '/>' +
    '<circle cx="92" cy="72" r="4" fill="' + ZWART + '"/>' +
    '<ellipse cx="15" cy="27" rx="4" ry="7" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<ellipse cx="25" cy="25" rx="4" ry="7" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M24 28 L44 44 L40 62 L20 52 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M30 36 L28 50 M38 44 L36 58" stroke="' + ZWART + '" stroke-width="4" ' + W + '/>' +
    '<ellipse cx="58" cy="58" rx="28" ry="18" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M44 46 V70 M54 42 V74 M64 42 V74 M74 46 V70 M82 52 V64" stroke="' + ZWART + '" stroke-width="5" ' + W + '/>' +
    '<ellipse cx="22" cy="40" rx="11" ry="15" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M30 30 L44 42" stroke="' + ZWART + '" stroke-width="6" ' + W + '/>' +
    '<ellipse cx="20" cy="51" rx="8" ry="5" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="17" cy="40" r="2" fill="' + LIJN + '"/>');

  /* aardbei: rode aardbei met gele pitjes en groen kroontje */
  p.aardbei = svg('<path d="M50 90 C28 76 16 60 20 42 C24 28 40 26 50 32 C60 26 76 28 80 42 C84 60 72 76 50 90 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<ellipse cx="38" cy="50" rx="2" ry="3" fill="' + GEEL + '"/><ellipse cx="50" cy="46" rx="2" ry="3" fill="' + GEEL + '"/>' +
    '<ellipse cx="62" cy="50" rx="2" ry="3" fill="' + GEEL + '"/><ellipse cx="44" cy="62" rx="2" ry="3" fill="' + GEEL + '"/>' +
    '<ellipse cx="56" cy="62" rx="2" ry="3" fill="' + GEEL + '"/><ellipse cx="50" cy="75" rx="2" ry="3" fill="' + GEEL + '"/>' +
    '<ellipse cx="34" cy="62" rx="2" ry="3" fill="' + GEEL + '"/><ellipse cx="66" cy="62" rx="2" ry="3" fill="' + GEEL + '"/>' +
    '<path d="M50 24 V12" ' + lijn(4) + '/>' +
    '<path d="M32 34 L40 22 L48 32 L50 18 L52 32 L60 22 L68 34 Q50 42 32 34 Z" fill="' + GROEN + '" ' + lijn(4) + '/>');

  /* wortel: oranje wortel met groen loof */
  p.wortel = svg('<path d="M50 30 V6 M50 30 L34 12 M50 30 L66 12" fill="none" ' + lijn(12) + '/>' +
    '<path d="M50 30 V6 M50 30 L34 12 M50 30 L66 12" fill="none" stroke="' + GROEN + '" stroke-width="7" ' + W + '/>' +
    '<path d="M36 32 Q50 24 64 32 L54 90 Q50 96 46 90 Z" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<path d="M42 48 H56 M44 62 H56 M46 76 H54" ' + lijn(2.5) + '/>');

  /* tandenborstel: blauwe tandenborstel met witte haren en tandpasta */
  p.tandenborstel = svg('<g transform="rotate(-40 50 50)">' +
    '<path d="M43 92 Q43 97 49 97 Q55 97 55 92 V46 L58 42 V13 Q58 8 53 8 H45 Q40 8 40 13 V42 L43 46 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="58" y="12" width="9" height="28" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M58 18 H67 M58 24 H67 M58 30 H67 M58 36 H67" ' + lijn(1.5) + '/>' +
    '<path d="M67 14 C75 12 76 20 71 22 C77 26 75 32 70 32 C74 36 70 40 67 38 Z" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '</g>');

  /* kikker: groene kikker met bolle ogen, brede lach en poten */
  p.kikker = svg('<ellipse cx="18" cy="72" rx="11" ry="13" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="82" cy="72" rx="11" ry="13" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="33" cy="34" r="12" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="67" cy="34" r="12" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="58" rx="32" ry="24" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="50" cy="72" rx="18" ry="9" fill="' + HUID + '"/>' +
    '<circle cx="33" cy="33" r="6.5" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="67" cy="33" r="6.5" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="34" cy="34" r="3" fill="' + LIJN + '"/><circle cx="66" cy="34" r="3" fill="' + LIJN + '"/>' +
    '<circle cx="45" cy="48" r="1.5" fill="' + LIJN + '"/><circle cx="55" cy="48" r="1.5" fill="' + LIJN + '"/>' +
    '<path d="M30 56 Q50 68 70 56" fill="none" ' + lijn(4) + '/>' +
    '<ellipse cx="30" cy="84" rx="12" ry="5" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="70" cy="84" rx="12" ry="5" fill="' + GROEN + '" ' + lijn(4) + '/>');

  /* ---- deel4 ---- */
/* tijger: oranje tijgerkop met zwarte strepen en witte snuit */
  p.tijger = svg('<circle cx="22" cy="28" r="11" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<circle cx="78" cy="28" r="11" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<circle cx="22" cy="28" r="5" fill="' + ROZE + '"/><circle cx="78" cy="28" r="5" fill="' + ROZE + '"/>' +
    '<circle cx="50" cy="52" r="34" fill="' + ORANJE + '" ' + lijn(5) + '/>' +
    '<path d="M46 20 L50 34 L54 20 Z M32 26 L42 36 L38 22 Z M68 26 L58 36 L62 22 Z" fill="' + ZWART + '"/>' +
    '<path d="M17 50 L28 53 M17 60 L28 59 M83 50 L72 53 M83 60 L72 59" stroke="' + ZWART + '" stroke-width="4" ' + W + '/>' +
    '<ellipse cx="50" cy="66" rx="16" ry="11" fill="' + WIT + '"/>' +
    '<circle cx="38" cy="46" r="4" fill="' + LIJN + '"/><circle cx="62" cy="46" r="4" fill="' + LIJN + '"/>' +
    '<path d="M44 61 H56 L50 67 Z" fill="' + LIJN + '"/>' +
    '<path d="M50 67 V71 M43 73 Q50 79 57 73" fill="none" ' + lijn(3) + '/>');

  /* vogel: blauw vogeltje op een tak */
  p.vogel = svg('<path d="M6 82 Q50 74 94 82" fill="none" stroke="' + BRUIN + '" stroke-width="7" ' + W + '/>' +
    '<path d="M22 79 L16 68" stroke="' + BRUIN + '" stroke-width="5" ' + W + '/>' +
    '<path d="M44 66 L40 79 M54 66 L56 79" ' + lijn(4) + '/>' +
    '<path d="M30 48 L10 34 L18 56 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<ellipse cx="48" cy="52" rx="24" ry="18" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<ellipse cx="52" cy="58" rx="14" ry="9" fill="' + LICHTBLAUW + '"/>' +
    '<circle cx="68" cy="36" r="14" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M80 33 L95 38 L80 43 Z" fill="' + ORANJE + '" ' + lijn(4) + '/>' +
    '<ellipse cx="42" cy="48" rx="12" ry="8" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="71" cy="33" r="3" fill="' + LIJN + '"/>');

  /* auto: rode auto van opzij met twee wielen */
  p.auto = svg('<path d="M6 62 V50 Q6 44 14 44 H26 L40 24 H68 L82 44 H88 Q94 44 94 52 V62 Q94 70 86 70 H14 Q6 70 6 62 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M32 44 L43 29 H54 V44 Z M60 29 H66 L76 44 H60 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M57 46 V64" ' + lijn(3) + '/>' +
    '<circle cx="26" cy="72" r="11" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/><circle cx="26" cy="72" r="4" fill="' + GRIJS + '"/>' +
    '<circle cx="74" cy="72" r="11" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/><circle cx="74" cy="72" r="4" fill="' + GRIJS + '"/>' +
    '<circle cx="89" cy="54" r="3.5" fill="' + GEEL + '"/>');

  /* tafel: houten tafel met vier poten */
  p.tafel = svg('<rect x="28" y="30" width="7" height="34" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="80" y="30" width="7" height="34" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M8 44 L26 30 H92 L74 44 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<rect x="8" y="44" width="66" height="9" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<rect x="12" y="53" width="8" height="28" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="62" y="53" width="8" height="28" fill="' + BRUIN + '" ' + lijn(4) + '/>');

  /* kasteel: grijs kasteel met twee torens, kantelen, poort en vlag */
  p.kasteel = svg('<path d="M11 22 V4" ' + lijn(4) + '/><path d="M11 4 L28 9 L11 14 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<path d="M8 90 V22 H14 V28 H17 V22 H23 V28 H26 V22 H32 V90 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M68 90 V22 H74 V28 H77 V22 H83 V28 H86 V22 H92 V90 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M32 90 V50 H38 V44 H44 V50 H47 V44 H53 V50 H56 V44 H62 V50 H68 V90 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M40 90 V72 a10 10 0 0 1 20 0 V90 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M16 46 v-6 a4 4 0 0 1 8 0 v6 Z M76 46 v-6 a4 4 0 0 1 8 0 v6 Z M16 70 v-6 a4 4 0 0 1 8 0 v6 Z M76 70 v-6 a4 4 0 0 1 8 0 v6 Z" fill="' + LIJN + '"/>');

  /* kabouter: kabouter met rode puntmuts en witte baard */
  p.kabouter = svg('<path d="M28 56 Q24 94 50 96 Q76 94 72 56 Q50 66 28 56 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="58" r="14" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M50 6 L24 50 H76 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<rect x="20" y="44" width="60" height="9" rx="4" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="44" cy="60" r="2.5" fill="' + LIJN + '"/><circle cx="56" cy="60" r="2.5" fill="' + LIJN + '"/>' +
    '<circle cx="50" cy="66" r="4" fill="' + ROZE + '" ' + lijn(2) + '/>' +
    '<path d="M40 70 Q50 64 60 70 Q50 78 40 70 Z" fill="' + WIT + '" ' + lijn(3) + '/>');

  /* piraat: piraat met rode hoofddoek, ooglapje, baard en oorring */
  p.piraat = svg('<circle cx="50" cy="56" r="30" fill="' + HUID + '" ' + lijn(5) + '/>' +
    '<path d="M26 66 Q28 92 50 92 Q72 92 74 66 Q50 76 26 66 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M43 66 Q50 72 57 66" fill="none" ' + lijn(3) + '/>' +
    '<path d="M20 50 Q20 24 50 24 Q80 24 80 50 Q50 44 20 50 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M78 40 L96 34 L90 50 Z" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="36" cy="34" r="3" fill="' + WIT + '"/><circle cx="50" cy="30" r="3" fill="' + WIT + '"/><circle cx="64" cy="34" r="3" fill="' + WIT + '"/>' +
    '<path d="M22 50 L78 46" ' + lijn(3) + '/>' +
    '<circle cx="38" cy="54" r="8" fill="' + ZWART + '" ' + lijn(3) + '/>' +
    '<circle cx="62" cy="54" r="4" fill="' + LIJN + '"/>' +
    '<circle cx="20" cy="66" r="4" fill="' + GEEL + '" ' + lijn(2) + '/>');

  /* robot: grijs-blauwe robot met antenne en knopjes */
  p.robot = svg('<path d="M50 20 V10" ' + lijn(4) + '/><circle cx="50" cy="8" r="5" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<path d="M6 60 q0-4 4-4 h4 q4 0 4 4 v16 q0 4-4 4 h-4 q-4 0-4-4 Z M82 60 q0-4 4-4 h4 q4 0 4 4 v16 q0 4-4 4 h-4 q-4 0-4-4 Z M30 82 H44 V94 H30 Z M56 82 H70 V94 H56 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="18" y="52" width="64" height="32" rx="6" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<rect x="26" y="20" width="48" height="32" rx="7" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<circle cx="39" cy="34" r="6" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/><circle cx="61" cy="34" r="6" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M40 44 H60" ' + lijn(4) + '/>' +
    '<circle cx="38" cy="66" r="4" fill="' + ROOD + '"/><circle cx="50" cy="66" r="4" fill="' + GEEL + '"/><circle cx="62" cy="66" r="4" fill="' + GROEN + '"/>');

  /* raket: blauw-witte raket met rond raampje en vlam */
  p.raket = svg('<path d="M38 78 Q50 100 62 78 Z" fill="' + ORANJE + '"/><path d="M44 78 Q50 92 56 78 Z" fill="' + GEEL + '"/>' +
    '<path d="M32 56 L14 80 H32 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M68 56 L86 80 H68 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M50 6 C68 22 72 48 68 72 H32 C28 48 32 22 50 6 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M50 6 C58 14 63 26 65 36 H35 C37 26 42 14 50 6 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="50" r="10" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/><circle cx="47" cy="47" r="3" fill="' + WIT + '"/>' +
    '<rect x="36" y="70" width="28" height="8" rx="3" fill="' + BLAUW + '" ' + lijn(3) + '/>');

  /* ballon: rode ballon aan een touwtje */
  p.ballon = svg('<ellipse cx="50" cy="40" rx="26" ry="32" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<ellipse cx="40" cy="28" rx="5" ry="9" fill="' + WIT + '" opacity="0.6"/>' +
    '<path d="M44 78 L56 78 L50 70 Z" fill="' + ROOD + '" ' + lijn(3) + '/>' +
    '<path d="M50 78 Q42 88 50 96" fill="none" ' + lijn(4) + '/>');

  /* egel: bruine egel met stekels en snuitje */
  p.egel = svg('<path d="M10 64 L4 53 L15 46 L15 33 L28 33 L35 22 L46 28 L57 22 L64 33 L77 33 L77 46 L88 53 L82 64 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M22 50 L28 40 M34 46 L40 34 M46 44 L48 32 M58 46 L56 34 M70 50 L64 40" fill="none" stroke="' + LIJN + '" stroke-width="3" opacity="0.55" ' + W + '/>' +
    '<ellipse cx="32" cy="84" rx="7" ry="4" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/><ellipse cx="66" cy="84" rx="7" ry="4" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<path d="M10 64 Q12 82 36 82 H64 Q80 82 96 72 Q92 64 80 64 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="94" cy="72" r="3.5" fill="' + ZWART + '"/>' +
    '<circle cx="78" cy="70" r="3" fill="' + LIJN + '"/>');

  /* spiegel: handspiegel met gouden rand */
  p.spiegel = svg('<rect x="44" y="70" width="12" height="26" rx="6" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="40" rx="28" ry="32" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<ellipse cx="50" cy="40" rx="20" ry="24" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M40 26 L36 46 M46 22 L44 30" stroke="' + WIT + '" stroke-width="4" opacity="0.8" ' + W + '/>');

  /* ladder: houten ladder met sporten */
  p.ladder = svg('<rect x="28" y="6" width="8" height="88" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="64" y="6" width="8" height="88" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="34" y="16" width="32" height="6" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="34" y="32" width="32" height="6" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="34" y="48" width="32" height="6" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="34" y="64" width="32" height="6" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="34" y="80" width="32" height="6" fill="' + BRUIN + '" ' + lijn(3) + '/>');

  /* emmer: blauwe emmer met hengsel */
  p.emmer = svg('<path d="M24 40 Q50 4 76 40" fill="none" ' + lijn(5) + '/>' +
    '<path d="M22 40 L28 90 H72 L78 40 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M26 62 H74" stroke="' + LICHTBLAUW + '" stroke-width="4" ' + W + '/>' +
    '<ellipse cx="50" cy="40" rx="28" ry="7" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>');

  /* schommel: schommel met rood plankje aan een houten frame */
  p.schommel = svg('<path d="M10 92 L18 12 L26 92 M74 92 L82 12 L90 92" fill="none" stroke="' + BRUIN + '" stroke-width="6" ' + W + '/>' +
    '<path d="M14 12 H86" stroke="' + BRUIN + '" stroke-width="8" ' + W + '/>' +
    '<path d="M38 14 V66 M62 14 V66" stroke="' + DONKERGRIJS + '" stroke-width="4" ' + W + '/>' +
    '<rect x="30" y="64" width="40" height="9" rx="3" fill="' + ROOD + '" ' + lijn(4) + '/>');

  /* vliegtuig: wit vliegtuig met blauwe vleugels en raampjes */
  p.vliegtuig = svg('<path d="M14 44 L22 18 H36 L30 44 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M42 42 L34 32 H50 L58 42 Z" fill="' + BLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M10 52 Q10 42 24 42 H70 Q90 42 94 52 Q90 62 70 62 H24 Q10 62 10 52 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M40 60 L28 80 H44 L60 60 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M78 44 Q90 45 92 52 H78 Z" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<circle cx="36" cy="50" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2) + '/><circle cx="48" cy="50" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2) + '/><circle cx="60" cy="50" r="3.5" fill="' + LICHTBLAUW + '" ' + lijn(2) + '/>');

  /* dolfijn: grijze dolfijn die in een boog boven het water springt */
  p.dolfijn = svg('<path d="M4 86 Q12 78 20 86 T36 86 T52 86 T68 86 T84 86 T100 86" fill="none" stroke="' + BLAUW + '" stroke-width="5" ' + W + '/>' +
    '<path d="M6 64 C14 40 34 22 56 22 C74 22 84 36 84 52 L94 42 L96 60 L84 64 C80 50 68 42 56 42 C40 42 22 52 6 64 Z" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M48 24 L54 8 L66 26 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M44 42 L42 54 L56 44 Z" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="24" cy="48" r="2.5" fill="' + LIJN + '"/>' +
    '<path d="M12 58 Q18 60 22 56" fill="none" ' + lijn(2) + '/>');

  /* krokodil: groene krokodil met lange bek en scherpe tanden */
  p.krokodil = svg('<path d="M16 44 Q0 50 4 72 Q10 60 22 62 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<path d="M16 64 H25 V80 H16 Z M38 64 H47 V80 H38 Z M58 64 H67 V80 H58 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<rect x="10" y="38" width="56" height="30" rx="14" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<path d="M22 38 L28 26 L34 38 Z M38 38 L44 26 L50 38 Z" fill="' + DONKERGROEN + '" ' + lijn(3) + '/>' +
    '<rect x="54" y="46" width="42" height="20" rx="8" fill="' + GROEN + '" ' + lijn(5) + '/>' +
    '<path d="M60 58 H94" ' + lijn(3) + '/>' +
    '<path d="M62 58 L65 63 L68 58 L71 63 L74 58 L77 63 L80 58 L83 63 L86 58 L89 63 L92 58 Z" fill="' + WIT + '" ' + lijn(2) + '/>' +
    '<circle cx="62" cy="44" r="6" fill="' + GROEN + '" ' + lijn(4) + '/><circle cx="63" cy="44" r="2.5" fill="' + LIJN + '"/>' +
    '<circle cx="91" cy="51" r="1.8" fill="' + LIJN + '"/>');

  /* papegaai: rood-groen-blauwe papegaai op een stok */
  p.papegaai = svg('<path d="M40 74 L34 96 L44 90 L50 96 L54 74 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M8 80 H92" stroke="' + BRUIN + '" stroke-width="7" ' + W + '/>' +
    '<ellipse cx="48" cy="54" rx="18" ry="24" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M36 40 Q22 58 34 76 Q46 66 46 44 Z" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="54" cy="30" r="14" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M64 24 Q80 24 76 38 Q70 34 64 34 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="56" cy="27" r="5" fill="' + WIT + '" ' + lijn(2) + '/><circle cx="57" cy="27" r="2.2" fill="' + LIJN + '"/>' +
    '<path d="M44 76 L42 82 M52 76 L54 82" ' + lijn(3) + '/>');

  /* schildpad: schildpad met donkergroen schild met patroon */
  p.schildpad = svg('<path d="M14 62 L4 72 L16 70 Z" fill="' + GROEN + '" ' + lijn(3) + '/>' +
    '<rect x="24" y="66" width="12" height="14" rx="4" fill="' + GROEN + '" ' + lijn(4) + '/><rect x="60" y="66" width="12" height="14" rx="4" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="86" cy="58" r="11" fill="' + GROEN + '" ' + lijn(4) + '/>' +
    '<circle cx="89" cy="55" r="2.5" fill="' + LIJN + '"/><path d="M90 62 Q94 62 96 60" fill="none" ' + lijn(2) + '/>' +
    '<path d="M16 60 Q16 24 48 24 Q80 24 80 60 Z" fill="' + DONKERGROEN + '" ' + lijn(5) + '/>' +
    '<path d="M48 26 V58 M30 31 L36 58 M66 31 L60 58 M19 46 H77" fill="none" stroke="' + GEEL + '" stroke-width="3" ' + W + '/>' +
    '<rect x="12" y="58" width="72" height="10" rx="5" fill="' + GROEN + '" ' + lijn(4) + '/>');

  /* eekhoorn: eekhoorn met dikke pluimstaart en een eikeltje */
  p.eekhoorn = svg('<g transform="translate(7 0)">' +
    '<path d="M34 86 C6 82 2 44 20 30 C34 18 48 34 38 42 C28 48 28 66 42 78 Z" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<ellipse cx="50" cy="90" rx="8" ry="4" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/><ellipse cx="68" cy="90" rx="8" ry="4" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<ellipse cx="58" cy="68" rx="20" ry="22" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<ellipse cx="60" cy="72" rx="11" ry="14" fill="' + HUID + '"/>' +
    '<path d="M52 24 L54 10 L62 20 Z M68 20 L76 10 L76 24 Z" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<circle cx="64" cy="34" r="15" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<circle cx="70" cy="31" r="3" fill="' + LIJN + '"/><circle cx="78" cy="37" r="2.5" fill="' + LIJN + '"/>' +
    '<ellipse cx="60" cy="60" rx="7" ry="8" fill="' + BRUIN + '" ' + lijn(3) + '/><path d="M52 57 Q60 49 68 57 Z" fill="' + OKER + '" ' + lijn(3) + '/>' +
    '<path d="M47 63 L53 60 M73 63 L67 60" ' + lijn(4) + '/>' +
    '</g>');

  /* kameel: kameel met twee bulten en lange nek */
  p.kameel = svg('<path d="M14 60 Q6 68 10 78" fill="none" ' + lijn(4) + '/>' +
    '<rect x="18" y="64" width="8" height="28" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><rect x="30" y="64" width="8" height="28" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="60" y="64" width="8" height="28" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/><rect x="72" y="64" width="8" height="28" rx="3" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M70 62 Q74 44 78 26 L90 24 Q88 44 84 64 Z" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M12 70 Q10 52 24 52 Q32 30 44 50 Q56 28 66 50 Q80 52 82 70 Z" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M80 20 L78 12 L86 18 Z" fill="' + LICHTBRUIN + '" ' + lijn(3) + '/>' +
    '<ellipse cx="86" cy="26" rx="11" ry="8" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="88" cy="24" r="2.5" fill="' + LIJN + '"/><circle cx="95" cy="27" r="1.5" fill="' + LIJN + '"/>');

  /* zeehond: grijze zeehond die op een ijsschots ligt */
  p.zeehond = svg('<path d="M6 78 L14 68 H88 L96 78 L88 92 H14 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M82 56 L96 48 L94 66 L84 68 Z" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<ellipse cx="52" cy="58" rx="34" ry="14" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M40 68 L30 78 L54 72 Z" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<circle cx="26" cy="44" r="15" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<ellipse cx="20" cy="49" rx="8" ry="5" fill="' + WIT + '"/>' +
    '<circle cx="15" cy="47" r="3" fill="' + ZWART + '"/>' +
    '<circle cx="22" cy="40" r="3" fill="' + LIJN + '"/><circle cx="32" cy="40" r="3" fill="' + LIJN + '"/>' +
    '<path d="M10 52 L2 50 M10 54 L3 58" ' + lijn(2) + '/>');

  /* walvis: grote blauwe walvis met waterstraal */
  p.walvis = svg('<path d="M4 84 Q12 78 20 84 T36 84 T52 84 T68 84 T84 84 T100 84" fill="none" stroke="' + BLAUW + '" stroke-width="4" ' + W + '/>' +
    '<path d="M40 28 V16 M40 20 Q30 8 20 12 M40 20 Q50 8 60 12" fill="none" stroke="' + LICHTBLAUW + '" stroke-width="5" ' + W + '/>' +
    '<circle cx="19" cy="11" r="3.5" fill="' + LICHTBLAUW + '"/><circle cx="61" cy="11" r="3.5" fill="' + LICHTBLAUW + '"/>' +
    '<path d="M82 50 L94 38 L98 50 L94 62 L82 58 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M8 56 Q8 28 44 28 Q80 28 88 50 Q84 68 44 68 Q8 68 8 56 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M12 60 Q40 72 74 60 Q40 62 12 56 Z" fill="' + LICHTBLAUW + '"/>' +
    '<circle cx="24" cy="46" r="3.5" fill="' + LIJN + '"/>' +
    '<path d="M14 54 Q22 58 30 54" fill="none" ' + lijn(3) + '/>');

  /* regenboog: regenboog met een wolk aan elke kant */
  p.regenboog = svg('<path d="M6 70 A44 44 0 0 1 94 70" fill="none" stroke="' + ROOD + '" stroke-width="7"/>' +
    '<path d="M13 70 A37 37 0 0 1 87 70" fill="none" stroke="' + ORANJE + '" stroke-width="7"/>' +
    '<path d="M20 70 A30 30 0 0 1 80 70" fill="none" stroke="' + GEEL + '" stroke-width="7"/>' +
    '<path d="M27 70 A23 23 0 0 1 73 70" fill="none" stroke="' + GROEN + '" stroke-width="7"/>' +
    '<path d="M34 70 A16 16 0 0 1 66 70" fill="none" stroke="' + BLAUW + '" stroke-width="7"/>' +
    '<path d="M41 70 A9 9 0 0 1 59 70" fill="none" stroke="' + PAARS + '" stroke-width="7"/>' +
    '<path d="M4 84 Q0 72 12 70 Q14 58 26 62 Q36 56 40 68 Q50 70 46 84 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M96 84 Q100 72 88 70 Q86 58 74 62 Q64 56 60 68 Q50 70 54 84 Z" fill="' + WIT + '" ' + lijn(4) + '/>');

  /* sneeuwpop: sneeuwpop met wortelneus, hoge hoed en sjaal */
  p.sneeuwpop = svg('<circle cx="50" cy="75" r="21" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M36 46 L16 36 M64 46 L84 36" stroke="' + BRUIN + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="50" cy="48" r="15" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="44" r="2.2" fill="' + ZWART + '"/><circle cx="50" cy="52" r="2.2" fill="' + ZWART + '"/>' +
    '<circle cx="50" cy="26" r="11" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M38 36 Q50 42 62 36" fill="none" stroke="' + ROOD + '" stroke-width="6" ' + W + '/>' +
    '<path d="M58 38 L62 50" stroke="' + ROOD + '" stroke-width="6" ' + W + '/>' +
    '<circle cx="46" cy="23" r="2" fill="' + ZWART + '"/><circle cx="55" cy="23" r="2" fill="' + ZWART + '"/>' +
    '<path d="M51 26 L68 31 L51 31 Z" fill="' + ORANJE + '" ' + lijn(2) + '/>' +
    '<rect x="36" y="14" width="28" height="5" rx="2" fill="' + ZWART + '"/>' +
    '<rect x="41" y="3" width="18" height="12" rx="2" fill="' + ZWART + '"/>');

  /* zonnebril: zonnebril met rood montuur en donkere glazen */
  p.zonnebril = svg('<path d="M46 46 Q50 40 54 46" fill="none" ' + lijn(5) + '/>' +
    '<path d="M4 44 L0 38 M96 44 L100 38" ' + lijn(4) + '/>' +
    '<rect x="4" y="32" width="42" height="36" rx="14" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<rect x="54" y="32" width="42" height="36" rx="14" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<rect x="9" y="37" width="32" height="26" rx="10" fill="' + DONKERGRIJS + '" ' + lijn(2) + '/>' +
    '<rect x="59" y="37" width="32" height="26" rx="10" fill="' + DONKERGRIJS + '" ' + lijn(2) + '/>' +
    '<path d="M16 44 L14 54 M66 44 L64 54" stroke="' + WIT + '" stroke-width="3" opacity="0.7" ' + W + '/>');

  /* pannenkoek: stapel pannenkoeken met stroop en boter op een bord */
  p.pannenkoek = svg('<ellipse cx="50" cy="80" rx="44" ry="10" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<rect x="20" y="66" width="60" height="12" rx="6" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="20" y="56" width="60" height="12" rx="6" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="20" y="46" width="60" height="12" rx="6" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="20" y="36" width="60" height="12" rx="6" fill="' + LICHTBRUIN + '" ' + lijn(4) + '/>' +
    '<path d="M24 37 Q50 27 76 37 Q74 44 66 44 L64 50 Q60 44 50 44 Q40 46 36 50 L34 44 Q26 44 24 37 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="44" y="24" width="12" height="9" rx="2" fill="' + GEEL + '" ' + lijn(3) + '/>');

  /* boterham: boterham met een plak kaas */
  p.boterham = svg('<path d="M14 36 Q14 14 32 16 Q50 8 68 16 Q86 14 86 36 V86 Q86 92 80 92 H20 Q14 92 14 86 Z" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M22 38 Q22 22 34 24 Q50 16 66 24 Q78 22 78 38 V80 Q78 84 74 84 H26 Q22 84 22 80 Z" fill="' + CREME + '"/>' +
    '<path d="M30 44 L74 40 L78 82 L34 86 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="44" cy="58" r="4" fill="' + OKER + '" opacity="0.45"/><circle cx="62" cy="68" r="5" fill="' + OKER + '" opacity="0.45"/><circle cx="56" cy="50" r="3" fill="' + OKER + '" opacity="0.45"/><circle cx="42" cy="76" r="3" fill="' + OKER + '" opacity="0.45"/>');

  /* sleutel: gouden sleutel met rond oog en tandjes */
  p.sleutel = svg('<rect x="42" y="45" width="50" height="10" rx="3" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<rect x="68" y="54" width="8" height="13" rx="2" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<rect x="82" y="54" width="8" height="11" rx="2" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<circle cx="26" cy="50" r="20" fill="' + GEEL + '" ' + lijn(5) + '/>' +
    '<circle cx="26" cy="50" r="7" fill="' + CREME + '" ' + lijn(3) + '/>');

  /* gitaar: bruine gitaar met hals en snaren */
  p.gitaar = svg('<rect x="45" y="8" width="10" height="52" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<rect x="42" y="2" width="16" height="14" rx="3" fill="' + BRUIN + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="72" r="24" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="44" r="17" fill="' + LICHTBRUIN + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="72" r="24" fill="' + LICHTBRUIN + '"/><circle cx="50" cy="44" r="17" fill="' + LICHTBRUIN + '"/>' +
    '<circle cx="50" cy="60" r="8" fill="' + LIJN + '"/>' +
    '<rect x="38" y="80" width="24" height="5" rx="2" fill="' + BRUIN + '" ' + lijn(2) + '/>' +
    '<path d="M47 8 V80 M50 8 V80 M53 8 V80" stroke="' + WIT + '" stroke-width="1.5"/>' +
    '<path d="M45 20 H55 M45 30 H55 M45 40 H55" stroke="' + LIJN + '" stroke-width="1.5"/>');

  /* trommel: rode trommel met twee stokjes */
  p.trommel = svg('<path d="M16 40 V74 Q16 86 50 86 Q84 86 84 74 V40 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<path d="M22 46 L34 78 L46 46 L58 78 L70 46 L79 74" fill="none" stroke="' + GEEL + '" stroke-width="3" ' + W + '/>' +
    '<ellipse cx="50" cy="40" rx="34" ry="10" fill="' + CREME + '" ' + lijn(5) + '/>' +
    '<path d="M28 12 L56 38 M72 12 L44 38" stroke="' + LICHTBRUIN + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="28" cy="12" r="4.5" fill="' + LICHTBRUIN + '" ' + lijn(2) + '/><circle cx="72" cy="12" r="4.5" fill="' + LICHTBRUIN + '" ' + lijn(2) + '/>');

  /* telefoon: mobiele telefoon met lichtblauw scherm */
  p.telefoon = svg('<rect x="30" y="6" width="40" height="88" rx="8" fill="' + DONKERGRIJS + '" ' + lijn(5) + '/>' +
    '<rect x="34" y="16" width="32" height="64" rx="3" fill="' + LICHTBLAUW + '" ' + lijn(2) + '/>' +
    '<path d="M38 22 L38 40" stroke="' + WIT + '" stroke-width="3" opacity="0.8" ' + W + '/>' +
    '<circle cx="50" cy="87" r="3.5" fill="' + GRIJS + '"/>' +
    '<path d="M45 11 H55" stroke="' + GRIJS + '" stroke-width="2.5" ' + W + '/>');

  /* paddenstoel: rode paddenstoel met witte stippen */
  p.paddenstoel = svg('<path d="M12 90 Q22 84 32 90 M68 90 Q78 84 88 90" fill="none" stroke="' + GROEN + '" stroke-width="4" ' + W + '/>' +
    '<rect x="36" y="50" width="28" height="42" rx="9" fill="' + CREME + '" ' + lijn(5) + '/>' +
    '<path d="M8 52 Q8 14 50 14 Q92 14 92 52 Q50 60 8 52 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<circle cx="30" cy="34" r="6" fill="' + WIT + '"/><circle cx="52" cy="24" r="5" fill="' + WIT + '"/><circle cx="70" cy="38" r="6" fill="' + WIT + '"/><circle cx="46" cy="44" r="4" fill="' + WIT + '"/><circle cx="18" cy="48" r="3" fill="' + WIT + '"/>');

  /* glijbaan: gele glijbaan met trapje */
  p.glijbaan = svg('<path d="M14 92 V28 M26 92 V28 M14 40 H26 M14 52 H26 M14 64 H26 M14 76 H26" fill="none" ' + lijn(4) + '/>' +
    '<rect x="10" y="24" width="28" height="7" rx="3" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M78 84 V92 M60 74 V92" ' + lijn(4) + '/>' +
    '<path d="M36 30 Q40 60 62 74 Q78 84 96 84" fill="none" ' + lijn(18) + '/>' +
    '<path d="M36 30 Q40 60 62 74 Q78 84 96 84" fill="none" stroke="' + GEEL + '" stroke-width="11" ' + W + '/>');

  /* potlood: geel potlood met roze gummetje */
  p.potlood = svg('<g transform="rotate(35 50 50)">' +
    '<rect x="40" y="4" width="20" height="10" rx="3" fill="' + ROZE + '" ' + lijn(4) + '/>' +
    '<rect x="40" y="13" width="20" height="8" fill="' + GRIJS + '" ' + lijn(3) + '/>' +
    '<rect x="40" y="20" width="20" height="56" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M50 22 V74" stroke="' + OKER + '" stroke-width="2"/>' +
    '<path d="M40 76 L50 95 L60 76 Z" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M46 87 L50 95 L54 87 Z" fill="' + LIJN + '"/>' +
    '</g>');

  /* rugzak: blauwe rugzak met voorvak en schouderbanden */
  p.rugzak = svg('<path d="M30 28 Q10 46 14 88 L24 88 Q22 50 40 28 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M70 28 Q90 46 86 88 L76 88 Q78 50 60 28 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M42 22 Q50 6 58 22" fill="none" ' + lijn(5) + '/>' +
    '<rect x="22" y="22" width="56" height="68" rx="14" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M24 44 Q24 24 50 24 Q76 24 76 44 Z" fill="' + BLAUW + '" ' + lijn(4) + '/>' +
    '<rect x="32" y="56" width="36" height="26" rx="8" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<path d="M38 62 H62" ' + lijn(3) + '/>' +
    '<rect x="36" y="42" width="8" height="8" rx="2" fill="' + GEEL + '" ' + lijn(2) + '/><rect x="56" y="42" width="8" height="8" rx="2" fill="' + GEEL + '" ' + lijn(2) + '/>');

  /* molen: Hollandse molen met vier wieken */
  p.molen = svg('<path d="M26 92 L36 42 H64 L74 92 Z" fill="' + BRUIN + '" ' + lijn(5) + '/>' +
    '<path d="M32 44 Q50 18 68 44 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="46" y="58" width="8" height="8" fill="' + LICHTBLAUW + '" ' + lijn(3) + '/>' +
    '<path d="M44 92 V78 a6 6 0 0 1 12 0 V92 Z" fill="' + DONKERGRIJS + '" ' + lijn(3) + '/>' +
    '<g transform="rotate(45 50 38)">' +
    '<rect x="50" y="4" width="9" height="26" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<rect x="41" y="46" width="9" height="26" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<rect x="16" y="29" width="26" height="9" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<rect x="58" y="38" width="26" height="9" fill="' + CREME + '" ' + lijn(3) + '/>' +
    '<path d="M50 2 V74 M14 38 H86" ' + lijn(5) + '/>' +
    '</g>' +
    '<circle cx="50" cy="38" r="4" fill="' + ROOD + '" ' + lijn(3) + '/>');

  /* toren: hoge stenen toren met rood puntdak */
  p.toren = svg('<rect x="32" y="40" width="36" height="54" fill="' + GRIJS + '" ' + lijn(5) + '/>' +
    '<path d="M32 54 H68 M32 68 H68 M32 82 H68 M44 54 V68 M56 68 V82 M50 40 V54" stroke="' + DONKERGRIJS + '" stroke-width="2"/>' +
    '<path d="M44 62 v-6 a6 6 0 0 1 12 0 v6 Z" fill="' + LIJN + '"/>' +
    '<path d="M43 94 V84 a7 7 0 0 1 14 0 V94 Z" fill="' + BRUIN + '" ' + lijn(3) + '/>' +
    '<rect x="27" y="38" width="46" height="6" rx="2" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M26 40 L50 6 L74 40 Z" fill="' + ROOD + '" ' + lijn(5) + '/>' +
    '<circle cx="50" cy="8" r="3" fill="' + GEEL + '" ' + lijn(2) + '/>');

  /* prinses: prinses met gouden kroon en roze jurk */
  p.prinses = svg('<path d="M50 44 L18 92 H82 Z" fill="' + ROZE + '" ' + lijn(5) + '/>' +
    '<path d="M42 52 L28 68 M58 52 L72 68" stroke="' + HUID + '" stroke-width="7" ' + W + '/>' +
    '<path d="M30 84 H70" stroke="' + WIT + '" stroke-width="4" ' + W + '/>' +
    '<circle cx="50" cy="60" r="3.5" fill="' + GEEL + '"/>' +
    '<path d="M32 30 Q30 60 38 64 L62 64 Q70 60 68 30 Q60 12 50 14 Q40 12 32 30 Z" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="32" r="14" fill="' + HUID + '" ' + lijn(4) + '/>' +
    '<path d="M36 20 L36 8 L43 14 L50 4 L57 14 L64 8 V20 Z" fill="' + GEEL + '" ' + lijn(3) + '/>' +
    '<circle cx="45" cy="31" r="2.2" fill="' + LIJN + '"/><circle cx="55" cy="31" r="2.2" fill="' + LIJN + '"/>' +
    '<path d="M45 38 Q50 42 55 38" fill="none" ' + lijn(2) + '/>');

  /* vuurtoren: rood-wit gestreepte vuurtoren met lichtbundel */
  p.vuurtoren = svg('<path d="M62 18 L98 6 L98 32 Z" fill="' + GEEL + '" opacity="0.6"/>' +
    '<path d="M18 92 Q22 80 36 84 H64 Q78 80 82 92 Z" fill="' + DONKERGRIJS + '" ' + lijn(4) + '/>' +
    '<path d="M30 84 L36 30 H64 L70 84 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<path d="M35 42 H65 L66 52 H34 Z M32 62 H68 L69 74 H31 Z" fill="' + ROOD + '"/>' +
    '<path d="M44 84 V76 a6 6 0 0 1 12 0 V84 Z" fill="' + LIJN + '"/>' +
    '<rect x="30" y="26" width="40" height="6" rx="2" fill="' + GRIJS + '" ' + lijn(4) + '/>' +
    '<rect x="40" y="14" width="20" height="13" fill="' + GEEL + '" ' + lijn(4) + '/>' +
    '<path d="M38 14 L50 4 L62 14 Z" fill="' + ROOD + '" ' + lijn(4) + '/>');

  /* ijsbeer: witte ijsbeer die op het ijs staat */
  p.ijsbeer = svg('<path d="M4 80 L12 72 H88 L96 80 L90 92 H10 Z" fill="' + LICHTBLAUW + '" ' + lijn(4) + '/>' +
    '<circle cx="16" cy="58" r="4" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<path d="M22 64 H33 V80 H22 Z M36 66 H46 V80 H36 Z M56 66 H66 V80 H56 Z M68 64 H79 V80 H68 Z" fill="' + WIT + '" ' + lijn(4) + '/>' +
    '<path d="M16 66 Q14 40 40 36 Q64 32 76 44 Q80 56 78 68 Q50 72 22 70 Q14 70 16 66 Z" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<circle cx="70" cy="28" r="5.5" fill="' + WIT + '" ' + lijn(3) + '/><circle cx="90" cy="30" r="5.5" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="80" cy="40" r="15" fill="' + WIT + '" ' + lijn(5) + '/>' +
    '<ellipse cx="90" cy="45" rx="7" ry="5.5" fill="' + WIT + '" ' + lijn(3) + '/>' +
    '<circle cx="94" cy="44" r="3" fill="' + ZWART + '"/>' +
    '<circle cx="82" cy="36" r="3" fill="' + LIJN + '"/>');

  /* ---- extra ---- */
/* wip: wipwap, een schuine plank op een blauwe driehoek met twee rode zitjes */
  p.wip = svg('<path d="M6 88 H94" ' + lijn(5) + '/>' +
    '<path d="M36 88 L50 58 L64 88 Z" fill="' + BLAUW + '" ' + lijn(5) + '/>' +
    '<path d="M10 72 L90 44" stroke="' + LIJN + '" stroke-width="18" ' + W + '/>' +
    '<path d="M10 72 L90 44" stroke="' + LICHTBRUIN + '" stroke-width="10" ' + W + '/>' +
    '<rect x="6" y="56" width="20" height="10" rx="4" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<rect x="74" y="28" width="20" height="10" rx="4" fill="' + ROOD + '" ' + lijn(4) + '/>' +
    '<circle cx="50" cy="58" r="4.5" fill="' + LIJN + '"/>');

  /* ===== EINDE FRAGMENTEN ===== */

  return {
    svg: function (naam) { return p[naam] || ''; },
    heeft: function (naam) { return Object.prototype.hasOwnProperty.call(p, naam); },
    namen: function () { return Object.keys(p); }
  };
})();
