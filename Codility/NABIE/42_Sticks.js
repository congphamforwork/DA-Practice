const A = 10;
const B = 21;

const solution2 = (A, B) => {
  let longer = A;
  let shorter = B;
  if (B > A) {
    longer = B;
    shorter = A;
  }

  const aQuarterLonger = longer / 4;
  if (shorter < aQuarterLonger || shorter === 0) {
    return Math.floor(aQuarterLonger);
  }

  const oneThirdLonger = Math.floor(longer / 3);
  if (shorter < oneThirdLonger + 1) {
    return shorter;
  }

  const aHalfShorter = shorter / 2;
  for (let i = shorter; i > aHalfShorter; i--) {
    if (i < oneThirdLonger + 1) {
      return i;
    }
  }
  return Math.floor(aHalfShorter);
};

console.time("solution 2");
console.log(solution2(A, B));
console.timeEnd("solution 2");
