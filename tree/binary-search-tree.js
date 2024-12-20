class BSTNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    if (!this.root) {
      this.root = new BSTNode(value);
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new BSTNode(value);
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new BSTNode(value);
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }
}
