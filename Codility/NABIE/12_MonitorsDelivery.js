const D = [1, 4, 2, 5];
const C = [4, 9, 2, 3];
const P = 19;

const solution = (D, C, P) => {
  const n = D.length;
  const mergedArr = [];
  for (let i = 0; i < n; i++) {
    const distanceI = D[i];
    const quantityI = C[i];
    mergedArr.push({ distance: distanceI, quantity: quantityI });
  }
  mergedArr.sort((a, b) => a.distance - b.distance);

  let result = 0;

  for (let i = 0; i < n; i++) {
    const quantityI = mergedArr[i].quantity;
    P -= quantityI;
    if (P < 0) {
      return result;
    } else {
      result++;
    }
  }
  return result;
};

console.log(solution(D, C, P));
