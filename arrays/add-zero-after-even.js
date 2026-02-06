const numbers = [3, 8, 5, 2, 7, 4, 1, 6, 9];

function addZeroAfterEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0 && nums[i] % 2 == 0) {
      for (let j = nums.length; j > i + 1; j--) {
        nums[j] = nums[j - 1];
      }
      nums[i + 1] = 0;
    }
  }
}

addZeroAfterEven(numbers);

console.log(JSON.stringify(numbers));
