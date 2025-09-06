const B = ["X.....>", "..v..X.", ".>..X..", "A......"];
// const B = ["...Xv", "AX..^", ".XX.."];
// const B = ["...", ">.A"];
// const B = ["A.v", "..."];

const DIR_UP = "^";
const DIR_DOWN = "v";
const DIR_LEFT = "<";
const DIR_RIGHT = ">";

const IS_GUARD = {
  [DIR_UP]: true,
  [DIR_DOWN]: true,
  [DIR_LEFT]: true,
  [DIR_RIGHT]: true,
};

const ASSASIN_POS = "A";
const OBSTACLE_POS = "X";
const GUARDED_POS = "G";
const EMPTY_POS = ".";
const DONE_POS = "DONE";

const CAN_PASS_THROUGH = {
  [EMPTY_POS]: true,
  [GUARDED_POS]: true,
};

const solution = B => {
  const inputArr = B.map(str => str.split(""));
  const n = inputArr.length;
  const m = inputArr[0].length;
  const lastIdxRow = n - 1;
  const lastIdxCol = m - 1;

  const fillTheLine = (startRow, startCol, guardDirection) => {
    switch (guardDirection) {
      case DIR_UP:
        for (let i = startRow - 1; i > -1; i--) {
          const curPos = inputArr[i][startCol];
          if (CAN_PASS_THROUGH[curPos]) {
            inputArr[i][startCol] = GUARDED_POS;
          } else {
            if (curPos === ASSASIN_POS) {
              return false;
            }
            break;
          }
        }
        break;

      case DIR_DOWN:
        for (let i = startRow + 1; i < n; i++) {
          const curPos = inputArr[i][startCol];
          if (CAN_PASS_THROUGH[curPos]) {
            inputArr[i][startCol] = GUARDED_POS;
          } else {
            if (curPos === ASSASIN_POS) {
              return false;
            }
            break;
          }
        }
        break;

      case DIR_LEFT:
        for (let i = startCol - 1; i > -1; i--) {
          const curPos = inputArr[startRow][i];
          if (CAN_PASS_THROUGH[curPos]) {
            inputArr[startRow][i] = GUARDED_POS;
          } else {
            if (curPos === ASSASIN_POS) {
              return false;
            }
            break;
          }
        }
        break;

      case DIR_RIGHT:
        for (let i = startCol + 1; i < m; i++) {
          const curPos = inputArr[startRow][i];
          const test = CAN_PASS_THROUGH[curPos];

          if (test) {
            inputArr[startRow][i] = GUARDED_POS;
          } else {
            if (curPos === ASSASIN_POS) {
              return false;
            }
            break;
          }
        }
        break;

      default:
        break;
    }
    return true;
  };

  const escape = (row, col) => {
    if (row < 0 || row > lastIdxRow || col < 0 || col > lastIdxCol) {
      return false;
    }
    const curPos = inputArr[row][col];
    if (curPos !== EMPTY_POS && curPos !== ASSASIN_POS) {
      return false;
    }
    if (row === lastIdxRow && col === lastIdxCol) {
      return true;
    }
    inputArr[row][col] = DONE_POS;
    return (
      escape(row + 1, col) || escape(row - 1, col) || escape(row, col + 1) || escape(row, col - 1)
    );
  };

  let rowA;
  let colA;
  // make guarded line & find the assassin position
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const curPosition = inputArr[i][j];
      if (curPosition === ASSASIN_POS) {
        rowA = i;
        colA = j;
      }
      const test = IS_GUARD[curPosition];
      if (test) {
        const isContinue = fillTheLine(i, j, curPosition);
        if (!isContinue) {
          return false;
        }
      }
    }
  }

  return escape(rowA, colA);
};

console.log(solution(B));
