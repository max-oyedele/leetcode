function divide(a, b) {
    if (b === 1) {
        return a;
    }
    if (a === -(Math.pow(2, 31)) && b === -1) {
        return Math.pow(2, 31) - 1;
    }
    var sign = (a > 0 && b > 0) || (a < 0 && b < 0);
    a = a > 0 ? -a : a;
    b = b > 0 ? -b : b;
    var ans = 0;
    while (a <= b) {
        var x = b;
        var cnt = 1;
        while (x >= -(Math.pow(2, 30)) && a <= x << 1) {
            x <<= 1;
            cnt <<= 1;
        }
        ans += cnt;
        a -= x;
    }
    return sign ? ans : -ans;
}
[
    [10, 3],
    [7, -3],
].forEach(function (_a) {
    var a = _a[0], b = _a[1];
    console.log("divide two integers:", a, b, divide(a, b));
});
