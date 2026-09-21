/* wereld.js - de meegroeiende werelden achter de vier spellen (ontwikkelplan §7.6).
   Bij elk goed antwoord komt het kind een station verder: het aapje klimt een tak hoger in de
   boom, de raket vliegt naar de volgende planeet, het visje zwemt naar het volgende rifstuk en
   de mier loopt naar de volgende kamer van zijn ondergrondse nest.

   Vis en Mier delen dezelfde **schuivende strook** onderin het speelveld; alleen de richting
   verschilt. Het visje kijkt naar rechts, dus het rif schuift naar links; de mier kijkt naar
   links, dus het nest schuift naar rechts.

   De wereld heeft *geen eigen toestand*: de stand is een pure functie van het aantal goede
   antwoorden (de sessieteller), zodat de wereld na een bezoek aan het menu vanzelf weer klopt
   en een afgebroken animatie niets kapot kan maken.

     Wereld.stand(n)  ->  { station: n % 10, ronde: floor(n / 10), finale: n > 0 && n % 10 === 0 }

   Een wereld in beeld maak je met:

     var w = Wereld.maak(containerEl, 'boom', figuurEl);
     w.zetStand(Wereld.stand(teller.waarde()));          // tekent het decor, zonder animatie
     var d = w.stap(nieuweStand, duur);                  // start de decor-animatie, geeft {dx,dy,tx,ty}
     w.stop();                                           // alles direct opruimen (Escape)

   `stap` geeft de afstand die de *figuur* moet afleggen (alleen bij de boom; bij de andere
   werelden schuift het decor en blijft de figuur op zijn plek, dan is het resultaat null):
     dx/dy = afstand naar het doel van de animatie (bij de finale: de bananentros in de top)
     tx/ty = afstand naar de plek waar de figuur daarna blijft zitten (bij de finale: weer onderaan) */

