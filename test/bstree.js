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

  findSecondLargest(node = this.root) {
    if (!node) {
      return;
    }

    while (node) {
      if (node.right && !node.right.left && !node.right.right) {
        return node.value;
      }

      if (!node.left && node.right) {
        return this.findLargest(node.right);
      }

      return node.value;
    }
  }

  findLargest(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}

const bst = new BSTree();

bst.insert(15);
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(25);

console.dir(bst, { depth: null });

console.log(bst.findSecondLargest());
