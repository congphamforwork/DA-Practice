const solution = (root) => {
  if (root === null) return 0;
  let min = 10 ** 5;
  const queue = [[root, 0]];
  while (queue.length) {
    const [curNode, count] = queue.shift();
    const nextCount = count + 1;
    if (curNode.left === null && curNode.right === null) {
      min = Math.min(nextCount, min);
      break;
    }
    if (curNode.left) queue.push([curNode.left, nextCount]);
    if (curNode.right) queue.push([curNode.right, nextCount]);
  }
  return min;
};

const solution2 = (root) => {
  if (root === null) return 0;
  let min = 10 ** 5;
  const stack = [[root, 0]];
  while (stack.length) {
    let [curNode, count] = stack.pop();
    count++;
    if (curNode.left === null && curNode.right === null) {
      min = Math.min(min, count);
      continue;
    }
    if (curNode.left) stack.push([curNode.left, count]);
    if (curNode.right) stack.push([curNode.right, count]);
  }
  return min;
};
const solution3 = (root) => {
  if (root === null) {
    return 0;
  }

  let min = 10 ** 5;
  const recursion = (curNode, count = 0) => {
    if (curNode === null) {
      return;
    }
    count++;
    if (curNode.left === null && curNode.right === null) {
      min = Math.min(count, min);
      return;
    }
    recursion(curNode.left, count);
    recursion(curNode.right, count);
  };
  recursion(root);
  return min;
};
