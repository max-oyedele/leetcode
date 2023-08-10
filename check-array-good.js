var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const last = nums.pop();
  if (nums.length !== last || last !== nums[nums.length - 1]) return false;

  let t = 0;
  for (let i = 0; i < nums.length; i++) {
    t ^= (i + 1) ^ nums[i];
  }
  return t === 0;
};

const nums1 = [2, 1, 3];
const nums2 = [1, 3, 3, 2];
const nums3 = [1, 1];
const nums4 = [3, 4, 4, 1, 2, 1];

[nums1, nums2, nums3, nums4].forEach((nums) => {
  console.log(
    "good if it is a permutation of an base[n] array:",
    nums,
    isGood(nums)
  );
});
