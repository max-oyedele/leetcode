// var climbStairs = function (n) {
//   return recur(0, n);
// };

// var recur = function (i, n) {
//   if (i > n) return 0;
//   if (i === n) return 1;
//   return recur(i + 1, n) + recur(i + 2, n);
// };

var climbStairs = function (n) {
  if (n == 0) return 0;

  const stair = [];
  stair[1] = 1;
  stair[2] = 2;
  for (let i = 3; i <= n; i++) {
    stair[i] = stair[i - 1] + stair[i - 2];
  }

  return stair[n];
};

const n = 3;
console.log("climbing stairs by 1 or 2:", climbStairs(n));
