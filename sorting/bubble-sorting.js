// Bubble Sort: Easy to implement but not efficient.
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function bubbleSort(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// sorting array in descending order using bubble sort
function bubbleSortDescending(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

console.log(bubbleSortDescending([64, 34, 25, 12, 22, 11, 90]));
