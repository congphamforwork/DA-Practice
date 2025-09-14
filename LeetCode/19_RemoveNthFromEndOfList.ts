class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// const initArray: number[] = [1, 2, 3, 4, 5];
const initArray: number[] = [1, 2];
const n = 2;
const createLinkedListFromArray = (array: number[]): ListNode | null => {
  const n = array.length;
  if (!n) {
    return null;
  }

  const head = new ListNode(array[0]);
  let prevNode = head;
  for (let i = 1; i < n; i++) {
    const curNum = array[i];
    const curNode = new ListNode(curNum);
    prevNode.next = curNode;
    prevNode = curNode;
  }

  return head;
};
const convertLinkedListToArray = (head: ListNode | null): number[] => {
  if (!head) {
    return [];
  }

  let curNode: ListNode | null = head;
  const result = [];
  while (curNode) {
    result.push(curNode.val);
    curNode = curNode.next;
  }
  return result;
};
const head: ListNode | null = createLinkedListFromArray(initArray);
console.log("[CongPB] ~ head:", convertLinkedListToArray(head));

const solution = (head: ListNode | null, n: number): ListNode | null => {
  let length = 0;
  let curNode = head;
  while (curNode) {
    length++;
    curNode = curNode.next;
  }
  if (length === 1) {
    return null;
  }
  if (length === n) {
    return head!.next;
  }

  let bridgeStartedIndex = length - n;
  let bridgeEndIndex = bridgeStartedIndex + 2;
  let nodeBridgeStart = null;
  let nodeBridgeEnd = null;
  let curIdx = 0;
  curNode = head;
  while (curNode) {
    curIdx++;
    if (curIdx === bridgeStartedIndex) {
      nodeBridgeStart = curNode;
    } else if (curIdx === bridgeEndIndex) {
      nodeBridgeEnd = curNode;
    }
    curNode = curNode.next;
  }
  nodeBridgeStart!.next = nodeBridgeEnd;
  return head;
};

const solution2 = (head: ListNode | null, n: number): ListNode | null => {
  const dummyNode = new ListNode(undefined, head);
  let firstNode: ListNode | null = dummyNode;
  let secondNode: ListNode | null = dummyNode;
  for (let i = 0; i < n; i++) {
    firstNode = firstNode!.next;
  }
  while (firstNode!.next) {
    firstNode = firstNode!.next;
    secondNode = secondNode!.next;
  }
  secondNode!.next = secondNode!.next!.next;

  return dummyNode.next;
};

const resultNode = solution2(head, 2);
console.log("[CongPB] ~ resultNode:", convertLinkedListToArray(resultNode));
