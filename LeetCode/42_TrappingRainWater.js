const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const solution = () => {
  const n = heights.length;
  let result = 0;

  const maxLeftArr = (() => {
    const firstMaxHeight = heights[0];
    const result = [firstMaxHeight];
    let max = firstMaxHeight;
    for (let i = 1; i < n; i++) {
      if (heights[i] > max) {
        max = heights[i];
      }
      result.push(max);
    }
    return result;
  })();

  const maxRightArr = (() => {
    const lastMaxHeight = heights[n - 1];
    const result = Array(n).fill(0);
    result[n - 1] = lastMaxHeight;
    let max = lastMaxHeight;
    for (let i = n - 2; i >= 0; i--) {
      if (heights[i] > max) {
        max = heights[i];
      }
      result[i] = max;
    }
    return result;
  })();

  for (let i = 1; i < n; i++) {
    const curHeight = heights[i];
    const maxLeftHeight = maxLeftArr[i - 1];
    const maxRightHeight = maxRightArr[i + 1];
    if (
      maxLeftHeight === undefined ||
      maxRightHeight === undefined ||
      curHeight >= maxLeftHeight ||
      curHeight >= maxRightHeight
    ) {
      continue;
    }

    result += Math.min(maxLeftHeight, maxRightHeight) - curHeight;
  }
  return result;
};

console.log(solution());
