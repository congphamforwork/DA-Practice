// const A = [4, 2, 5, 8, 7, 3, 7];
// const A = [14, 21, 16, 35, 22];
const A = [0, 5, 1, 4, 5, 1];

const checkSumEven = (a, b) => {
  const sum = a + b;
  return sum % 2 === 0 ? true : false;
};

const solution = A => {
  const A1 = A[0];
  const A2 = A[1];
  let result = 0;
  if (checkSumEven(A1, A2)) {
    result++;
  } else {
    A.push(A1);
  }

  const n = A.length;
  for (let i = 1; i < n - 1; i++) {
    const curEle = A[i];
    const nextEle = A[i + 1];
    if (checkSumEven(curEle, nextEle)) {
      result++;
      i++;
    }
  }
  return result;
};

console.log(solution(A));
