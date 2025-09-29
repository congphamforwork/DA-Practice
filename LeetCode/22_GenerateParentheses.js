const n = 3;

const solution = () => {
  const result = [];

  const recursion = (str = "", openCount = 0, closeCount = 0) => {
    if (openCount === n && closeCount === n) {
      result.push(str);
      return;
    }

    if (openCount < n) {
      recursion(str + "(", openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      recursion(str + ")", openCount, closeCount + 1);
    }
  };

  recursion();
  return result;
};

const solution2 = () => {
  const length = 2 * n;
  const stack = [{ str: "", openCount: 0, closeCount: 0 }];
  const result = [];

  while (stack.length > 0) {
    const obj = stack.pop();
    if (obj.str.length === length) {
      result.push(obj.str);
      continue;
    }

    if (obj.openCount < n) {
      stack.push({
        str: obj.str + "(",
        openCount: obj.openCount + 1,
        closeCount: obj.closeCount,
      });
    }

    if (obj.closeCount < obj.openCount) {
      stack.push({
        str: obj.str + ")",
        openCount: obj.openCount,
        closeCount: obj.closeCount + 1,
      });
    }
  }
  return result;
};

console.log(solution2());
