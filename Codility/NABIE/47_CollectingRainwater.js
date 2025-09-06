// const S = "-H-HH-";
// const S = "H";
// const S = "HH-HH";
// const S = "-H-H-H-H-H";
const S = "H-H-H-H-H-";
// const S = "-HH";

const HOUSE_POS = "H";
const EMPTY_POS = "-";
const TANK_POS = "T";

const solution = S => {
  const SArr = S.split("");
  const n = SArr.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const curPos = SArr[i];

    if (curPos !== HOUSE_POS) continue;

    const nextPos = SArr[i + 1];
    const next2Pos = SArr[i + 2];
    const prevPos = SArr[i - 1];

    if (nextPos === undefined && prevPos === undefined) return -1;

    if (next2Pos === HOUSE_POS) {
      if (nextPos === EMPTY_POS) {
        SArr[i + 1] = TANK_POS;
        result++;
        i += 2;
        continue;
      } else {
        return -1;
      }
    }

    if (nextPos === EMPTY_POS) {
      SArr[i + 1] = TANK_POS;
      result++;
      i++;
    } else if (prevPos === EMPTY_POS) {
      SArr[i - 1] = TANK_POS;
      result++;
    } else {
      return -1;
    }
  }

  return result;
};

console.log(solution(S));
