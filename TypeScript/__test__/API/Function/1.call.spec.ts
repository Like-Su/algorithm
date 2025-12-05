import { describe, expect, it } from 'vitest';
import '@/API/Function/1.call';

describe('call', () => {
  it('should call the function with the given thisArg and arguments', () => {
    const obj = { name: 'a' };
    function test(this: any, a: number, b: number) {
      console.log(this.name);
      console.log(a + b);
      return 1;
    }
    const r = test.Call(obj, 1, 2);
    expect(r).toBe(1);
  })
});