import { describe, expect, it } from 'vitest';
import { cyclicShift } from '@/binary/cyclicShift';

describe('cyclic shift', () => {
  it('should shift the binary string by n positions', () => {
    const cyclicShiftTwo = cyclicShift(2);

    expect(cyclicShiftTwo('101010')).toBe('010101');
  })
});