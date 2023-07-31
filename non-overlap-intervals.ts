function eraseOverlapIntervals1(intervals: number[][]): number {
  var maxNonOverlapIntervals: number[][] = [];

  let bins = new Array(intervals.length);
  for (let i = 0; i < intervals.length; i++) bins[i] = 0;

  while (sum(bins) !== intervals.length) {
    let up = 0;
    let i = intervals.length - 1;
    bins[i]++;
    while (i >= 0) {
      const s = bins[i] + up;
      bins[i] = s % 2;
      up = Math.floor(s / 2);
      i--;
    }

    if (sum(bins) < maxNonOverlapIntervals.length) continue;

    let temp: number[][] = [];
    bins.forEach((bin, index) => {
      if (bin) temp.push(intervals[index]);
    });
    if (sum(getOverlaps(temp)) === 0) {
      if (temp.length > maxNonOverlapIntervals.length) {
        maxNonOverlapIntervals = [...temp];
      }
    }
  }

  console.log("maxNonOverlapIntervals:", maxNonOverlapIntervals);
  return intervals.length - maxNonOverlapIntervals.length;
}

function getOverlaps(arr: number[][]): number[] {
  const overlaps: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let overlap = 0;
    for (let j = i + 1; j < arr.length; j++) {
      const cond =
        (arr[i][0] <= arr[j][0] && arr[i][1] >= arr[j][1]) ||
        (arr[i][0] >= arr[j][0] && arr[i][1] <= arr[j][1]) ||
        (arr[i][0] <= arr[j][0] &&
          arr[i][1] > arr[j][0] &&
          arr[i][1] <= arr[j][1]) ||
        (arr[i][0] >= arr[j][0] &&
          arr[i][0] < arr[j][1] &&
          arr[i][1] >= arr[j][1]); // include or overlap_right or overlap_left
      if (cond) overlap++;
    }
    overlaps.push(overlap);
  }
  return overlaps;
}

function sum(arr: number[]): number {
  return arr.reduce((acc, overlap) => acc + overlap, 0);
}

////////////////////////////////////////////////////////
function eraseOverlapIntervals2(intervals: number[][]): number {
  intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  var removed: number[][] = [];
  let l = 0;
  let r = 1;

  while (r < intervals.length) {
    if (intervals[l][1] <= intervals[r][0]) {
      // no remove
      l = r;
    } else if (intervals[l][1] <= intervals[r][1]) {
      // remove right one
      removed.push(intervals[r]);
    } else if (intervals[l][1] > intervals[r][1]) {
      // remove left one
      removed.push(intervals[l]);
      l = r;
    }
    r++;
  }

  console.log("removed:", removed);
  return removed.length;
}

////////////////////////////////////////////////////////
const intervals1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
const intervals2 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
const intervals3 = [
  [1, 2],
  [2, 3],
];
const intervals4 = [
  [1, 2],
  [1, 2],
];
const intervals5 = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
];
const intervals6 = [
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];
const intervals7 = [
  [-52, 31],
  [-73, -26],
  [82, 97],
  [-65, -11],
  [-62, -49],
  [95, 99],
  [58, 95],
  [-31, 49],
  [66, 98],
  [-63, 2],
  [30, 47],
  [-40, -26],
];
const intervals8 = [
  [-3035, 30075],
  [1937, 6906],
  [11834, 20971],
  [44578, 45600],
  [28565, 37578],
  [19621, 34415],
  [32985, 36313],
  [-8144, 1080],
  [-15279, 21851],
  [-27140, -14703],
  [-12098, 16264],
  [-36057, -16287],
  [47939, 48626],
  [-15129, -5773],
  [10508, 46685],
  [-35323, -26257],
];
const intervals9 = [
  [-25322, -4602],
  [-35630, -28832],
  [-33802, 29009],
  [13393, 24550],
  [-10655, 16361],
  [-2835, 10053],
  [-2290, 17156],
  [1236, 14847],
  [-45022, -1296],
  [-34574, -1993],
  [-14129, 15626],
  [3010, 14502],
  [42403, 45946],
  [-22117, 13380],
  [7337, 33635],
  [-38153, 27794],
  [47640, 49108],
  [40578, 46264],
  [-38497, -13790],
  [-7530, 4977],
  [-29009, 43543],
  [-49069, 32526],
  [21409, 43622],
  [-28569, 16493],
  [-28301, 34058],
];

[
  intervals1,
  intervals2,
  intervals3,
  intervals4,
  intervals5,
  intervals6,
  intervals7,
  intervals8,
  //   intervals9,
].forEach((intervals, index) => {
  console.log("intervals" + (index + 1), eraseOverlapIntervals1(intervals));
});
