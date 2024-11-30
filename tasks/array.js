// (1) remove duplicates from sorted array
function removeDulplicates(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[count] != arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }
}

const nums = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4];

removeDulplicates(nums);

// console.log(nums);

// (2) - second largest
function findSecondLargest(arr) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const secondLargest = findSecondLargest([3, 4, 9, 1, 2, 4, 9, 6]);

// console.log(secondLargest);

// (3) - rotate array to the right k - steps
function rotateArray(nums, k) {
  const size = nums.length;

  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

const rotatedArray = rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(rotatedArray);
