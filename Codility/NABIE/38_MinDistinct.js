const A = [6, 2, 3, 5, 6, 3];
// const A = [2, 1, 4, 4];
// const A = [1, 2, 1, 1];

let newAvailableVal;
const initProcessing = A => {
  const standardArray = [0];
  const standardObj = {};
  const taskArray = [];
  const taskObj = {};

  for (const ele of A) {
    if (standardObj[ele]) {
      if (taskObj[ele]) {
        taskObj[ele] = taskObj[ele] + 1;
      } else {
        taskArray.push(ele);
        taskObj[ele] = 1;
      }
    } else {
      standardArray.push(ele);
      standardObj[ele] = true;
    }
  }
  standardArray.sort((a, b) => a - b);
  taskArray.sort((a, b) => a - b);
  return { standardArray, taskArray, taskObj };
};

const checking = (taskVal, checkMap) => {
  let greatestLessThan = null;
  let smallestMoreThan = null;

  for (const [value] of checkMap) {
    if (value < taskVal && (value > greatestLessThan || greatestLessThan === null)) {
      greatestLessThan = value;
    }
    if (value > taskVal && (value < smallestMoreThan || greatestLessThan === null)) {
      smallestMoreThan = value;
    }
  }

  let theDifBetweenGreatestVal = Infinity;
  if (greatestLessThan !== null) {
    const greatestLessThanValCount = checkMap.get(greatestLessThan);
    greatestLessThanValCount === 0
      ? checkMap.delete(greatestLessThan)
      : checkMap.set(greatestLessThan - 1, greatestLessThanValCount - 1);

    theDifBetweenGreatestVal = taskVal - greatestLessThan;
  }

  let theDifBetweenSmallestVal = Infinity;
  if (smallestMoreThan !== null) {
    const smallestMoreThanCount = checkMap.get(smallestMoreThan);
    smallestMoreThanCount === 0
      ? checkMap.delete(smallestMoreThan)
      : checkMap.set(smallestMoreThan - 1, smallestMoreThanCount - 1);

    theDifBetweenSmallestVal = smallestMoreThan - taskVal;
  }

  const tempMin = Math.min(theDifBetweenGreatestVal, theDifBetweenSmallestVal);
  if (tempMin === Infinity) {
    const standardDif = newAvailableVal - taskVal;
    newAvailableVal++;
    return standardDif;
  }
  return tempMin;
};

const createCheckMap = standardArray => {
  const checkMap = new Map(); // available value and distance

  for (let i = 1; i < standardArray.length; i++) {
    const curEle = standardArray[i];
    const prevEle = standardArray[i - 1];
    const def = curEle - prevEle;
    def > 1 && checkMap.set(curEle - 1, def - 2);
  }
  return checkMap;
};

const solution = A => {
  const { standardArray, taskArray, taskObj } = initProcessing(A);
  newAvailableVal = standardArray[standardArray.length - 1] + 1;
  const checkMap = createCheckMap(standardArray);

  // DOING TASK
  let result = 0;
  for (const task of taskArray) {
    let taskCount = taskObj[task];
    while (taskCount > 0) {
      const tempMin = checking(task, checkMap);
      result += tempMin;
      taskCount--;
    }
  }

  return result;
};
console.log(solution(A));
