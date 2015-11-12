(function() {
  var Loader = require('./modules/preload.js').resLoader,
    touchJs = require('./modules/touch-0.2.14.min.js'),
    $ = require('./modules/jquery-2.1.1.min.js');
  function pageResponse(d) {
    var c = navigator.userAgent,
      o = c.match(/Windows Phone ([\d.]+)/),
      e = c.match(/(Android);?[\s\/]+([\d.]+)?/),
      b = document.documentElement.clientWidth,
      n = document.documentElement.clientHeight,
      g = b / n,
      q = d.width || 320,
      l = d.height || 504,
      a = q / l,
      m = document.querySelectorAll(d.selectors),
      k = m.length,
      h = d.mode || "auto",
      j = d.origin || "left top 0",
      f = (h == "contain") ? (g > a ? n / l : b / q) : (h == "cover") ? (g < a ? n / l : b / q) : b / q;

    function p(t, s, r) {
      var i = s.style;
      i.width = q + "px";
      i.height = l + "px";
      i.webkitTransformOrigin = j;
      i.transformOrigin = j;
      i.webkitTransform = "scale(" + r + ")";
      i.transform = "scale(" + r + ")";
      if (t == "auto" && e) {
        document.body.style.height = l * r + "px"
      } else {
        if (t == "contain" || t == "cover") {
          i.position = "absolute";
          i.left = (b - q) / 2 + "px";
          i.top = (n - l) / 2 + "px";
          i.webkitTransformOrigin = "center center 0";
          i.transformOrigin = "center center 0";
          if (o) {
            document.body.style.msTouchAction = "none"
          } else {
            document.ontouchmove = function(u) {
              u.preventDefault()
            }
          }
        }
      }
    }
    while (--k >= 0) {
      p(h, m[k], f)
    }
  }
  var loader = new Loader({
    resources: [
      'http://news.sohu.com/upload/picfragmentzzx/img/persons/10.jpg',
      'http://news.sohu.com/upload/picfragmentzzx/img/persons/3.jpg'
    ],
    onStart: function(total) {
      pageResponse({
        selectors: '.all',
        mode: 'contain',
        width: '640',
        height: '1136'
      });
    },
    onProgress: function(current, total) {
      var percent = parseInt(current / total * 100) + '%';
      $('.pace-progress').html(percent);
    },
    onComplete: function(total) {
      $('.loading').hide();
    }
  });
  loader.start();
})();
