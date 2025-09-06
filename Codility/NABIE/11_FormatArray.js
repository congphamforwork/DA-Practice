function solution(A, K) {
  const maxWidth = Math.max(...A.map(num => num.toString().length));
  let botEdgeDisplay = "";
  let middleDisplay = "";
  let colCount = 0;
  const topEdge = `+${"-".repeat(maxWidth)}`;
  const topEdgeDisplay = `${topEdge.repeat(Math.min(K, A.length))}+`;
  console.log(topEdgeDisplay);

  for (let i = 0; i < A.length; i++) {
    const paddedNum = A[i].toString().padStart(maxWidth);
    middleDisplay += `|${paddedNum}`;
    botEdgeDisplay += topEdge;
    colCount++;

    const isLastEle = i === A.length - 1;
    if (colCount === K || isLastEle) {
      botEdgeDisplay += "+";
      middleDisplay += "|";
      console.log(middleDisplay);
      console.log(botEdgeDisplay);
      botEdgeDisplay = "";
      middleDisplay = "";
      colCount = 0;
    }
  }
}

// Example usage:
const A = [4];
const K = 4;
solution(A, K);
