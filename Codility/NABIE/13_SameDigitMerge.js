const A = [12, 23, 34, 45, 56, 67, 78, 89, 91];

const solution = A => {
  let result = 0;
  const arrStrA = A.map(ele => String(ele));
  const objA = {};
  for (const ele of arrStrA) {
    const firstDigit = ele[0];
    objA[firstDigit] = (objA[firstDigit] || 0) + 1;
  }

  for (const ele of arrStrA) {
    const firstDigit = ele[0];
    const lastDigit = ele[ele.length - 1];
    objA[firstDigit] = objA[firstDigit] - 1;
    if (objA[lastDigit] > 0) {
      result += objA[lastDigit];
    }

    objA[firstDigit] = objA[firstDigit] + 1;
  }
  return result;
};

console.log(solution(A));
