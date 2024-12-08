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
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
  sortQueue() {
    const auxQueue = new Queue();
    while (!this.isEmpty()) {
      let min = this.dequeue();
      const size = this.size();
      for (let i = 0; i < size; i++) {
        const current = this.dequeue();
        if (current < min) {
          this.enqueue(min);
          min = current;
        } else {
          this.enqueue(current);
        }
      }
      auxQueue.enqueue(min);
    }
    while (!auxQueue.isEmpty()) {
      this.items.push(auxQueue.dequeue());
    }
  }
  display() {
    console.log(JSON.stringify(this.items));
  }
}

const q = new Queue();

q.enqueue(2);
q.enqueue(1);
q.enqueue(3);
q.enqueue(5);
q.enqueue(8);
q.enqueue(2);
q.enqueue(4);

q.display();

q.sortQueue();

q.display();
