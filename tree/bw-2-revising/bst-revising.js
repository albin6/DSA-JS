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
      } else {
        break;
      }
    }
  }

  removeNode(value) {
    this.root = this.remove(value);
  }

  remove(value, node = this.root) {
    if (!node) {
      return;
    }

    if (value < node.value) {
      node.left = this.remove(value, node.left);
    } else if (value > node.value) {
      node.right = this.remove(value, node.right);
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

      node.value = this.findMin(node.right);

      node.right = this.remove(node.value, node.right);
    }

    return node;
  }

  findMin(node) {
    let current = node;
    while (current) {
      current = current.left;
    }
    return current.value;
  }

  heightOfTree(node = this.root) {
    if (!node) {
      return 0;
    }

    let left = this.heightOfTree(node.left);
    let right = this.heightOfTree(node.right);

    return Math.max(left, right) + 1;
  }

  isBalanced(node = this.root) {
    if (!node) {
      return 0;
    }

    let left = this.heightOfTree(node.left);

    let right = this.heightOfTree(node.right);

    if (Math.abs(left - right) > 1) {
      return -1;
    }

    return Math.max(left, right) + 1;
  }
}

const tree = new BSTree();

tree.insert(10);
tree.insert(20);
tree.insert(2);
tree.insert(5);
tree.insert(50);

console.dir(tree, { depth: null });

console.log(tree.heightOfTree());

console.log(tree.isBalanced());