var Wereld = (function () {
  'use strict';

  var STATIONS = 10;                 // tien stations per ronde, gelijk aan Teller.MAX_LOS

  /* ---- Stand: pure functie van het aantal goede antwoorden ---- */
  function stand(n) {
    var m = Math.max(0, Math.floor(n || 0));
    return {
      aantal: m,
      station: m % STATIONS,
      ronde: Math.floor(m / STATIONS),
      finale: m > 0 && m % STATIONS === 0
    };
  }

  /* ---- Aapje: de boom ----
     Tien takken, om en om links en rechts van de stam, van onder naar boven. Station 0 is de
     onderste tak (waar het aapje begint), station 9 de hoogste; het tiende antwoord is de finale
     in de top, bij de bananentros. Per ronde een andere boom. */
  var BOMEN = ['loof', 'palm', 'apenbrood'];
  var TAKKEN = (function () {
    var lijst = [];
    for (var i = 0; i < STATIONS; i++) {
      lijst.push({ y: 0.05 + i * 0.072, kant: i % 2 === 0 ? -1 : 1 });   // y = fractie van de hoogte
    }
    return lijst;
  })();
  var BOOM = {
    bomen: BOMEN,
    takken: TAKKEN,
    boomVoor: function (ronde) { return BOMEN[((ronde % BOMEN.length) + BOMEN.length) % BOMEN.length]; }
  };

  /* ---- Raketje: de planetenreis ----
     Tien planeten per ronde met de aarde als tiende: die wordt bij het tiende antwoord bereikt
     (de thuiskomst) en is daarmee meteen het startpunt van de volgende ronde. De negen
     fantasieplaneten schuiven per ronde een plaats op, zodat elke ronde anders begint. */
  var PLANETEN = ['maan', 'rood', 'ring', 'gasreus', 'ijs', 'groen', 'gezicht', 'komeet', 'paars', 'aarde'];
  var RUIMTE = {
    planeten: PLANETEN,
    volgorde: function (ronde) {
      var fantasie = PLANETEN.slice(0, PLANETEN.length - 1);
      var r = ((ronde % fantasie.length) + fantasie.length) % fantasie.length;
      return fantasie.slice(r).concat(fantasie.slice(0, r)).concat([PLANETEN[PLANETEN.length - 1]]);
    },
    /* De planeet waar de raket op dit station staat. Station 0 is de aarde: het begin van de
       ronde en tegelijk de thuiskomst van de vorige. */
    planeetVoor: function (ronde, station) {
      var s = ((station % STATIONS) + STATIONS) % STATIONS;
      return RUIMTE.volgorde(ronde)[(s + STATIONS - 1) % STATIONS];
    }
  };

  function hoofdletter(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---- Gedeelde schuivende strook (Vis en Mier) ----
     Een rij vakken onderin het speelveld die bij elke stap één plaats opschuift. Negen vakken
     komen uit een shuffle-bag, op station 0 staat altijd het finale-vak (de schatkist van Vis,
     de koninginnenkamer van Mier). De vakken van een ronde worden één keer geloot en blijven
     daarna staan, zodat het decor niet verspringt als de stand opnieuw wordt gezet. */
  function maakStrook(o) {
    var strook = {
      lijst: o.lijst,
      stukken: o.lijst,            // oude naam, in gebruik bij de tests
      finale: o.finale,
      tinten: o.tinten,
      klasse: o.klasse,            // klassenaam van één vak
      richting: o.richting,        // -1 = decor schuift naar links (Vis), +1 = naar rechts (Mier)
      vulBreedte: !!o.vulBreedte,  // hele strook vullen (nest) of alleen bij de figuur (rif)
      tekening: function (naam) { return o.voorvoegsel + hoofdletter(naam); },
      tintVoor: function (ronde) {
        return o.tinten[((ronde % o.tinten.length) + o.tinten.length) % o.tinten.length];
      },
      ronde: function (zak) {
        var lijst = [o.finale];
        for (var i = 1; i < STATIONS; i++) lijst.push(zak.volgende());
        return lijst;
      },
      nieuweZak: function (random) { return new Letters.ShuffleBag(o.lijst, random); },
      /* Welke stations er in beeld staan, van links naar rechts. Bij het rif zijn dat er vier
         (de rest van de strook is open water); het nest vult de hele breedte met kamers. */
      offsets: function (breedte, slot) {
        if (!o.vulBreedte) return o.richting < 0 ? [-1, 0, 1, 2] : [2, 1, 0, -1];
        var aantal = Math.max(4, Math.ceil(breedte / Math.max(slot, 1)) + 3);
        var lijst = [];
        for (var i = aantal - 2; i >= -1; i--) lijst.push(i);
        return lijst;                                  // hoogste station links, net gepasseerd rechts
      }
    };
    return strook;
  }

  /* ---- Vis: het rif ---- */
  var RIF = maakStrook({
    lijst: ['koraal', 'waaier', 'waterplant', 'zeewier', 'anemoon',
            'zeester', 'rots', 'schelpen', 'bellen', 'wrak'],
    finale: 'schatkist',
    tinten: ['ondiep', 'diep', 'helder'],
    klasse: 'rif-stuk',
    voorvoegsel: 'rif',
    richting: -1
  });

  /* ---- Mier: het ondergrondse nest ----
     Een doorsnede van het nest: kamers met gangen ertussen. De mier loopt naar links (zo is hij
     getekend), dus het nest schuift naar rechts en de kamers komen van links aanlopen. Elke ronde
     ligt het nest een laag dieper. */
  var NEST = maakStrook({
    lijst: ['zaden', 'eitjes', 'larven', 'paddenstoel', 'water',
            'bladeren', 'afval', 'slaap', 'wortel', 'werkers'],
    finale: 'koningin',
    tinten: ['boven', 'midden', 'diep'],
    klasse: 'nest-kamer',
    voorvoegsel: 'kamer',
    richting: 1,
    vulBreedte: true
  });

  var STROKEN = { rif: RIF, nest: NEST };

  /* ================= Decor in beeld ================= */

  /* Positie van een element ten opzichte van de laag waarin de wereld staat. */
  function rechthoek(el, laag) {
    var a = el.getBoundingClientRect(), b = laag.getBoundingClientRect();
    return {
      x: a.left - b.left + a.width / 2,
      y: a.top - b.top + a.height / 2,
      onder: a.bottom - b.top,
      breed: a.width, hoog: a.height
    };
  }

  function div(klasse, html) {
    var el = document.createElement('div');
    el.className = klasse;
    if (html) el.innerHTML = html;
    return el;
  }

  function maak(container, naam, figuur) {
    if (!container) return null;
    var laatste = stand(0);
    var thuis = { x: 0, y: 0 };          // huidige verschuiving van de figuur (alleen bij de boom)
    var delen = {};                      // de getekende onderdelen
    var getekendeRonde = null;
    var strook = STROKEN[naam] || null;
    var strookzak = strook ? strook.nieuweZak() : null;
    var strookRonde = null;

    container.classList.add('wereld', 'wereld-' + naam);

    /* ---- Figuur op zijn plek zetten (alleen de boom verplaatst de figuur) ---- */
    function zetThuis(x, y) {
      thuis = { x: x, y: y };
      if (!figuur) return;
      figuur.style.setProperty('--thuis-x', Math.round(x) + 'px');
      figuur.style.setProperty('--thuis-y', Math.round(y) + 'px');
    }

    /* De plek van de figuur zónder verschuiving en zonder lopende animatie. Zo is de
       thuisplek altijd absoluut te rekenen, ook midden in een beloningsanimatie (die de
       figuur op dat moment bij zijn doel houdt). */
    function natuurlijkeRect() {
      var animatie = figuur.style.animation;
      var x = figuur.style.getPropertyValue('--thuis-x'), y = figuur.style.getPropertyValue('--thuis-y');
      figuur.style.animation = 'none';
      figuur.style.setProperty('--thuis-x', '0px');
      figuur.style.setProperty('--thuis-y', '0px');
      var r = rechthoek(figuur, container);
      figuur.style.animation = animatie;
      if (x) figuur.style.setProperty('--thuis-x', x);
      if (y) figuur.style.setProperty('--thuis-y', y);
      return r;
    }

    /* Verschuiving zodat de onderkant van de figuur op `doel` (x, onder) uitkomt.
       De figuur blijft altijd helemaal binnen het speelveld: de takken staan aan de rechterrand,
       dus zonder deze grens zou het aapje op een rechtertak half buiten beeld hangen, en op de
       hoogste tak met zijn kop boven het speelveld uitkomen. */
    function grenzen() {
      var veld = (container.parentNode || container).getBoundingClientRect();
      var c = container.getBoundingClientRect();
      return { links: veld.left - c.left, rechts: veld.right - c.left, boven: veld.top - c.top };
    }

    function tussen(waarde, laag, hoog) {
      return hoog < laag ? laag : Math.min(Math.max(waarde, laag), hoog);
    }

    function thuisVoor(doel) {
      if (!figuur || !doel) return { x: 0, y: 0 };
      var nat = natuurlijkeRect(), g = grenzen();
      var x = tussen(doel.x - nat.x,
                     g.links + nat.breed / 2 - nat.x,
                     g.rechts - nat.breed / 2 - nat.x);
      var y = Math.max(doel.onder - nat.onder, g.boven + nat.hoog - nat.onder);
      return { x: x, y: y };
    }

    /* ---- Boom ---- */
    function bouwBoom(ronde) {
      var soort = BOOM.boomVoor(ronde);
      container.innerHTML = '';
      container.setAttribute('data-boom', soort);
      delen = { takken: [] };
      container.appendChild(div('boom-stam', Decor.svg('stam' + hoofdletter(soort))));
      TAKKEN.forEach(function (tak, i) {
        var el = div('tak ' + (tak.kant < 0 ? 'tak-links' : 'tak-rechts'),
                     Decor.svg('tak' + hoofdletter(soort)) + '<span class="tak-zit"></span>');
        el.style.bottom = (tak.y * 100) + '%';
        el.setAttribute('data-tak', i);
        container.appendChild(el);
        delen.takken.push(el);
      });
      delen.kruin = div('boom-kruin', Decor.svg('kruin' + hoofdletter(soort)));
      container.appendChild(delen.kruin);
      delen.tros = div('boom-tros', Icons.svg('bananentros'));
      container.appendChild(delen.tros);
      getekendeRonde = ronde;
    }

    function zitplek(station) {
      var tak = delen.takken && delen.takken[station];
      if (!tak) return null;
      var zit = tak.querySelector('.tak-zit');
      return rechthoek(zit || tak, container);
    }

    /* ---- Ruimte ---- */
    function planeetOp(ronde, station) {
      var extra = Math.floor(station / STATIONS);
      return RUIMTE.planeetVoor(ronde + extra, station);
    }

    function bouwRuimte(s) {
      container.innerHTML = '';
      delen = {};
      container.appendChild(div('ruimte-hemel', Decor.svg('hemel')));
      var rij = div('ruimte-rij');
      delen.planeten = [];
      for (var i = -1; i <= 2; i++) {
        var soort = planeetOp(s.ronde, s.station + i);
        var el = div('planeet', Decor.svg('planeet' + hoofdletter(soort)));
        el.setAttribute('data-planeet', soort);
        el.style.setProperty('--slot-nr', i);
        if (i === 0) el.appendChild(div('vlag', Decor.svg('vlaggetje')));
        rij.appendChild(el);
        delen.planeten.push(el);
      }
      container.appendChild(rij);
      delen.rij = rij;
    }

    /* ---- Schuivende strook (rif en nest) ----
       De strook loopt rond: station 10 is weer station 0, dus het vak dat eraan komt na het
       negende is het finale-vak, en achter het eerste vak ligt het laatste. Bij het nest, dat de
       hele breedte vult, staat daardoor precies één ronde in beeld: een kaart van het nest. */
    function strookVak(s, i) {
      var station = (((s.station + i) % STATIONS) + STATIONS) % STATIONS;
      return strookRonde[station];
    }

    function bouwStrook(s) {
      if (strookRonde === null || getekendeRonde !== s.ronde) {
        strookRonde = strook.ronde(strookzak);
        getekendeRonde = s.ronde;
      }
      container.innerHTML = '';
      delen = {};
      container.setAttribute('data-tint', strook.tintVoor(s.ronde));
      container.appendChild(div(naam === 'rif' ? 'rif-water' : 'nest-aarde'));
      var rij = div(naam === 'rif' ? 'rif-rij' : 'nest-rij');
      container.appendChild(rij);

      // Eén vak om de breedte te meten; daarna weten we er hoeveel er in beeld passen.
      var proef = div(strook.klasse);
      rij.appendChild(proef);
      var slot = proef.offsetWidth;
      rij.removeChild(proef);

      delen.offsets = strook.offsets(container.clientWidth, slot);
      delen.vakken = [];
      delen.offsets.forEach(function (i) {
        var soort = strookVak(s, i);
        var el = div(strook.klasse + (soort === strook.finale ? ' vak-finale' : ''),
                     Decor.svg(strook.tekening(soort)));
        el.setAttribute('data-stuk', soort);
        rij.appendChild(el);
        delen.vakken.push(el);
      });
      container.appendChild(div(naam === 'rif' ? 'rif-zand' : 'nest-gras',
                                Decor.svg(naam === 'rif' ? 'zandbodem' : 'grondlijn')));
      delen.rij = rij;
      delen.stukken = delen.vakken;                    // oude naam, in gebruik bij de tests
    }

    /* Het vak op stationsafstand `i` van het huidige station, of null. */
    function vakOp(i) {
      var k = delen.offsets ? delen.offsets.indexOf(i) : -1;
      return k < 0 ? null : delen.vakken[k];
    }

    /* ---- Stand tonen (zonder animatie) ---- */
    function zetStand(s) {
      laatste = s || stand(0);
      if (naam === 'boom') {
        if (getekendeRonde !== laatste.ronde || !delen.takken) bouwBoom(laatste.ronde);
        var plek = zitplek(laatste.station);
        if (plek) { var t = thuisVoor(plek); zetThuis(t.x, t.y); }
        if (delen.tros) delen.tros.classList.remove('gepakt');
      } else if (naam === 'ruimte') {
        container.classList.remove('thuiskomst');
        bouwRuimte(laatste);
      } else if (strook) {
        bouwStrook(laatste);
        // Na de finale blijft het finale-vak open staan: de schatkist van Vis, de
        // koninginnenkamer van Mier.
        if (laatste.station === 0 && laatste.aantal > 0 && vakOp(0)) vakOp(0).classList.add('open');
      }
    }

    /* ---- Eén stap: het decor schuift op, de figuur krijgt zijn afstanden ----
       `van` is de stand die nu in beeld staat (laatste), `naar` de nieuwe stand. */
    function stap(naar, duur) {
      var van = laatste, ms = duur || 1400;
      if (naam === 'boom') {
        var nu = zitplek(van.station);
        var doelStation = zitplek(naar.station);
        if (!nu) return null;
        var eind = doelStation ? { dx: doelStation.x - nu.x, dy: doelStation.onder - nu.onder } : { dx: 0, dy: 0 };
        var top = eind;
        if (naar.finale && delen.tros) {
          var tros = rechthoek(delen.tros, container);
          top = { dx: tros.x - nu.x, dy: tros.onder + tros.hoog * 0.35 - nu.onder };
        }
        return { dx: top.dx, dy: top.dy, tx: eind.dx, ty: eind.dy };
      }
      if (naam === 'ruimte' && delen.rij) {
        delen.rij.style.transition = 'transform ' + ms + 'ms cubic-bezier(0.4, 0, 0.3, 1)';
        delen.rij.style.transform = 'translateY(var(--slot))';      // de hemel zakt één station
        if (naar.finale) container.classList.add('thuiskomst');
        return null;
      }
      if (strook && delen.rij) {
        delen.rij.style.transition = 'transform ' + ms + 'ms cubic-bezier(0.4, 0, 0.3, 1)';
        delen.rij.style.transform = strook.richting < 0
          ? 'translateX(calc(-1 * var(--slot)))'        // rif: schuift naar links
          : 'translateX(var(--slot))';                  // nest: schuift naar rechts
        // Het vak dat eraan komt is dat van het volgende station; bij de finale gaat het open.
        if (naar.finale && vakOp(1)) vakOp(1).classList.add('open');
        return null;
      }
      return null;
    }

    /* ---- Alles direct opruimen (scherm verlaten tijdens een animatie) ---- */
    function stop() {
      container.classList.remove('thuiskomst');
      if (delen.rij) { delen.rij.style.transition = 'none'; delen.rij.style.transform = 'none'; }
    }

    /* Bij het veranderen van de vensterafmeting klopt de plek van de figuur niet meer. */
    function opnieuw() {
      if (container.offsetParent === null) return;      // scherm niet in beeld: niets te meten
      zetStand(laatste);
    }
    window.addEventListener('resize', opnieuw);

    zetStand(stand(0));

    return {
      naam: naam,
      zetStand: zetStand,
      stap: stap,
      stop: stop,
      opnieuw: opnieuw,
      huidigeStand: function () { return laatste; },
      thuis: function () { return { x: thuis.x, y: thuis.y }; }
    };
  }

  return {
    STATIONS: STATIONS,
    stand: stand,
    BOOM: BOOM,
    RUIMTE: RUIMTE,
    RIF: RIF,
    NEST: NEST,
    maak: maak
  };
})();
