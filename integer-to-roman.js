function intToRoman(num) {
    var cs = [
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
    var vs = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var ans = [];
    for (var i = 0; i < vs.length; ++i) {
        while (num >= vs[i]) {
            num -= vs[i];
            ans.push(cs[i]);
        }
    }
    return ans.join("");
}
var num1 = 3749, num2 = 58, num3 = 1994;
[num1, num2, num3].forEach(function (num) {
    console.log("integer to roman", num, intToRoman(num));
});
