var fs = require('fs');
const vm = require('vm');

function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var content = fs.readFileSync('./a.js', 'utf8');
content = stripBOM(content);

console.log(content);

var l = `(function(module){
					${content}
					;return module.exports;
					})(module);`;

eval(l)();

/**
 * node内部实际使用的解析函数 runInThisContext
 * 详见 http://nodejs.cn/doc/node/vm.html
 */

// const context = 'var a = 1;console.log(a);';

// script.runInThisContext(context);

