const A = [1, 2, 2, 2, 5, 5, 5, 8];

const solution = A => {
  const n = A.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const curVal = A[i];
    let curValAppearTimes = 1;
    for (let j = i + 1; j < n; j++) {
      if (A[j] !== curVal) {
        break;
      }
      curValAppearTimes++;
    }

    if (curValAppearTimes > curVal) {
      result = result + (curValAppearTimes - curVal);
    } else if (curValAppearTimes < curVal) {
      const amountToAdd = curVal - curValAppearTimes;
      if (amountToAdd < curValAppearTimes) {
        result += amountToAdd;
      } else {
        result += curValAppearTimes;
      }
    }
    i = i + curValAppearTimes - 1;
  }

  return result;
};

console.log(solution(A));
