class Stack {
  constructor() {
    this.items = [];
    this.minstack = [];
  }

  push(data) {
    if (this.isEmpty() || data < this.getMin()) {
      this.minstack.push(data);
    }
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const removedItem = this.items.pop();
    if (removedItem == this.getMin()) {
      this.minstack.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log(this.getTop());
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getTop() {
    return this.items[this.items.length - 1];
  }

  getMin() {
    return this.minstack[this.minstack.length - 1];
  }
}

const st = new Stack();

st.push(10);
st.push(20);
st.push(30);
st.push(5);

console.log(st.getMin());

st.peek();
