class Heap {
  constructor() {
    this.heap = [];
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }
  compare(parent, child) {
    return this.heap[parent] > this.heap[child];
  }
  heapify(arr) {
    this.heap = arr;
    for (let i = this.parentIndex(this.heap.length - 1); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }
  bubbleDown(index, size = this.heap.length) {
    while (this.leftChildIndex(index) < size) {
      let smallestOrLargestIndex = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      if (right < size && this.compare(smallestOrLargestIndex, right)) {
        smallestOrLargestIndex = right;
      }
      if (this.compare(index, smallestOrLargestIndex)) {
        [this.heap[index], this.heap[smallestOrLargestIndex]] = [
          this.heap[smallestOrLargestIndex],
          this.heap[index],
        ];
        index = smallestOrLargestIndex;
      } else {
        break;
      }
    }
  }
  heapSort(arr) {
    this.heapify(arr);

    for (let i = arr.length - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];

      this.bubbleDown(0, i);
    }

    return arr;
  }
}

const hp = new Heap();

console.log(hp.heapSort([12, 11, 13, 5, 6, 7]));
