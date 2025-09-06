const A = [7, 3, 1, 1, 4, 5, 4, 9];

const solution = A => {
  const n = A.length;

  const managedObj = {};
  for (let i = 0; i < n; i++) {
    const curEle = A[i];
    managedObj[curEle] = (managedObj[curEle] || 0) + 1;
  }

  const managedObjKeys = Object.keys(managedObj).sort((a, b) => a - b);
  let result = 0;
  let carry = 0;
  for (roomSize of managedObjKeys) {
    const amountOfPeople = managedObj[roomSize] - carry;
    const roomSizeNum = Number(roomSize);
    const fullRoom = Math.floor(amountOfPeople / roomSizeNum);
    result += fullRoom;
    const surplusPeople = amountOfPeople - fullRoom * roomSizeNum;
    if (surplusPeople > 0) {
      carry = roomSizeNum - surplusPeople;
      result++;
    } else {
      carry = 0;
    }
  }

  return result;
};

console.log(solution(A));
