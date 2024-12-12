// using array
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(data) {
    this.items.push(data);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

// Queue using linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.head = null;
    this.front = null;
    this.rear = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.front = this.rear = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.rear = current.next;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const temp = this.head.data;
    this.head = this.head.next;
    return temp;
  }
  reverseQueueUsingStack() {
    const stack = [];
    let current = this.head;
    while (current) {
      stack.push(current.data);
      current = current.next;
    }
    current = this.head;
    while (stack.length > 0) {
      current.data = stack.pop();
      current = current.next;
    }
  }
  reverseQueueUsingRecursion(queue) {
    if (!queue || !queue.next) {
      return queue;
    }
    let nextNode = this.reverseQueueUsingRecursion(queue.next);
    queue.next.next = queue;
    queue.next = null;
    return nextNode;
  }
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  sortingQueue() {}
  isEmpty() {
    return !this.head;
  }
}

const q = new QueueUsingLinkedList();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.display();

console.log("----");
q.reverseQueueUsingStack();
q.display();

// q.dequeue();
