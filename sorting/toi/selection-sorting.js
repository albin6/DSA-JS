function selectionSorting(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }

  return nums;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

// console.log(JSON.stringify(numbers));
console.log(JSON.stringify(selectionSorting(numbers)));
