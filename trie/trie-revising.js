class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.endOfWord;
  }

  remove(node = this.root, word, depth = 0) {
    if (!node) {
      return false;
    }

    if (depth == word.length) {
      if (!node.endOfWord) {
        return false;
      }

      node.endOfWord = true;
      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    const shouldRemoveChild = this.remove(node.children[char], word, depth + 1);

    if (shouldRemoveChild) {
      delete node.children[char];
    }

    return Object.keys(node.children).length === 0 && !node.endOfWord;
  }
}
