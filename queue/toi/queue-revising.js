class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.queue.length == 0) {
      throw new Error("Queue is empty");
    }

    return this.queue.shift();
  }

  reverseQueue() {
    if (this.queue.length) {
      const temp = this.dequeue();
      this.reverseQueue();
      this.insertInReverse(temp);
    }
  }

  insertInReverse(value) {
    if (this.queue.length == 0) {
      this.queue.push(value);
      return;
    }
    const temp = this.dequeue();
    this.insertInReverse(value);
    this.enqueue(temp);
  }
}

const q = new Queue();

q.enqueue(30);
q.enqueue(20);
q.enqueue(40);
q.enqueue(10);

// q.dequeue();

q.reverseQueue();

console.log(JSON.stringify(q.queue));
