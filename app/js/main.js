  // var Loader = require('./modules/preload.js').resLoader,
  //   touchJs = require('./modules/touch-0.2.14.min.js'),
  //   $ = require('./modules/jquery-2.1.1.min.js');
  function adjust() {
    var b = document.documentElement.clientWidth,
      a = document.documentElement.clientHeight,
      r = b / 640,
      o = 1136 / 640,
      i = document.getElementById('zzx').style;
    if (r > 1) {
      r = 1;
    }
    else{
      i.left = (b - 640) / 2 + "px";
      i.top = (b * o - 1136) / 2 + (a - b * o) + "px";
    }
    i.webkitTransform = "scale(" + r + ")";
    i.transform = "scale(" + r + ")";
    
  }
  // var loader = new Loader({
  //   resources: [
  //     'http://news.sohu.com/upload/picfragmentzzx/img/persons/10.jpg',
  //     'http://news.sohu.com/upload/picfragmentzzx/img/persons/3.jpg'
  //   ],
  //   onStart: function(total) {
  //     pageResponse({
  //       selectors: '.all',
  //       mode: 'contain',
  //       width: '640',
  //       height: '1136'
  //     });
  //   },
  //   onProgress: function(current, total) {
  //     var percent = parseInt(current / total * 100) + '%';
  //     $('.pace-progress').html(percent);
  //   },
  //   onComplete: function(total) {
  //     $('.loading').hide();
  //   }
  // });
  // loader.start();
  adjust();
