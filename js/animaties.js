/* animaties.js - beloningsanimaties voor aapje en raket (ontwikkelplan §7.1, §7.2).
   Alle varianten duren DUUR ms (<= 1,5 s). De spellen negeren toetsen tot de animatie klaar is.

   Gebruik:
     var duur = Animaties.speel('aapje', { figuur, laag, van, naar, icoon });
       figuur: element met de SVG-figuur (absoluut gepositioneerd in het speelveld)
       laag:   element voor tijdelijke effecten (liaan, maan, rook, vliegend icoon)
       van:    element waar het beloningsicoon vertrekt (letterkaart / invulvak)
       naar:   element waar het naartoe vliegt (teller)
       icoon:  naam van het icoon dat vliegt ('banaan' / 'ster')
   Variant wordt willekeurig gekozen, nooit twee keer dezelfde achter elkaar. */

var Animaties = (function () {
  'use strict';

  var DUUR = 1400;

  var VARIANTEN = {
    aapje: ['spring', 'liaan', 'salto', 'eet'],
    raket: ['lancering', 'looping', 'maan'],
    vis: ['sprong', 'zwem', 'bubbels']
  };

  var vorige = {};

  /* Kies een variant; nooit dezelfde als de vorige keer voor deze figuur. */
  function kies(figuurNaam, random) {
    var r = random || Math.random;
    var lijst = VARIANTEN[figuurNaam] || [];
    var kandidaten = lijst.filter(function (v) { return v !== vorige[figuurNaam]; });
    if (kandidaten.length === 0) kandidaten = lijst.slice();
    var v = kandidaten[Math.floor(r() * kandidaten.length)];
    vorige[figuurNaam] = v;
    return v;
  }

  function middel(el, tovLaag) {
    var a = el.getBoundingClientRect(), b = tovLaag.getBoundingClientRect();
    return { x: a.left - b.left + a.width / 2, y: a.top - b.top + a.height / 2, w: a.width, h: a.height, top: a.top - b.top, bottom: a.bottom - b.top };
  }

  function maakEffect(laag, klasse, html, stijl) {
    var el = document.createElement('div');
    el.className = 'effect ' + klasse;
    if (html) el.innerHTML = html;
    if (stijl) for (var k in stijl) el.style[k] = stijl[k];
    laag.appendChild(el);
    return el;
  }

  /* Beloningsicoon vliegt van `van` naar `naar` (banaan naar de teller, ster naar de teller). */
  function vliegIcoon(o) {
    var start = middel(o.van, o.laag), eind = middel(o.naar, o.laag);
    var maat = Math.max(40, Math.min(96, start.h * 0.35));
    var el = maakEffect(o.laag, 'vlieg-icoon', Icons.svg(o.icoon), {
      left: (start.x - maat / 2) + 'px', top: (start.y - maat / 2) + 'px', width: maat + 'px', height: maat + 'px'
    });
    el.style.setProperty('--dx', (eind.x - start.x) + 'px');
    el.style.setProperty('--dy', (eind.y - start.y) + 'px');
    return el;
  }

  function speel(figuurNaam, o, random) {
    // o.variant dwingt een variant af (voor tests en screenshots); anders willekeurig.
    var variant = o.variant || kies(figuurNaam, random);
    var figuur = o.figuur, laag = o.laag;
    var effecten = [];
    var f = middel(figuur, laag), doel = middel(o.van, laag);
    var veld = laag.getBoundingClientRect();

    // Afstand van de figuur naar het doel (letterkaart / som), voor salto, liaan en maan.
    figuur.style.setProperty('--dx', (doel.x - f.x) + 'px');
    figuur.style.setProperty('--dy', (doel.top - f.bottom) + 'px');
    figuur.style.setProperty('--r', Math.round(Math.min(veld.height * 0.3, veld.width * 0.18)) + 'px');

    switch (variant) {
      case 'spring':
        effecten.push(vliegIcoon(o));
        break;
      case 'liaan':
        // Liaan hangt aan de bovenkant, tussen figuur en doel, en zwaait mee.
        // Lengte zo gekozen dat het uiteinde bij 28 graden uitslag ongeveer bij figuur en doel komt.
        var liaanHoogte = Math.min(Math.max(60, Math.abs(doel.x - f.x) / 2 / 0.47), f.top + f.h * 0.5);
        effecten.push(maakEffect(laag, 'liaan', Icons.svg('liaan'), {
          left: ((f.x + doel.x) / 2 - 10) + 'px', top: '0px', height: liaanHoogte + 'px'
        }));
        effecten.push(vliegIcoon(o));
        break;
      case 'salto':
        effecten.push(vliegIcoon(o));
        break;
      case 'eet':
        // Banaan bij de mond die kleiner wordt; de effectenlaag komt even vóór het aapje.
        laag.classList.add('voorgrond');
        effecten.push(maakEffect(laag, 'hapje', Icons.svg('banaan'), {
          left: (f.x - f.w * 0.42) + 'px', top: (f.top + f.h * 0.3) + 'px', width: (f.w * 0.45) + 'px', height: (f.w * 0.45) + 'px'
        }));
        break;
      case 'lancering':
        for (var i = 0; i < 4; i++) {
          effecten.push(maakEffect(laag, 'rook rook-' + i, '', {
            left: (f.x - f.w * 0.25 + (i - 1.5) * f.w * 0.18) + 'px', top: (f.bottom - f.w * 0.3) + 'px',
            width: (f.w * 0.5) + 'px', height: (f.w * 0.5) + 'px'
          }));
        }
        effecten.push(vliegIcoon(o));
        break;
      case 'looping':
        effecten.push(vliegIcoon(o));
        break;
      case 'maan':
        var maat = Math.min(veld.height * 0.28, veld.width * 0.18);
        effecten.push(maakEffect(laag, 'maan', Icons.svg('maan'), {
          left: (veld.width * 0.12) + 'px', top: (veld.height * 0.06) + 'px', width: maat + 'px', height: maat + 'px'
        }));
        // Vlieg naar net voorbij de maan.
        figuur.style.setProperty('--dx', (veld.width * 0.12 + maat * 1.1 - f.x) + 'px');
        figuur.style.setProperty('--dy', (veld.height * 0.06 + maat * 0.3 - f.bottom) + 'px');
        effecten.push(vliegIcoon(o));
        break;

      /* ---- Vis ---- */
      case 'sprong':
        // Springt op uit het water: spetters bij de start, schelp vliegt naar de teller.
        for (var d = 0; d < 5; d++) {
          var spat = maakEffect(laag, 'spat spat-' + d, '', {
            left: (f.x - f.w * 0.3 + d * f.w * 0.15) + 'px', top: (f.bottom - 14) + 'px'
          });
          spat.style.setProperty('--sx', ((d - 2) * f.w * 0.22) + 'px');
          effecten.push(spat);
        }
        effecten.push(vliegIcoon(o));
        break;
      case 'zwem':
        // Zwemt naar de goede kaart en terug; --dy is hier de afstand tussen de middens.
        figuur.style.setProperty('--dy', (doel.y - f.y) + 'px');
        effecten.push(vliegIcoon(o));
        break;
      case 'bubbels':
        // Blaast bubbels vanuit de mond (links), die opstijgen en verdwijnen.
        for (var b = 0; b < 6; b++) {
          var maatB = f.w * (0.1 + (b % 3) * 0.05);
          var bubbel = maakEffect(laag, 'bubbel bubbel-' + b, '', {
            left: (f.x - f.w * 0.5 - maatB / 2) + 'px', top: (f.top + f.h * 0.5 - maatB / 2) + 'px',
            width: maatB + 'px', height: maatB + 'px'
          });
          bubbel.style.setProperty('--bx', ((b % 2 ? -1 : 1) * (10 + b * 6)) + 'px');
          effecten.push(bubbel);
        }
        effecten.push(vliegIcoon(o));
        break;
    }

    figuur.classList.add('anim-' + variant);

    setTimeout(function () {
      figuur.classList.remove('anim-' + variant);
      laag.classList.remove('voorgrond');
      effecten.forEach(function (el) { if (el.parentNode) el.parentNode.removeChild(el); });
    }, DUUR);

    return DUUR;
  }

  /* Alles direct opruimen (bij verlaten van het scherm tijdens een animatie). */
  function stop(figuur, laag) {
    Object.keys(VARIANTEN).forEach(function (naam) {
      VARIANTEN[naam].forEach(function (v) { figuur.classList.remove('anim-' + v); });
    });
    laag.classList.remove('voorgrond');
    while (laag.firstChild) laag.removeChild(laag.firstChild);
  }

  return { DUUR: DUUR, VARIANTEN: VARIANTEN, kies: kies, speel: speel, stop: stop };
})();
