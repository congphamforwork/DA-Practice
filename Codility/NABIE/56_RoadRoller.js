const X = [0, 3, 6, 5];
const Y = [1];
const W = 1;
const solution = (X, Y, W) => {
  const objX = {};
  for (let i = 0; i < X.length; i++) {
    const ele = X[i];
    objX[ele] = true;
  }

  let result = 0;
  let alreadyGood = -1;

  const objXKeys = Object.keys(objX);
  for (let i = 0; i < objXKeys.length; i++) {
    const curKey = objXKeys[i];
    const keyNumber = Number(curKey);
    if (keyNumber < alreadyGood + 1) {
      continue;
    }
    if (objX[curKey]) {
      result++;
      alreadyGood = keyNumber + W;
    }
  }
  return result;
};
const solution2 = (X, Y, W) => {
  const objX = {};
  let n = X[0];
  for (let i = 0; i < X.length; i++) {
    const ele = X[i];
    n = Math.max(n, ele);
    objX[ele] = true;
  }
  n++;

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (objX[i]) {
      result++;
      i = i + W;
    }
  }
  return result;
};

console.time("Solution 1");
console.log("Result 1:", solution(X, Y, W));
console.timeEnd("Solution 1");

console.time("Solution 2");
console.log("Result 2:", solution2(X, Y, W));
console.timeEnd("Solution 2");
