function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(JSON.stringify(mergeSort(numbers)));
