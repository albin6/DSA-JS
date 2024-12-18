class Heap {
  constructor(type = "min") {
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
    if ((this.type = "min")) {
      return this.heap[parent] > this.heap[child];
    } else {
      return this.heap[parent] < this.heap[child];
    }
  }
  insertNode(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.compare(parent, index)) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
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
    return root;
  }
  bubbleDown(index, size = this.heap.length) {
    while (this.leftChildIndex(index) < size) {
      let smallestOrLargest = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);

      if (right < size && this.compare(smallestOrLargest, right)) {
        smallestOrLargest = right;
      }

      if (this.compare(index, smallestOrLargest)) {
        [this.heap[index], this.heap[smallestOrLargest]] = [
          this.heap[smallestOrLargest],
          this.heap[index],
        ];
        index = smallestOrLargest;
      } else {
        break;
      }
    }
  }
  heapify(arr) {
    this.heap = arr;
    for (let i = this.parentIndex(this.heap.length - 1); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }
  update(index, value) {
    this.heap[index] = value;
    if (this.compare(this.parentIndex(index), index)) {
      this.bubbleUp(index);
    } else if (this.compare(index, this.leftChildIndex(index))) {
      this.bubbleDown(index);
    }
  }
}
