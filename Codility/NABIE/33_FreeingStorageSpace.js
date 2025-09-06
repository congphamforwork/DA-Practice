// const A = [2, 1, 2, 3, 2, 2]; //2
// const R = 3;
// const A = [2, 3, 1, 1, 2]; //3
// const R = 2;
const A = [20, 10, 10, 10, 30, 20]; //3
const R = 3;
// const A = [1, 100000, 3]; //0
// const R = 3;

const solution = (A, R) => {
  const n = A.length;
  const manageObj = {}; // count number shelves of each Types

  let maxTypes = 0;
  for (let i = R; i < n; i++) {
    if (manageObj[A[i]]) {
      manageObj[A[i]]++;
    } else {
      maxTypes++;
      manageObj[A[i]] = 1;
    }
  }

  let tempMaxTypes = maxTypes;
  for (let i = R; i < n; i++) {
    const lostType = A[i];
    const regainType = A[i - R];

    manageObj[lostType]--;
    manageObj[regainType] = (manageObj[regainType] || 0) + 1;

    if (manageObj[lostType] < 1) {
      tempMaxTypes--;
    }
    if (manageObj[regainType] === 1) {
      tempMaxTypes++;
      maxTypes = tempMaxTypes > maxTypes ? tempMaxTypes : maxTypes;
    }
  }

  return maxTypes;
};

console.log(solution(A, R));
