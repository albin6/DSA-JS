class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (!this.queue.length) {
      throw new Error("Queue is empty..");
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  sortQueue() {
    const auxQueue = new Queue();
    while (!this.isEmpty()) {
      let min = this.dequeue();
      let size = this.queue.length;
      for (let i = 0; i < size; i++) {
        const current = this.dequeue();
        if (current < min) {
          auxQueue.enqueue(current);
        } else {
          auxQueue.push(min);
          min = current;
        }
      }
    }
    while (!auxQueue.isEmpty()) {
      this.enqueue(auxQueue.dequeue());
    }
  }
}
