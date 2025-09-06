// const A = [1, 2, 3, 3, 2, 1, 5];
// const A = [4, 1, 2, 3];
const A = [1000000000, 1, 2, 2, 1000000000, 1, 1000000000];

const solution = A => {
  let result = 0;
  let sellPrice = A[0];
  let buyPrice;
  let isSelling = true;

  for (let i = 1; i < A.length; i++) {
    if (isSelling) {
      for (let j = i; j < n; j++) {
        const curPrice = A[j];

        if (sellPrice > curPrice) {
          // SELL
          result += sellPrice;
          buyPrice = curPrice;
          sellPrice = 0;
          i = j;
          break;
        }
        sellPrice = curPrice;
      }
    } else {
      for (let j = i; j < n; j++) {
        const curPrice = A[j];
        if (curPrice > buyPrice) {
          // BUY
          result -= buyPrice;
          sellPrice = curPrice;
          i = j;
          break;
        }
        buyPrice = curPrice;
      }
    }

    isSelling = !isSelling;
  }

  result += sellPrice;

  const strResult = String(result);
  return strResult.substring(strResult.length - 9);
};

console.log(solution(A));
