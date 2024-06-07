var maxSubArray = function (nums) {
  let [ans, f] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    f = Math.max(f, 0) + nums[i];
    ans = Math.max(ans, f);
  }
  return ans;
};

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  nums2 = [1],
  nums3 = [5, 4, -1, 7, 8];

[nums1, nums2, nums3].forEach((nums) => {
  console.log("max sub array:", maxSubArray(nums));
});
