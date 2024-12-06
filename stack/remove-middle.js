class Stack {
  constructor() {
    this.items = [3, 2, 3, 4, 2, 5, 2];
  }
  removeMiddle() {
    let count = 0;
    const tempStack = [];
    const middle = this.getMiddle();
    while (count <= middle) {
      if (count == middle) {
        this.items.pop();
      } else {
        tempStack.push(this.items.pop());
      }
      count++;
    }

    while (tempStack.length > 0) {
      this.items.push(tempStack.pop());
    }
  }
  getValues() {
    return this.items.join(", ");
  }
  getMiddle() {
    const size = this.getSize();
    const middle = Math.floor(size / 2);
    console.log("middle =>", middle);
    return middle;
  }
  getSize() {
    return this.items.length;
  }
}

const st = new Stack();

console.log("Stack elements => ", st.getValues());

st.removeMiddle();

console.log("Stack after removing middle => ", st.getValues());
