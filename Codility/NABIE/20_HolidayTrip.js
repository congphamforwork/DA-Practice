const P = [2, 3, 4, 2];
const S = [2, 5, 7, 2];

const solution = (P, S) => {
  const n = P.length;
  S.sort((a, b) => b - a);
  let headcount = 0;
  for (let i = 0; i < n; i++) {
    headcount += P[i];
  }

  let minimulCar = 0;
  for (let i = 0; i < n; i++) {
    headcount -= S[i];

    if (headcount < 1) {
      minimulCar = i + 1;
      break;
    }
  }

  return minimulCar;
};

console.log(solution(P, S));
