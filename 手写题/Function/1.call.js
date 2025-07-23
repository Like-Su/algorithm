Function.prototype.Call = function(thisArg) {
  const args = Array.prototype.slice.call(arguments, 1),
        thisArgs = arguments[0] !== void 0 && arguments[0] !== null ? Object(arguments[0]) : window,
        _self = this,
        singleKey = Symbol('call');
  Object.defineProperty(thisArgs, singleKey, {
    value: _self,
    configurable: true,
    writable: false,
    enumerable: false
  });

  let res = eval('thisArgs[singleKey](' + args + ')');

  delete thisArgs[singleKey];

  return res;
}

const obj = { name: 'a' };

function test(a, b) {
  console.log(this.name);
  console.log(a + b);
  return 1;
}

console.group('internal');
let r = test.call(obj, 1, 2);
console.log(r);
console.groupEnd();

console.group('external');
r = test.Call(obj,  1, 2);
console.log(r);
console.groupEnd();
