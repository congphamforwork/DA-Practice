const solution = (root) => {
  const recursion = (curNode) => {
    if (curNode === null) {
      return;
    }
    recursion(curNode.left);
    recursion(curNode.right);
    const rightNode = curNode.right;
    curNode.right = curNode.left;
    curNode.left = rightNode;
  };
  recursion(root);
  return root;
};

const solution2 = (root) => {
  if (root === null) {
    return root;
  }
  const queue = [root];
  while (queue.length > 0) {
    const curNode = queue.shift();

    if (curNode.left) {
      queue.push(curNode.left);
    }
    if (curNode.right) {
      queue.push(curNode.right);
    }
    const rightNode = curNode.right;
    curNode.right = curNode.left;
    curNode.left = rightNode;
  }
  return root;
};
