define(function(require, exports, module) {

  // 或者通过 module.exports 提供整个接口
  module.exports = function(a) {
    console.log(a || '123');
  }

});
