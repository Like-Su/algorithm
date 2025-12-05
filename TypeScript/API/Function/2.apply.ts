declare global {
  interface Function {
    Apply: (thisArg: any, args: any[]) => any;
  }
}

Function.prototype.Apply = function (thisArg, args) {
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