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

  arrayToList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insertLast(arr[i]);
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

const arr = [3, 4, 2, 1, 8, 2];

const ll = new LinkedList();

ll.arrayToList(arr);

ll.printList();
