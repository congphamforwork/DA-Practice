const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
// const nums = [1, -1],
//   k = 1;
// const nums = [
//     -6, -10, -7, -1, -9, 9, -8, -4, 10, -5, 2, 9, 0, -7, 7, 4, -2, -10, 8, 7,
//   ],
//   k = 7;

const solution = () => {
  const result = [];
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i - k + 1 >= 0) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};

console.log(solution());
