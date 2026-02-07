const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1];
const target = 2;

function findSecondOccurence(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      count++;
    }
    if (count == 2) {
      return i;
    }
  }
  return -1;
}

console.log(findSecondOccurence(numbers, target));
