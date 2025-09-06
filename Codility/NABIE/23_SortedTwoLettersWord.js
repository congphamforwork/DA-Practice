const S = "BAAABAB";

const solution = S => {
  let num_Bs = 0;
  let min_dels = 0;

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (char === "A") {
      min_dels = Math.min(num_Bs, min_dels + 1);
    } else {
      num_Bs++;
    }
  }
  return min_dels;
};

const A_CHAR = "A";
const B_CHAR = "B";
const solution2 = S => {
  let n = S.length;
  const a = Array(n).fill(0);
  const b = Array(n).fill(0);
  let c = 0;
  for (let i = 0; i < n; i++) {
    b[i] = c;
    if (S[i] === B_CHAR) {
      c++;
    }
  }

  c = 0;
  for (let i = n - 1; i > -1; i--) {
    a[i] = c;
    if (S[i] === A_CHAR) {
      c++;
    }
  }

  let result = n;
  for (let i = 0; i < n; i++) {
    result = Math.min(result, a[i] + b[i]);
  }
  return result;
};

console.log(solution2(S));
