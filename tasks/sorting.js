const arr = [64, 25, 12, 22, 11];

// Sort an array of integers using the selection sort algorithm.
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
}

// selectionSort(arr);

// console.log(arr);

//  Implement bubble sort to sort an array and count the number of swaps made.
function bubbleSort(nums) {
  let swapped;
  let swappedCount = 0;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
        swappedCount++;
      }
    }
  } while (swapped);
  console.log("Number of swap made => ", swappedCount);
}

// bubbleSort(arr);
// console.log(arr);

// Sort an array using insertion sort.
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] < key) {
      nums[j] = nums[j + 1];
      j--;
    }
    nums[j + 1] = key;
  }
}

// insertionSort(arr);
// console.log(arr);

// Object Sorting using insertion sorting
function insertionSortObjects(data, key) {
  for (let i = 1; i < data.length; i++) {
    const obj = data[i];
    let j = i - 1;
    while (j >= 0 && data[j][key] < obj[key]) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = obj;
  }
}

const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
// insertionSortObjects(data, "age");

// console.log(data);

// Sort an array using quick sort.
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort(arr));

// Sort an array using merge sort.
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
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

console.log(mergeSort(arr));
