class Heap {
  constructor(type = "max") {
    this.heap = [];
    this.type = type;
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
    if (this.type === "max") {
      return this.heap[parent] < this.heap[child];
    } else {
      return this.heap[parent] > this.heap[child];
    }
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.compare(parent, index)) {
        [this.heap[index], this.heap[parent]] = [
          this.heap[parent],
          this.heap[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }
  remove() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const root = this.heap[0];
    const last = this.heap[this.heap.length - 1];
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heap.pop();
      this.bubbleDown(0);
    }
  }
  bubbleDown(index) {
    const size = this.heap.length;
    while (this.leftChildIndex(index) < size) {
      let smallestOrLargestIndex = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);
      if (right < size && this.compare(smallestOrLargestIndex, right)) {
        smallestOrLargestIndex = right;
      }
      if (this.compare(index, smallestOrLargestIndex)) {
        [this.heap[smallestOrLargestIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[smallestOrLargestIndex],
        ];
        index = smallestOrLargestIndex;
      } else {
        break;
      }
    }
  }
  heapifyAnArray(arr) {
    this.heap = arr;
    for (let i = this.parentIndex(this.heap.length - 1); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }
  heapSort(arr) {
    this.heapifyAnArray(arr);

    const sortedArray = [];
    while (this.heap.length > 0) {
      sortedArray.unshift(this.remove());
    }

    return sortedArray;
  }
}

const hp = new Heap();

console.log(hp.heapSort());
