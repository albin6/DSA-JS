class Stack {
  constructor() {
    this.stack = [];
  }

  addToStack(data) {
    this.stack.push(data);
  }

  removeFromStack() {
    if (this.isEmpty) {
      throw new Error("Stack is empty");
    }
    this.stack.pop();
  }

  viewTop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length == 0;
  }
}
