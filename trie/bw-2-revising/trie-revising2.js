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
    if (!node) {
      return;
    }

    if (word.length == depth) {
      if (!node.endOfWord) {
        return false;
      }

      node.endOfWord = true;

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
    let result = [];

    function collectWords(prefix, current) {
      if (current.endOfWord) {
        result.push(prefix);
      }

      for (let char in current.children) {
        collectWords(prefix + char, current.children[char]);
      }
    }

    let current = this.root;
    for (let char of prefix) {
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

trie.insert("he");
trie.insert("hee");
trie.insert("her");
trie.insert("heg");
trie.insert("heyyy");

// trie.remove("hee");
// trie.remove("heyyy");

console.log(trie.autoComplete("he"));

console.dir(trie, { depth: null });
