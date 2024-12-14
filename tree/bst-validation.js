class BSTNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  isBST(node, min = -Infinity, max = Infinity) {
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

// Example usage
const bst = new BSTree();
const root = new BSTNode(10);
root.left = new BSTNode(5);
root.right = new BSTNode(15);
root.left.left = new BSTNode(3);
root.left.right = new BSTNode(7);
root.right.right = new BSTNode(20);

console.log(bst.isBST(root)); // true

// Example of an invalid BST
const invalidRoot = new BSTNode(10);
invalidRoot.left = new BSTNode(5);
invalidRoot.right = new BSTNode(8); // Violates the BST property

console.log(bst.isBST(invalidRoot)); // false
