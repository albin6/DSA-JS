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
  insert(value) {
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
  remove(value, node = this.root) {
    if (!node) {
      return node;
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
      if (node.left && node.right) {
        let current = node.right;
        while (node.left) {
          node = node.left;
        }
        node.value = current.value;
        node.right = this.remove(node.value, node.right);
      }
    }
    return node;
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
