class HashTable {
  constructor() {
    this.table = new Array(10);
    this.size = 0;
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.getSize();
  }
  set(key, value) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
    this.size++;
  }
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          return this.table[index][i];
        }
      }
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index].splice(i, 1);
          return;
        }
      }
    }
    return false;
  }
  getSize() {
    return this.table.length;
  }
  display() {
    this.table.forEach((item) => {
      const chainedItem = item.map(([key, value]) => `[${key}, ${value}]`);
      console.log(chainedItem);
    });
  }
}

const ht = new HashTable();

ht.set("name", "Albin");
ht.set("anme", "Albin");
ht.set("age", 21);

ht.display();
