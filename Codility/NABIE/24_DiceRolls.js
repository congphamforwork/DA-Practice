const A = [
  4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5, 1, 5,
];
const F = 40;
const M = 4;

const solution = (A, F, M) => {
  const n = A.length;
  const APoints = A.reduce((result, curEle) => {
    return result + curEle;
  }, 0);
  const fogottenPoints = (n + F) * M - APoints;
  const averagePoint = fogottenPoints / F;
  if (averagePoint > 6 || averagePoint < 1) {
    return [];
  }
  const roundedUP = Math.ceil(averagePoint);
  const roundedDown = Math.floor(averagePoint);
  const rateUp = averagePoint - roundedDown;
  const roundedUpAppearTimes = Math.round(F * rateUp);
  const roundedDownAppearTimes = F - roundedUpAppearTimes;
  const result = [];
  for (let i = 0; i < roundedUpAppearTimes; i++) {
    result.push(roundedUP);
  }
  for (let i = 0; i < roundedDownAppearTimes; i++) {
    result.push(roundedDown);
  }
  return result;
};

console.log(solution(A, F, M));
