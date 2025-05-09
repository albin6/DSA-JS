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
    if (this.type == "min") {
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
      let parentindex = this.parentIndex(index);

      if (this.compare(parentindex, index)) {
        [this.heap[index], this.heap[parentindex]] = [this.heap[parentindex]];
        index = parentindex;
      } else {
        break;
      }
    }
  }

  remove() {
    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  bubbleDown(index) {
    const size = this.heap.length;

    while (this.leftChildIndex(index) < size) {
      let smallest = index;
      let leftChildIndex = this.leftChildIndex(index);
      let rightChildIndex = this.rightChildIndex(index);

      if (leftChildIndex < size && this.compare(smallest, leftChildIndex)) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < size && this.compare(smallest, rightChildIndex)) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
