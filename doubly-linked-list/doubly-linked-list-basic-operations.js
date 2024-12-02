class Node {
  constructor(data, next = null) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // insert first
  insertFirst(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  // insert last
  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // print list (forward traversing)
  printList() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // print list (backward traversing)
  printListReverse() {
    if (!this.head) {
      return;
    }

    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // reverse doubly linked list
  reverseList() {
    let current = this.head
    let newHead = null
    while (current) {
      [current.next, current.prev] = [current.prev, current.next]
      newHead = current;
      current = current.prev
    }
    return newHead
  }

  // print list
  printListReverses(newHead) {
    while (newHead) {
      console.log(newHead.data)
      newHead = newHead.next
    }
  }

  removeMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const nextNode = slow.next

    nextNode.prev = slow.prev.next
    slow.prev.next = nextNode
  }

  // remove last
  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  // remove first
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.head.prev = null;
  }
}

const ll = new DoublyLinkedList();

ll.insertFirst(200);
ll.insertFirst(100);

ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(500);

ll.printList();
console.log("---------");
// // ll.removeLast();
// ll.removeLast();
// ll.printList();
// ll.printListReverse();
// const newH = ll.reverseList()

// ll.printListReverses(newH)


ll.removeMiddleNode()

ll.printList();
