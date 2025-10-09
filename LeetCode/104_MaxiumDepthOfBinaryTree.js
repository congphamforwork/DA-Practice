const solution = (root) => {
  let max = 0;
  const recursion = (curNode, count = 0) => {
    if (curNode === null) {
      return;
    }
    count++;
    Math.max(count, max);
    recursion(curNode.left, count);
    recursion(curNode.right, count);
  };
  recursion(root);
  return max;
};
