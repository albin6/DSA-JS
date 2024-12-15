class Heap {
  constructor(type = "max") {
    this.heap = [];
    this.type = type;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return 2 * index + 1;
  }
  rightChild(index) {
    return 2 * index + 2;
  }
  compare(parent, child) {
    if (this.type == "max") {
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
  extract() {
    if (this.heap.length == 0) {
      throw new Error("Heap is empty");
    }
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heap.pop();
      this.bubbleDown(0);
    }
    return root;
  }
  bubbleDown(index) {
    const size = this.heap.length;
    while (this.leftChild(index) < size) {
      const smallestOrLargestChlid = this.leftChild(index);
      const right = this.rightChild(index);
      if (right < size && this.compare(smallestOrLargestChlid, right)) {
        smallestOrLargestChlid = right;
      }
      if (this.compare(index, smallestOrLargestChlid)) {
        [this.heap[index], this.heap[smallestOrLargestChlid]] = [
          this.heap[smallestOrLargestChlid],
          this.heap[index],
        ];
        index = smallestOrLargestChlid;
      } else {
        break;
      }
    }
  }
  update(index, value) {
    this.heap[index] = value;

    if (this.compare(this.parentIndex(index), index)) {
      this.bubbleUp(index);
    } else if (this.compare(index, this.leftChild(index))) {
      this.bubbleDown(index);
    }
  }
}
