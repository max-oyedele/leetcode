var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sarr = Array.from(s);
  const tarr = Array.from(t);
  while (sarr.length > 0) {
    for (let i = 0; i < tarr.length; i++) {
      if (tarr[i] === sarr[0]) {
        tarr.splice(i, 1);
        break;
      }
    }
    sarr.shift();
  }
  return tarr.length === 0;
};

const s1 = "anagram";
const t1 = "nagaram";

const s2 = "rat";
const t2 = "car";

[
  [s1, t1],
  [s2, t2],
].forEach(([s, t]) => {
  console.log("is anagram:", s, t, isAnagram(s, t));
});
