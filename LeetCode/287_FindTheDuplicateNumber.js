const nums = [1, 3, 4, 2, 2];
const solution = () => {
  let slow = 0,
    fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  let start = 0;
  while (true) {
    slow = nums[slow];
    start = nums[start];
    if (slow === start) {
      return slow;
    }
  }
};

console.log(solution());
