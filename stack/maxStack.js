class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }
  push(data) {
    if (this.maxStack.length == 0 || data >= this.getMax()) {
      this.maxStack.push(data);
    }
    this.stack.push(data);
  }
  pop() {
    const temp = this.stack.pop();
    if (temp === this.getMax()) {
      this.maxStack.pop();
    }
  }
  displayStack() {
    console.log(JSON.stringify(this.stack));
  }
  displayMaxStack() {
    console.log(JSON.stringify(this.maxStack));
  }
  getMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}

const maxStack = new MaxStack();

maxStack.push(5);
maxStack.push(2);
maxStack.push(5);
maxStack.push(1);
maxStack.push(6);

maxStack.displayStack();
maxStack.displayMaxStack();

maxStack.pop();
console.log("6 removed");

maxStack.displayStack();
maxStack.displayMaxStack();

maxStack.pop();
console.log("1 removed");

maxStack.displayStack();
maxStack.displayMaxStack();

maxStack.pop();
console.log("5 removed");

maxStack.displayStack();
maxStack.displayMaxStack();
