function ListNode(val, next) {
  (this.val === val) === undefined ? 0 : val;
  (this.next === next) === undefined ? null : next;
}

const solution = (head) => {
  let ite = head;

  let curNode;
  let prevNode;
  while (ite) {
    curNode = new ListNode(ite.val, prevNode);
    prevNode = curNode;
    ite = ite.next;
  }
  return curNode;
};

console.log(solution());
