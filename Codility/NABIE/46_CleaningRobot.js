const R = ["...X..", "....XX", "..X..."];
// const R = ["....X..", "X......", ".....X.", "......."];
// const R = ["...X.", ".X..X", "X...X", "..X.."];
// const R = ["."];

const EMPTY_POS = ".";
const OBSTACLE_POS = "X";
const DONE_POS = "DONE";

const DIR = {
  1: "RIGHT",
  2: "DOWN",
  3: "LEFT",
  4: "UP",
};

const DIR_REVERSE = {
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3,
  UP: 4,
};

const solution = R => {
  const inputR = R.map(str => str.split(""));
  console.table(inputR);
  const maxRow = inputR.length;
  const maxCol = inputR[0].length;
  const lastRowIdx = maxRow - 1;
  const lastColIdx = maxCol - 1;
  const doubleDoneObject = {};
  let result = 1;

  const checkInvalidPoint = (rowIdx, colIdx) => {
    if (rowIdx < 0 || colIdx < 0 || rowIdx > lastRowIdx || colIdx > lastColIdx) {
      return true;
    }
    return false;
  };

  const getNextDir = curDir => {
    if (curDir === DIR_REVERSE.UP) {
      return DIR_REVERSE.RIGHT;
    }
    curDir++;
    return curDir;
  };

  const checkDoubleDoneObj = (rowIdx, colIdx) => {
    if (!doubleDoneObject[rowIdx]) {
      doubleDoneObject[rowIdx] = {};
      doubleDoneObject[rowIdx][colIdx] = true;
      return false;
    } else {
      if (doubleDoneObject[rowIdx][colIdx]) {
        return true;
      }
      doubleDoneObject[rowIdx][colIdx] = true;
      return false;
    }
  };

  const cleaning = (rowIdx, colIdx, curDir = 1) => {
    let newRowIdx = rowIdx;
    let newColIdx = colIdx;

    let localCurDir = curDir;
    for (let i = 0; i < 4; i++) {
      let nextDir = getNextDir(localCurDir);
      switch (localCurDir) {
        case DIR_REVERSE.RIGHT:
          newRowIdx = rowIdx;
          newColIdx = colIdx + 1;
          break;
        case DIR_REVERSE.DOWN:
          newRowIdx = rowIdx + 1;
          newColIdx = colIdx;
          break;
        case DIR_REVERSE.LEFT:
          newRowIdx = rowIdx;
          newColIdx = colIdx - 1;
          break;
        case DIR_REVERSE.UP:
          newRowIdx = rowIdx - 1;
          newColIdx = colIdx;
          break;
        default:
          break;
      }

      if (checkInvalidPoint(newRowIdx, newColIdx)) {
        localCurDir = nextDir;
        continue;
      }

      const nextPos = inputR[newRowIdx][newColIdx];

      if (nextPos === OBSTACLE_POS) {
        localCurDir = nextDir;
        continue;
      }

      if (nextPos === EMPTY_POS) {
        inputR[newRowIdx][newColIdx] = DONE_POS;
        result++;
        return cleaning(newRowIdx, newColIdx, localCurDir);
      }

      if (nextPos === DONE_POS) {
        if (checkDoubleDoneObj(newRowIdx, newColIdx)) {
          return;
        } else {
          inputR[newRowIdx][newColIdx] = DONE_POS;
          return cleaning(newRowIdx, newColIdx, localCurDir);
        }
      }
    }
  };

  inputR[0][0] = DONE_POS;
  cleaning(0, 0);
  // console.table(inputR);
  return result;
};

console.log(solution(R));
