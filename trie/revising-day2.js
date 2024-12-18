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
  search(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.endOfWord;
  }
  remove(word) {
    function removeWordHelper(node, word, depth) {
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
      const shouldDeleteChild = removeWordHelper(
        node.children[char],
        word,
        depth + 1
      );

      if (shouldDeleteChild) {
        delete node.children[char];
      }

      return Object.keys(node.children).length === 0 && !node.endOfWord;
    }
    removeWordHelper(this.root, word, 0);
  }
  autoComplete(prefix) {
    const results = [];

    function dfs(node, path) {
      if (node.endOfWord) {
        results.push(path);
      }

      for (const char in node.children) {
        dfs(node.children[char], path + char);
      }
    }

    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }

    dfs(current, prefix);

    return results;
  }
}

const trie = new Trie();

trie.insertWord("hey");
trie.insertWord("heyy");
trie.insertWord("hello");

console.log(trie.search("hey"));
trie.remove("hey");
console.log(trie.search("hey"));

console.log(trie.search("hello"));

console.log(trie.autoComplete("he"));
