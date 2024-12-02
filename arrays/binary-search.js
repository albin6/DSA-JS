function binarySearch(arr, target) {
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

// const arr = [2, 3, 4, 5, 6, 7, 8];

// console.log(binarySearch(arr, 2)); // returns 0
// console.log(binarySearch(arr, 5)); // returns 3
// console.log(binarySearch(arr, 9)); // returns -1


// Find the first or last occurrence of a target element in a sorted array with duplicates.
function findTheLastOccurence(nums, target) {
  let left = 0
  let right = nums.length - 1
  let lastOccurence = -1 
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] == target) {
      lastOccurence = middle
      left = middle + 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    }
  }
  return lastOccurence
}

// const arr = [1, 2, 2, 2, 3, 3, 4]

// console.log(findTheLastOccurence(arr, 3))


// Find the index where the target should be inserted.
function searchInsert(arr, target) {
  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (arr[middle] == target) {
      return middle
    } else if(arr[middle] > target) {
      right = middle - 1
    } else if (arr[middle] < target) {
      left = middle + 1
    }
  }
  return left
}



console.log(searchInsert([1, 3, 5, 6], 2));