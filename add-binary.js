var addBinary = function (a, b) {
  let res = [];
  let i = 0;
  let up = 0;
  while (a[a.length - 1 - i] || b[b.length - 1 - i]) {
    const sum =
      Number(a[a.length - 1 - i] ?? 0) + Number(b[b.length - 1 - i] ?? 0);
    res.unshift((sum + up) % 2);
    up = Math.floor((sum + up) / 2);
    i++;
  }
  if (up > 0) res.unshift(up);
  return res.join("");
};

const a = "100";
const b = "111";

console.log(a, b, addBinary(a, b));
