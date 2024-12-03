// Selection Sort: Simple but inefficient for large arrays.
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

// sorting in descending order using selection sort
function selectionSortDescending(nums) {
  for (let i = 0; i < nums.length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex != i) {
      [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSortDescending([64, 34, 25, 12, 22, 11, 90]));
