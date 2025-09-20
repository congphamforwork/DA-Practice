// const nums = [3, 4, 5, 1, 2];
const nums = [4, 5, 6, 7, 0, 1, 2];

const solution = () => {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const avg = Math.floor((left + right) / 2);
    const curNum = nums[avg];
    if (curNum > nums[n - 1]) {
      left = avg + 1;
    } else {
      right = avg;
    }
  }
  return nums[right];
};

console.log(solution(nums));
