// const A = [11, 5, 3, 12, 6, 8, 1, 7, 4];
// const A = [10, 14, 12, 1000, 11, 15, 13, 1];
// const A = [4, 5, 7, 10, 10, 12, 12, 12];
const A = [10, 10, 12, 12];

const solution = (A) => {
  A.sort((a, b) => a - b);
  const n = A.length;
  let specifiedGroups = 3;

  let minX = 0;
  let maxX = A[n - 1] - A[0];

  while (minX < maxX) {
    let creatableGroups = 0;
    let left = 0;
    const x = Math.floor((minX + maxX) / 2);

    while (left < n) {
      let right = left;
      while (right < n && A[right] - A[left] <= x) {
        right++;
      }
      creatableGroups++;
      left = right;
    }

    if (creatableGroups > specifiedGroups) {
      minX = x + 1;
    } else {
      maxX = x;
    }
  }

  return minX;
};

console.log(solution(A));
