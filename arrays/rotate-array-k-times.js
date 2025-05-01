function rotateArray(k, nums) {
  const size = nums.length;
  if (k > size) {
    k = k % size;
  }

  reverse(0, nums.length - 1, nums);
  console.log("after first =>", JSON.stringify(nums));
  reverse(0, k - 1, nums);
  console.log("after second =>", JSON.stringify(nums));
  reverse(k, nums.length - 1, nums);
}

function reverse(left, right, arr) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("start =>", JSON.stringify(numbs));

rotateArray(2, numbs);

console.log("final =>", JSON.stringify(numbs));
