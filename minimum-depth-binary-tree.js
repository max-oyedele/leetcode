var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// root=[3,9,20,null,null,15,7]; minDepth=2;
// root=[2,null,3,null,4,null,5,null,6]; minDepth=5;
