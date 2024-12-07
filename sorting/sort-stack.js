class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    this.items.pop();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    if (this.isEmpty()) {
      return;
    }
    return this.items.join(", ");
  }
  reverseStack(stack) {
    if (stack.length <= 1) {
      return stack;
    }
    const temp = stack.pop();
    this.reverseStack(stack);
    stack.push(temp);
  }
}

const st = new Stack();

st.push(10);
st.push(30);
st.push(40);
st.push(20);

console.log(st.printStack());

console.log("------------");
st.reverseStack(st.items);

console.log(st.printStack());
