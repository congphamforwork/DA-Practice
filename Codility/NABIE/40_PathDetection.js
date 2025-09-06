// const N = 4;
// const A = [1, 2, 4, 4, 3];
// const B = [2, 3, 1, 3, 1];
// const N = 4;
// const A = [1, 2, 1, 3];
// const B = [2, 4, 3, 4];
// const N = 6;
// const A = [2, 4, 5, 3];
// const B = [3, 5, 6, 4];
const N = 3;
const A = [1, 3];
const B = [2, 2];

const solution = (N, A, B) => {
  const manageObj = {};
  const aLen = A.length;

  for (let i = 0; i < aLen; i++) {
    const vertexFromA = A[i];
    const vertexFromAStr = String(vertexFromA);
    const vertexFromB = B[i];
    const vertexFromBStr = String(vertexFromB);
    if (vertexFromA < vertexFromB) {
      manageObj[vertexFromAStr + vertexFromBStr] = true;
    } else {
      manageObj[vertexFromBStr + vertexFromAStr] = true;
    }
  }

  let secondVertex = 2;
  while (secondVertex < N + 1) {
    const firstVertex = secondVertex - 1;
    const path = String(firstVertex) + String(secondVertex);
    if (!manageObj[path]) {
      return false;
    }
    secondVertex++;
  }

  return true;
};

console.log(solution(N, A, B));
