function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const solution = (head) => {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let list1 = head;
  let list2 = slow.next;
  slow.next = null;
  let curNode;
  let prevNode;
  while (list2) {
    curNode = new ListNode(list2.val, prevNode);
    prevNode = curNode;
    list2 = list2.next;
  }
  list2 = curNode;

  const dummyNode = new ListNode();
  prevNode = dummyNode;
  let isList1 = true;
  while (list1 && list2) {
    let curNode;
    if (isList1) {
      curNode = list1;
      list1 = list1.next;
      isList1 = false;
    } else {
      curNode = list2;
      isList1 = true;
      list2 = list2.next;
    }
    prevNode.next = curNode;
    prevNode = curNode;
  }
  if (list1) {
    prevNode.next = list1;
  }
  if (list2) {
    prevNode.next = list2;
  }
  return dummyNode.next;
};
