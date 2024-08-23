function intToRoman(num: number): string {
  const cs: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const vs: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ans: string[] = [];
  for (let i = 0; i < vs.length; ++i) {
    while (num >= vs[i]) {
      num -= vs[i];
      ans.push(cs[i]);
    }
  }
  return ans.join("");
}

const num1 = 3749,
  num2 = 58,
  num3 = 1994;

[num1, num2, num3].forEach((num) => {
  console.log("integer to roman", num, intToRoman(num));
});
