const N = 3;

const solution = N => {
  const resultArr = [];

  let temp = N;
  while (temp > -1) {
    const newTemp = temp - 9;
    const pushedEle = newTemp > -1 ? 9 : newTemp + 9;
    temp = newTemp;
    resultArr.push(String(pushedEle));
  }

  let result = "";
  for (let i = resultArr.length - 1; i > -1; i--) {
    result = result + resultArr[i];
  }

  return result;
};

console.log(solution(N));
