var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;

  let firstIndex = flowerbed.indexOf(1);
  let lastIndex = flowerbed.lastIndexOf(1);

  let possibleCount = 0;

  if (firstIndex >= 0 && lastIndex >= 0) {
    possibleCount =
      Math.floor(firstIndex / 2) +
      Math.floor((flowerbed.length - 1 - lastIndex) / 2);
  } else {
    possibleCount = Math.ceil(flowerbed.length / 2);
  }

  let prevIndex = firstIndex;
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (flowerbed[i] === 1) {
      const zeroCount = i - prevIndex - 1;
      if (zeroCount >= 3) {
        possibleCount += Math.floor((zeroCount - 1) / 2);
      }
      prevIndex = i;
    }
  }

  return n <= possibleCount;
};

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;

const flowerbed3 = [1, 0, 1, 0, 1, 0, 1];
const n3 = 1;

const flowerbed4 = [0, 0, 1, 0, 1];
const n4 = 1;

const flowerbed5 = [0];
const n5 = 1;

const flowerbed6 = [0, 1, 0];
const n6 = 1;

const flowerbed7 = [
  0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 0, 0, 0,
];
const n7 = 17;

[
  [flowerbed1, n1],
  [flowerbed2, n2],
  [flowerbed3, n3],
  [flowerbed4, n4],
  [flowerbed5, n5],
  [flowerbed6, n6],
  [flowerbed7, n7],
].forEach(([flowerbed, n]) => {
  console.log(
    "no-adjacent-flowers can be placed:",
    flowerbed,
    n,
    canPlaceFlowers(flowerbed, n)
  );
});
