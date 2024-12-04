// Merge Sort: Efficient, stable sort with O(n log n)
function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, middle));
  const right = mergeSort(nums.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
