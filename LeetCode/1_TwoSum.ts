// const nums = [2, 7, 11, 15];
const nums = [0, 4, 3, 0];
const target = 0;
const solution = (nums: number[], target: number): number[] => {
  const n = nums.length;
  const needExistingObject: { [key: number]: number } = {};
  for (let i = 0; i < n; i++) {
    const curNum = nums[i]!;
    const matchedIndex = needExistingObject[curNum];
    if (matchedIndex !== undefined) {
      return [matchedIndex, i];
    }
    const needExistingNum = target - curNum;
    needExistingObject[needExistingNum] = i;
  }

  return [];
};
console.log(solution(nums, target));
