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
    this.addVertex(vertexOne);
    this.addVertex(vertexTwo);
    this.adjacencyList[vertexOne].push(vertexTwo);
  }

  hasCycleUtil(vertex, visited, recStack) {
    visited.add(vertex);
    recStack.add(vertex);

    for (const neighbor of this.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        if (this.hasCycleUtil(neighbor, visited, recStack)) {
          return true;
        }
      } else if (recStack.has(neighbor)) {
        return true;
      }
    }

    recStack.delete(vertex);
    return false;
  }

  hasCycle() {
    const visited = new Set();
    const recStack = new Set();

    for (const vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        if (this.hasCycleUtil(vertex, visited, recStack)) {
          return "has cycle";
        }
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

console.log(graph.hasCycle());
