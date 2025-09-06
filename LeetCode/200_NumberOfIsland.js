const generate2DArr = (m, n) => {
  const result = [];
  for (let i = 0; i < m; i++) {
    const newArr = generateArr(n);
    result.push(newArr);
  }
  return result;
};
const generateArr = arrLen => {
  const arr = [];
  const chars = "01";
  const charsLength = chars.length;
  for (let i = 0; i < arrLen; i++) {
    const idx = Math.floor(Math.random() * charsLength);
    const char = chars[idx];
    arr.push(char);
  }
  return arr;
};

const grid = generate2DArr(5000, 5000);
const grid2 = grid.map(arr => [...arr]);

const solution = grid => {
  const m = grid.length;
  const maxY = m - 1;
  const n = grid[0].length;
  const maxX = n - 1;

  const checkValidCoodinator = (i, j) => {
    if (i > maxY || j > maxX || i < 0 || j < 0) {
      return false;
    }
    return true;
  };

  const deepFirstSearch = (i, j, grid) => {
    const isValidCoodinator = checkValidCoodinator(i, j);
    if (!isValidCoodinator) {
      return;
    }

    if (grid[i][j] === "1") {
      grid[i][j] = "0";
      deepFirstSearch(i, j + 1, grid);
      deepFirstSearch(i, j - 1, grid);
      deepFirstSearch(i + 1, j, grid);
      deepFirstSearch(i - 1, j, grid);
    }
  };

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curVal = grid[i][j];
      if (curVal === "1") {
        result++;
        deepFirstSearch(i, j, grid);
      }
    }
  }
  return result;
};

const solution2 = grid => {
  const m = grid.length;
  const maxY = m - 1;
  const n = grid[0].length;
  const maxX = n - 1;

  const checkValidCoodinator = (i, j) => {
    if (i > maxY || j > maxX || i < 0 || j < 0) {
      return false;
    }
    return true;
  };

  const deepFirstSearch = (grid, queue) => {
    while (queue.length > 0) {
      const curCoordinator = queue.shift();
      const curX = curCoordinator[0];
      const curY = curCoordinator[1];
      const isValidCoodinator = checkValidCoodinator(curY, curX);
      if (!isValidCoodinator) {
        continue;
      }
      if (grid[curY][curX] === "1") {
        grid[curY][curX] = "0";
        queue.push([curX, curY - 1]);
        queue.push([curX, curY + 1]);
        queue.push([curX - 1, curY]);
        queue.push([curX + 1, curY]);
      }
    }
  };

  let result = 0;

  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const curVal = grid[i][j];
      if (curVal === "1") {
        result++;
        const curCoordinator = [j, i];
        queue.push(curCoordinator);
        deepFirstSearch(grid, queue);
      }
    }
  }
  return result;
};

console.time("solution");
console.log(solution(grid));
console.timeEnd("solution");

console.time("solution2");
console.log(solution2(grid2));
console.timeEnd("solution2");
