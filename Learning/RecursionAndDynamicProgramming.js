// Quy hoạch động: Bản chất là không tính toán lại những gì chung ta đã tính toán

const n = 2000000000;

const basicRecursionFib = n => {
  if (n === 1 || n === 2) return 1;
  return basicRecursionFib(n - 1) + basicRecursionFib(n - 2);
};

const memoizeRecursionFib = (n, arr = [0, 1, 1]) => {
  if (arr[n]) {
    return arr[n];
  }

  arr[n] = memoizeRecursionFib(n - 2, arr) + memoizeRecursionFib(n - 1, arr);
  return arr[n];
};

const basicLoopFib = (n, arr = [0, 1, 1]) => {
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};

const premiumLoobFib = n => {
  let n_1Val = 1;
  let n_2Val = 1;
  let result = 0;
  for (let i = 3; i < n + 1; i++) {
    result = n_1Val + n_2Val;
    n_2Val = n_1Val;
    n_1Val = result;
  }
  return result;
};

const superPremiumLoobFib = n => {
  let n_1Val = 1;
  let n_2Val = 1;
  for (let i = 3; i < n + 1; i++) {
    n_1Val = n_1Val + n_2Val;
    n_2Val = n_1Val - n_2Val;
  }
  return n_1Val;
};

// console.time("basicRecursionFib");
// console.log(basicRecursionFib(n));
// console.timeEnd("basicRecursionFib");

// console.time("memoizeRecursionFib");
// console.log(memoizeRecursionFib(n));
// console.timeEnd("memoizeRecursionFib");

// console.time("basicLoopFib");
// console.log(basicLoopFib(n));
// console.timeEnd("basicLoopFib");

console.time("premiumLoobFib");
console.log(premiumLoobFib(n));
console.timeEnd("premiumLoobFib");

console.time("superPremiumLoobFib");
console.log(superPremiumLoobFib(n));
console.timeEnd("superPremiumLoobFib");
