class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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

  remove(value, node = this.root) {
    if (!node) return;

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
        node.value = this.findLargest(node.left);

        node.left = this.remove(node.value, node.left);
      }
    }
  }

  secondLargest(node = this.root) {
    if (!node || (!node.right && !node.left)) {
      throw new Error("khsig");
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
}

const tree = new Tree();

[10, 5, 15, 3, 7, 12, 17, 1, 4, 6, 8].forEach((value) => tree.insert(value));

console.dir(tree, { depth: null });
