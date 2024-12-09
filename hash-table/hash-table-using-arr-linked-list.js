class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = this.next;
  }
}

class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
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
    const node = new Node(key, value);

    if (!this.table[index]) {
      this.table[index] = node;
    } else {
      let current = this.table[index];
      while (current.next) {
        if (current.key == key) {
          current.value = value;
          return;
        }
        current = current.next;
      }
      if (current.key == key) {
        current.value = value;
      } else {
        current.next = node;
      }
    }
  }
  get(key) {
    const index = this.hash(key);

    let current = this.table[index];
    while (current) {
      if (current.key == key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }
  has(key) {
    const index = this.hash(key);

    let current = this.table[index];
    while (current) {
      if (current.key == key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);

    let current = this.table[index];
    let prev = current;
    while (current) {
      if (current.key == key) {
        prev.next = current.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const ht = new HashTable();
ht.set("name", "Albin");
ht.set("mane", "Ajith");

console.log(ht.get("mane"));
console.log(ht.get("name"));

ht.remove("mane");

console.log(ht.get("mane"));
console.log(ht.has("mane"));

console.log(JSON.stringify(ht));
