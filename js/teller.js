/* teller.js - sessieteller met iconen (bananen of sterren).
   Tot en met 10 losse iconen; daarboven één tros/grote ster met een getal.
   Gebruik: var t = Teller.maak(container, 'banaan', 'bananentros'); t.plusEen(); */

var Teller = (function () {
  'use strict';

  var MAX_LOS = 10;

  function maak(container, icoon, trosIcoon) {
    var n = 0;

    function render(nieuw) {
      var html = '';
      if (n <= MAX_LOS) {
        for (var i = 0; i < n; i++) {
          html += '<span class="teller-item' + (nieuw && i === n - 1 ? ' nieuw' : '') + '">' + Icons.svg(icoon) + '</span>';
        }
      } else {
        html += '<span class="teller-item teller-tros' + (nieuw ? ' nieuw' : '') + '">' + Icons.svg(trosIcoon || icoon) + '</span>' +
                '<span class="teller-getal">' + n + '</span>';
      }
      container.innerHTML = html;
    }

    render(false);

    return {
      plusEen: function () { n++; render(true); },
      reset: function () { n = 0; render(false); },
      waarde: function () { return n; }
    };
  }

  return { maak: maak, MAX_LOS: MAX_LOS };
})();
