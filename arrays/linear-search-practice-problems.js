const arr = [8, 2, 1, 0, 5, 2, 9, 7];

// (1) - Find an Element in an Array
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

// console.log(findElement(arr, 1));

// (2) - Find the Maximum and Minimum Elements
function findMaxAndMin(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max];
}

// console.log(findMaxAndMin(arr));

// (3) - Search for the First and Last Occurrence
function findFirstAndLastOccurence(arr, target) {
  let occurence = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      occurence.push(i);
    }
  }

  return [occurence[0], occurence[occurence.length - 1]];
}

// console.log(findFirstAndLastOccurence(arr, 2)); // [ 1, 5 ]

// (4) - Count the Occurrences of an Element
function occurenceOfAnElement(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
    }
  }
  return count;
}

// console.log(occurenceOfAnElement(arr, 2));

// (5) - Find the Missing Number
function findMissingNumber() {}

// (6) - Find Duplicates in an Array
function findDuplicates(arr) {
  const occurence = {};
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (occurence[arr[i]]) {
      occurence[arr[i]]++;
    } else {
      occurence[arr[i]] = 1;
    }
  }

  for (const key in occurence) {
    if (occurence[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// console.log(findDuplicates(arr));

// (7) - Search in a Matrix
function searchMatrix(mat, target) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] == target) {
        return true;
      }
    }
  }
  return false;
}

const matrix = [
  [3, 5, 1],
  [8, 2, 7],
  [6, 4, 9],
];
const target = 7;

console.log(searchMatrix(matrix, target));
