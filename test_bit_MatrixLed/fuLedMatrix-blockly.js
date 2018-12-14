+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.getMatrix = function (board, pin, leds) {
    return new webduino.module.Matrix(board, pin, leds);
  };
}));