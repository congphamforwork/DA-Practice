const solution = (head) => {
  const dummyNode = new _Node();
  const randomObj = new Map();
  const reflectObj = new Map();
  let curNode;
  let prevNode = dummyNode;
  let ite1 = head;
  while (ite1) {
    curNode = new _Node(ite1.val);
    reflectObj.set(ite1, curNode);

    if (ite1.random !== null) {
      if (!randomObj.has(ite1.random)) {
        randomObj.set(ite1.random, []);
      }
      randomObj.get(ite1.random).push(curNode);
    } else {
      curNode.random = null;
    }
    prevNode.next = curNode;
    prevNode = curNode;
    ite1 = ite1.next;
  }
  while (head) {
    if (randomObj.has(head)) {
      randomObj
        .get(head)
        .forEach((node) => (node.random = reflectObj.get(head)));
    }
    head = head.next;
  }
  return dummyNode.next;
};

const solution2 = (head) => {
  let headIte = head;
  const reflectedMap = new Map();
  while (headIte) {
    reflectedMap.set(headIte, new _Node(headIte.val));
    headIte = headIte.next;
  }

  headIte = head;
  while (headIte) {
    reflectedMap.get(headIte).next = reflectedMap.get(headIte.next) || null;
    reflectedMap.get(headIte).random = reflectedMap.get(headIte.random) || null;
    headIte = headIte.next;
  }
  return reflectedMap.get(head);
};
