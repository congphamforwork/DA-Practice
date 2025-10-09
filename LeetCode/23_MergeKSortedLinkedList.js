const solution = (lists) => {
  // 31 ms =))
  const lists = inputLists.filter(Boolean);
  if (lists.length === 0) return null;

  let dummyNode = new ListNode();
  let prevNode = dummyNode;

  let min = Infinity;

  const listsMap = new Map(lists.map((head, index) => [index, head]));
  while (listsMap.size > 0) {
    for (const [key, head] of listsMap) {
      if (head === null) {
        listsMap.delete(key);
        continue;
      }
      min = Math.min(head.val, min);
    }

    for (let [key, head] of listsMap) {
      while (head !== null && head.val === min) {
        prevNode.next = head;
        prevNode = head;
        head = head.next;
        listsMap.set(key, head);
      }
    }
    min = Infinity;
  }

  return dummyNode.next;
};

const solution2 = (lists) => {
  // 2495 ms =))
  lists = lists.filter(Boolean);
  if (lists.length === 0) return null;

  let dummyNode = new ListNode();
  let prevNode = dummyNode;

  while (true) {
    let min = Infinity;
    let minIdx = -1;
    for (let index of lists) {
      if (lists[index] && lists[index].val < min) {
        min = lists[index].val;
        minIdx = index;
      }
    }

    if (minIdx === -1) break;

    const minNode = lists[minIdx];
    prevNode.next = minNode;
    prevNode = minNode;
    lists[minIdx] = minNode.next;
  }

  return dummyNode.next;
};
