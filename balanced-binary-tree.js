var isBalanced = function (root) {
  if (!root) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
  );
};

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// [3,9,20,null,null,15,7] => true
// [1,2,2,3,3,null,null,4,4] => false
// [] => true
