var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const half = Math.floor((left + right) / 2);
    if (nums[half] === target) {
      return half;
    }
    if (nums[left] <= nums[half]) {
      if (nums[left] <= target && target < nums[half]) right = half - 1;
      else left = half + 1;
    } else {
      if (nums[half] < target && target <= nums[right]) left = half + 1;
      else right = half - 1;
    }
  }

  return -1;
};

const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;

const nums3 = [1];
const target3 = 0;

const nums4 = [1, 3];
const target4 = 1;

const nums5 = [5, 1, 3];
const target5 = 3;

[
  [nums1, target1],
  [nums2, target2],
  [nums3, target3],
  [nums4, target4],
  [nums5, target5],
].forEach(([nums, target]) => {
  console.log("search index of target:", nums, target, search(nums, target));
});
