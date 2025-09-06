const N = 27;

const findMaximumLetters = N => {
  if (N < 27) {
    return N;
  }
  for (let i = 26; i > 1; i--) {
    if (N % i === 0) {
      return i;
    }
  }
};
const solution = N => {
  let maximumLetters = findMaximumLetters(N);
  let letterAppearTimes = N / maximumLetters;

  let result = "";
  for (let i = 97; i < 123; i++) {
    if (maximumLetters === 0) {
      break;
    }
    const curString = String.fromCharCode(i);
    for (let j = 0; j < letterAppearTimes; j++) {
      result += curString;
    }
    maximumLetters--;
  }
  return result;
};

console.log(solution(N));
