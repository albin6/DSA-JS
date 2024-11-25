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

  // inserting node in beginning of list
  addNodeFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // inserting node at last of list
  addNodeLast(data) {
    const node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // inserting node at a specific index
  addNodeAtIndex(data, index) {
    if (index < 1 || index > this.size) {
      throw new Error("Invalid index");
    }

    const node = new Node(data);

    if (index == 1) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let i = 1;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      node.next = current;
      prev.next = node;
    }
    this.size++;
  }

  // removing node from a specific index
  removeNodeAtIndex(index) {
    if (index < 1 || index > this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let prev = null;
    let i = 1;
    if (index == 1) {
      this.head = current.next;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
    }
    this.size--;
  }

  // get node at a specific index
  getNodeAtIndex(index) {
    if (index < 1 || index > this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let i = 1;
    while (current) {
      if (index == i) {
        console.log("data =>", current.data);
        return;
      }
      i++;
      current = current.next;
    }
  }

  // print the data in the list
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.addNodeFirst(100);
ll.addNodeFirst(200);
ll.addNodeFirst(300);

ll.addNodeLast(400);
ll.addNodeLast(500);
ll.addNodeAtIndex(250, 3);

// ll.getNodeAtIndex(0);

ll.removeNodeAtIndex(3);

ll.printListData();
