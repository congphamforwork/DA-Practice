// const nums1 = [1, 3],
const nums1 = [1, 2],
  // nums2 = [2];
  nums2 = [3, 4];

const solution = (nums1, nums2) => {
  const n1 = nums1.length,
    n2 = nums2.length;
  const realLength = n1 + n2;
  const isEven = realLength % 2 === 0;
  const medianIndex = isEven ? realLength / 2 - 1 : Math.floor(realLength / 2);

  let result = 0;
  let lastResult = 0;
  let startIdx1 = 0;
  let startIdx2 = 0;
  for (let i = 0; i < medianIndex + 2; i++) {
    const curNum1 = nums1[startIdx1] || Infinity;
    const curNum2 = nums2[startIdx2] || Infinity;
    let tempRes = curNum1;
    if (curNum1 > curNum2) {
      tempRes = curNum2;
      startIdx2++;
    } else {
      startIdx1++;
    }
    lastResult = result;
    result = tempRes;
  }
  if (isEven) {
    return (lastResult + result) / 2;
  } else {
    return lastResult;
  }
};

console.log(solution(nums1, nums2));
