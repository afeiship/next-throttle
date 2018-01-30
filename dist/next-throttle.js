(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.throttle = function (inCallback, inDelay, inContext) {
    var threshhold = inDelay || 200;
    var last, deferTimer;

    return function () {
      var context = inContext || this;
      var current = Date.now() || +new Date();

      if (last && current < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = current;
          inCallback.apply(context, arguments);
        }, threshhold);
      } else {
        last = current;
        inCallback.apply(context, arguments);
      }
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.throttle;
  }

}());
