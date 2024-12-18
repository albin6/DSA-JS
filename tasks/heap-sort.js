function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  if (leftChild < n && arr[leftChild] < arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] < arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// Edge cases
console.log(heapSort([])); // []
console.log(heapSort([1])); // [1]
console.log(heapSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(heapSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
