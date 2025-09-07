/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head1 = l1;
  let head2 = l2;
  const sumArr = [];
  while (true) {
    if (!head1 && !head2) {
      break;
    }
    let num1 = 0;
    let num2 = 0;
    if (head1) {
      num1 = head1.val;
      head1 = head1.next;
    }
    if (head2) {
      num2 = head2.val;
      head2 = head2.next;
    }
    let sum = num1 + num2 + carry;
    carry = 0;
    if (sum >= 10) {
      sum -= 10;
      carry++;
    }
    sumArr.push(sum);
  }
  if (carry) {
    sumArr.push(carry);
  }

  let curNode;
  let prevNode;
  for (let i = sumArr.length - 1; i > -1; i--) {
    const curNum = sumArr[i];
    curNode = new ListNode(curNum, prevNode);
    prevNode = curNode;
  }
  return curNode;
};
