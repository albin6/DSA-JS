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

  // (1) => get middle node value
  getMiddleNodeValue() {
    if (!this.head) {
      return;
    }
  }

  printList() {
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

const ll = new LinkedList();

ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);

ll.getMiddleNodeValue();

// ll.printList();
