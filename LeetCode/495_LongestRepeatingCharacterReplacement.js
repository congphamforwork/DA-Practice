// const s = "ABAB";
const s = "AABABBA",
  k = 1;
// const s = "ABBB";
// const s = "BBBBB";
// const s = "ABCDDD";
// const k = 2;

const solution = () => {
  const n = s.length;
  let result = 1;
  const obj = {};
  let left = 0;
  const getLengthArr = () => {
    const allValueArr = Object.values(obj);
    const sumValue = allValueArr.reduce((res, curNum) => res + curNum);
    return sumValue - Math.max(...allValueArr);
  };
  for (let right = 0; right < n; right++) {
    const curChar = s[right];
    if (!obj[curChar]) {
      obj[curChar] = 0;
    }
    obj[curChar]++;
    let lengthArr = getLengthArr();
    while (lengthArr > k) {
      const leftChar = s[left];
      obj[leftChar]--;
      left++;
      lengthArr = getLengthArr();
    }
    const tempMax = Math.min(Math.max(...Object.values(obj)) + k, n);
    result = Math.max(result, tempMax);
  }
  return result;
};

console.log(solution());
