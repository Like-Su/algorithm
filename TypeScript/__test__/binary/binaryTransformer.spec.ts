import { binaryToDecimal, decimalToBinary, decimalToBinaryByWeight } from "@/binary/binaryTransformer";
import { describe, expect, it } from "vitest";

describe('binary transformer', () => {
  it('should transform binary string to decimal', () => {
    expect(binaryToDecimal('0001')).toBe(1);
    expect(binaryToDecimal('0010')).toBe(2);
    expect(binaryToDecimal('0100')).toBe(4);
    expect(binaryToDecimal('1000')).toBe(8);
    expect(binaryToDecimal('1001')).toBe(9);
    expect(binaryToDecimal('1010')).toBe(10);
    expect(binaryToDecimal('1011')).toBe(11);
    expect(binaryToDecimal('1111')).toBe(15);
  })

  it('should transform binary array to decimal', () => {
    expect(binaryToDecimal(['0', '0', '0', '1'])).toBe(1);
    expect(binaryToDecimal(['0', '0', '1', '0'])).toBe(2);
    expect(binaryToDecimal(['0', '1', '0', '0'])).toBe(4);
    expect(binaryToDecimal(['1', '0', '0', '0'])).toBe(8);
    expect(binaryToDecimal(['1', '0', '0', '1'])).toBe(9);
    expect(binaryToDecimal(['1', '0', '1', '0'])).toBe(10);
    expect(binaryToDecimal(['1', '0', '1', '1'])).toBe(11);
    expect(binaryToDecimal(['1', '1', '1', '1'])).toBe(15);
  })
})

describe('decimal transformer', () => {
  it('should transform decimal to binary string', () => {
    expect(decimalToBinary(0)).toBe('0');
    expect(decimalToBinary(1)).toBe('1');
    expect(decimalToBinary(2)).toBe('10');
    expect(decimalToBinary(4)).toBe('100');
    expect(decimalToBinary(8)).toBe('1000');
    expect(decimalToBinary(9)).toBe('1001');
    expect(decimalToBinary(10)).toBe('1010');
    expect(decimalToBinary(11)).toBe('1011');
    expect(decimalToBinary(15)).toBe('1111');
  })
})

describe('decimal transformer by weight', () => {
  it('should transform decimal to binary string by weight', () => {
    const toBinary = decimalToBinaryByWeight(4);
    expect(toBinary('0001')).toBe(1);
    expect(toBinary('0010')).toBe(2);
    expect(toBinary('0100')).toBe(4);
    expect(toBinary('1000')).toBe(8);
    expect(toBinary('1001')).toBe(9);
    expect(toBinary('1010')).toBe(10);
    expect(toBinary('1011')).toBe(11);
    expect(toBinary('1111')).toBe(15);
    expect(toBinary('11111')).toBe(31);
    expect(toBinary('111111')).toBe(63);
  })
})