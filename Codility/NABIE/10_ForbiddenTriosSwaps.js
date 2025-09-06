const solution = S => {
  const n = S.length;

  let result = 0;
  for (let i = 1; i < n - 1; i++) {
    const curEle = S[i];
    const prevEle = S[i - 1];
    const thirdEle = S[i + 1];
    if (curEle === prevEle && curEle === thirdEle) {
      result++;
      i = i + 2;
    }
  }
  return result;
};

console.log(solution(S));
