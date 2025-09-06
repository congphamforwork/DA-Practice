const A = [4, 3, 5, 1, 4, 4];
// const A = [4, 7, 1, 5, 3];
// const A = [18, 26, 18, 24, 24, 20, 22];
// const A = [18, 18, 18, 18, 18, 26, 18, 24, 24, 20, 22];
// const A = [11, 22];

const solution = A => {
  const uniqueA = [];
  const duplicatedObject = {};
  for (const ele of A) {
    if (duplicatedObject[ele]) {
      duplicatedObject[ele]++;
    } else {
      uniqueA.push(ele);
      duplicatedObject[ele] = 1;
    }
  }

  uniqueA.sort((a, b) => a - b);
  const distanceObject = {};

  for (let i = 1; i < uniqueA.length; i++) {
    const curNum = uniqueA[i];
    for (let j = i - 1; j > -1; j--) {
      const prevNum = uniqueA[j];
      const dif = curNum - prevNum;
      distanceObject[dif] = (distanceObject[dif] || 1) + 1;
    }
  }

  let max = 2;
  Object.values(duplicatedObject).forEach(ele => {
    if (ele > max) {
      max = ele;
    }
  });

  Object.values(distanceObject).forEach(ele => {
    if (ele > max) {
      max = ele;
    }
  });
  return max;
};

console.log(solution(A));
