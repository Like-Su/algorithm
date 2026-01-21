import { describe, it, expect } from 'vitest';
import { TreeNode } from '@/tree/TreeNode';
import { inorderTraversal } from '@/tree/1.94InOrder';

describe('Tree', () => {
  it('InOrder 1', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });

  it('InOrder 2', () => {
    // input: [1,2,3,4,5,null,8,null,null,6,7,9]
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(6);
    root.left.right.right = new TreeNode(7);
    root.right.right.left = new TreeNode(9);

    expect(inorderTraversal(root)).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
  });

  it('InOrder 3', () => {
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toEqual([1]);
  });
});
