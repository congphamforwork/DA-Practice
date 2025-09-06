const B = [".##.#", "#.#..", "#...#", "#.##."];
// const B = [".#..#", "##..#", "...#."];
// const B = ["##.", "#.#", ".##"];
// const B = ["...", "...", "..."];
const PART = "#";
const EMPTY = ".";

const deepFirstSearch = (B, x, y, shipLen) => {
  if (!B[y] || B[y][x] !== PART) {
    return;
  }
  shipLen.point++;
  B[y][x] = EMPTY;
  deepFirstSearch(B, x, y + 1, shipLen);
  deepFirstSearch(B, x, y - 1, shipLen);
  deepFirstSearch(B, x + 1, y, shipLen);
  deepFirstSearch(B, x - 1, y, shipLen);
};

const solution = (originB) => {
  const B = originB.map((arr) => arr.split(""));
  const Ylen = B.length;
  const Xlen = B[0].length;
  let result = [0, 0, 0];

  for (let i = 0; i < Ylen; i++) {
    for (let j = 0; j < Xlen; j++) {
      const curVal = B[i][j];
      if (curVal === PART) {
        let shipLen = { point: 0 };
        deepFirstSearch(B, j, i, shipLen);
        result[shipLen.point - 1]++;
      }
    }
  }

  return result;
};

console.log(solution(B));
