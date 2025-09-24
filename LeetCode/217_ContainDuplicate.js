const nums = [1, 2, 3, 1];
const solution = () => {
  const dupObj = {};
  for (const num of nums) {
    if (dupObj[num]) {
      return true;
    }
    dupObj[num] = true;
  }
  return false;
};
