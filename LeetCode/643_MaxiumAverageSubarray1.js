const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
const solution = () => {
  const n = nums.length;
  const prefixSum = [0];
  let maxAvg = -(10 ** 4);
  for (let i = 0; i < n; i++) {
    prefixSum.push(nums[i] + prefixSum[i]);
  }
  for (let right = k - 1; right < n; right++) {
    const left = right - k + 1;
    const avg = (prefixSum[right + 1] - prefixSum[left]) / k;
    maxAvg = Math.max(maxAvg, avg);
  }
  return maxAvg;
};

console.log(solution());
