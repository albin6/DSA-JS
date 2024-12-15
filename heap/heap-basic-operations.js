class Heap {
  constructor(type = "min") {
    this.heap = [];
    this.type = type; // "min" for Min-Heap, "max" for Max-Heap
  }

  // Helper function to compare based on type of heap
  compare(parent, child) {
    if (this.type === "min")
      return this.heap[parent] > this.heap[child]; // Min-Heap: Parent > Child
    else return this.heap[parent] < this.heap[child]; // Max-Heap: Parent < Child
  }

  // Get parent/child indices
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // Peek: Get the root element
  peek() {
    if (this.heap.length === 0) throw new Error("Heap is empty!");
    return this.heap[0];
  }

  // Insert: Add a new element and maintain heap property
  insert(value) {
    this.heap.push(value); // Add the new value at the end
    this.bubbleUp(this.heap.length - 1); // Reheapify (move the value up)
  }

  // Bubble up the last element
  bubbleUp(index) {
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.compare(parent, index)) {
        this.swap(parent, index); // Swap with the parent
        index = parent; // Move up the index
      } else {
        break;
      }
    }
  }

  // Extract the root element (min/max) and reheapify
  extract() {
    if (this.heap.length === 0) throw new Error("Heap is empty!");
    const root = this.heap[0];
    const last = this.heap.pop(); // Remove the last element

    if (this.heap.length > 0) {
      this.heap[0] = last; // Move the last element to the root
      this.bubbleDown(0); // Reheapify (move the value down)
    }
    return root; // Return the root element
  }

  // Bubble down the root element
  bubbleDown(index) {
    const size = this.heap.length;
    while (this.leftChildIndex(index) < size) {
      let smallerOrLargerChild = this.leftChildIndex(index); // Left child
      const right = this.rightChildIndex(index);

      // Choose the smaller/larger child based on heap type
      if (
        right < size &&
        this.compare(smallerOrLargerChild, right) // Right child is smaller/larger
      ) {
        smallerOrLargerChild = right;
      }

      if (this.compare(index, smallerOrLargerChild)) {
        this.swap(index, smallerOrLargerChild); // Swap with the smaller/larger child
        index = smallerOrLargerChild; // Move down the index
      } else {
        break;
      }
    }
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Convert an array into a heap (Heapify)
  heapify(array) {
    this.heap = array;
    for (let i = this.parentIndex(this.heap.length - 1); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  // Update a value in the heap
  update(index, newValue) {
    this.heap[index] = newValue;

    if (this.compare(this.parentIndex(index), index)) {
      this.bubbleUp(index);
    } else if (this.compare(index, this.leftChildIndex(index))) {
      this.bubbleDown(index);
    }
  }
}

// Example Usage:
// Min-Heap
const minHeap = new Heap("min");
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
console.log("Min-Heap:", minHeap.heap); // [3, 5, 20, 10]
console.log("Extract Min:", minHeap.extract()); // 3
console.log("Updated Min-Heap:", minHeap.heap); // [5, 10, 20]

// Max-Heap
const maxHeap = new Heap("max");
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(3);
console.log("Max-Heap:", maxHeap.heap); // [20, 10, 5, 3]
console.log("Extract Max:", maxHeap.extract()); // 20
console.log("Updated Max-Heap:", maxHeap.heap); // [10, 3, 5]
