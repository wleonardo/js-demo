function Module () {
	this.exports = {};
}
Module.prototype.require = function(path) {
  return path;
};
window.Module = Module;
window.require = Module.prototype.require;

console.log(require('./a.js'));


