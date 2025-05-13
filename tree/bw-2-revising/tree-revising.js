class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }

    let current = this.root;
    while (current) {
      if (!current.left) {
        current.left = new TreeNode(value);
        return;
      } else if (!current.right) {
        current.right = new TreeNode(value);
        return;
      } else {
        current = current.left;
      }
    }
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(30);

console.dir(binaryTree, { depth: null });

console.log(binaryTree.inOrder());
