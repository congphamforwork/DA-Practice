// const S = "gain";
// const T = "again";

// const S = "parks";
// const T = "park";

// const S = "form";
// const T = "from";

// const S = "o";
// const T = "odd";

const S = "fift";
const T = "fifth";

const RESULT = {
  IMPOSSIBLE: "IMPOSSIBLE",
};

const checkSwappable = (str1a, str1b, str2a, str2b) => {
  const checkObj = { [str1a]: true, [str1b]: true };
  if (checkObj[str2a]) {
    delete checkObj[str2a];
  } else {
    return false;
  }

  if (checkObj[str2b]) {
    return true;
  } else {
    return false;
  }
};

const solution = (S, T) => {
  if (S === T) {
    return "EQUAL";
  }

  const SLen = S.length;
  const lastSIdx = SLen - 1;
  const TLen = T.length;
  const lastTIdx = TLen - 1;

  if (SLen === lastTIdx) {
    for (let i = 1; i < TLen; i++) {
      if (T[i] !== S[i - 1]) {
        return RESULT.IMPOSSIBLE;
      }
    }
    return `INSERT ${T[0]}`;
  } else if (SLen === TLen + 1) {
    for (let i = 0; i < TLen; i++) {
      if (S[i] !== T[i]) {
        return RESULT.IMPOSSIBLE;
      }
    }
    return `REMOVE ${S[lastSIdx]}`;
  } else if (SLen === TLen) {
    const swapIdxArr = [];

    for (let i = 0; i < TLen; i++) {
      if (S[i] !== T[i]) {
        swapIdxArr.push(i);
      }
    }
    if (swapIdxArr.length !== 2) {
      return RESULT.IMPOSSIBLE;
    }
    const SSwapStr1 = S[swapIdxArr[0]];
    const SSwapStr2 = S[swapIdxArr[1]];

    const isSwappable = checkSwappable(SSwapStr1, SSwapStr2, T[swapIdxArr[0]], T[swapIdxArr[1]]);

    if (isSwappable) {
      return `SWAP ${SSwapStr1} ${SSwapStr2}`;
    }

    return RESULT.IMPOSSIBLE;
  }

  return RESULT.IMPOSSIBLE;
};

console.log(solution(S, T));
