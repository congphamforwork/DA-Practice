/**
 * @param {string} s
 * @return {number}
 */
const str = "abcabcbb";
// const str = "dvdf";
const solution = (s) => {
  if (!s) {
    return 0;
  }
  const n = s.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const curChar = s[i];
    let curMax = 0;
    const duplicateObj = {};
    duplicateObj[curChar] = true;
    for (let j = i + 1; j < n; j++) {
      const nextChar = s[j];
      if (duplicateObj[nextChar]) {
        break;
      }
      curMax++;
      duplicateObj[nextChar] = true;
    }

    max = Math.max(curMax + 1, max);
  }
  return max;
};
console.log(solution(str));
