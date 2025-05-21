function bubbleSorting(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

bubbleSorting(numbers);

console.log(JSON.stringify(numbers));
