function dfs(l, r, t) {
  if (l > n || r > n || l < r) {
    return;
  }
  if (l == n && r == n) {
    ans.push(t);
    return;
  }
  dfs(l + 1, r, t + "(");
  dfs(l, r + 1, t + ")");
}

let ans = [];
let n = 3;
dfs(0, 0, "");

console.log("generated well-formed parenthese:", ans);
