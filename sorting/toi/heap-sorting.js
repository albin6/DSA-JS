function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let temp = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  if (leftChild < n && arr[temp] > arr[leftChild]) {
    temp = leftChild;
  }

  if (rightChild < n && arr[temp] > arr[rightChild]) {
    temp = rightChild;
  }

  if (temp != i) {
    [arr[temp], arr[i]] = [arr[i], arr[temp]];
    heapify(arr, i, temp);
  }
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(JSON.stringify(heapSort(numbers)));
