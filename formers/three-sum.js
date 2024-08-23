var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        const tri = [nums[i], nums[left++], nums[right--]];
        res.push(tri);
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return res;
};

const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0];
const nums4 = [
  3, -9, 3, 9, -6, -1, -2, 8, 6, -7, -14, -15, -7, 5, 2, -7, -4, 2, -12, -7, -1,
  -2, 1, -15, -13, -4, 0, -9, -11, 7, 4, 7, 13, 14, -7, -8, -1, -2, 7, -10, -2,
  1, -10, 6, -9, -1, 14, 2, -13, 9, 10, -7, -8, -4, -14, -5, -1, 1, 1, 4, -15,
  13, -12, 13, 12, -11, 12, -12, 2, -3, -7, -14, 13, -9, 7, -11, 5, -1, -2, -1,
  -7, -7, 0, -7, -4, 1, 3, 3, 9, 11, 14, 10, 1, -13, 8, -9, 13, -2, -6, 1, 10,
  -5, -6, 0, 1, 8, 4, 13, 14, 9, -2, -15, -13,
];

[nums1, nums2, nums3, nums4].forEach((nums) => {
  console.log("three sum = 0:", nums, threeSum(nums));
});
