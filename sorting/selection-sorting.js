// Selection Sort: Simple but inefficient for large arrays. O(n^2)
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
  }
  return arr;
}
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
