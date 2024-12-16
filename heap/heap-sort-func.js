function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }

  console.log(JSON.stringify(arr));

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const leftChld = 2 * i + 1;
  const rightChild = 2 * i + 2;

  if (leftChld < n && arr[leftChld] > arr[largest]) {
    largest = leftChld;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, n, largest);
  }
}

let array = [3, 1, 4, 2, 5, 7, 8];
console.log("Unsorted Array:", JSON.stringify(array));

let sortedArray = heapSort(array);
console.log("Sorted Array:", JSON.stringify(sortedArray));
