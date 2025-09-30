// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   target = 3;
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 13;

const solution = () => {
  const colN = matrix.length;
  const rowN = matrix[0].length;

  let foundCol = 0;
  let left = 0;
  let right = colN - 1;
  while (left <= right) {
    let avg = Math.floor((left + right) / 2);
    const firstColValue = matrix[avg][0];
    if (firstColValue === target) return true;
    else if (firstColValue > target) {
      right = avg - 1;
    } else {
      foundCol = avg;
      left = avg + 1;
    }
  }

  left = 0;
  right = rowN - 1;
  while (left <= right) {
    let avg = Math.floor((left + right) / 2);
    const firstColValue = matrix[foundCol][avg];
    if (firstColValue === target) return true;
    else if (firstColValue > target) {
      right = avg - 1;
    } else {
      left = avg + 1;
    }
  }
  return false;
};
console.log(solution());
