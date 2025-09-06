const a = "7";
const b = "8";

const solution = (a, b) => {
  const n1 = a.length;
  const n2 = b.length;
  let lastIdx1 = n1 - 1;
  let lastIdx2 = n2 - 1;
  let carry = 0;

  let result = "";
  while (lastIdx1 > -1 || lastIdx2 > -1 || carry > 0) {
    const curDigit1 = Number(a[lastIdx1] || 0);
    const curDigit2 = Number(b[lastIdx2] || 0);

    const sum = curDigit1 + curDigit2 + carry;
    const newChar = String(sum % 10);
    carry = Math.floor(sum / 10);

    result = newChar + result;
    lastIdx1--;
    lastIdx2--;
  }
  return result;
};

console.time("solution");
const v = solution(a, b);
console.log(v);
console.timeEnd("solution");
