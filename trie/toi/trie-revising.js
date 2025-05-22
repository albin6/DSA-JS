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
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }

  remove(word, node = this.root, depth = 0) {
    if (!node) {
      return false;
    }

    if (depth == word.length) {
      if (!node.endOfWord) {
        return false;
      }

      node.endOfWord = false;

      return Object.keys(node.children).length == 0;
    }

    let char = word[depth];
    const shouldDelete = this.remove(word, node.children[char], depth + 1);

    if (shouldDelete) {
      delete node.children[char];
    }

    return Object.keys(node.children).length == 0 && !node.endOfWord;
  }

  autoComplete(prefix) {
    const result = [];

    function collectWords(prefix, node) {
      if (node.endOfWord) {
        result.push(prefix);
      }

      for (const char in node.children) {
        collectWords(prefix + char, node.children[char]);
      }
    }

    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }

    collectWords(prefix, current);
    return result;
  }
}

const trie = new Trie();

trie.insert("hey");
trie.insert("heyy");
trie.insert("heylo");
trie.insert("heylloo");

console.dir(trie, { depth: null });

console.log(trie.autoComplete("heyl"));
