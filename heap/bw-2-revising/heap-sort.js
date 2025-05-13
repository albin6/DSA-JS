function heapSort(arr) {
  let size = arr.length;

  for (let i = Math.floor((size - 1) / 2); i >= 0; i--) {
    heapify(arr, size, i);
  }

  for (let i = size - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[smallest] > arr[left]) {
    smallest = left;
  }

  if (right < n && arr[smallest] > arr[right]) {
    smallest = right;
  }

  if (smallest != i) {
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]];

    heapify(arr, n, smallest);
  }
}

let array = [3, 1, 4, 2, 5, 7, 8];
console.log("Unsorted Array:", JSON.stringify(array));

let sortedArray = heapSort(array);
console.log("Sorted Array:", JSON.stringify(sortedArray));
