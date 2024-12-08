// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// --------------------------------------------------------------------

class HashTable {
  constructor() {
    this.table = new Array(10).fill(null).map(() => []);
  }
  hash(key) {
    return key % this.table.length;
  }
  set(key, value) {
    const index = this.hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] == key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }
  has(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] == key) {
        return true;
      }
    }
    return false;
  }
  get(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] == key) {
        return this.table[index][i][1];
      }
    }
  }
}

function twoSum(nums, target) {
  const ht = new HashTable();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (ht.has(diff)) {
      return [i, ht.get(diff)];
    } else {
      ht.set(nums[i], i);
    }
  }
}

const arr1 = [2, 7, 11, 15];
const target1 = 9;

console.log(twoSum(arr1, target1));

const arr2 = [3, 2, 4];
const target2 = 6;

console.log(twoSum(arr2, target2));

const arr3 = [3, 3];
const target3 = 6;

console.log(twoSum(arr3, target3));
