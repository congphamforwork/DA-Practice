// 3. Given an array I of m elements ( m > 0 ), where each element is a non-consecutive day of the week,
// and a number n (where m ⩽ n ), the algorithm implementation returns an array O of n consecutive days.
// continuously, counting from the first element of I , and preserving the order of appearance in the array.

// Input [I;n]		Output [O]
// [Mon; 7]		[Mon, Tue, Wed, Thu, Fri, Sat, Sun]
// [Mon; 10]		[Mon, Tue, Wed, Thu, Fri, Sat, Sun, Mon, Tue, Wed]
// [Fri, Sun; 5]		[Fri, Sat, Sun, Mon, Tue]
// [Mon, Thu, Sat; 5]	[Mon, Tue, Wed, Thu, Fri]

const MAP_DAY_TO_NUM = {
  Sun: 1,
  Mon: 2,
  Tue: 3,
  Wed: 4,
  Thu: 5,
  Fri: 6,
  Sat: 7,
};

const MAP_NUM_TO_DAY = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat",
};
// const I = ["Mon"];
// const I = ["Fri", "Sun"];
const I = ["Mon", "Thu", "Sat"];
const n = 5;

const solution = (inputArr, n) => {
  const iLen = inputArr.length;
  const lastDay = inputArr[iLen - 1];
  const result = [];
  let count = n;

  // UTILS FUNCTION
  const addDaysToResult = (startDayNum, addedDaysCount) => {
    count -= addedDaysCount;
    const endLoop = startDayNum + addedDaysCount;
    for (let i = startDayNum; i < endLoop; i++) {
      const validNum = i > 7 ? i - 7 : i;
      result.push(MAP_NUM_TO_DAY[validNum]);
    }
  };

  const addOneDayToNum = (dayNum) => {
    result.push(MAP_NUM_TO_DAY[dayNum]);
    count--;
  };

  const fillShortageDays = (prevDay, curDay) => {
    const prevDayNum = MAP_DAY_TO_NUM[prevDay];
    const curDayNum = MAP_DAY_TO_NUM[curDay];
    let periodTime = curDayNum - prevDayNum;
    if (periodTime < 1) {
      periodTime += 7;
    }

    if (periodTime === 1) {
      addOneDayToNum(prevDayNum);
      return;
    }

    const shortageDays = periodTime > count ? count : periodTime;

    addDaysToResult(prevDayNum, shortageDays);
  };

  // PROCESSING
  for (let i = 1; i < iLen; i++) {
    const prevDay = inputArr[i - 1];
    const curDay = inputArr[i];
    count > 0 && fillShortageDays(prevDay, curDay);
  }
  count > 0 && addDaysToResult(MAP_DAY_TO_NUM[lastDay], count);

  return result;
};

console.log(solution(I, n));
