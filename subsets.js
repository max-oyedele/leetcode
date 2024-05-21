function subsets(nums) {
    var ans = [];
    var t = [];
    var dfs = function (i) {
        if (i === nums.length) {
            ans.push(t.slice());
            return;
        }
        dfs(i + 1);
        t.push(nums[i]);
        dfs(i + 1);
        t.pop();
    };
    dfs(0);
    return ans;
}
var numss = [[1, 2, 3], [0]];
numss.forEach(function (nums) {
    console.log("subsets of nums", subsets(nums));
});
