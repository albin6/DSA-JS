class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    this.head = new Node(data, this.head);
  }
  getMiddle(head) {
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  sortList(head) {
    if (!head || !head.next) {
      return head;
    }
    const middle = this.getMiddle(head);
    const nextMiddle = middle.next;
    middle.next = null;

    const left = this.sortList(head);
    const right = this.sortList(nextMiddle);

    return this.sort(left, right);
  }
  sort(left, right) {
    let sorted = null;

    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }

    if (left.data >= right.data) {
      sorted = left;
      sorted.next = this.sort(left.next, right);
    } else {
      sorted = right;
      sorted.next = this.sort(left, right.next);
    }
    return sorted;
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insert(50);
ll.insert(40);
ll.insert(30);
ll.insert(20);
ll.insert(10);

ll.printList();

ll.head = ll.sortList(ll.head);
console.log("---------");

ll.printList();
