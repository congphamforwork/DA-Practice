const solution = () => {
  const LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
  };

  LRUCache.prototype.get = function (key) {
    const returnedValue = this.map.get(key);
    if (returnedValue === undefined) {
      return -1;
    }
    this.map.delete(key);
    this.map.set(key, returnedValue);
    return returnedValue;
  };

  LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else {
      if (this.map.size === this.capacity) {
        const firstEleKey = this.map.entries().next().value[0];
        this.map.delete(firstEleKey);
      }
    }
    this.map.set(key, value);
  };
};

const solution2 = () => {
  var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.object = {};
    this.head;
    this.tail;
  };

  const Node = function (val, next, prev, key) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  };

  LRUCache.prototype.pushNode = function (curNode) {
    if (this.head === undefined && this.tail === undefined) {
      this.head = curNode;
      this.tail = curNode;
      return;
    }

    this.tail.next = curNode;
    curNode.prev = this.tail;
    this.tail = curNode;
  };

  LRUCache.prototype.deleteNode = function (curNode) {
    if (curNode.next === undefined && curNode.prev === undefined) {
      this.head = undefined;
      this.tail = undefined;
      return;
    }
    if (curNode.next === undefined) {
      this.tail = curNode.prev;
      curNode.prev = undefined;
    } else if (curNode.prev === undefined) {
      this.head = curNode.next;
      curNode.next = undefined;
    } else {
      const prevNode = curNode.prev;
      const nextNode = curNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      curNode.next = undefined;
      curNode.prev = undefined;
    }
  };

  LRUCache.prototype.get = function (key) {
    const curNode = this.object[key];
    if (curNode) {
      this.deleteNode(curNode);
      this.pushNode(curNode);
      return curNode.val;
    } else {
      return -1;
    }
  };

  LRUCache.prototype.put = function (key, value) {
    const curNode =
      this.object[key] || new Node(value, undefined, undefined, key);
    if (this.object[key]) {
      this.deleteNode(curNode);
    } else {
      if (this.capacity > 0) {
        this.capacity--;
      } else {
        delete this.object[this.head.key];
        this.deleteNode(this.head);
      }
    }
    this.pushNode(curNode);
    this.object[key] = curNode;
  };
};
