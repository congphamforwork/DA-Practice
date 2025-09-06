const A = [2, 4, 1, 6, 5, 9, 7]; //3
// const A = [4, 3, 2, 6, 1]; //1
// const A = [2, 1, 6, 4, 3, 7]; //3
// const A = [2, 5, 4, 3, 7, 9]; //3

const solution = (A) => {
  const n = A.length;
  let maxFromLeft = A[0];
  let minFromRight = A[n - 1];
  const checkingMaxFromLeft = [maxFromLeft];
  const checkingMinFromRight = [minFromRight];

  let startFromLeftIdx = 1;
  let startFromRightIdx = n - 2;
  for (let i = 0; i < n - 1; i++) {
    const valFromLeft = A[startFromLeftIdx];
    if (valFromLeft > maxFromLeft) {
      maxFromLeft = valFromLeft;
    }
    const valFromRight = A[startFromRightIdx];
    if (valFromRight < minFromRight) {
      minFromRight = valFromRight;
    }
    checkingMaxFromLeft.push(maxFromLeft);
    checkingMinFromRight.unshift(minFromRight);
    startFromLeftIdx++;
    startFromRightIdx--;
  }

  let result = 0;
  let arrLen = 1;
  for (let i = n - 1; i > 0; i--) {
    if (checkingMinFromRight[i] < checkingMaxFromLeft[i - 1]) {
      arrLen++;
    } else {
      result++;
      arrLen = 1;
    }
  }
  return result + 1;
};

console.log(solution(A));
