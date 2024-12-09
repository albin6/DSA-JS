class Queue1 {
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
  isEmpty() {
    return this.items.length == 0;
  }
  front() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

// const queue = new Queue1();
// queue.enqueue(10);
// queue.enqueue(20);
// console.log(queue.front());
// console.log(queue.dequeue());
// console.log(queue.size());

class Stack {
  constructor() {
    this.items = [];
  }
}

class Queue {
  constructor() {
    this.items = [1, 2, 3, 4, 5];
  }
  dequeue() {
    return this.items.shift();
  }
  enqueue(data) {
    this.items.push(data);
  }
}

// Given a queue, reverse its elements using a stack.
function reverseQueueUsingStack() {
  const q = new Queue();
  const stack = new Stack();
  while (q.items.length > 0) {
    stack.items.push(q.dequeue());
  }

  while (stack.items.length > 0) {
    q.enqueue(stack.items.pop());
  }

  console.log(JSON.stringify(q.items));
}

// reverseQueueUsingStack();

// Implement a circular queue with fixed capacity.
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity).fill(null);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
  }
  enqueue(data) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = data;
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.size--;
    return item;
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.capacity;
  }
}

const cq = new CircularQueue(5);

cq.enqueue(50);
cq.enqueue(40);
cq.enqueue(30);
cq.enqueue(20);
cq.enqueue(10);

console.log(cq.dequeue());
cq.enqueue(100);
console.log(cq.items);
