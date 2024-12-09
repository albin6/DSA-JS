// Create a hashtable class with basic operations.
class HashTable1 {
  constructor(size = 53) {
    this.table = new Array(size).fill(null).map(() => []);
    this.size = size;
  }
  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash = (hash + char.charCodeAt(0) * 31) % this.size;
    }
    return hash;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
  hasKey(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        return true;
      }
    }
    return false;
  }
}

// const ht = new HashTable1();

// ht.set("name", "Albin");
// console.log(ht.get("age"));
// ht.set("naem", "Ajith");
// console.log(ht.get("naem"));
// ht.remove("naem");
// console.log(ht.hasKey("hi"));
// console.log(ht.hasKey("name"));

// console.log(JSON.stringify(ht.table));

function countCharacterFrequencies(str) {
  const frequencies = {};
  for (let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  return frequencies;
}

// console.log(countCharacterFrequencies("hello"));

function firstNonRepeatingCharacter(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatingCharacter("swiss"));
