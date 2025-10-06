// const s = "aa",
//   p = "a";
// const s = "cb",
//   p = "?a";
// const s = "adceb",
//   p = "*a*b";
// const s = "acdcb",
//   p = "a*c?b";
const s = "abcabczzzde",
  p = "*abc???de*";

const solution = function (s, p) {
  const sLength = s.length,
    pLength = p.length;
  let sIdx = 0,
    pIdx = 0;

  let sMatchStarIdx = -1;
  let pStartIdx = -1;

  while (sIdx < sLength) {
    if (pIdx < pLength && (p[pIdx] === "?" || s[sIdx] === p[pIdx])) {
      sIdx++;
      pIdx++;
    } else if (pIdx < pLength && p[pIdx] === "*") {
      pStartIdx = pIdx;
      sMatchStarIdx = sIdx;
      pIdx++;
    } else if (pIdx !== -1) {
      pIdx = pStartIdx;
      sMatchStarIdx++;
      sIdx = sMatchStarIdx;
    } else {
      return false;
    }
  }

  for (let i = pIdx; i < pLength; i++) {
    if (p[i] !== "*") return false;
  }
  return true;
};

console.log(solution(s, p));
