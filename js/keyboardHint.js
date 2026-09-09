/* keyboardHint.js - klein virtueel toetsenbord dat na 2 fouten de juiste toets laat pulseren.
   In de aanraakstand (tablet/telefoon, ontwikkelplan §4.5) staat het altijd in beeld en zijn
   de toetsen tikbaar: een tik stuurt dezelfde keydown naar document als een echte toets,
   zodat de spellen (aapje.js, raketje.js) niets van het verschil merken.
   Gebruik: var hint = KeyboardHint.maak(container, 'letters' | 'cijfers');
            hint.toon('k'); hint.verberg();
            KeyboardHint.zetTikbaar(true | false)   (gedaan door app.js) */

var KeyboardHint = (function () {
  'use strict';

  var RIJEN = {
    letters: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],   // zoals op het toetsenbord
    cijfers: ['12345', '67890']                         // twee groepjes; op de pc naast elkaar als één rij,
                                                        // op een smal scherm onder elkaar (CSS, .hint-cijfers)
  };
  var WIS = 'Backspace';       // wistoets achter de cijferrij; alleen zichtbaar in de aanraakstand (CSS)
  var tikbaar = false;         // false = pc-stand: het toetsenbord is alleen een hint, tikken doet niets

  function toetsHtml(toets, label, klasse) {
    return '<span class="hint-toets' + (klasse ? ' ' + klasse : '') + '" data-toets="' + toets + '">' + label + '</span>';
  }

  /* Een tik op een toets wordt dezelfde keydown op document als een echte toetsaanslag. */
  function tik(toets) {
    var e = new KeyboardEvent('keydown', { key: toets, bubbles: true, cancelable: true });
    document.dispatchEvent(e);
    return e;
  }

  function maak(container, soort) {
    var rijen = RIJEN[soort] || RIJEN.letters;
    var html = '';
    rijen.forEach(function (rij, r) {
      html += '<div class="hint-rij">';
      rij.split('').forEach(function (k) {
        // Toetsen tonen hoofdletters, net als op het echte toetsenbord.
        html += toetsHtml(k, k.toUpperCase());
      });
      if (soort === 'cijfers' && r === rijen.length - 1) html += toetsHtml(WIS, '⌫', 'hint-wis');
      html += '</div>';
    });
    container.innerHTML = html;
    container.classList.add('hint-toetsenbord', 'hint-' + (RIJEN[soort] ? soort : 'letters'));

    container.addEventListener('click', function (e) {
      if (!tikbaar) return;
      var el = e.target && e.target.closest ? e.target.closest('.hint-toets') : null;
      if (!el) return;
      e.preventDefault();
      tik(el.getAttribute('data-toets'));
    });

    function wisPuls() {
      var oud = container.querySelectorAll('.pulseer');
      for (var i = 0; i < oud.length; i++) oud[i].classList.remove('pulseer');
    }

    return {
      toon: function (toets) {
        wisPuls();
        var el = container.querySelector('[data-toets="' + String(toets).toLowerCase() + '"]');
        if (el) el.classList.add('pulseer');
        container.classList.add('zichtbaar');
      },
      verberg: function () {
        wisPuls();
        container.classList.remove('zichtbaar');
      },
      /* "Zichtbaar" betekent: de hint is actief (een toets pulseert). In de aanraakstand
         staat het toetsenbord zelf altijd in beeld; dat regelt de CSS (body.aanraak). */
      isZichtbaar: function () {
        return container.classList.contains('zichtbaar');
      }
    };
  }

  function zetTikbaar(aan) { tikbaar = !!aan; }
  function isTikbaar() { return tikbaar; }

  return { maak: maak, tik: tik, zetTikbaar: zetTikbaar, isTikbaar: isTikbaar, RIJEN: RIJEN, WIS: WIS };
})();
