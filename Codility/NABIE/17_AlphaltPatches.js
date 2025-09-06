const S = "..X";

const POTHOLES_CHAR = "X";
const solution = S => {
  let result = 0;
  const n = S.length;
  for (let i = 0; i < n; i++) {
    const curChar = S[i];
    if (curChar === POTHOLES_CHAR) {
      result++;
      i = i + 2;
    }
  }
  return result;
};

console.log(solution(S));
