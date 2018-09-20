(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.throttle = function (inCallback, inDelay, inContext) {
    var delay = inDelay || 200;
    var last,
      deferTimer;

    return function () {
      var context = inContext || this;
      var current = Date.now() || + new Date();
      var args = arguments;

      if (last && current < last + delay) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = current;
          inCallback.apply(context, args);
        }, delay);
      } else {
        last = current;
        inCallback.apply(context, args);
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.throttle;
  }

}());
