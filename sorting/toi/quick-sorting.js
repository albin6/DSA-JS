function quickSort(nums) {
  if (!nums.length) {
    return nums;
  }

  let pivot = nums[nums.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(JSON.stringify(quickSort(numbers)));
