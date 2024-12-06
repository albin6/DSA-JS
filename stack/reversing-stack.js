class Stack {
  constructor() {
    this.items = [1, 2, 3, 4, 5];
  }
  // using recursion
  reverseStack(stack) {
    if (stack.length > 0) {
      const temp = stack.pop();
      this.reverseStack(stack);
      this.insertFromBottom(stack, temp);
    }
  }
  insertFromBottom(stack, elementToInsert) {
    if (stack.length === 0) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertFromBottom(stack, elementToInsert);
    stack.push(temp);
  }

  // using an auxiliary stack
  reverseStackUsingAuxiliaryStack() {
    const tempStack = [];
    while (this.items.length > 0) {
      tempStack.push(this.items.pop());
    }
    return tempStack;
  }
}

const st = new Stack();

st.reverseStack(st.items);
console.log("reversing using recursion =>", st.items); // [ 5, 4, 3, 2, 1 ]

console.log("-------------------------------------------------");

console.log(
  "reversing using auxiliary stack",
  st.reverseStackUsingAuxiliaryStack()
);
// [ 1, 2, 3, 4, 5 ] result this were the order is same as that in the original stack it is because it is already once reversed
// by the above method
