function insertionSorting(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log(insertionSorting(numbers));
