Function.prototype.Apply = function(thisArg, args) {
  const thisArgs = thisArg === void 0 || thisArg === null ? window : Object(thisArg),
        singleKey = Symbol('apply'),
        _self = this;

        Object.defineProperty(thisArgs, singleKey, {
          value: _self,
          configurable: true,
          enumerable: false,
          writable: false
        });

        let result = new Function('thisArgs', 'singleKey', 'return thisArgs[singleKey](' + args + ')')(thisArgs, singleKey);

        delete thisArgs[singleKey];
        
        return result;
}


const obj = { name: 'a' };

function test(a, b) {
  console.log(this.name);
  console.log(a + b);
  return 1;
}

console.group('internal');
let r = test.apply(obj, [1, 2]);
console.log(r);
console.groupEnd();

console.group('external');
r = test.Apply(obj,  [1, 2]);
console.log(r);
console.groupEnd();
