var longestValidParentheses = function (s) {
  const n = s.length;
  const f = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
    if (s[i - 1] === ")") {
      if (s[i - 2] === "(") {
        f[i] = f[i - 2] + 2;
      } else {
        const j = i - f[i - 1] - 1;
        if (j && s[j - 1] === "(") {
          f[i] = f[i - 1] + 2 + f[j - 1];
        }
      }
    }
  }
  return Math.max(...f);
};

const s1 = "(()",
  s2 = ")()())",
  s3 = "";
[s1, s2, s3].forEach((s) => {
  console.log("longest valid parentheses of ", s, longestValidParentheses(s));
});
