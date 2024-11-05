function balanceBST(root: TreeNode | null): TreeNode | null {
  const nums: number[] = [];
  const dfs = (root: TreeNode | null): void => {
    if (root == null) {
      return;
    }
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  };
  const build = (i: number, j: number): TreeNode | null => {
    if (i > j) {
      return null;
    }
    const mid: number = (i + j) >> 1;
    const left: TreeNode | null = build(i, mid - 1);
    const right: TreeNode | null = build(mid + 1, j);
    return new TreeNode(nums[mid], left, right);
  };
  dfs(root);
  return build(0, nums.length - 1);
}
