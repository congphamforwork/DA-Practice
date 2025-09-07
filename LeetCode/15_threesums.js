// const nums = [-1,0,1,2,-1,-4]
// const nums = [1,1,-2]
// const nums = [1,2,-2, -1]
// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
const solution = (nums) => {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n - 2; i++) {
    const numI = nums[i];
    let k = n - 1;

    const prevNumI = nums[i - 1];
    if (numI === prevNumI) {
      continue;
    }

    for (let j = i + 1; j < k; j++) {
      const numJ = nums[j];

      const prevNumJ = nums[j - 1];
      let numK = nums[k];
      if (numJ === prevNumJ && j > i + 1) {
        continue;
      }
      let sum = numI + numJ + numK;
      while (sum > 0) {
        k--;
        if (k === j) {
          break;
        }
        numK = nums[k];
        sum = numI + numJ + numK;
      }
      if (sum === 0) {
        result.push([numI, numJ, numK]);
        continue;
      }
    }
  }
  return result;
};

console.log(solution(nums));
