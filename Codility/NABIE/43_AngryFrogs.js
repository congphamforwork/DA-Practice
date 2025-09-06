// const blocks = [2, 6, 8, 5];
// const blocks = [1, 5, 5, 2, 6];
// const blocks = [1, 1];
const blocks = [1, 9, 8, 7, 4, 6, 5, 7, 9, 12, 15, 4];

const modifyBlocks = (jumpFarestToRight, maxDistance, startIdx, reverse = false) => {
  if (reverse === true) {
    while (maxDistance > -1) {
      jumpFarestToRight[startIdx] = maxDistance;
      maxDistance--;
      startIdx--;
    }
    return;
  }

  while (maxDistance > -1) {
    jumpFarestToRight[startIdx] = maxDistance;
    maxDistance--;
    startIdx++;
  }
};

const solution = blocks => {
  const n = blocks.length;
  const jumpFarestToRight = [];
  const jumpFarestToLeft = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      const curIdx = j - 1;
      const curNum = blocks[curIdx];
      const nextNum = blocks[j];
      if (nextNum < curNum || nextNum === undefined) {
        const maxDistance = curIdx - i;
        modifyBlocks(jumpFarestToRight, maxDistance, i);
        i = curIdx;
        break;
      }
    }
  }

  for (let i = n - 1; i > -1; i--) {
    for (let j = i - 1; j > -2; j--) {
      const curIdx = j + 1;
      const curNum = blocks[curIdx];
      const nextNum = blocks[j];
      if (nextNum < curNum || nextNum === undefined) {
        const maxDistance = i - curIdx;
        modifyBlocks(jumpFarestToLeft, maxDistance, i, true);
        i = curIdx;
        break;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const tempResult = jumpFarestToLeft[i] + jumpFarestToRight[i];
    if (tempResult > result) {
      result = tempResult;
    }
  }
  return result + 1;
};

console.log(solution(blocks));
