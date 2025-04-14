class HashTable {
  constructor(size = 53) {
    this.table = new Array(10).fill(null);
  }

  hash(key) {
    const hashValue = String(key).charCodeAt(0);
    return hashValue % this.table.length;
  }

  has(value) {
    const index = this.hash(value);
    if (this.table[index]) {
      return true;
    } else {
      return false;
    }
  }

  set(value) {
    const index = this.hash(value);

    this.table[index] = true;
  }
}

function findDuplicates(nums) {
  const seen = new HashTable();
  const duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      if (!duplicates.includes(nums[i])) {
        duplicates.push(nums[i]);
      }
    } else {
      seen.set(nums[i]);
    }
  }
  return duplicates;
}

const array = [1, 3, 4, 2, 1, 3, 6, 7, 4];

console.log(findDuplicates(array));
