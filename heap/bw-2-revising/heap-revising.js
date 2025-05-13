class Heap {
  constructor(type = "min") {
    this.heap = [];
    this.type = type;
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  compare(parent, child) {
    if ((this.type = "min")) {
      return this.heap[parent] > this.heap[child];
    } else {
      return this.heap[parent] < this.heap[child];
    }
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = this.parentIndex(index);
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
    let top = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
  }

  bubbleDown(index) {
    const size = this.heap.length;
    while (this.leftChildIndex(index) > size) {
      let smallest = index;
      let leftChild = this.leftChildIndex(index);
      let rightChild = this.rightChildIndex(index);

      if (leftChild < size && this.compare(smallest, leftChild)) {
        smallest = leftChild;
      }

      if (rightChild < size && this.compare(smallest, rightChild)) {
        smallest = rightChild;
      }

      if (smallest != index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }

  heapify(arr) {
    this.heap = arr;
    for (let i = this.parentIndex(this.heap.length - 1); i > 0; i--) {
      this.bubbleDown(i);
    }
  }
}
