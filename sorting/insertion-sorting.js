// Insertion Sort: Good for small or partially sorted arrays. O(n^2)
// Time Complexity - O(n^2)
//  Space Complexity - O(1)
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
