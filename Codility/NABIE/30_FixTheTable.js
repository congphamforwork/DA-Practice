const A = [11, 20, 15];

const solution = A => {
  const n = A.length;
  const lastIdx = n - 1;

  if (n < 3) {
    return 1;
  }

  A.sort((a, b) => a - b);
  let min = A[0];
  let max = A[lastIdx];
  let average = (max + min) / 2;
  let greatestLessThanAverage = min;
  let smallestMoreThanAverage = max;
  for (let i = 0; i < n; i++) {
    if (A[i] > average) {
      smallestMoreThanAverage = A[i - 1];
      break;
    }
  }

  for (let i = lastIdx; i > -1; i--) {
    if (A[i] < average) {
      greatestLessThanAverage = A[i + 1];
      break;
    }
  }

  return Math.max(smallestMoreThanAverage - min, max - greatestLessThanAverage);
};

console.log(solution(A));
