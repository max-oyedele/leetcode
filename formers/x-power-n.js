var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  //   return x * myPow(x, n - 1);
  if (n % 2) {
    return x * myPow(x * x, (n - 1) / 2);
  } else {
    return myPow(x * x, n / 2);
  }
};

const x = 2.0;
const n = 10;
console.log("x power n:", x, n, myPow(x, n));
