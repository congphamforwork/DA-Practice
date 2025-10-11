const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [-2, -1];
// const nums = [-1, 0, -2];
const solution = () => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
    max = Math.max(max, nums[i]);
  }
  return max;
};

console.log(solution());
