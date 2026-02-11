const numbers = [1, 2, 3, 4, 5, 6];

function rotateArray(nums, n) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  i = 0;
  j = n - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  i = n;
  j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}

rotateArray(numbers, 3);

console.log(numbers);
