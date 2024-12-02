// Quick Sort: Fast in practice, O(nlogn) on average but can degrade to O(n^2) if poorly implemented.
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
