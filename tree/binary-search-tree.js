class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = [];
  }
  addNode(value) {
    if (this.root) {
      this.root = new BSTNode(value);
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new BSTNode(value);
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new BSTNode(value);
          return;
        }
        current = current.right;
      }
    }
  }
  search(value, node = this.root) {
    if (!node || node.value == value) {
      return node;
    }
    return value < node.value
      ? this.search(value, node.left)
      : this.search(value, node.right);
  }
  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  inOrder(node = this.root) {
    if (node) {
      this.preOrder(node.left);
      console.log(node.value);
      this.preOrder(node.right);
    }
  }
  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}
