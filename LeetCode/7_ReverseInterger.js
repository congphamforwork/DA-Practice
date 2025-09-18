// const x = 123;
const x = -123;
const solution = (x) => {
  let isSmallerThan0 = x < 0;
  let strX = x.toString();

  let resultStr = "";
  let thresholdIdx = -1;
  let limitNum = 2 ** 31 - 1;
  if (isSmallerThan0) {
    thresholdIdx = 0;
    limitNum = limitNum + 1;
  }
  for (let i = strX.length - 1; i > thresholdIdx; i--) {
    resultStr += strX[i];
  }
  let resultNum = Number(resultStr);
  if (resultNum > limitNum) {
    return 0;
  }

  if (isSmallerThan0) {
    resultNum = resultNum * -1;
  }
  return resultNum;
};

console.log(solution(123));
