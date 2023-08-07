var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;

  const lastIndex = i;

  while (i >= 0 && s[i] !== " ") i--;

  return lastIndex - i;
};

const s1 = "hello world";
const s2 = "   fly me   to   the moon  ";
const s3 = "luffy is still joyboy";
[s1, s2, s3].forEach((s) => {
  console.log("length of last word:", s, lengthOfLastWord(s));
});
