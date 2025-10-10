const solution = (head, k) => {
  const stack = [];
  const dummyNode = new ListNode();
  let prevNode = dummyNode;
  while (head) {
    let ite = head;
    for (let i = 0; i < k; i++) {
      if (ite === null) {
        prevNode.next = stack[0];
        return dummyNode.next;
      }
      stack.push(ite);
      ite = ite.next;
    }

    while (stack.length) {
      const curNode = stack.pop();
      prevNode.next = curNode;
      prevNode = curNode;
    }

    head = ite;
  }
  prevNode.next = head;
  return dummyNode.next;
};

const reverseKGroup = (head, k) => {
  let ite = head;
  let count = 0;
  while (ite && count < k) {
    ite = ite.next;
    count++;
  }

  if (count === k) {
    let nextNode = reverseKGroup(ite, k);
    while (count > 0) {
      let tempNode = head.next;
      head.next = nextNode;
      nextNode = head;
      head = tempNode;
      count--;
    }
    return nextNode;
  }

  return head;
};
