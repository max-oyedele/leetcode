import TreeNode from "./tree-node";

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  let arr: TreeNode[] = [];

  while (root || arr.length) {
    while (root) {
      arr.push(root);
      root = root.left;
    }
    root = arr.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}

const root = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};

console.log("inorder traversal:", inorderTraversal(root));
