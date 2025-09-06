// const AA = 5,
//   AB = 0,
//   BB = 2;

// const AA = 1,
//   AB = 2,
//   BB = 1;

// const AA = 0,
//   AB = 2,
//   BB = 0;

const AA = 0,
  AB = 0,
  BB = 10;

const SELECT_PRIORITY = ["BB", "AB", "AA"];

const getNextIdx = curIdx => {
  if (curIdx > 1) {
    return 0;
  }
  curIdx++;
  return curIdx;
};

const solution = (AA, AB, BB) => {
  const manageObj = { AA, AB, BB };

  const getNextSelection = curIdx => {
    let nextIdx = getNextIdx(curIdx);
    if (manageObj[SELECT_PRIORITY[nextIdx]] === 0) {
      if (curIdx !== 0) {
        return null;
      } else {
        return getNextSelection(nextIdx);
      }
    } else {
      manageObj[SELECT_PRIORITY[nextIdx]]--;
      return nextIdx;
    }
  };
  let result = "";
  let curIdx = BB > AA ? 0 : 2;
  const curCount = manageObj[SELECT_PRIORITY[curIdx]];
  if (AB > curCount) curIdx = 1;

  const firstChar = SELECT_PRIORITY[curIdx];
  if (manageObj[firstChar] > 0) result += firstChar;
  while (true) {
    curIdx = getNextSelection(curIdx);
    if (curIdx === null) break;
    result += SELECT_PRIORITY[curIdx];
  }
  return result;
};

console.log(solution(AA, AB, BB));
