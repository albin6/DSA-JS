class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    this.head = new ListNode(value, this.head);
  }

  insertLast(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(value);
  }

  insertAt(value, index) {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    if (index == 1) {
      this.insertFirst(value);
      return;
    }

    let current = this.head;
    let i = 1;

    while (i < index - 1) {
      if (!current) {
        throw new Error("Invalid index");
      }
      current = current.next;
      i++;
    }

    current.next = new ListNode(value, current.next);
  }
}
