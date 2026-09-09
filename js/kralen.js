/* kralen.js - Montessori-kralen als visueel hulpmiddel bij de sommen (ontwikkelplan §5.3).
   Het model is een pure functie zonder DOM, zodat test/test.html het kan doorlopen.

   Kleuren van de kralentrap (Montessori): 1 rood, 2 groen, 3 roze, 4 geel,
   5 lichtblauw, 6 paars, 7 wit, 8 bruin, 9 donkerblauw, 10 goud.
   Een staafje is nooit langer dan tien kralen; grotere getallen worden in
   staafjes van tien plus een rest getoond (14 = 10 + 4).

   Gebruik: var k = Kralen.maak(container); k.toon(som); k.verberg(); */

var Kralen = (function () {
  'use strict';

  var MAX_STAAF = 10;

  var KLEUR = {
    1: '#E63946',   /* rood */
    2: '#4CAF50',   /* groen */
    3: '#F2A0B4',   /* roze */
    4: '#FFD23F',   /* geel */
    5: '#8FD3FF',   /* lichtblauw */
    6: '#8E6BB5',   /* paars */
    7: '#FCFCFC',   /* wit */
    8: '#8B5A2B',   /* bruin */
    9: '#1F4A7A',   /* donkerblauw */
    10: '#EDA320'   /* goud */
  };

  function kleur(n) {
    return KLEUR[n] || KLEUR[10];
  }

  /* Een getal als staafjeslengtes: staafjes van tien en de rest. 0 geeft [0]. */
  function staafjes(n) {
    if (n <= 0) return [0];
    var uit = [];
    while (n > MAX_STAAF) { uit.push(MAX_STAAF); n -= MAX_STAAF; }
    uit.push(n);
    return uit;
  }

  /* Zet lengtes om in staven en streept vanaf de laatste kraal `weg` kralen door
     (voor minsommen: wat eraf gaat blijft zichtbaar, maar doorgestreept). */
  function staven(lengtes, weg) {
    var over = weg || 0;
    var uit = lengtes.map(function (lengte) { return { lengte: lengte, weg: 0 }; });
    for (var i = uit.length - 1; i >= 0 && over > 0; i--) {
      var k = Math.min(over, uit[i].lengte);
      uit[i].weg = k;
      over -= k;
    }
    return uit;
  }

  /* Model voor één som. Groepen staan naast elkaar (met het somteken ertussen),
     staafjes binnen een groep onder elkaar.
       plus  a + b : een staafje a naast een staafje b
       min   a - b : een staafje a waarvan de laatste b kralen doorgestreept zijn
       maal  a x b : a staafjes van b (de klassieke rechthoek)
       deel  a : b : de a kralen eerlijk verdeeld over b staafjes
     `rijen` en `kolommen` zijn de maten in kralen; de CSS rekent daarmee de
     kraalgrootte uit, zodat ook 10 x 10 nog op het scherm past. */
  function model(som) {
    var groepen, teken = null;

    switch (som.op) {
      case 'plus':
        groepen = [{ staven: staven(staafjes(som.a), 0) }, { staven: staven(staafjes(som.b), 0) }];
        teken = som.symbool;
        break;
      case 'min':
        groepen = [{ staven: staven(staafjes(som.a), som.b) }];
        break;
      case 'maal':
        groepen = [{ staven: herhaal(som.a, som.b) }];
        break;
      case 'deel':
        groepen = [{ staven: herhaal(som.b, som.antwoord) }];
        break;
      default:
        throw new Error('Onbekende operator: ' + som.op);
    }

    return { op: som.op, teken: teken, groepen: groepen, rijen: rijen(groepen), kolommen: kolommen(groepen, teken) };
  }

  function herhaal(aantal, lengte) {
    var uit = [];
    for (var i = 0; i < Math.max(1, aantal); i++) uit.push({ lengte: lengte, weg: 0 });
    return uit;
  }

  function rijen(groepen) {
    return groepen.reduce(function (max, g) { return Math.max(max, g.staven.length); }, 1);
  }

  /* Breedte in kralen: de breedste staaf per groep, plus twee kralen voor het somteken. */
  function kolommen(groepen, teken) {
    var breed = groepen.reduce(function (som, g) {
      return som + g.staven.reduce(function (max, s) { return Math.max(max, s.lengte || 1); }, 1);
    }, 0);
    return breed + (teken ? 2 : 0);
  }

  /* ---- Weergave ---- */

  function staafHtml(staaf) {
    if (!staaf.lengte) return '<div class="kralen-staaf"><span class="kraal nul"></span></div>';
    var html = '<div class="kralen-staaf" style="--kleur: ' + kleur(staaf.lengte) + '">';
    var eersteWeg = staaf.lengte - staaf.weg;
    for (var i = 0; i < staaf.lengte; i++) {
      html += '<span class="kraal' + (i >= eersteWeg ? ' weg' : '') + '"></span>';
    }
    return html + '</div>';
  }

  function html(m) {
    var delen = [];
    m.groepen.forEach(function (g) {
      delen.push('<div class="kralen-groep">' + g.staven.map(staafHtml).join('') + '</div>');
    });
    if (m.teken) delen.splice(1, 0, '<div class="kralen-teken">' + m.teken + '</div>');
    return delen.join('');
  }

  function maak(container) {
    return {
      toon: function (som) {
        var m = model(som);
        container.style.setProperty('--rijen', m.rijen);
        container.style.setProperty('--kolommen', m.kolommen);
        container.innerHTML = html(m);
        container.classList.add('zichtbaar');
      },
      verberg: function () {
        container.classList.remove('zichtbaar');
        container.innerHTML = '';
      },
      isZichtbaar: function () {
        return container.classList.contains('zichtbaar');
      }
    };
  }

  return {
    KLEUR: KLEUR,
    MAX_STAAF: MAX_STAAF,
    kleur: kleur,
    staafjes: staafjes,
    staven: staven,
    model: model,
    html: html,
    maak: maak
  };
})();
