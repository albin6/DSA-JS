function bubbleSorting(nums) {
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

const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(JSON.stringify(bubbleSorting(numbers)));
