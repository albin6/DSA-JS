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
    if (node.value == value) {
      return node;
    }
    for (const child of node.children) {
      return this.search(value, child);
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

const gtree = new Tree(20);

gtree.addNode(20, 12);
gtree.addNode(20, 50);

gtree.dfs(gtree.root);
