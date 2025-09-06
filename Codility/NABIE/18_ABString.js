const S = "aabba";

const A_CHAR = "a";
const B_CHAR = "b";

const solution = S => {
  const n = S.length;
  let isBAppeard = false;

  for (let i = 0; i < n; i++) {
    const curChar = S[i];
    if (curChar === B_CHAR) {
      isBAppeard = true;
    } else if (isBAppeard) {
      return false;
    }
  }
  return true;
};

console.log(solution(S));
