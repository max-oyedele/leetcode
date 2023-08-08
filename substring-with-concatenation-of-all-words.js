var findSubstring = function (s, words) {
  let wordLen = words[0].length;

  let nums = [];

  for (var i = 0; i < s.length - words.length * wordLen + 1; i++) {
    const tWords = [...words];
    for (var j = 0; j < words.length; j++) {
      const start = i + j * wordLen;
      const word = s.slice(start, start + wordLen);
      const fIndex = tWords.findIndex((e) => e === word);
      if (fIndex === -1) break;
      tWords.splice(fIndex, 1);
    }
    if (j !== words.length) continue;
    nums.push(i);
  }

  return nums;
};

const s1 = "barfoothefoobarman";
const words1 = ["foo", "bar"];

const s2 = "wordgoodgoodgoodbestword";
const words2 = ["word", "good", "best", "word"];

const s3 = "wordgoodgoodgoodbestword";
const words3 = ["word", "good", "best", "good"];

[
  [s1, words1],
  [s2, words2],
  [s3, words3],
].forEach(([s, words]) => {
  console.log(
    "starting indicies of permutation of all words:",
    s,
    words,
    findSubstring(s, words)
  );
});
