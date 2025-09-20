// const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [3, 1];
const nums = [1, 3];
const target = 1;
// const target = -1;

const solution = (nums, target) => {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  const binarySearch = (start, end) => {
    let left = start;
    let right = end - 1;
    while (left <= right) {
      const avg = Math.floor((left + right) / 2);
      const curNum = nums[avg];
      if (curNum === target) return avg;
      if (curNum < target) left = avg + 1;
      else right = avg - 1;
    }
    return -1;
  };

  // Found rotated index
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const avg = Math.floor((left + right) / 2);
    const curNum = nums[avg];
    if (curNum >= nums[0]) left = avg + 1;
    else right = avg - 1;
  }
  const rotatedIndex = left;

  let result = -1;

  if (
    nums[nums.length - 1] >= target &&
    rotatedIndex !== 0 &&
    rotatedIndex < nums.length
  ) {
    result = binarySearch(rotatedIndex, nums.length);
  } else {
    result = binarySearch(0, rotatedIndex);
  }

  return result;
};
console.log(solution(nums, target));
