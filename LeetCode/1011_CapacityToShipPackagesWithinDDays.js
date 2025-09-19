const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const weights = [1, 2, 3, 1, 1];
// const weights = [3, 2, 2, 4, 1, 4];
const days = 5;
// const days = 4;
// const days = 3;
const solution = (weights, days) => {
  const n = weights.length;
  const canShip = (maxTotalWeight) => {
    let curWeight = 0;
    let daysNeedToShip = 0;
    for (let i = 0; i < n; i++) {
      curWeight += weights[i];
      if (weights[i] > maxTotalWeight) {
        return false;
      }
      if (curWeight >= maxTotalWeight) {
        daysNeedToShip++;
        if (curWeight > maxTotalWeight) {
          i--;
        }
        curWeight = 0;
      }
    }
    if (curWeight !== 0) {
      daysNeedToShip++;
    }

    return daysNeedToShip <= days;
  };

  let minTotalWeight = weights[n - 1];
  let maxTotalWeight = weights.reduce((result, curEle) => result + curEle);
  let curTotalWeight = maxTotalWeight;
  while (minTotalWeight <= maxTotalWeight) {
    const average = Math.floor((maxTotalWeight + minTotalWeight) / 2);
    const isShippable = canShip(average);

    if (isShippable) {
      curTotalWeight = average;
      maxTotalWeight = average - 1;
    } else {
      minTotalWeight = average + 1;
    }
  }
  return curTotalWeight;
};

console.log(solution(weights, days));
