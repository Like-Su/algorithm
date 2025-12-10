const toString = Object.prototype.toString;

enum TYPE {
  FUNCTION = 'Function',
  NUMBER = 'Number',
  STRING = 'String',
}

const _toString = (value: unknown) => {
  const type = toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
  return type;
}

export const isFunction = (value: unknown): value is Function => _toString(value) === TYPE.FUNCTION;
export const isNumber = (value: unknown): value is number => _toString(value) === TYPE.NUMBER;
export const isString = (value: unknown): value is string => _toString(value) === TYPE.STRING;
