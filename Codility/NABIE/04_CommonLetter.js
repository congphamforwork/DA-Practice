const S = ["bdafg", "ceagi"];

const createArr = m => {
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr.push({});
  }
  return arr;
};

const solution = S => {
  const n = S.length;
  const m = S[0].length;

  const checkArr = createArr(m); // [{}]
  for (let letterIdx = 0; letterIdx < m; letterIdx++) {
    for (let i = 0; i < n; i++) {
      const curString = S[i];
      const curCheckLetter = curString[letterIdx];
      const prevPos = checkArr[letterIdx][curCheckLetter];
      if (prevPos === undefined) {
        checkArr[letterIdx][curCheckLetter] = i;
      } else {
        return [prevPos, i, letterIdx];
      }
    }
  }

  return [];
};

console.log(solution(S));
