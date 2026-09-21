/* animaties.js - beloningsanimaties voor aapje, raket, vis en mier (ontwikkelplan §7.1, §7.2, §7.4,
   §7.5, §7.6). Alle varianten duren DUUR ms (<= 1,5 s). De spellen negeren toetsen tot de animatie
   klaar is.

   Gebruik:
     var duur = Animaties.speel('aapje', { figuur, laag, van, naar, icoon, wereld, stand });
       figuur: element met de SVG-figuur (absoluut gepositioneerd in het speelveld)
       laag:   element voor tijdelijke effecten (liaan, rook, vliegend icoon, kunstjes van Mier)
       van:    element waar het beloningsicoon vertrekt (letterkaart / invulvak)
       naar:   element waar het naartoe vliegt (teller)
       icoon:  naam van het icoon dat vliegt ('banaan' / 'ster' / 'schelp' / 'blaadje')
       wereld: de meegroeiende wereld (Wereld.maak), optioneel
       stand:  de nieuwe stand na dit goede antwoord (Wereld.stand), optioneel

   Sinds fase 16 is de animatie de *stap naar het volgende station* van de wereld: de varianten zijn
   de manier waarop de figuur reist. Elk tiende goede antwoord is een finale (stand.finale), met een
   eigen variant per figuur. Variant wordt verder willekeurig gekozen, nooit twee keer dezelfde
   achter elkaar. */

