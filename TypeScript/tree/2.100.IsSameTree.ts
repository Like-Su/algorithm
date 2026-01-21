import type { TreeNode } from './TreeNode';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return sameTree(p, q);
}

function isSameChildren(q: TreeNode, p: TreeNode): boolean {
  return ((p?.left === null && q?.left) ||
    (p?.right === null && q?.right) ||
    (p?.left && q?.left === null) ||
    (p?.right && q?.right === null)) as boolean;
}

function sameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p?.val !== q?.val) return false;
  if ((p === null && q) || (q === null && p)) return false;
  if (isSameChildren(q!, p!)) return false;

  return sameTree(p!.left, q!.left) && sameTree(p!.right, q!.right);
}
