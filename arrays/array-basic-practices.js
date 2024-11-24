// second largest
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

// Time Complexity - O(n)
// Space Complexity - O(1)

// --------------------------------------------------------------------------------
// rotate array to the right k - steps
function rotateArray(nums, k) {
  // nums = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
  const size = nums.length;

  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // [8, 7, 6, 5, 4, 3, 2, 1]
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

const rotatedArray = rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // [6, 7, 8, 1, 2, 3, 4, 5]

// console.log(rotatedArray);

// Time Complexity - O(n)
// Space Complexity - O(1)

// --------------------------------------------------------------------------------
// remove duplicates from sorted array (in non-descending order)
// *remove duplicates in space
// *the relative order of elements should be kept
// *return the number of elements
// input => [1, 1, 2] output => 2 [1, 2, _]
// input => [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4] output => 5 [0, 1, 2, 3, 4, 5, _, _, _, _, _, _, _]

function removeDuplicatesUsingBuiltinMethod(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

function removeDuplicates(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i;
}

// Time Complexity - O(n)
// Space COmplexity - O(1)

const arr = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4];
const numberOfUniqueElements = removeDuplicates(arr);

console.log(numberOfUniqueElements);
