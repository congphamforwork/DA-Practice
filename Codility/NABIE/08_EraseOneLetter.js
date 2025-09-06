const S = "abcz";

const solution = S => {
  const n = S.length;

  let i = 0;
  for (; i < n - 1; i++) {
    if (S[i] > S[i + 1]) {
      break;
    }
  }
  const halfBefore = S.slice(0, i);
  const haflAfter = S.slice(i + 1, n);
  return halfBefore + haflAfter;
};

console.time("solution 1");
console.log(solution(S));
console.timeEnd("solution 1");
