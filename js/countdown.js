(function () {
  'use strict';

  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(targetDate.getHours() + 12);
  targetDate.setMinutes(targetDate.getMinutes() + 45);
  targetDate.setSeconds(targetDate.getSeconds() + 30);

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function tick() {
    var now = new Date();
    var diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    var totalSec = Math.floor(diff / 1000);
    var d = Math.floor(totalSec / 86400);
    var h = Math.floor((totalSec % 86400) / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var s = totalSec % 60;

    document.getElementById('days').textContent = pad(d);
    document.getElementById('hours').textContent = pad(h);
    document.getElementById('minutes').textContent = pad(m);
    document.getElementById('seconds').textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();
