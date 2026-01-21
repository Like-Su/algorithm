import { isSameTree } from '@/tree/2.100.IsSameTree';
import { TreeNode } from '@/tree/TreeNode';
import { describe, expect, it } from 'vitest';

describe('IsSameTree', () => {
  it('Same Tree - Case 1', () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);

    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(3);

    expect(isSameTree(p, q)).toBe(true);
  });

  it('Same Tree - Case 2 (Different Structure)', () => {
    const p = new TreeNode(1);
    p.right = new TreeNode(2);

    const q = new TreeNode(1);
    q.left = new TreeNode(2);

    expect(isSameTree(p, q)).toBe(false);
  });

  it('Same Tree - Case 3 (Different Values)', () => {
    const p = new TreeNode(1);
    p.left = new TreeNode(1);
    p.right = new TreeNode(2);

    const q = new TreeNode(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(1);

    expect(isSameTree(p, q)).toBe(false);
  });
});
