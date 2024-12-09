// Create a stack class with basic operations.
class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());

// Check if a string of parentheses is balanced.
function isBalancedParanthesis(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// console.log(isBalancedParanthesis("(())"));
// console.log(isBalancedParanthesis("(()"));

// Use a stack to reverse a string.
function reverseStringUsingStack(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedString = "";
  const size = stack.size();
  for (let i = 0; i < size; i++) {
    reversedString += stack.pop();
  }
  return reversedString;
}

console.log(reverseStringUsingStack("hello"));
