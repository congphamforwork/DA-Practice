S = "^<v>>>";

const sucessObj = {
  ">": false,
  "<": true,
  "^": true,
  v: true,
};

const solution = S => {
  const n = S.length;

  let result = 0;

  let isLeftFree = true;
  for (let i = 0; i < n; i++) {
    const curMove = S[i];

    if (sucessObj[curMove] || i === n - 1) {
      if (curMove === "<" && isLeftFree === false) {
        continue;
      }
      result++;
      isLeftFree = true;
    } else {
      isLeftFree = false;
    }
  }

  return result;
};

console.log(solution(S));
