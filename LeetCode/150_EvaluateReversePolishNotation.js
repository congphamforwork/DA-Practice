// const tokens = ["2", "1", "+", "3", "*"];
const tokens = ["4", "13", "5", "/", "+"];
// const tokens = [
//   "10",
//   "6",
//   "9",
//   "3",
//   "+",
//   "-11",
//   "*",
//   "/",
//   "*",
//   "17",
//   "+",
//   "5",
//   "+",
// ];
// const tokens = ["18"];

const solution = () => {
  const stack = [];
  const operatorObject = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (const token of tokens) {
    let localToken = token;
    if (operatorObject[token]) {
      const a = Number(stack.pop());
      const b = Number(stack.pop());
      localToken = operatorObject[token](a, b);
    }
    stack.push(localToken);
  }
  return Number(stack[0]);
};

const solution2 = () => {
  const recursion = () => {
    const token = tokens.pop();
    if (!"+-*/".includes(token)) {
      return Number(token);
    }

    let a = recursion();
    let b = recursion();
    if (token === "+") {
      return a + b;
    }
    if (token === "-") {
      return b - a;
    }
    if (token === "*") {
      return a * b;
    }
    if (token === "/") {
      return Math.trunc(b / a);
    }
  };
  return recursion();
};

console.log(solution2());
