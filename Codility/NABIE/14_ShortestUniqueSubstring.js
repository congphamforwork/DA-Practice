const S = "abccbaabcdcbb";

const solution = S => {
  const n = S.length;

  let strLength = 1;
  while (strLength < n + 1) {
    const strObj = {};
    for (let i = 0; i < n + 1 - strLength; i++) {
      const curStr = S.substring(i, i + strLength);
      strObj[curStr] = (strObj[curStr] || 0) + 1;
    }

    const result = Object.values(strObj).some(val => val === 1);
    if (result) {
      return strLength;
    }
    strLength++;
  }

  return strLength;
};

console.log(solution(S));
