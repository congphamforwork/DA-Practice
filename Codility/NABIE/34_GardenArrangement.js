const A = [1, 2, 2, 4];
// const A = [4, 2, 4, 6];
// const A = [1, 1, 2, 1];
// const A = [2, 14, 2];

const solution = A => {
  const n = A.length;
  const sum = A.reduce((result, ele) => result + ele);
  const standardTreeNumber = Math.ceil(sum / n);
  let needPlantMoreTrees = 0;
  for (ele of A) {
    if (ele < standardTreeNumber) {
      needPlantMoreTrees += standardTreeNumber - ele;
    }
  }
  return needPlantMoreTrees;
};

console.log(solution(A));
