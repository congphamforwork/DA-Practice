const S = "bdaaadadb";
// const S = "abacb";
// const S = "zthtzh";

const createPrefixSum = (S, n) => {
  const prefixSum = [0];
  let pre = 0;
  for (let i = 0; i < n; i++) {
    const curChar = S[i];
    const charCodeFromZero = curChar.charCodeAt(0) - 97;
    pre = pre ^ (1 << charCodeFromZero);
    prefixSum.push(pre);
  }
  return prefixSum;
};

function solution(S) {
  const n = S.length;

  const prefixSum = createPrefixSum(S,n);

  let subArrLen = n;
  while (subArrLen > 1) {
    for (let i = 0; i < n; i++) {
      const lastIdx = i + subArrLen;
      const temp = prefixSum[lastIdx] ^ prefixSum[i];
      if (temp === 0) {
        return subArrLen;
      }
    }
    subArrLen--;
  }
  return 0;
}
console.log(solution(S));
