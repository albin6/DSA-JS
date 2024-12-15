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
  bubbleDown(index) {
    const size = this.heap.length;
    while (this.leftChildIndex(index) < size) {
      let smallestOrLargestChlid = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);
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
    } else if (this.compare(index, this.leftChildIndex(index))) {
      this.bubbleDown(index);
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

hp.insert(10);
hp.insert(20);
hp.insert(30);
hp.insert(15);
hp.insert(5);
hp.insert(12);

console.log("original => ", hp.heap);

hp.update(1, 35);

console.log("update (bubbleUp) => ", hp.heap);

hp.update(0, 15);

console.log("update (bubbleDown) => ", hp.heap);

console.log("--------------------------------------------------");

hp.heapifyAnArray([2, 3, 1, 4, 8, 9]);

console.log("heapified an array =>", hp.heap);

console.log("heap sort =>", hp.heapSort([2, 3, 1, 4, 8, 9]));
