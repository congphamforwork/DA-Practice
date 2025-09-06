const D = [0, 2, 5, 5, 9, 20, 0];
const X = 2;

const setMinLvl = newLvl => {
  if (newLvl < 1) return 0;
  return newLvl;
};
const setMaxLvl = newLvl => {
  if (newLvl > 1000000000 + 1) return 1000000000;
  return newLvl;
};

const solution = (D, X) => {
  const n = D.length;

  let result = 1;

  let minLvl = setMinLvl(D[0] - X);
  let maxLvl = setMaxLvl(D[0] + X);

  for (let i = 1; i < n; i++) {
    curMisLvl = D[i];
    if (curMisLvl > minLvl - 1 && curMisLvl < maxLvl + 1) {
      const newMinLvl = curMisLvl - X;
      const newMaxLvl = curMisLvl + X;
      minLvl = Math.max(minLvl, newMinLvl);
      maxLvl = Math.min(maxLvl, newMaxLvl);
      continue;
    }
    result++;
    minLvl = setMinLvl(curMisLvl - X);
    maxLvl = setMaxLvl(curMisLvl + X);
  }

  return result;
};
console.log(solution(D, X));
