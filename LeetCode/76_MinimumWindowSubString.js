// const s = "ADOBECODEBANC",
//   t = "ABC";
// const s = "a",
//   t = "aa";
// const s = "a",
//   t = "b";
// const s = "a",
//   t = "a";
const s = "ADOBECODEBANC",
  t = "ABC";

const solution = () => {
  const obj = {};
  const n = s.length;
  for (const char of t) {
    obj[char] = (obj[char] || 0) + 1;
  }

  let result = {
    length: n + 1,
    left: null,
    right: null,
  };
  let need = t.length;
  let collectedChars = [];
  let collectedIdx = 0;
  for (let right = 0; right < n; right++) {
    const charRight = s[right];
    if (obj[charRight] !== undefined) {
      obj[charRight]--;
      collectedChars.push([charRight, right]);
      if(obj[charRight] >= 0) need--;

      let isOk = need <= 0;
      let collectedChar = collectedChars[collectedIdx];
      while (isOk && collectedChar) {
        const curLength = right - collectedChar[1] + 1;
        if (result.length > curLength) {
          result.right = right;
          result.left = collectedChar[1];
          result.length = result.right - result.left + 1;
        }
        obj[collectedChar[0]]++;
        if(obj[collectedChar[0]] > 0) {
          need++
        }
        collectedIdx++;
        isOk = need <= 0;
        collectedChar = collectedChars[collectedIdx];
      }
    }
  }

  if (result.left === null || result.right === null) {
    return "";
  }
  return s.slice(result.left, result.right + 1);
};

console.log(solution());
