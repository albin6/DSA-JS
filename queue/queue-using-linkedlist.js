class QueueNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(data) {
    const node = new QueueNode(data);
    if (this.isQueueEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }
  dequeue() {
    if (this.isQueueEmpty()) {
      throw new Error("Queue is empty");
    } else {
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
    }
    this.size--;
  }
  printQueue() {
    if (this.isQueueEmpty()) {
      return "Queue is empty";
    } else {
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  isQueueEmpty() {
    return this.size == 0;
  }
}

const qll = new QueueUsingLinkedList();

qll.enqueue(100);
// qll.enqueue(200);
// qll.enqueue(300);

qll.dequeue();

qll.printQueue();

console.log(qll.rear);
