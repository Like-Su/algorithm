import { describe, expect, it } from "vitest";
import "@/API/Function/2.apply";

describe('apply', () => {
  it('should apply the function with the given thisArg and arguments', () => {
    const obj = { name: 'a' };
    function test(this: any, a: number, b: number) {
      console.log(this.name);
      console.log(a + b);
      return 1;
    }
    const r = test.Apply(obj, [1, 2]);
    expect(r).toBe(1);
  })
});