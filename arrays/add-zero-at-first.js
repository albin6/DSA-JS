const numbers = [1, 2, 3, 4, 5];

function addZeroAtFirst(nums) {
  for (let i = nums.length; i > 0; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = 0;
}

addZeroAtFirst(numbers);
console.log(numbers);
