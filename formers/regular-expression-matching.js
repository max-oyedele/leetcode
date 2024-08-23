function isMatch(s, p) {
  const m = s.length;
  const n = p.length;
  const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  f[0][0] = true;
  for (let i = 0; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (p[j - 1] === "*") {
        f[i][j] = f[i][j - 2];
        if (i && (p[j - 2] === "." || p[j - 2] === s[i - 1])) {
          f[i][j] |= f[i - 1][j];
        }
      } else if (i && (p[j - 1] === "." || p[j - 1] === s[i - 1])) {
        f[i][j] = f[i - 1][j - 1];
      }
    }
  }
  return f[m][n];
}

const s1 = "aa",
  p1 = "a";
const s2 = "aa",
  p2 = "a*";
const s3 = "ab",
  p3 = ".*";
[
  [s1, p1],
  [s2, p2],
  [s3, p3],
].forEach(([s, p]) => {
  console.log("regular-expression-matching", s, p, isMatch(s, p));
});
