var gcdOfStrings = function (str1, str2) {
  const smaller = str1.length > str2.length ? str2 : str1;
  const longer = str1.length > str2.length ? str1 : str2;
  let largest = "";

  for (let i = smaller.length; i > 0; i--) {
    const t = smaller.slice(0, i);
    if (divides(t, smaller) && divides(t, longer)) {
      largest = t;
      break;
    }
  }

  return largest;
};

var divides = function (t, s) {
  if (s.length % t.length !== 0) return false;
  for (let i = 0; i < s.length; i += t.length) {
    if (s.slice(i, i + t.length) !== t) return false;
  }
  return true;
};

const str11 = "ABCABC";
const str12 = "ABC";
const str21 = "ABABAB";
const str22 = "ABAB";
const str31 = "LEET";
const str32 = "CODE";
const str41 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
const str42 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";
const str51 = "ABABABAB";
const str52 = "ABAB";

[
  [str11, str12],
  [str21, str22],
  [str31, str32],
  [str41, str42],
  [str51, str52],
].forEach(([str1, str2]) => {
  console.log("gcd of strings", str1, str2, gcdOfStrings(str1, str2));
});
