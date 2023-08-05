var wordBreak = function (s, wordDict) {
  // method 1
  //   if (wordDict == null || wordDict.length === 0) return false;
  //   const wset = new Set(wordDict);
  //   const history = new Set();
  //   const arr = [0];

  //   while (arr.length) {
  //     const left = arr.shift();
  //     if (!history.has(left)) {
  //       for (let right = left + 1; right <= s.length; right++) {
  //         if (wset.has(s.slice(left, right))) {
  //           if (right === s.length) return true;
  //           arr.push(right);
  //         }
  //       }
  //       history.add(left);
  //     }
  //   }
  //   return false;

  // method 2
  if (wordDict == null || wordDict.length === 0) return false;
  const wset = new Set(wordDict);
  const arr = Array(s.length + 1).fill(false);
  arr[0] = true;

  for (let right = 1; right <= s.length; right++) {
    for (let left = 0; left < right; left++) {
      const word = s.slice(left, right);
      if (arr[left] && wset.has(word)) {
        arr[right] = true;
        break;
      }
    }
  }

  return arr[s.length];
};

// const s = "catsandogcat";
// const wordDict = ["cats", "dog", "sand", "and", "cat", "an"];
const s = "catsandog";
const wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log("word-break:", wordBreak(s, wordDict));
