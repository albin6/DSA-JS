class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  addToStack(data) {
    this.top = new Node(data, this.top);
    this.size++;
  }

  printStackElements() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      let current = this.top;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  isEmpty() {
    return this.size == 0;
  }
}

const sll = new Stack();

sll.addToStack(10);
sll.addToStack(20);
sll.addToStack(30);

sll.printStackElements();
