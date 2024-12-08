// check whether the string given is a palindrome if it is return true
// else sort the String using merge sort
// find the most repeating letter
// find letter exists in the array using binary search if it exists return true else false

const arr = [2, "a", "f", 4, "c", "b", 3];

const str = "racecac";

function isPalindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindromeRecursive(str.slice(1, str.length - 1));
}

function sortStrMergeSort(str) {
  if (str.length <= 1) {
    return str;
  }
  const mid = Math.floor(str.length / 2);
  const left = sortStrMergeSort(str.slice(0, mid));
  const right = sortStrMergeSort(str.slice(mid));

  return sort(left, right);
}

function sort(left, right) {
  let sort = "";
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sort += left[0];
      left = left.slice(1);
    } else {
      sort += right[0];
      right = right.slice(1);
    }
  }
  return sort + left + right;
}

class HashTable {
  constructor() {
    this.table = new Array(100000).fill(null).map(() => []);
    this.repeatingCount = 0;
    this.mostRepeatingChar = null;
  }
  hash(key) {
    return key.charCodeAt(0) % this.table.length;
  }
  set(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] == key) {
        this.table[index][i][1]++;
        if (this.table[index][i][1] > this.repeatingCount) {
          this.mostRepeatingChar = key;
          this.repeatingCount = this.table[index][i][1];
        }
        return;
      }
    }
    this.table[index].push([key, 1]);
    if (this.table[index][0][1] > this.repeatingCount) {
      this.repeatingCount = 1;
      this.mostRepeatingChar = key;
    }
  }
  getMostRepeatingChar() {
    return this.mostRepeatingChar;
  }
}

function mixedProblem(str) {
  const isPalindrome = isPalindromeRecursive(str);

  if (isPalindrome) {
    return true;
  } else {
    const sortedStr = sortStrMergeSort(str);
    console.log(sortedStr);
    const ht = new HashTable();
    for (let i = 0; i < sortedStr.length; i++) {
      ht.set(sortedStr[i]);
    }
    const mostRepeatingChar = ht.getMostRepeatingChar();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == mostRepeatingChar) {
        console.log(
          `The most repeating charater is ${mostRepeatingChar} and is found at position ${
            i + 1
          }`
        );
        return;
      }
    }
    console.log(
      `The most repeated character ${mostRepeatingChar} is not found in the array`
    );
  }
}

console.log(mixedProblem(str));
