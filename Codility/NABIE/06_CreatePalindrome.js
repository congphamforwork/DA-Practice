const S = "ab?c?b?";

const solution = S => {
  const n = S.length;
  let result = S.split("");
  let firstIdx = 0;
  let lastIdx = n - 1;

  while (firstIdx < lastIdx) {
    let startLetter = result[firstIdx];
    let endLetter = result[lastIdx];

    if (startLetter === "?") {
      if (endLetter === "?") {
        result[firstIdx] = "z";
        result[lastIdx] = "z";
        continue;
      }
      result[firstIdx] = endLetter;
    } else if (endLetter === "?") {
      result[lastIdx] = startLetter;
    } else if (startLetter !== endLetter) {
      return "NO";
    }

    firstIdx++;
    lastIdx--;
  }

  return result.join("");
};

console.log(solution(S));
