var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const sarr = Array.from(s);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(sarr[left])) left++;
    while (left < right && !vowels.includes(sarr[right])) right--;

    const t = sarr[left];
    sarr[left] = sarr[right];
    sarr[right] = t;

    left++;
    right--;
  }

  return sarr.join("");
};

const s1 = "hello";
const s2 = "leetcode";
[s1, s2].forEach((s) => {
  console.log("reversed vowels:", s, reverseVowels(s));
});
