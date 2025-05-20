class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].push(vertexTwo);
  }

  hasCycle(start) {
    const visitedVertices = new Set();
    const queue = [start];
    while (queue.length) {
      const vertex = queue.shift();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          queue.push(v);
        });
      } else {
        return "has cycle";
      }
    }
    return "no cycle";
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
// graph.addEdge("C", "A");

console.dir(graph.adjacencyList, { depth: null });

console.log(graph.hasCycle("A"));
