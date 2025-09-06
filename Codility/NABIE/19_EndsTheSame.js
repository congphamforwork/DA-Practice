const S = "abbaa";

const swapArr = arr => {
  const firstEle = arr.shift();
  arr.push(firstEle);
};

const solution = S => {
  const n = S.length;
  const SArr = S.split("");

  let count = 0;
  const lastIdx = n - 1;
  for (let i = 0; i < n; i++) {
    const firstEle = SArr[0];
    const lastEle = SArr[lastIdx];
    if (firstEle === lastEle) {
      count++;
    }
    swapArr(SArr);
  }
  return count;
};

console.log(solution(S));
