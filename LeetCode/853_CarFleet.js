// const position = [10, 8, 0, 5, 3],
//   speed = [2, 4, 1, 1, 3],
//   target = 12;
// const position = [10],
//   speed = [3],
//   target = 3;
const position = [0, 2, 4],
  speed = [4, 2, 1],
  target = 100;

const solution = () => {
  const cars = position.map((pos, idx) => ({
    position: pos,
    speed: speed[idx],
  }));

  const check = (carA, carB) => {
    const deltaSpeed = carB.speed - carA.speed;
    const deltaPos = carA.position - carB.position;
    const t = deltaPos / deltaSpeed;
    const meetPoint = t * carA.speed + carA.position;
    return meetPoint <= target;
  };

  const sortedCars = cars.sort((a, b) => a.position - b.position);
  const n = sortedCars.length;
  let result = 0;
  for (i = n - 1; i >= 0; i--) {
    const curCar = sortedCars[i];
    for (let j = i - 1; j >= -1; j--) {
      const nextCar = sortedCars[j];
      if (nextCar && nextCar.speed > curCar.speed && check(nextCar, curCar)) {
        continue;
      }
      i = j + 1;
      result++;
      break;
    }
  }

  return result;
};

const solution2 = () => {
  const cars = position.map((pos, idx) => [pos, speed[idx]]);
  const sortedCars = cars.sort((a, b) => a[0] - b[0]);
  const n = sortedCars.length;
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    const curCar = sortedCars[i];
    const timeToFinish = (target - curCar[0]) / curCar[1];
    stack.push(timeToFinish);
    const stackLen = stack.length;
    if (stackLen > 1 && stack[stackLen - 1] <= stack[stackLen - 2]) {
      stack.pop();
    }
  }
  return stack.length;
};

// My solution 1 better performance 145 < 213 LOL =)))
console.log(solution2());
