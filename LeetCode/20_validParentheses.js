const s = "()[]{}";

const solution = () => {
  if (s.length <= 1) {
    return false;
  }
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (const char of s) {
    if (obj[char]) {
      stack.push(char);
    } else {
      if (obj[stack[stack.length - 1]] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length;
};

console.log(solution());
