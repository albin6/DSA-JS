// -------------------------------------------------------------------------------
// idea of linked list (just a sample for understanding)

const nodeOne = {
  data: 100,
};

const nodeTwo = {
  data: 200,
};

// these two completely seperate nodesand these are just object literals
// but if we want to add a reference from nodeOne to nodeTwo we cam simply do;

nodeOne.next = nodeTwo;

console.log(nodeOne); // { data: 100, next: { data: 200 } }

// so this kind very minimalistic example for a linked list

// -------------------------------------------------------------------------------

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

const node1 = new Node(100);

console.log(node1);
