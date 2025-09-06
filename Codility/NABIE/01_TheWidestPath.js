const X = [5, 5, 5, 7, 7, 7];
const Y = [];

const solution = (X, Y) => {
  const objX = X.reduce((result, curEle) => {
    result[curEle] = true;
    return result;
  }, {});
  const objXKeys = Object.keys(objX);
  objXKeys.sort((a, b) => a - b);

  let max = 1;
  for (let i = 0; i < objXKeys.length - 1; i++) {
    const curEle = objXKeys[i];
    const nextEle = objXKeys[i + 1];
    const curWidth = nextEle - curEle;
    max = Math.max(max, curWidth);
  }
  return max;
};

console.log(solution(X, Y));
