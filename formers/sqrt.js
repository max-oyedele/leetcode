var mySqrt = function (x) {
  let sqrt = x / 2;
  let tmp = 0;

  while (sqrt !== tmp) {
    tmp = sqrt;
    sqrt = (x / sqrt + sqrt) / 2;
  }

  return Math.floor(sqrt);
};

const x1 = 4;
const x2 = 8;
[x1, x2].forEach((x) => {
  console.log("square root rounded down:", x, mySqrt(x));
});
