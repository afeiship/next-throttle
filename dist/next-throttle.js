(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.throttle = function (inCallback, inDelay, inContext) {
    var threshhold = inDelay || 200;
    var last,
        deferTimer;
    return function () {
      var context = inContext || this;
      var now = Date.now() || +new Date(),
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          inCallback.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        inCallback.apply(context, args);
      }
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.throttle;
  }

}());
