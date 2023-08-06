var majorityElement = function (nums) {
  let count = 0;
  let e = null;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) e = nums[i];
    if (nums[i] === e) {
      count++;
    } else count--;
  }
  return e;
};

const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

[nums1, nums2].forEach((nums) => {
  console.log(
    "majority element appeared more than n/2:",
    nums,
    majorityElement(nums)
  );
});
