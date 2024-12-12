class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(value) {
    this.root = new TreeNode(value);
  }
  addNode(parentValue, value) {
    const parent = this.search(parentValue, this.root);
    if (parent) {
      parent.children.push(new TreeNode(value));
    }
  }
  search(value, node = this.root) {
    if (node.value === value) {
      return node;
    }
    for (const child of node.children) {
      const result = this.search(value, child);
      if (result) {
        return child;
      }
    }
    return null;
  }
  dfs(node = this.root) {
    console.log(node.value);
    for (const child of node.children) {
      this.dfs(child);
    }
  }
}

const tree = new Tree(10);

tree.addNode(10, 5);
tree.addNode(10, 6);
tree.addNode(5, 20);
tree.addNode(5, 100);
tree.addNode(100, 55);
tree.addNode(6, 30);

tree.dfs();
