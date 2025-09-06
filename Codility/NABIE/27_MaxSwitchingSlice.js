const A = [7, 4, -2, 4, -2, -9];

const solution = A => {
  const n = A.length;
  if (n < 3) {
    return n;
  }

  let result = 0;
  for (let i = 0; i < n; ) {
    let curArrLength = 0;
    let evenIdx = i;
    let oddIdx = i + 1;
    const evenVal = A[evenIdx];
    const oddVal = A[oddIdx];
    while (evenIdx < n || oddIdx < n) {
      evenIdx += 2;
      oddIdx += 2;
      const curEvenVal = A[evenIdx];
      const curOddVal = A[oddIdx];
      if (curEvenVal !== evenVal) {
        curArrLength = evenIdx - i;
        i = evenIdx - 1;
        break;
      }
      if (curOddVal !== oddVal) {
        curArrLength = oddIdx - i;
        i = oddIdx - 1;
        break;
      }
    }
    result = Math.max(result, curArrLength);
  }
  return result;
};

console.log(solution(A));
