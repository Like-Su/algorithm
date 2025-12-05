declare global {
  interface Function {
    Call: (...args: any[]) => any;
  }
}

Function.prototype.Call = function () {
  const args = Array.prototype.slice.call(arguments, 1),
    thisArgs = arguments[0] !== void 0 || arguments[0] !== null ? Object(arguments[0]) : window,
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