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
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.data);
    }
    return result;
  }
  inOrderTraversal(node = this.root, result) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      result.push(node.data);
      this.postOrderTraversal(node.right, result);
    }
    return result;
  }
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.data);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }
  levelOrderTraversal() {
    const result = [];
    const queue = [this.root];
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
    return result;
  }
  buildBST(nodes) {
    if (!nodes) {
      return nodes;
    }
    const mid = Math.floor(nodes.length / 2);
    const root = nodes[mid];
    root.left = this.buildBST(nodes.slice(0, mid));
    root.right = this.buildBST(nodes.slice(mid + 1));
    return root;
  }
  balanceBST() {
    const nodes = this.inOrderTraversal();
    return this.buildBST(nodes);
  }
  findLCA(root, node1, node2) {
    if (!root) {
      return null;
    }

    if (root.value == node1 || root.value == node2) {
      return root;
    }

    const left = this.findLCA(root.left, node1, node2);
    const right = this.findLCA(root, right, node1, node2);

    if (left !== null && right !== null) {
      return root;
    }

    return left !== null ? left : right;
  }
}

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
  insertNodeInBST(value) {
    if (!this.root) {
      this.root = new BSTNode(value);
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.data) {
        if (!current.left) {
          current.left = new BSTNode(value);
          return;
        }
        current = current.left;
      } else if (value > current.data) {
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
  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) {
        return true;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(value, node = this.root) {
    if (!node) {
      return null;
    }
    if (value < node.data) {
      node.left = this.remove(value, node.left);
    } else if (value > node.data) {
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
        while (current.left) {
          current = current.left;
        }
        node.data = current.data;
        node.right = this.remove(node.data, node.right);
      }
    }
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
  bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      result.push(current);
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

      if (leftHeight === -1 || rightHeight === -1) {
        return -1;
      }

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    }
    return getHeight(node) !== -1;
  }
  inOrderTraversalBST(root, nodes) {
    if (root) {
      this.inOrderTraversalBST(root.left, nodes);
      nodes.push(root.data);
      this.inOrderTraversalBST(root.right, nodes);
    }
    return nodes;
  }
  rebuildBalancedBST(nodes) {
    if (nodes.length === 0) {
      return nodes;
    }
    const mid = Math.floor(nodes.length / 2);
    const root = new BSTNode(nodes[mid]);
    root.left = this.rebuildBalancedBST(nodes.slice(0, mid));
    root.right = this.rebuildBalancedBST(nodes.slice(mid + 1));
    return root;
  }
  balancingBST() {
    const nodes = this.inOrderTraversalBST(this.root, []);
    return this.rebuildBalancedBST(nodes);
  }
  findLCAinBST(root, node1, node2) {
    if (!root) {
      return null;
    }

    if (node1 < root.value && node2 < root.value) {
      return this.findLCAinBST(root.left, node1, node2);
    }

    if (node2 > root.value && node2 > root.value) {
      return this.findLCAinBST(root.right, node1, node2);
    }

    return root;
  }
}
