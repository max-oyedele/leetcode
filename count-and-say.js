var countAndSay = function (n) {
  let s = "1";

  for (let i = 2; i <= n; i++) {
    let count = 1,
      str = "",
      len = s.length;

    for (let j = 0; j < len; j++) {
      if (j < len - 1 && s[j] === s[j + 1]) {
        count++;
      } else {
        str += `${count}${s[j]}`;
        count = 1;
      }
    }
    s = str;
  }
  return s;
};

const n1 = 1,
  n2 = 4;
[n1, n2].forEach((n) => {
  console.log("count-and-say", countAndSay(n));
});
