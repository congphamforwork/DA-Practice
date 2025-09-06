// const S = "ayxbx";
const S = "toyxmy";
// const S = "xzzzy";
// const S = "apple";
// const S = "xy";
// const S = "xyzzxy";

const solution = S => {
  const n = S.length;
  const lastIdx = n - 1;
  const xAppears = Array(n);
  const yAppears = Array(n);

  for (let i = 0; i < n; i++) {
    const curChar = S[i];
    xAppears[i] = xAppears[i - 1] || 0;
    yAppears[i] = yAppears[i - 1] || 0;
    if (curChar === "x") {
      xAppears[i]++;
    } else if (curChar === "y") {
      yAppears[i]++;
    }
  }

  let result = 0;
  for (let i = 1; i < n; i++) {
    const NumberOfXInLeftPart = xAppears[i - 1];
    const NumberOfXInRightPart = xAppears[lastIdx] - NumberOfXInLeftPart;
    const NumberOfYInLeftPart = yAppears[i - 1];
    const NumberOfYInRightPart = yAppears[lastIdx] - NumberOfYInLeftPart;

    const conditionLeft = NumberOfXInLeftPart === NumberOfYInLeftPart;
    if (conditionLeft) {
      result++;
      continue;
    }
    const conditionRight = NumberOfXInRightPart === NumberOfYInRightPart;
    if (conditionRight) {
      result++;
    }
  }
  return result;
};

console.log(solution(S));
