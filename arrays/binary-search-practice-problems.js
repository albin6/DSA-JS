// (1) - Find the index of a target value in a sorted array
function findindex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.ceil((start + end) / 2);

    if (arr[middle] == target) {
      return middle;
    } else if (target > arr[middle]) {
      start = middle + 1;
    } else if (target < arr[middle]) {
      end = middle - 1;
    }
  }
  return -1;
}

const nums = [1, 2, 3, 4, 5, 6, 7];

// console.log(findindex(nums, 6));

// (2) - check if subarrays have the same length
function subArraysHaveSameLength(arr) {
  let size = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length != size) {
      return false;
    }
  }
  return true;
}

const subarray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

console.log(subArraysHaveSameLength(subarray));
