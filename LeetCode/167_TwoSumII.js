// const numbers = [2, 7, 11, 15];
const numbers = [5, 25, 75];
// const numbers = [2, 3, 4];
// const numbers = [0, 0, 3, 4];
const target = 100;
// const target = 0;
const solution = () => {
  const n = numbers.length;
  let foundRight = n - 1;
  let minRight = 1;
  let maxRight = foundRight;

  while (minRight <= maxRight) {
    const avgRight = Math.floor((minRight + maxRight) / 2);
    const value = numbers[avgRight] + numbers[0];
    if (value === target) {
      return [1, avgRight + 1];
    } else if (value > target) {
      maxRight = avgRight - 1;
    } else {
      foundRight = avgRight;
      minRight = avgRight + 1;
    }
  }

  for (let right = foundRight; right >= 0; right--) {
    let minLeft = 0;
    let maxLeft = right - 1;
    while (minLeft <= maxLeft) {
      const avgLeft = Math.floor((minLeft + maxLeft) / 2);
      const value = numbers[avgLeft] + numbers[right];
      if (value === target) {
        return [avgLeft + 1, right + 1];
      } else if (value > target) {
        maxLeft = avgLeft - 1;
      } else {
        minLeft = avgLeft + 1;
      }
    }
  }
};

console.log(solution());
