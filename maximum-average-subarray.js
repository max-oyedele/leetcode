var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((acc, num) => acc + num, 0); // first sum of k digits
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // sum new num and subtract excluded num
    max = Math.max(max, sum);
  }
  return max / k;
};

const nums1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
const nums2 = [5];
const k2 = 1;
const nums3 = [0, 1, 1, 3, 3];
const k3 = 4;

[
  [nums1, k1],
  [nums2, k2],
  [nums3, k3],
].forEach(([nums, k]) => {
  console.log(
    "maximum average of k subarray:",
    nums,
    k,
    findMaxAverage(nums, k)
  );
});
