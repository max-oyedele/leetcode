var isPalindrome = function (s) {
  var reg = /[\W_]/g; // remove all non alphanumeric
  var str = s.toLowerCase().replace(reg, "");
  var revStr = Array.from(str).reverse().join("");
  return str === revStr;
};

const s1 = "A man, a plan, a canal: Panama";
const s2 = "race a car";
const s3 = " ";

[s1, s2, s3].forEach((s) => {
  console.log("is valid palindrome:", s, isPalindrome(s));
});
