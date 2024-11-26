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

    let current = this.head;
    let i = 0;
    while (i < Math.floor((this.size - 1) / 2)) {
      current = current.next;
      i++;
    }
    if (this.size % 2 == 0) {
      console.log("Middle elements are :", current.data, current.next.data);
    } else {
      console.log("Middle element is :", current.data);
    }
  }

  // (2) => reversing the list
  reverseList() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;
    while (current != null) {
      const newNode = current.next;
      current.next = prev;
      prev = current;
      current = newNode;
    }
    let curr = prev;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  // (3) => deleting middle element from the list
  removeMiddle() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let i = 0;
    while (i < Math.floor((this.size - 1) / 2)) {
      current = current.next;
      i++;
    }

    if (this.size % 2 == 0) {
      current.data = current.next.next.data;
      current.next = current.next.next.next;
    } else {
      current.data = current.next.data;
      current.next = current.next.next;
    }
  }

  printList(head = null) {
    if (head || !this.head) {
      return;
    } else {
      let current = head || this.head;
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
// ll.insertLast(250);
ll.insertLast(300);
ll.insertLast(400);

// ll.getMiddleNodeValue();

// ll.reverseList();
ll.printList();
console.log("-------------");
ll.removeMiddle();
console.log("-------------");
ll.printList();
