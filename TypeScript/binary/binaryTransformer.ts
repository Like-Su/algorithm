import { isNumber, isString } from "@/utils/is";

const BINARY_MAP = "01";
// 二进制转换十进制
export function binaryToDecimal(binary: string | Array<string>) {
  let originBinary: string | string[] | number = binary;
  if (isNumber(binary)) {
    originBinary = binary.toString() as string;
  }
  if (isString(binary)) {
    originBinary = binary.split('') as string[];
  }

  originBinary = (originBinary as string[]).filter(binary => BINARY_MAP.includes(binary));

  return originBinary.reduceRight((prev, cur, index, binarys) => {
    const decimal = Number(cur) === 1 ? Math.pow(2, binarys.length - index - 1) : 0;
    return prev + decimal;
  }, 0);
}

// 十进制转换二进制
export function decimalToBinary(decimal: number) {
  if (decimal === 0) return '0';
  const binarys = [];
  while (decimal > 0) {
    binarys.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  // return binarys.reverse().join('');
  return binarys.reduceRight((prev, cur) => prev += cur, '');
}

// 二进制转换十进制 凑权法
export function decimalToBinaryByWeight(weight: number | 'auto') {
  const _binaryMap: Record<string, number> = {};
  // 创建二进制表
  const createBitMap = (binary: string | number) => {
    let bits: string | string[] = '';
    let bitCount = 0;
    if (typeof binary === 'number') {
      bits = weight.toString();
    } else {
      bits = binary.split('');
      bitCount = Object.keys(_binaryMap).length;
    }

    if (_binaryMap[bitCount]) return _binaryMap;

    // patch bit map
    for (let i = bitCount; i < bits.length; i++) {
      _binaryMap[i] = Math.pow(2, i);
    }
    return _binaryMap;
  }

  // 是否为 1
  const isTrue = (binary: string, index: number) => binary[index] === '1';

  // 是否将 二进制表进行扩展
  const isVExtend = (binary: string) => binary.length > Object.keys(_binaryMap).length;

  return (binary: string) => {
    const bitMap = isVExtend(binary) ? createBitMap(binary) : _binaryMap;
    const bitMapValue = Object.values(bitMap);
    let decimal = 0;
    binary = binary.padStart(bitMapValue.length, '0');
    for (let i = 0; i < binary.length; i++) {
      if (isTrue(binary, i)) {
        decimal += bitMapValue[bitMapValue.length - 1 - i] as any;
      }
    }
    return decimal;
  }
}