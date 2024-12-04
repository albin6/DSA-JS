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
    this.items.shift();
  }

  printQueue() {
    console.log(this.items.join(", "));
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

const q = new Queue();

q.enqueue(100);
q.enqueue(200);
q.enqueue(300);

q.dequeue();

q.printQueue();
