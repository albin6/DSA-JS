class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  addNode(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (current.data == data) {
        return;
      }
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }
  contains(data) {
    if (!this.root) {
      return false;
    }
    if (this.root.data == data) {
      return true;
    }
    let current = this.root;
    while (current) {
      if (current.data == data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  deleteNode(data) {
    if (!this.root) {
      return;
    }
    if (this.root.data == data) {
      this.root = null;
      return;
    }
    let current = this.root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        console.log("in else", current);
        current = null;
        return;
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.addNode(20);
bst.addNode(10);
bst.addNode(25);
bst.addNode(15);

console.log(JSON.stringify(bst));

// console.log(bst.contains(10));
bst.deleteNode(10);

console.log(JSON.stringify(bst));
