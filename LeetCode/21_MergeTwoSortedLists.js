function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.val = next === undefined ? null : val;
}

const solution = (list1, list2) => {
  const dummyNode = new ListNode();
  let prevNode = dummyNode;
  while (list1 && list2) {
    let curNode;
    if (list1.val <= list2.val) {
      curNode = list1;
      list1 = list1.next;
    } else {
      curNode = list2;
      list2 = list2.next;
    }
    prevNode.next = curNode;
    prevNode = curNode;
  }
  if (!list1) {
    prevNode.next = list2;
  } else if (!list2) {
    prevNode.next = list1;
  }
  return dummyNode.next;
};

const solution2 = (list1, list2) => {
  const recursion = (list1, list2) => {
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
    if (list1.val <= list2.val) {
      list1.next = recursion(list1.next, list2);
      return list1;
    } else {
      list2.next = recursion(list1, list2.next);
      return list2;
    }
  };

  return recursion(list1, list2);
};

console.log(solution());
