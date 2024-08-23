var merge = function (nums1, m, nums2, n) {
  let res = [];
  while (nums1.length > n) {
    if (nums2.length > 0) {
      if (nums1[0] <= nums2[0]) {
        res.push(nums1.shift());
      }
      if (nums1[0] > nums2[0]) {
        res.push(nums2.shift());
      }
    } else {
      res.push(nums1.shift());
    }
  }
  res.push(...nums2);
  return res;
};

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// const nums1 = [0];
// const m = 0;
// const nums2 = [1];
// const n = 1;
const nums1 = [2, 0];
const m = 1;
const nums2 = [1];
const n = 1;

console.log("merge array by m,n:", nums1, m, nums2, n);
console.log("merged:", merge(nums1, m, nums2, n));
