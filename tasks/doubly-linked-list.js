// remove an element from doubly linked list
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

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
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
  }

  insertAt(data, index) {
    const node = new Node(data);

    if (index == 0) {
      node.next = this.head.next;
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;
    let i = 0;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
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

ll.insertFirst(100);

ll.insertLast(200);

ll.insertAt(150, 0);

ll.printList();
