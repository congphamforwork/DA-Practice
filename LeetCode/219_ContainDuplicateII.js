const nums = [1, 2, 3, 1],
  k = 3;

const solution = () => {
  const obj = {};
  for (let right = 0; right < nums.length; right++) {
    let left = right - k;
    const numRight = nums[right];
    if (left > 0) {
      const numLeft = nums[left - 1];
      delete obj[numLeft];
    }
    if (obj[numRight]) {
      return true;
    } else {
      obj[numRight] = true;
    }
  }
  return false;
};

console.log(solution());
