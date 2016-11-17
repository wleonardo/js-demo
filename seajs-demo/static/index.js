define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');

  var a = require('./a.js');

  // 通过 exports 对外提供接口
  //exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  module.exports = function(b) {
    a(b);
  }

});
