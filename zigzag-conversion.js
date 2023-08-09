var convert = function (s, numRows) {
  let res = "";
  let rowNum = 0;
  let updown = numRows === 1 ? 0 : -1;

  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for (const c of s) {
    rows[rowNum]?.push(c);
    if (rowNum === 0 || rowNum === numRows - 1) updown *= -1;
    rowNum += updown;
  }

  for (const row of rows) {
    for (const c of row) {
      res += c;
    }
  }

  return res;
};

const s = "PAYPALISHIRING";
const numRows = 3;

console.log("zigzag converted:", s, numRows, convert(s, numRows));
