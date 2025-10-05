function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const solution = (head) => {
  while (head) {
    if (head.isArrived) {
      return true;
    }
    head.isArrived = true;
    head = head.next;
  }
  return false;
};

const solution2 = (head) => {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
console.log(solution());
