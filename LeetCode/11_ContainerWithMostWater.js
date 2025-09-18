const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const solution = (heights) => {
  const n = heights.length;
  let left = 0;
  let right = n - 1;
  let max = 0;
  while (left < right) {
    const curLeft = left;
    const curRight = right;
    const leftH = heights[left];
    const rightH = heights[right];
    let curH = leftH;
    if (leftH > rightH) {
      curH = rightH;
      right--;
    } else {
      left++;
    }
    const curMax = curH * (curRight - curLeft);
    max = Math.max(max, curMax);
  }
  return max;
};

console.log(solution(heights));
