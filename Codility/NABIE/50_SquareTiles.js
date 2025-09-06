// const M = 8;
// const N = 0;
// const M = 4;
// const N = 3;
// const M = 0;
// const N = 18;
const M = 13;
const N = 3;

const solution = (M, N) => {
  const MtoN = Math.floor(M / 4);
  const MUsedToTransfer = MtoN * 4;
  const localM = M - MUsedToTransfer;
  const localN = N + MtoN;

  if (localN === 0) {
    if (localM === 0) {
      return 0;
    } else {
      return 1;
    }
  }

  const usedN = Math.floor(Math.sqrt(localN));
  let biggestEdge = usedN * 2;
  const leftN = localN - usedN;

  let exchangeableToM = leftN * 4;
  if (exchangeableToM > MUsedToTransfer) {
    exchangeableToM = MUsedToTransfer;
  }
  exchangeableToM += localM;

  let tilesNeedToIncrease1 = biggestEdge * 2 + 1;
  while (exchangeableToM >= tilesNeedToIncrease1) {
    exchangeableToM -= tilesNeedToIncrease1;
    biggestEdge++;
    tilesNeedToIncrease1 = biggestEdge * 2 + 1;
  }

  return biggestEdge;
};

console.log(solution(M, N));
