// const A = [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5];
const A = [-3, -3];

const solution = A => {
  const n = A.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const curPosHeight = A[i];
    const prevPosHeight = A[i - 1] !== undefined ? A[i - 1] : A[i];
    const curTerrain = curPosHeight - prevPosHeight;
    for (let j = i + 1; j < n + 1; j++) {
      const nextPosHeight = A[j];
      if (nextPosHeight === undefined) {
        result++;
        return result;
      }
      const next2PosHeight = A[j + 1] !== undefined ? A[j + 1] : nextPosHeight;
      if (nextPosHeight === next2PosHeight) {
        continue;
      }
      const nextTerrian = next2PosHeight - nextPosHeight;
      const canBuild = curTerrain * nextTerrian;

      if (canBuild > -1) {
        result++;
      }
      i = j;
      break;
    }
  }
  return result;
};

console.log(solution(A));
