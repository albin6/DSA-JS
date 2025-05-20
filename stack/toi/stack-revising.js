class Stack {
  constructor(size = 10) {
    this.stack = [];
    this.size = size;
  }

  isFull() {
    return this.stack.length + 1 > this.size;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    if (this.isFull()) {
      throw new Error("Stack overflow");
    }

    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }

    return this.stack.pop();
  }

  insertAtBottom(value) {
    if (this.isEmpty()) {
      this.push(value);
    } else {
      const temp = this.pop();
      this.insertAtBottom(value);
      this.push(temp);
    }
  }

  reverseStack() {
    if (!this.isEmpty()) {
      const temp = this.pop();
      this.reverseStack();
      this.insertAtBottom(temp);
    }
  }

  insertInOrder(value) {
    if (this.isEmpty() || value > this.stack[this.stack.length - 1]) {
      this.push(value);
    } else {
      const temp = this.pop();
      this.insertInOrder(value);
      this.push(temp);
    }
  }

  sortStack() {
    if (!this.isEmpty()) {
      const temp = this.pop();
      this.sortStack();
      this.insertInOrder(temp);
    }
  }
}

const st = new Stack(5);

st.push(10);
st.push(20);
st.push(30);
st.push(40);
st.push(50);

console.log(JSON.stringify(st.stack));

st.reverseStack();

console.log(JSON.stringify(st.stack));

st.sortStack();

console.log(JSON.stringify(st.stack));
