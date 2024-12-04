// Quick Sort: Fast in practice, O(nlogn) on average but can degrade to O(n^2) if poorly implemented.
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const left = [];
  const right = [];
  const p = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > p) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }
  return [...quickSort(left), p, ...quickSort(right)];
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
