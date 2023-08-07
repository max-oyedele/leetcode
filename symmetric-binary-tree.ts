import TreeNode from "./tree-node";

function isSymmetric(root: TreeNode | null): boolean {
  return recur(root, root);
}

function recur(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left || !right) return left === right; // null === null is true
  return (
    left.val === right.val &&
    recur(left.left, right.right) &&
    recur(left.right, right.left)
  );
}

// [1,2,2,3,4,4,3] is true
// [1,2,2,null,3,null,3] is false
