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
  insertNode(data) {
    if (!this.root) {
      this.root = new BSTNode(data);
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.value) {
        if (!current.left) {
          current.left = new BSTNode(data);
          return;
        }
        current = current.left;
      } else if (data > current.value) {
        if (!current.right) {
          current.right = new BSTNode(data);
          return;
        }
        current = current.right;
      }
    }
  }
}

const bst = new BSTree();

bst.insertNode(30);
bst.insertNode(20);
bst.insertNode(10);
bst.insertNode(35);
bst.insertNode(15);
bst.insertNode(5);
