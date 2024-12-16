class BSTNode {
  constructor(value) {
    this.value = value;
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
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new BSTNode(value);
          return;
        } else {
          current = current.right;
        }
      } else {
        return;
      }
    }
  }
  secondLargest(node = this.root) {
    if (!node || (!node.left && !node.right)) {
      throw new Error("Tree should contain atleast two elements");
    }

    let current = this.root;

    while (current) {
      if (current.right && !current.right.left && !current.right.right) {
        return current.value;
      }

      if (!current.right && current.left) {
        return this.findLargest(current.left);
      }

      current = current.right;
    }
  }
  findLargest(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }
  bfs() {
    if (!this.root) {
      return;
    }
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }
  isBalanced() {
    function getHeight(node) {
      if (!node) {
        return 0;
      }

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      if (leftHeight === -1 || rightHeight == -1) {
        return -1;
      }

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    }
    return getHeight(this.root) !== -1;
  }
}

const bst = new BSTree();
bst.insertNode(35);
bst.insertNode(20);
bst.insertNode(30);
bst.insertNode(40);

console.log(bst);

console.log("second largest =>", bst.secondLargest());

console.log("bfs =>", bst.bfs());

console.log(bst.isBalanced());
