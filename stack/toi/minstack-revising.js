class MinStack {
  constructor(size = 5) {
    this.stack = [];
    this.minstack = [];
    this.size = size;
  }

  isFull() {
    return this.stack.length + 1 > this.size;
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  getMin() {
    return this.minstack[this.minstack.length - 1];
  }

  push(value) {
    if (this.isFull()) {
      throw new Error("stack is full");
    }

    this.stack.push(value);
    if (value < this.getMin()) {
      this.minstack.push(value);
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }

    const top = this.stack.pop();
    if (top == this.getMin()) {
      this.minstack.pop();
    }
    return top;
  }
}
