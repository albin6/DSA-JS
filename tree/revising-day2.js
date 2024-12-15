class BTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    if (!this.root) {
      this.root = new BTNode(value);
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (!current.left) {
        current.left = new BTNode(value);
        return;
      } else {
        queue.push(current.left);
      }
      if (!current.right) {
        current.right = new BTNode(value);
        return;
      } else {
        queue.push(current.right);
      }
    }
  }
  insertNodeRecursively(value, node = this.root) {
    if (!node) {
      return new BTNode(value);
    }
    if (!node.left) {
      node.left = this.insertNodeRecursively(value, node.left);
    } else if (!node.right) {
      node.right = this.insertNodeRecursively(value, node.right);
    } else {
      node.left = this.insertNodeRecursively(value, node.left);
    }
    return node;
  }
  insert(value) {
    this.root = this.insertNodeRecursively(value);
  }
  bfs() {
    const queue = [this.root];
    const result = [];
    while (queue.length) {
      let current = queue.shift();
      result.push(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    console.log(JSON.stringify(result));
  }
}

const bt = new BTree();

bt.insertNode(10);
bt.insertNode(20);
bt.insertNode(30);
bt.insertNode(40);
bt.insertNode(50);
bt.insertNode(60);
bt.insertNode(70);

// bt.bfs();

class BSTNode {
  constructor(data) {
    this.data = data;
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
      if (data < current.data) {
        if (!current.left) {
          current.left = new BSTNode(data);
          return;
        }
        current = current.left;
      }
      if (data > current.data) {
        if (!current.right) {
          current.right = new BSTNode(data);
          return;
        }
        current = current.right;
      }
    }
  }
  remove(value, node = this.root) {
    if (!node) {
      return node;
    }
    if (value < node.data) {
      node.left = this.remove(value, node.left);
    } else if (value > node.data) {
      node.right = this.remove(value, node.data);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      if (node.left && node.right) {
        let current = node.right;
        while (current.left) {
          current = current.left;
        }
        node.data = current.data;
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }
  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) {
      return true;
    }

    if (node.data <= min || node.data >= max) {
      return false;
    }

    return (
      this.isBST(node.left, min, node.data) &&
      this.isBST(node.right, node.data, max)
    );
  }
  isBalanced() {
    function getHeight(node) {
      if (!node) {
        return 0;
      }

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      if (leftHeight === -1 || rightHeight === -1) {
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

bst.insertNode(20);
bst.insertNode(10);
bst.insertNode(30);
// bst.insertNode(5);
// bst.insertNode(15);
// bst.insertNode(3);
// bst.insertNode(4);

// bst.remove(10);

console.log(bst.isBalanced());

// console.log(bst.isBST());

console.log(JSON.stringify(bst));
