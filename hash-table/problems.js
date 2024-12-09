// check for duplicates
class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null).map(() => []);
  }
  hash(key) {
    const asciiCode = String(key).charCodeAt(0);
    return asciiCode % this.table.length;
  }
  set(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    return bucket.includes(key);
  }
}

function checkForDuplicates(nums) {
  const ht = new HashTable(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (ht.has(nums[i])) {
      return true;
    } else {
      ht.set(nums[i]);
    }
  }
  return false;
}

// console.log(checkForDuplicates([2, 3, 1, 8, 4, 1, 5]));
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

class StudentHashTable {
  constructor() {
    this.table = new Array(10).fill(null).map(() => []);
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(name, grade) {
    const index = this.hash(name);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == name) {
        bucket[i][1] = grade;
        return;
      }
    }
    bucket.push([name, grade]);
  }
  get(name) {
    const index = this.hash(name);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == name) {
        return bucket[i];
      }
    }
    return false;
  }
  remove(name) {
    const index = this.hash(name);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == name) {
        bucket.splice(i, 1);
        return;
      }
    }
    return false;
  }
  has(name) {
    const index = this.hash(name);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == name) {
        return true;
      }
    }
    return false;
  }
}

function studentGrade() {
  const sHT = new StudentHashTable();
  sHT.set("tintu", "C");
  sHT.set("tony", "B");
  sHT.set("yont", "A");
  hasStudent(sHT, "abin");
  hasStudent(sHT, "tony");
  hasStudent(sHT, "yont");
  sHT.remove("yont");
  hasStudent(sHT, "yont");
  console.log(JSON.stringify(sHT));
}

function hasStudent(sHT, name) {
  sHT.has(name)
    ? console.log(name + " Found")
    : console.log(name + " Not Found");
}

studentGrade();

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
