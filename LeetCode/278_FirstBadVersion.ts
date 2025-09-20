const n = 1792997410;
const target = 1240808008;
const solution = (n: number, target: number): number => {
  let left = 0;
  let right = n;
  while (left <= right) {
    const average = Math.floor((left + right) / 2);
    if (average === target) return target;
    if (average < target) left = average + 1;
    else right = average - 1;
  }
  return left;
};

console.log(solution(n, target));
