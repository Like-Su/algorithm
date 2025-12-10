import { binaryToDecimal } from "@/binary/binaryTransformer";
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
