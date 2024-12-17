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
  insertWord(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }
  searchWord(word) {
    let current = this.root;
    for (const char of word) {
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

      node.endOfWord = false;

      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    const shouldRemoveChild = this.remove(node.children[char], word, depth + 1);

    if (shouldRemoveChild) {
      delete node.children[char];
    }

    return Object.keys(node.children).length === 0 && !node.endOfWord;
  }
  autoComplete(prefix) {
    const results = [];

    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }

    function dfs(node, prefix) {
      if (node.endOfWord) {
        results.push(prefix);
      }
      for (const char in node.children) {
        dfs(node.children[char], prefix + char);
      }
    }

    dfs(current, prefix);
    return results;
  }
}

const trie = new Trie();

trie.insertWord("hey");
trie.insertWord("heyyyy");
trie.insertWord("hellooooo");

console.log(trie.searchWord("hey"));
console.log(trie.searchWord("he"));

console.log(trie.autoComplete("hey"));
