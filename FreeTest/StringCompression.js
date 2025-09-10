// String Compression
// Input: string with only alphabetical characters
// Output: compressed string using counts of repeated characters
// Example: "aabcccccaaa" → "a2b1c5a3"
// const str = "aabcccccaaa";
const str = "dddaabeeecccccaaafff";
// const str = "aabcccccabab";
const solution = (str) => {
  const n = str.length;
  if (n === 1) {
    return str + "1";
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    const curChar = str[i];
    result += curChar;
    for (let j = i + 1; j < n + 1; j++) {
      const nextChar = str[j];
      if (nextChar !== curChar) {
        result += j - i;
        i = j - 1;
        break;
      }
    }
  }

  return result;
};

const solution2 = (str) => {
  return str.match(/(.)\1+/g);
};

const solution3 = (str) => {
  const n = str.length;
  let result = "";
  let lastChar = str[0];
  let repeatedTimes = 1;
  for (let i = 1; i < n + 1; i++) {
    const curChar = str[i];
    if (curChar !== lastChar) {
      result = result + lastChar + String(repeatedTimes);
      lastChar = curChar;
      repeatedTimes = 1;
    } else {
      repeatedTimes++;
    }
  }
  return result;
};

console.log("RESULT:", solution3(str));
