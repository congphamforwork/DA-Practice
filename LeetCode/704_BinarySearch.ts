const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const solution = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const avg = Math.floor((left + right) / 2);
    const curNum = nums[avg]!;
    if (curNum === target) return avg;
    if (curNum < target) left = avg + 1;
    else right = avg - 1;
  }
  return -1;
};

console.log(solution(nums, target));
