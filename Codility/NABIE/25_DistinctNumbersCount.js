const A = [10000000, 10000000, 5, 5, 5, 2, 2, 2, 0, 0];

const pushToArr = (arr, number, times) => {
  for (let i = 0; i < times; i++) {
    arr.push(number);
  }
};

const solution = A => {
  const n = A.length;

  const AppearTimesOfEachNumberObj = {};
  for (let i = 0; i < n; i++) {
    const curEle = A[i];
    AppearTimesOfEachNumberObj[curEle] = (AppearTimesOfEachNumberObj[curEle] || 0) + 1;
  }

  const manageArr = []; //index: appear times. Value: the amount of numbers have same appear times
  Object.values(AppearTimesOfEachNumberObj).forEach(value => {
    manageArr[value] = (manageArr[value] || 0) + 1;
  });

  const arr1 = []; // AmountOfNumberHavingSameAppearTimesOverThanOnce
  const arr2 = []; // AppearTimes have not occupied yet.
  for (let i = manageArr.length - 1; i > 0; i--) {
    const curEle = manageArr[i];
    if (curEle === undefined) {
      arr2.push(i);
    } else if (curEle > 1) {
      pushToArr(arr1, i, curEle - 1);
    }
  }

  let result = 0;
  let lagestNumLessThanIdx = 0;
  for (let i = 0; i < arr1.length; i++) {
    const curEle = arr1[i];
    let lagestNumLessThanVal = arr2[lagestNumLessThanIdx];

    if (lagestNumLessThanVal > curEle) {
      for (let j = lagestNumLessThanIdx; j < arr2.length; j++) {
        const arr2Val = arr2[j];
        if (arr2Val < curEle) {
          lagestNumLessThanIdx = j;
          lagestNumLessThanVal = arr2Val;
        }
      }
    }

    const tempDeletionCount = curEle - (lagestNumLessThanVal || 0);
    lagestNumLessThanIdx++;
    result += tempDeletionCount;
  }

  return result;
};

console.log(solution(A));
