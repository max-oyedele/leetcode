var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let rx = 0;
  let tx = x;
  while (tx != 0) {
    // calc reversely from right first
    rx = rx * 10 + (tx % 10);
    tx = parseInt(tx / 10, 10);
  }

  return x === rx;
};

const x1 = 10;
const x2 = -121;
const x3 = 0;
const x4 = 232;

[x1, x2, x3, x4].forEach((x) => {
  console.log(isPalindrome(x));
});
