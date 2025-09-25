const nums = [1, 2, 3, 4];
const n = nums.length;

const solution = () => {
  const prefixProduction = [1];
  for (const idx in nums) {
    prefixProduction.push(prefixProduction[idx] * nums[idx]);
  }
  const suffixProduction = Array(n + 1).fill(1);
  for (let idx = n - 1; idx >= 0; idx--) {
    suffixProduction[idx] = suffixProduction[idx + 1] * nums[idx];
  }

  return nums.map((num, idx) => {
    return prefixProduction[idx] * suffixProduction[idx + 1];
  });
};

console.log(solution());
