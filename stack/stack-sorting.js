class Stack {
  constructor() {
    this.items = [34, 3, 31, 98, 92, 23];
  }
  // ------------------------------------------------------------------------------
  // recursive method
  // ------------------------------------------------------------------------------
  sortStack(stack) {
    if (stack.length > 0) {
      const temp = stack.pop();
      this.sortStack(stack);
      this.insertInSortedOrder(stack, temp);
    }
  }
  insertInSortedOrder(stack, elementToInsert) {
    if (stack.length == 0 || stack[stack.length - 1] < elementToInsert) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertInSortedOrder(stack, elementToInsert);
    stack.push(temp);
  }
  // ------------------------------------------------------------------------------
  // using a temporary stack for sorting
  // ------------------------------------------------------------------------------
  sortUsingTempStack() {
    const tempStack = [];
    while (this.items.length > 0) {
      const temp = this.items.pop();
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        this.items.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    return tempStack;
  }
}

const st = new Stack();

st.sortStack(st.items);
console.log("using recursion =>", st.items);

console.log("---------------------------------------------");

console.log("using temp stack =>", st.sortUsingTempStack());
