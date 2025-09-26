const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const solution = () => {
  const EMPTY = ".";
  let rowCheckedObject = {};
  let colCheckedObject = {};
  let squareCheckedList = Array.from({ length: 3 }, () => ({}));

  // Check rows
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const curNum = board[rowIdx][colIdx];
      if (curNum !== EMPTY) {
        if (rowCheckedObject[curNum]) {
          return false;
        }
        rowCheckedObject[curNum] = true;
        let squareCheckedObj;
        if (colIdx < 3) {
          squareCheckedObj = squareCheckedList[0];
        } else if (colIdx < 6) {
          squareCheckedObj = squareCheckedList[1];
        } else {
          squareCheckedObj = squareCheckedList[2];
        }
        if (squareCheckedObj[curNum]) {
          return false;
        }
        squareCheckedObj[curNum] = true;
      }

      const colCurNum = board[colIdx][rowIdx];
      if (colCurNum !== EMPTY) {
        if (colCheckedObject[colCurNum]) {
          return false;
        }
        colCheckedObject[colCurNum] = true;
      }
    }
    rowCheckedObject = {};
    colCheckedObject = {};
    if ((rowIdx + 1) % 3 === 0) {
      squareCheckedList = Array.from({ length: 3 }, () => ({}));
    }
  }

  return true;
};

console.log(solution());
