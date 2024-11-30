// (1) => remove duplicates from a singly sorted array

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  removeDuplicates() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let previous = null;
    let seen = new Set();

    while (current != null) {
      if (seen.has(current.data)) {
        previous.next = current.next;
      } else {
        previous = current;
        seen.add(current.data);
      }
      current = current.next;
    }
  }

  removeEvenNumbers() {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data % 2 != 0) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.data % 2 != 0) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }

  reverseList() {
    let current = this.head;
    let previous = null;

    while (current != null) {
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }

    return previous;
  }

  printElementsReverseByOrder() {
    // reversing
    let newHead = this.reverseList();

    while (newHead) {
      console.log(newHead.data);
      newHead = newHead.next;
    }
  }

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
}

const ll = new LinkedList();

ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);

ll.printList();

console.log("-----------");

ll.printElementsReverseByOrder();
