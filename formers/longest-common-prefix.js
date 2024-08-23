var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  const p = strs[0];
  var prefix = "";
  for (var i = 0; i < p.length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (p[i] !== strs[j][i]) break;
    }
    if (j === strs.length) prefix += p[i];
    else break;
  }
  console.log("strs-prefix:", strs, prefix);
  return prefix;
};

const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["pig"];
const strs4 = ["", " "];
const strs5 = ["cir", "car"];

[strs1, strs2, strs3, strs4, strs5].forEach((strs) => {
  longestCommonPrefix(strs);
});