var Animaties = (function () {
  'use strict';

  var DUUR = 1400;

  /* De manier van reizen (Aapje, Raketje, Vis) of het kunstje (Mier). */
  var VARIANTEN = {
    aapje: ['spring', 'liaan', 'salto'],
    raket: ['lancering', 'looping', 'maan'],
    vis: ['sprong', 'zwem', 'bubbels'],
    mier: ['draag', 'loop', 'klim', 'koprol', 'bal', 'hoepel', 'jongleer', 'koord', 'handstand', 'trapeze']
  };

  /* Elk tiende antwoord: de finale van de ronde (ontwikkelplan §7.6). */
  var FINALES = {
    aapje: 'tros',      // pakt de bananentros in de top en glijdt terug naar beneden
    raket: 'thuis',     // komt thuis op aarde en landt in een sterrenregen
    vis: 'schat',       // vindt de schatkist en tolt van plezier
    mier: 'finale'      // mierenpiramide met hoge hoed en confetti
  };

  var vorige = {};

  /* Kies een variant; nooit dezelfde als de vorige keer voor deze figuur.
     Bij een finale-stand is het altijd de finale-variant. */
  function kies(figuurNaam, random, stand) {
    if (stand && stand.finale && FINALES[figuurNaam]) {
      vorige[figuurNaam] = null;              // na de finale mag elke variant weer
      return FINALES[figuurNaam];
    }
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

  /* Confetti voor de finale van Mier: gekleurde snippers die naar beneden dwarrelen. */
  function confetti(laag, veld, aantal) {
    var kleuren = ['#E63946', '#FFD23F', '#2F6FB5', '#4CAF50', '#E8607A', '#FF9F1C'];
    var lijst = [];
    for (var i = 0; i < aantal; i++) {
      var el = maakEffect(laag, 'confetti confetti-' + (i % 6), '', {
        left: (veld.width * (0.1 + 0.8 * (i / aantal))) + 'px',
        top: '-16px',
        background: kleuren[i % kleuren.length]
      });
      el.style.setProperty('--val', (veld.height + 40) + 'px');
      el.style.setProperty('--zij', (((i % 5) - 2) * 26) + 'px');
      lijst.push(el);
    }
    return lijst;
  }

  function speel(figuurNaam, o, random) {
    // o.variant dwingt een variant af (voor tests en screenshots); anders willekeurig.
    var variant = o.variant || kies(figuurNaam, random, o.stand);
    var figuur = o.figuur, laag = o.laag;
    var effecten = [];
    var f = middel(figuur, laag), doel = middel(o.van, laag);
    var veld = laag.getBoundingClientRect();
    var i, b, d;

    // Afstand van de figuur naar het doel (letterkaart / som), voor salto, liaan en maan.
    figuur.style.setProperty('--dx', (doel.x - f.x) + 'px');
    figuur.style.setProperty('--dy', (doel.top - f.bottom) + 'px');
    figuur.style.setProperty('--r', Math.round(Math.min(veld.height * 0.3, veld.width * 0.18)) + 'px');

    /* De wereld schuift mee (ontwikkelplan §7.6). Bij de boom verplaatst de wereld ook de figuur:
       --dx/--dy wordt dan de afstand naar de volgende tak en --tx/--ty de plek waar hij blijft. */
    var stap = (o.wereld && o.stand) ? o.wereld.stap(o.stand, DUUR) : null;
    if (stap) {
      figuur.style.setProperty('--dx', Math.round(stap.dx) + 'px');
      figuur.style.setProperty('--dy', Math.round(stap.dy) + 'px');
      figuur.style.setProperty('--tx', Math.round(stap.tx) + 'px');
      figuur.style.setProperty('--ty', Math.round(stap.ty) + 'px');
    }

    switch (variant) {
      /* ---- Aapje ---- */
      case 'spring':
        effecten.push(vliegIcoon(o));
        break;
      case 'liaan':
        // Liaan hangt aan de bovenkant, tussen figuur en doel, en zwaait mee.
        // Lengte zo gekozen dat het uiteinde bij 28 graden uitslag ongeveer bij figuur en doel komt.
        var liaanX = stap ? f.x + stap.dx : doel.x;
        var liaanHoogte = Math.min(Math.max(60, Math.abs(liaanX - f.x) / 2 / 0.47), Math.max(60, f.top + f.h * 0.5));
        effecten.push(maakEffect(laag, 'liaan', Icons.svg('liaan'), {
          left: ((f.x + liaanX) / 2 - 10) + 'px', top: '0px', height: liaanHoogte + 'px'
        }));
        effecten.push(vliegIcoon(o));
        break;
      case 'salto':
        effecten.push(vliegIcoon(o));
        break;
      case 'tros':
        // Finale: klimt naar de bananentros in de top, eet een banaan en glijdt terug naar beneden.
        laag.classList.add('voorgrond');
        effecten.push(maakEffect(laag, 'hapje', Icons.svg('banaan'), {
          left: (f.x + (stap ? stap.dx : 0) - f.w * 0.42) + 'px',
          top: (f.top + (stap ? stap.dy : 0) + f.h * 0.3) + 'px',
          width: (f.w * 0.45) + 'px', height: (f.w * 0.45) + 'px'
        }));
        effecten.push(vliegIcoon(o));
        break;

      /* ---- Raketje ---- */
      case 'lancering':
        for (i = 0; i < 4; i++) {
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
        // Zonder wereld: een losse maan linksboven. Mét wereld staat de volgende planeet al in
        // beeld (die is dan het doel), dus dan komt er geen tweede maan bij.
        if (!o.wereld) {
          var maat = Math.min(veld.height * 0.28, veld.width * 0.18);
          effecten.push(maakEffect(laag, 'maan', Icons.svg('maan'), {
            left: (veld.width * 0.12) + 'px', top: (veld.height * 0.06) + 'px', width: maat + 'px', height: maat + 'px'
          }));
          figuur.style.setProperty('--dx', (veld.width * 0.12 + maat * 1.1 - f.x) + 'px');
          figuur.style.setProperty('--dy', (veld.height * 0.06 + maat * 0.3 - f.bottom) + 'px');
        }
        effecten.push(vliegIcoon(o));
        break;
      case 'thuis':
        // Finale: de aarde zakt naar de raket toe, de raket stijgt op en landt in een sterrenregen.
        for (i = 0; i < 6; i++) {
          var s = maakEffect(laag, 'sterregen sterregen-' + (i % 3), Icons.svg('ster'), {
            left: (f.x - f.w * 0.9 + i * f.w * 0.36) + 'px', top: (veld.height * 0.05) + 'px',
            width: (f.w * 0.3) + 'px', height: (f.w * 0.3) + 'px'
          });
          s.style.setProperty('--val', (f.top - veld.height * 0.05) + 'px');
          effecten.push(s);
        }
        effecten.push(vliegIcoon(o));
        break;

      /* ---- Vis ---- */
      case 'sprong':
        // Springt op uit het water: spetters bij de start, schelp vliegt naar de teller.
        for (d = 0; d < 5; d++) {
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
        // --heen bepaalt welke kant het visje op kijkt op de heenweg (de kaart ligt bijna altijd links).
        figuur.style.setProperty('--dy', (doel.y - f.y) + 'px');
        figuur.style.setProperty('--heen', doel.x < f.x ? '-1' : '1');
        effecten.push(vliegIcoon(o));
        break;
      case 'bubbels':
      case 'schat':
        // Blaast bubbels vanuit de mond, die opstijgen en verdwijnen. De speelfiguur kijkt naar
        // rechts (vis.css), dus de mond zit aan de rechterkant.
        // De finale 'schat' doet hetzelfde, maar dan met glinstersterretjes erbij.
        for (b = 0; b < 6; b++) {
          var maatB = f.w * (0.1 + (b % 3) * 0.05);
          var bubbel = maakEffect(laag, 'bubbel bubbel-' + b, '', {
            left: (f.x + f.w * 0.42 - maatB / 2) + 'px', top: (f.top + f.h * 0.5 - maatB / 2) + 'px',
            width: maatB + 'px', height: maatB + 'px'
          });
          bubbel.style.setProperty('--bx', ((b % 2 ? -1 : 1) * (10 + b * 6)) + 'px');
          effecten.push(bubbel);
        }
        if (variant === 'schat') {
          for (i = 0; i < 4; i++) {
            effecten.push(maakEffect(laag, 'glinster glinster-' + i, Decor.svg('sterretje'), {
              left: (f.x - f.w * (0.6 - i * 0.4)) + 'px', top: (f.top - f.h * 0.25 + (i % 2) * f.h * 0.3) + 'px',
              width: (f.w * 0.26) + 'px', height: (f.w * 0.26) + 'px'
            }));
          }
        }
        effecten.push(vliegIcoon(o));
        break;

      /* ---- Mier: de drie oorspronkelijke kunstjes ---- */
      case 'draag':
        // Tilt het afgemaakte woord op en draagt het door de gang naar links het beeld uit
        // (de kant waar hij naartoe loopt); blaadje vliegt naar de teller.
        figuur.style.setProperty('--lx', (-f.x - f.w) + 'px');
        effecten.push(vliegIcoon(o));
        break;
      case 'loop':
        // Loopt met een blaadje boven zijn kop naar links over het scherm en weer terug.
        var loopX = -(f.x - Math.min(doel.x, veld.width * 0.2));
        figuur.style.setProperty('--lx', loopX + 'px');
        var bladMaat = Math.max(28, f.w * 0.55);
        var blad = maakEffect(laag, 'draagblad', Icons.svg('blaadje'), {
          left: (f.x - bladMaat / 2) + 'px', top: (f.top - bladMaat * 0.55) + 'px',
          width: bladMaat + 'px', height: bladMaat + 'px'
        });
        blad.style.setProperty('--lx', loopX + 'px');
        effecten.push(blad);
        effecten.push(vliegIcoon(o));
        break;
      case 'klim':
        // Klimt op de laatste klank (rechterkant van de rij vakjes) en zwaait met zijn voelsprieten.
        figuur.style.setProperty('--dx', (doel.x + doel.w / 2 - f.w * 0.6 - f.x) + 'px');
        effecten.push(vliegIcoon(o));
        break;

      /* ---- Mier: de kunstjes van fase 16, in de gangen van het nest ---- */
      case 'koprol':
        // Salto voorover met een stofwolkje bij de landing.
        effecten.push(maakEffect(laag, 'stofwolk', Decor.svg('stofwolk'), {
          left: (f.x - f.w * 0.6) + 'px', top: (f.bottom - f.w * 0.36) + 'px',
          width: (f.w * 1.2) + 'px', height: (f.w * 0.72) + 'px'
        }));
        effecten.push(vliegIcoon(o));
        break;
      case 'bal':
        // Balanceert op een rond zaadje dat onder hem heen en weer rolt.
        var balMaat = f.w * 0.62;
        effecten.push(maakEffect(laag, 'rolzaad', Decor.svg('zaadje'), {
          left: (f.x - balMaat / 2) + 'px', top: (f.bottom - balMaat * 0.82) + 'px',
          width: balMaat + 'px', height: balMaat + 'px'
        }));
        effecten.push(vliegIcoon(o));
        break;
      case 'hoepel':
        // Springt door een boog van een plantenwortel die links van hem in de gang staat.
        var hoepelB = f.w * 0.85;
        effecten.push(maakEffect(laag, 'wortelboog', Decor.svg('wortelboog'), {
          left: (f.x - f.w * 1.15 - hoepelB / 2) + 'px', top: (f.bottom - hoepelB * 1.15) + 'px',
          width: hoepelB + 'px', height: (hoepelB * 1.3) + 'px'
        }));
        for (i = 0; i < 3; i++) {
          effecten.push(maakEffect(laag, 'sterretje sterretje-' + i, Decor.svg('sterretje'), {
            left: (f.x - f.w * (1.5 - i * 0.35)) + 'px', top: (f.top - f.h * 0.2 + i * f.h * 0.22) + 'px',
            width: (f.w * 0.24) + 'px', height: (f.w * 0.24) + 'px'
          }));
        }
        figuur.style.setProperty('--lx', (-f.w * 1.15) + 'px');
        effecten.push(vliegIcoon(o));
        break;
      case 'jongleer':
        // Drie blaadjes gaan in een boog boven zijn kop rond.
        for (i = 0; i < 3; i++) {
          var jMaat = Math.max(20, f.w * 0.32);
          var bal3 = maakEffect(laag, 'jongleerblad jongleerblad-' + i, Icons.svg('blaadje'), {
            left: (f.x - jMaat / 2) + 'px', top: (f.top - jMaat * 0.4) + 'px',
            width: jMaat + 'px', height: jMaat + 'px'
          });
          bal3.style.setProperty('--boog', (f.w * 0.5) + 'px');
          effecten.push(bal3);
        }
        effecten.push(vliegIcoon(o));
        break;
      case 'koord':
        // Loopt met een balanceerstokje over een draad naar de vakjes en weer terug.
        var koordX = Math.min(doel.x, f.x - f.w * 0.5);
        var koordBreed = Math.max(60, f.x - koordX);
        effecten.push(maakEffect(laag, 'koorddraad', Decor.svg('draad'), {
          left: koordX + 'px', top: (f.bottom - 6) + 'px', width: koordBreed + 'px', height: '12px'
        }));
        var stokB = f.w * 1.1;
        var stok = maakEffect(laag, 'balanceerstok', Decor.svg('stokje'), {
          left: (f.x - stokB / 2) + 'px', top: (f.top + f.h * 0.18) + 'px',
          width: stokB + 'px', height: (stokB * 0.2) + 'px'
        });
        stok.style.setProperty('--lx', (-koordBreed * 0.8) + 'px');
        effecten.push(stok);
        figuur.style.setProperty('--lx', (-koordBreed * 0.8) + 'px');
        effecten.push(vliegIcoon(o));
        break;
      case 'handstand':
        effecten.push(vliegIcoon(o));
        break;
      case 'trapeze':
        // Slingert aan een draadje aan het plafond van de gang.
        var trapH = Math.max(50, f.top + f.h * 0.3);
        var tr = maakEffect(laag, 'trapeze', Decor.svg('draad'), {
          left: (f.x - 2) + 'px', top: '0px', width: '4px', height: trapH + 'px'
        });
        effecten.push(tr);
        effecten.push(vliegIcoon(o));
        break;
      case 'finale':
        // Grote finale in de koninginnenkamer: twee kleine mieren vormen met hem een piramide,
        // het kroontje gaat omhoog en er dwarrelt confetti.
        var mMaat = f.w * 0.62;
        for (i = 0; i < 2; i++) {
          var m = maakEffect(laag, 'kleinemier kleinemier-' + i, Icons.svg('mierFiguur'), {
            left: (f.x + (i === 0 ? -f.w * 0.72 : f.w * 0.1)) + 'px',
            top: (f.bottom - mMaat) + 'px', width: mMaat + 'px', height: mMaat + 'px'
          });
          m.style.setProperty('--van', ((i === 0 ? -1 : 1) * veld.width * 0.45) + 'px');
          effecten.push(m);
        }
        var hoedB = f.w * 0.6;
        effecten.push(maakEffect(laag, 'kroontje', Decor.svg('kroontje'), {
          left: (f.x - hoedB / 2) + 'px', top: (f.top - hoedB * 0.9) + 'px',
          width: hoedB + 'px', height: hoedB + 'px'
        }));
        effecten = effecten.concat(confetti(laag, veld, 14));
        effecten.push(vliegIcoon(o));
        break;
    }

    figuur.classList.add('anim-' + variant);

    setTimeout(function () {
      // Eerst de wereld op de nieuwe stand (die zet ook de nieuwe thuisplek van de figuur),
      // daarna pas de animatieklasse weghalen: beide in dezelfde stap, dus geen zichtbare sprong.
      if (o.wereld && o.stand) o.wereld.zetStand(o.stand);
      figuur.classList.remove('anim-' + variant);
      laag.classList.remove('voorgrond');
      effecten.forEach(function (el) { if (el.parentNode) el.parentNode.removeChild(el); });
    }, DUUR);

    return DUUR;
  }

  /* Alles direct opruimen (bij verlaten van het scherm tijdens een animatie). */
  function stop(figuur, laag, wereld) {
    Object.keys(VARIANTEN).forEach(function (naam) {
      VARIANTEN[naam].forEach(function (v) { figuur.classList.remove('anim-' + v); });
      if (FINALES[naam]) figuur.classList.remove('anim-' + FINALES[naam]);
    });
    laag.classList.remove('voorgrond');
    while (laag.firstChild) laag.removeChild(laag.firstChild);
    if (wereld) wereld.stop();
  }

  return { DUUR: DUUR, VARIANTEN: VARIANTEN, FINALES: FINALES, kies: kies, speel: speel, stop: stop };
})();
