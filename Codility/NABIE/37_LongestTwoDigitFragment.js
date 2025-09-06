// const A = [23, 333, 33, 30, 0, 505];
// const A = [615, 88, 498, 99, 9];
// const A = [123, 456];
const A = [23, 333, 33, 4, 4, 4, 0, 0, 40];

const numToStrArr = num => {
  const result = {};
  const str = String(num);
  for (const char of str) {
    result[char] = true;
  }
  return Object.keys(result);
};

const solution = A => {
  let max = 0;
  let tempMax = 0;
  let checkArr = [];

  let lastNum = null;
  let lastSameNumCount = 0;

  for (const number of A) {
    const curStrArr = numToStrArr(number);

    if (curStrArr.length === 1) {
      const curNum = curStrArr[0];
      if (checkArr.includes(curNum)) {
        tempMax += 1;
      } else {
        if (checkArr.length < 2) {
          checkArr.push(curNum);
          tempMax += 1;
        } else {
          max = Math.max(max, tempMax);
          checkArr.shift();
          checkArr.push(curNum);
          tempMax = 1 + lastSameNumCount;
        }
      }

      if (curNum !== lastNum) {
        lastSameNumCount = 1;
        lastNum = curNum;
      } else {
        lastSameNumCount++;
      }
    } else if (curStrArr.length === 2) {
      if (checkArr.every(checkArrEle => curStrArr.includes(checkArrEle))) {
        tempMax++;
        checkArr = curStrArr;
      } else {
        max = Math.max(max, tempMax);
        tempMax = curStrArr.includes(lastNum) ? 1 + lastSameNumCount : 1;
        checkArr = curStrArr;
      }
      lastNum = null;
      lastSameNumCount = 0;
    } else {
      max = Math.max(max, tempMax);
      tempMax = 0;
      lastNum = null;
      lastSameNumCount = 0;
    }
  }
  max = Math.max(max, tempMax);
  return max;
};

console.log(solution(A));
