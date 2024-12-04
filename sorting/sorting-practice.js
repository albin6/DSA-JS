const nums = [3, 2, 1, 4, 2, 6];

function insertionSortAscending(nums) {
  for (var i = 1; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

// console.log('insertion sort ascending =>',insertionSortAscending(nums))

function bubbleSortingDescending(nums) {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

// console.log('bubble sort descending =>',bubbleSortingDescending(nums))

function mergeSortDescending(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = mergeSortDescending(nums.slice(0, middle));
  const right = mergeSortDescending(nums.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

// console.log('merge sort descending =>',mergeSortDescending(nums))

function bubbleSortAscending(nums) {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

// console.log('bubble sort ascending =>',bubbleSortAscending(nums))

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
  return nums;
}

// console.log('selection sort ascending =>', selectionSortAscending(nums))

function insertionSortDescending(nums) {
  for (var i = 0; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] < key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

// console.log('insertion sort descending =>', insertionSortDescending(nums))
