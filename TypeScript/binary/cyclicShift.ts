/**
 * 循环左移
 * @param n 
 * @returns 循环左移n位后的二进制字符串
 * @param binary 二进制字符串
 * @returns 循环左移n位后的二进制字符串
 * @example
 * cyclicShift(2)('101010') // '010101'
 * cyclicShift(2)('101010') // '010101'
 */
export function cyclicShift(n: number) {
  return (binary: number | string | Array<string>) => {
    if (typeof binary === 'number') {
      binary = binary.toString();
    }
    let currentBinary = null;
    let i = 0;
    while (i <= n) {
      currentBinary = binary[0];
      binary = binary.slice(1) + currentBinary!;
      i++;
    }
    return binary;
  }
}

