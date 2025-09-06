const R = "BAABA";
const V = [2, 4, 1, 1, 2];
// const R = "ABAB";
// // const V = [10, 5, 10, 15];
// const R = "A";
// const V = [100];

const A_CHAR = "A";
const B_CHAR = "B";
const solution = (R, V) => {
  const n = R.length;
  let minA = 0,
    minB = 0,
    curBalanceA = 0,
    curBalanceB = 0;

  for (let i = 0; i < n; i++) {
    const curReceipient = R[i];
    const transferAmount = V[i];

    if (curReceipient === B_CHAR) {
      curBalanceB += transferAmount;
      curBalanceA -= transferAmount;
      if (curBalanceA < minA) {
        minA = curBalanceA;
      }
    } else {
      curBalanceA += transferAmount;
      curBalanceB -= transferAmount;
      if (curBalanceB < minB) {
        minB = curBalanceB;
      }
    }
  }

  return [Math.abs(minA), Math.abs(minB)];
};

const solution2 = (R, V) => {
  const n = R.length;

  let minA = 0,
    minB = 0;
  let prevVal = 0;

  for (let i = 0; i < n; i++) {
    if (R[i] === A_CHAR) {
      prevVal += V[i];
      if (prevVal > minB) {
        minB = prevVal;
      }
    } else {
      prevVal -= V[i];
      if (prevVal < minA) {
        minA = prevVal;
      }
    }
  }

  return [Math.abs(minA), minB];
};

// console.log(solution(R, V));
console.log(solution2(R, V));
