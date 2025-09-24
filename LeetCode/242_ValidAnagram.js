const s = "anagram";
const t = "nagaram";

const solution = () => {
  const sObj = {};
  for (const char of s) {
    if (!sObj[char]) {
      sObj[char] = 1;
    } else {
      sObj[char]++;
    }
  }

  for (const char of t) {
    if (!sObj[char]) {
      return false;
    }
    sObj[char]--;
  }

  return !Object.values(sObj).some((val) => val > 0);
};
console.log(solution());
