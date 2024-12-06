const arr = [34, 3, 31, 98, 92, 23];

// (1) => Selection sort ascending
function selectionSortAscending(nums) {
  for (var i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  console.log(nums);
}

// selectionSortAscending(arr)

// (2) => Selection sort descending
function selectionSortDescending(nums) {
  for (var i = 0; i < nums.length; i++) {
    let maxIndex = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex != i) {
      [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
    }
  }
  console.log(nums);
}

// selectionSortDescending(arr)

// (3) => Insertion sort ascending
function insertionSortAscending(nums) {
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  console.log(nums);
}

// insertionSortAscending(arr);

// (4) => Insertion sort descending
function insertionSortDescending(nums) {
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] < key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  console.log(nums);
}

// insertionSortDescending(arr);

// (5) => Merge sort ascending
function mergeSortAscending(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const left = mergeSortAscending(nums.slice(0, middle));
  const right = mergeSortAscending(nums.slice(middle));

  return mergeAscending(left, right);
}

function mergeAscending(left, right) {
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

// console.log(mergeSortAscending(arr));

// (6) => Merge sort descending
function mergeSortDescending(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = mergeSortDescending(nums.slice(0, middle));
  const right = mergeSortDescending(nums.slice(middle));

  return mergeDescending(left, right);
}

function mergeDescending(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

// console.log(mergeSortDescending(arr));

// (7) => Bubble sort ascending
function bubbleSortAscending(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  } while (swapped);
  console.log(nums);
}

// bubbleSortAscending(arr);

// (8) => Bubble sort descending
function bubbleSortDescending(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  } while (swapped);
  console.log(nums);
}

// bubbleSortDescending(arr);

// (9) => Quick sort descending
function quickSortDescending(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSortDescending(right), pivot, ...quickSortDescending(left)];
}

// console.log(quickSortDescending(arr));

// (10) => Quick sort ascending
function quickSortAscending(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSortAscending(left), pivot, ...quickSortDescending(right)];
}

// console.log(quickSortAscending(arr));
