const nums = [100, 4, 200, 1, 3, 2];

const solution = () => {
  const dupObj = {};
  for (const num of nums) {
    dupObj[num] = true;
  }

  let maxLength = 0;
  for (const numStr of Object.keys(dupObj)) {
    let curNum = Number(numStr);
    if (dupObj[curNum - 1]) {
      continue;
    }

    let length = 0;
    while (dupObj[curNum]) {
      length++;
      curNum++;
    }

    maxLength = Math.max(length, maxLength);
  }
  return maxLength;
};

console.log(solution());
