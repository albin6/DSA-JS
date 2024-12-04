class Queue {
  constructor() {
    this.items = [];
  }
  addToQueue(data) {
    this.items.push(data);
  }
  removeFromQueue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    this.items.shift();
  }
  printQueue() {
    return this.items.join(", ");
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

const q = new Queue();

q.addToQueue(10);
q.addToQueue(20);
q.addToQueue(30);

console.log(q.printQueue());
q.removeFromQueue();
console.log("-----------");
console.log(q.printQueue());
