// const piles = [3, 6, 7, 11],
// const piles = [30, 11, 23, 4, 20],
// const piles = [312884470],
// const piles = [
//     332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673,
//     679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097,
//     692137887, 718203285, 629455728, 941802184,
//   ],
const piles = [3, 3, 3],
  h = 4;

const solution = (piles: number[], h: number): number => {
  const n = piles.length;
  const canEatAll = (k: number) => {
    let timeToEat = 0;
    for (let i = 0; i < n; i++) {
      let bananaCount = piles[i]!;
      timeToEat += Math.ceil(bananaCount / k);
    }
    return timeToEat <= h;
  };

  let maxK = piles.reduce((res, curNum) => res + curNum);
  let minK = Math.ceil(maxK / h);

  while (minK < maxK) {
    const avgK = Math.floor((minK + maxK) / 2);
    if (canEatAll(avgK)) {
      maxK = avgK;
    } else {
      minK = avgK + 1;
    }
  }

  return maxK;
};
console.log(solution(piles, h));
