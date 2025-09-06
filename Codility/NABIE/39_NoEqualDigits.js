// const N = 3298;
// const N = 44432;
// const N = 1765;
// const N = 55;
// const N = 98;
// const N = 76989; //78010
// const N = 98989; //101010
const N = 498989; //78010

const arrToNumber = arr => {
  let result = 0;
  let temp = arr.length - 1;
  for (ele of arr) {
    result += ele * 10 ** temp;
    temp--;
  }
  return result;
};

const processFromIdxToZero = (processArr, idx) => {
  for (let i = idx; i > 0; i--) {
    const curNum = processArr[i];
    const nextNum = processArr[i - 1];

    let temp = curNum + 1;
    temp === nextNum && temp++;

    if (temp < 10) {
      processArr[i] = temp;
      return i + 1;
    } else {
      processArr[i] = 0;
    }
  }

  processArr[0] = 1;
  return 1;
};

const solution = N => {
  const nextNum = N + 1;
  if (N < 10) {
    return nextNum;
  }
  const processingArr = Array.from(String(nextNum), Number);
  processingArr.unshift(0);
  const arrLen = processingArr.length;

  // check 2 consecutive numbers
  let continueIndex = arrLen;
  for (let i = 2; i < arrLen; i++) {
    const prevNum = processingArr[i - 1];
    const curNum = processingArr[i];
    if (curNum === prevNum) {
      const temp = curNum + 1;
      if (temp < 10) {
        processingArr[i]++;
        continueIndex = i + 1;
      } else {
        continueIndex = processFromIdxToZero(processingArr, i);
      }
      break;
    }
  }

  // check from continue idx to end
  for (let i = continueIndex; i < arrLen; i++) {
    const prevNum = processingArr[i - 1];
    for (let num = 0; num < 10; num++) {
      if (prevNum !== num) {
        processingArr[i] = num;
        break;
      }
    }
  }

  return arrToNumber(processingArr);
};

console.log(solution(N));
