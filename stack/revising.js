class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.. Nothing to delete");
    }
    this.items.pop();
  }
  seek() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
  display() {
    console.log(JSON.stringify(this.items));
  }
  // reverse stack using recursion
  reverseStack(stack) {
    if (stack.length <= 1) {
      return stack;
    }
    const temp = stack.pop();
    this.reverseStack(stack);
    this.insertInOrder(stack, temp);
  }
  // helper function
  insertInOrder(stack, elementToInsert) {
    if (stack.length == 0) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertInOrder(stack, elementToInsert);
    stack.push(temp);
  }

  // sort stack using tempstack
  sortStackUsingTempStack() {
    const tempStack = [];
    while (this.items.length > 0) {
      const temp = this.items.pop();
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        this.items.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    console.log(JSON.stringify(tempStack));
  }

  // reversing a stack using temp stack
  reverseStackUsingTempStack() {
    const tempStack = [];
    while (this.items.length > 0) {
      tempStack.push(this.items.pop());
    }
    this.items = tempStack;
  }

  // sorting stack using recursion
  sortStackUsingRecursion(stack) {
    if (stack.length <= 1) {
      return stack;
    }
    const temp = stack.pop();
    this.sortStackUsingRecursion(stack);
    this.sort(stack, temp);
  }
  sort(stack, elementToInsert) {
    if (stack.length == 0 || stack[stack.length - 1] < elementToInsert) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.sort(stack, elementToInsert);
    stack.push(temp);
  }

  // remove middle element and element at a specific position in the stack
  removeMiddle(index) {
    // const middle = this.getMiddle();
    const middle = index;
    let i = 0;
    const tempStack = [];
    while (i <= middle) {
      if (i == middle) {
        this.items.pop();
      } else {
        tempStack.push(this.items.pop());
      }
      i++;
    }

    while (tempStack.length > 0) {
      this.items.push(tempStack.pop());
    }
  }
  getMiddle() {
    const size = this.size();
    return Math.floor(size / 2);
  }
}

const st = new Stack();

st.push(30);
st.push(20);
st.push(40);
st.push(10);
st.push(60);

st.display();

// st.reverseStack(st.items);
// st.sortStackUsingTempStack();
// st.reverseStackUsingTempStack();
// st.sortStackUsingRecursion(st.items);
st.removeMiddle(3);

st.display();
