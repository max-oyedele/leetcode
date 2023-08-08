var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const sarr = Array.from(s);
  let max = s[0];

  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length; j++) {
      if (s[j] !== s[i]) continue;
      for (var k = i; k <= j; k++) {
        if (s[k] !== s[j + i - k]) break;
      }
      if (k === j + 1) {
        max = k - i > max.length ? sarr.slice(i, k).join("") : max;
      }
    }
  }

  return max;
};

const s1 = "babad";
const s2 = "cbbd";
const s3 = "ac";

[s1, s2, s3].forEach((s) => {
  console.log("longest palindromic substring:", s, longestPalindrome(s));
});
