  // var Loader = require('./modules/preload.js').resLoader,
  //   touchJs = require('./modules/touch-0.2.14.min.js'),
  //   $ = require('./modules/jquery-2.1.1.min.js');
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
  var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
