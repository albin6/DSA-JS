class HashTable {
  constructor() {
    this.table = new Array(13).fill(null).map(() => []);
  }

  hash(key) {
    let res;
    for (const char of key) {
      res += String(char).charCodeAt(0);
    }
    return res % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index]; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          return;
        }
      }
    } else {
      this.table[index].push([key, value]);
    }
  }
  has(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.table[index]; i++) {
      if (this.table[index][i][0] == key) {
        return true;
      }
    }
    return false;
  }
}
