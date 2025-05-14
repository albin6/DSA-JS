class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
  }

  hasCycle(start) {
    const visitedVertices = new Set();
    const stack = [start];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          stack.push(v);
        });
      } else {
        return "has cycle";
      }
    }
    return "no cycle";
  }

  bfs(start) {
    const visitedVertices = new Set();
    const queue = [start];
    let result = [];
    while (queue.length) {
      const vertex = queue.shift();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        result.push(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          if (!visitedVertices.has(v)) {
            queue.push(v);
          }
        });
      }
    }
    return result;
  }

  dfs(start) {
    const visitedVertices = new Set();
    const stack = [start];
    let result = [];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        result.push(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          if (!visitedVertices.has(v)) {
            stack.push(v);
          }
        });
      }
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
// graph.addEdge("C", "A");

console.log(graph.hasCycle("A"));

console.log(graph.bfs("A"));
console.log(graph.dfs("A"));

console.dir(graph.adjacencyList, { depth: null });
