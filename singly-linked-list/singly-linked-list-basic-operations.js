// creation of linked list

class SampleNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SampleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

// -------------------------------------------------
// *All operations are done using zero based index
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

  // =========================================================
  // INSERTION OPERATIONS - START
  // =========================================================

  // insert node in the start
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert node in end
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

  // insert node at specified position
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    const node = new Node(data);

    if (index == 0) {
      this.insertFirst(data);
    } else {
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
  }

  // =========================================================
  // INSERTION OPERATIONS - END
  // =========================================================

  // =========================================================
  // DELETION OPERATIONS - START
  // =========================================================

  // remove node from start
  removeFirst() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    this.head = this.head.next;
    this.size--;
  }

  // remove node from end
  removeLast() {
    if (!this.head) {
      throw new Error("List is empty");
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  // remove node from specific position
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    if (index == 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;

      while (i < index - 1) {
        current = current.next;
        i++;
      }

      if (current.next) {
        current.next = current.next.next;
      }
    }
    this.size--;
  }

  // =========================================================
  // DELETION OPERATIONS - END
  // =========================================================

  // getting value of a node at specific position
  printNodeAt(index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    if (!this.head) {
      return;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      console.log(current.next.data);
    }
  }

  // print all values in the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

// adding a new node at first
ll.insertFirst(100);
ll.insertFirst(200);

// adding a new node at last
ll.insertLast(500);
ll.insertLast(700);
ll.insertLast(600);

// insert node at specified position
ll.insertAt(300, 0);
ll.insertAt(300, 3);
ll.insertAt(600, 2);

// remove from first
ll.removeFirst();

// remove from last
ll.removeLast();

// remove from a specific index
ll.removeFrom(1);

// print the data in the list
ll.printList();

// print the data at a specific position
// ll.printNodeAt(1);
