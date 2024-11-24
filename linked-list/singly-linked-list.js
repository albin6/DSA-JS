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

ll.printListData();
