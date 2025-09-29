const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const solution = () => {
  const n = temperatures.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const curTemp = temperatures[i];
    let waitDays = 0;
    if (curTemp === temperatures[i - 1]) {
      tempEle = result[result.length - 1] - 1;
      if (tempEle < 0) {
        tempEle = 0;
      }
      result.push(tempEle);
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      const nextTemp = temperatures[j];
      if (nextTemp > curTemp) {
        waitDays = j - i;
        break;
      }
    }
    result.push(waitDays);
  }
  return result;
};

const solution2 = () => {
  const n = temperatures.length;
  const result = Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    const curTemp = temperatures[i];
    while (stack.length > 0 && curTemp > stack[stack.length - 1][0]) {
      const [_, targetIdx] = stack.pop();
      result[targetIdx] = i - targetIdx;
    }
    stack.push([curTemp, i]);
  }
  return result;
};

console.log(solution2());
