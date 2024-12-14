class BTNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructora() {
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

  insertNodeRecursively(node, value) {
    if (!node) {
      return new BTNode(value);
    }
    if (!node.left) {
      node.left = this.insertNodeRecursively(node.left, value);
    } else if (!node.right) {
      node.right = this.insertNodeRecursively(node.right, value);
    } else {
      node.left = this.insertNodeRecursively(node.left, value);
    }
    return node;
  }

  insert(value) {
    this.root = this.insertNodeRecursively(this.root, value);
  }

  // bfs
  // in order (left -> root -> right)
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // postorder (left -> right -> root)
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // preorder (root -> left -> right)
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // bfs - level order traversal
  levelOrderTraversal() {
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
}

const bt = new BTree();

bt.insert(10);
bt.insert(20);
bt.insert(30);
bt.insert(40);

// console.log(JSON.stringify(bt));

// console.log("in order (BFS) =>", JSON.stringify(bt.inOrderTraversal()));
// console.log("post order (BFS) =>", JSON.stringify(bt.postOrderTraversal()));
// console.log("pre order (BFS) =>", JSON.stringify(bt.preOrderTraversal()));

// console.log("level order (BFS) =>", JSON.stringify(bt.levelOrderTraversal()));
