const A = [10, 1, 3, 1, 2, 2, 1, 0, 4];
// const A = [5, 3, 1, 3, 2, 3];
// const A = [9, 9, 9, 9, 9];
// const A = [3, 3, 3];
// const A = [2, 3];

const countSlices = arr => {
  // check same sum segments have intersected each other or not
  let count = 0;
  const checkObj = {};
  for (slice of arr) {
    const [firstEle, secondEle] = slice;
    if (checkObj[firstEle] || checkObj[secondEle]) {
      continue;
    }
    checkObj[firstEle] = true;
    checkObj[secondEle] = true;
    count++;
  }
  return count;
};

const createManagedObj = (managedObj, lastIdx, startIdx) => {
  for (let i = startIdx; i < lastIdx; i += 2) {
    const nextIdx = i + 1;
    const sum = A[i] + A[nextIdx];
    const newObjVal = (managedObj[sum] || []).concat([[i, nextIdx]]);
    managedObj[sum] = newObjVal;
  }
};

const solution = A => {
  const n = A.length;
  const lastIdx = n - 1;
  const managedObj = {}; // Object to count number of segments which has same sum

  createManagedObj(managedObj, lastIdx, 0);
  createManagedObj(managedObj, lastIdx, 1);
  const objKeys = Object.keys(managedObj);

  let result = 0;
  for (let key of objKeys) {
    const sameSum = managedObj[key];
    result = Math.max(result, countSlices(sameSum));
  }

  return result;
};
console.log(solution(A));
