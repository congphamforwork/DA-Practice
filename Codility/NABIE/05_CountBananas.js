const S = "QBANANABANANABANANAQ";
const BVal = 1;
const AVal = 3;
const Nval = 2;

const solution = S => {
  const n = S.length;

  let Bcount = 0;
  let Acount = 0;
  let Ncount = 0;

  for (let i = 0; i < n; i++) {
    const curChar = S[i];
    switch (curChar) {
      case "B":
        Bcount++;
        break;
      case "A":
        Acount++;
        break;
      case "N":
        Ncount++;
        break;
      default:
        break;
    }
  }

  const finalB = Math.floor(Bcount / BVal);
  const finalA = Math.floor(Acount / AVal);
  const finalN = Math.floor(Ncount / Nval);
  const result = Math.min(finalB, finalA, finalN);
  return result;
};
console.log(solution(S));
