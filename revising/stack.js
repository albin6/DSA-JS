// using array
class Stack {
  constructor() {
    this.items = [1, 2, 3, 4, 5];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length == 0;
  }
  reverseStack() {
    const tempStack = [];
    while (this.items.length > 0) {
      tempStack.push(this.items.pop());
    }
    this.items = tempStack;
  }
  reverseStackUsingRecursion(stack) {
    if (stack.length <= 1) {
      return stack;
    }
    const temp = stack.pop();
    this.reverseStackUsingRecursion(stack);
    this.insertInReverseOrder(stack, temp);
  }
  insertInReverseOrder(stack, elementToInsert) {
    if (stack.length == 0) {
      stack.push(elementToInsert);
      return;
    }
    const temp = stack.pop();
    this.insertInReverseOrder(stack, elementToInsert);
    stack.push(temp);
  }
  display() {
    if (this.isEmpty()) {
      return;
    }
    console.log(JSON.stringify(this.items));
  }
}

const st = new Stack();

// st.reverseStack();
st.reverseStackUsingRecursion(st.items);
st.display();

// using linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class StackUsingLinkedList {
  constructor() {
    this.head = null;
    this.top = null;
  }
  push(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.top = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.top = node;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    if (this.head == this.top) {
      const temp = this.head.data;
      this.head = null;
      return temp;
    }
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.top = previous;
    return current.data;
  }
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  reverseStack() {
    if (this.isEmpty()) {
      return;
    }
    let current = this.head;
    let previous = null;
    while (current) {
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    return previous;
  }
  sortStack(stack) {
    if (!stack || !stack.next) {
      return stack;
    }
    const middle = this.getMiddle(stack);
    const secondHalf = middle.next;
    middle.next = null;
    const left = this.sortStack(stack);
    const right = this.sortStack(secondHalf);
    return this.sort(left, right);
  }
  sort(left, right) {
    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }
    let result = null;
    if (left.data > right.data) {
      result = right;
      result.next = this.sort(left, right.next);
    } else {
      result = left;
      result.next = this.sort(left.next, right);
    }
    return result;
  }
  getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  isEmpty() {
    return !this.head;
  }
}

// const stll = new StackUsingLinkedList();

// stll.push(10);
// stll.push(20);
// stll.push(30);
// stll.push(40);
// // console.log("pop element =>", stll.pop());
// stll.display();
// console.log("------");

// stll.head = stll.reverseStack();

// stll.display();

// stll.head = stll.reverseStack(stll.head);
// console.log("------");

// stll.display();
