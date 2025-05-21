class Node {
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

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new Node(value);
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  findLargest(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }

  findSecondLargest(node = this.root) {
    if (!node || (!node.left && !node.right)) {
      throw new Error("atleast need two nodes");
    }

    let current = this.root;
    while (current) {
      if (current.right && !current.right.right && !current.right.left) {
        return current.value;
      }

      if (!current.right && current.left) {
        return this.findLargest(current.left);
      }

      current = current.right;
    }
  }

  heightOfTree(node = this.root) {
    if (!node) {
      return 0;
    }

    const left = this.heightOfTree(node.left);
    const right = this.heightOfTree(node.right);

    return Math.max(left, right) + 1;
  }

  isBalanced() {
    function getHeight(node) {
      if (!node) {
        return 0;
      }

      const left = getHeight(node.left);
      const right = getHeight(node.right);

      if (left == -1 || right == -1) {
        return -1;
      }

      if (Math.abs(left - right) > 1) {
        return -1;
      }

      return Math.max(left, right) + 1;
    }
    return getHeight(this.root) !== -1;
  }

  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) {
      return true;
    }

    if (node.value <= min || node.value >= max) {
      return false;
    }

    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const tree = new BSTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(60);
tree.insert(80);
tree.insert(75);
tree.insert(85);

console.dir(tree, { depth: null });

console.log("second largest is =>", tree.findSecondLargest());

console.log("height of tree is =>", tree.heightOfTree());

console.log("is balanced =>", tree.isBalanced());

console.log("is bst =>", tree.isBST());
