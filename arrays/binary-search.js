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

const arr = [2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(arr, 2)); // returns 0
console.log(binarySearch(arr, 5)); // returns 3
console.log(binarySearch(arr, 9)); // returns -1
