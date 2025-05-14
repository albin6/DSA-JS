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

  remove(word, node = this.root, depth = 0) {
    if (word.length == depth) {
      if (!node.endOfWord) {
        return false;
      }

      node.endOfWord = true;

      return Object.keys(node.children).length == 0;
    }

    let char = word[depth];

    let shouldDelete = this.remove(word, node.children[char], depth + 1);

    if (shouldDelete) {
      delete node.children[char];
    }

    return Object.keys(node.children).length == 0 && !node.endOfWord;
  }

  autoComplete(prefix) {
    const result = [];

    function collectWords() {
      if (condition) {
      }
    }

    let current = this.root;
    for (let char of prefix) {
      current = current.children[char];
    }

    collectWords();
    return result;
  }
}
