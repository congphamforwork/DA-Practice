//  0  1  2  3  4  5  6  7  8  9
const nums = [5, 7, 7, 8, 8, 8, 8, 8, 8, 10];
// const nums = [2, 2];
const target = 8;

const solution = (nums, target) => {
  const n = nums.length;
  const binarySearch = (isFindStart = true) => {
    let left = 0;
    let right = n - 1;
    let ans = -1;
    while (left <= right) {
      const avg = Math.floor((left + right) / 2);
      const curNum = nums[avg];
      if (curNum === target) {
        if (isFindStart) {
          ans = avg;
          right = avg - 1;
        } else {
          ans = avg;
          left = avg + 1;
        }
      } else if (curNum < target) left = avg + 1;
      else right = avg - 1;
    }
    return ans;
  };

  const startIdx = binarySearch();
  const endIdx = binarySearch(false);

  return [startIdx, endIdx];
};
console.log(solution(nums, target));
