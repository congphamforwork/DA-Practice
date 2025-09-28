const MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  return null;
};
MinStack.prototype.pop = function () {
  this.stack.pop();
  return null;
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  let min = this.stack[0];
  for (let i = 1; i < this.stack.length; i++) {
    min = Math.min(min, this.stack[i]);
  }
  return min;
};

const solution = () => {};

console.log(solution());

const myMinStack = new MinStack();
