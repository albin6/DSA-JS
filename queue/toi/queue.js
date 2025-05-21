class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.items.length) {
      return this.items.shift();
    }
  }

  size() {
    return this.items.length;
  }

  sortQueue() {
    const auxQueue = new Queue();
    while (this.size()) {
      let min = this.dequeue();
      let size = this.size();
      for (let i = 0; i < size; i++) {
        let current = this.dequeue();
        if (current < min) {
          this.enqueue(min);
          min = current;
        } else {
          this.enqueue(current);
        }
      }
      auxQueue.enqueue(min);
    }
    while (auxQueue.size()) {
      this.enqueue(auxQueue.dequeue());
    }
  }

  reverseQueue(queue = this.items) {
    if (queue.length <= 0) {
      return;
    }

    const temp = queue.shift();
    this.reverseQueue(queue);
    queue.push(temp);
  }
}

const queue = new Queue();

queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(40);
queue.enqueue(30);

console.log(queue.items);

queue.sortQueue();

console.log(queue.items);

queue.reverseQueue();

console.log(queue.items);
