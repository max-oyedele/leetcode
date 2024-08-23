"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inorderTraversal(root) {
    var res = [];
    var arr = [];
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
var root = {
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};
console.log("inorder traversal:", inorderTraversal(root));
