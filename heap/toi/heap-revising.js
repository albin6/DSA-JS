class Heap {
  constructor(type = "max") {
    this.heap = [];
    this.type = type;
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  parent(index) {
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
      let parent = this.parent(index);
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
    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return top;
  }

  bubbleDown(index) {
    let size = this.heap.length;

    while (this.leftChild(index) < size) {
      let smallest = index;
      let leftChild = this.leftChild(index);
      let rightChild = this.rightChild(index);

      if (leftChild < size && this.compare(smallest, leftChild)) {
        smallest = leftChild;
      }

      if (rightChild < size && this.compare(smallest, rightChild)) {
        smallest = rightChild;
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

const heap = new Heap();

heap.insert(10);
heap.insert(30);
heap.insert(15);
heap.insert(25);
heap.insert(35);

console.log(JSON.stringify(heap.heap));

heap.remove();

console.log(JSON.stringify(heap.heap));

heap.remove();

console.log(JSON.stringify(heap.heap));

heap.remove();

console.log(JSON.stringify(heap.heap));

heap.remove();

console.log(JSON.stringify(heap.heap));
