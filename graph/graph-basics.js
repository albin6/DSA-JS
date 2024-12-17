// Basic operations
// ----------------
// Add a vertex.
// Add an edge (directed or undirected).
// Remove a vertex.
// Remove an edge.
// Print the graph.
// Breadth-First Search (BFS).
// Depth-First Search (DFS).

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
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const connectedVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, connectedVertex);
    }
    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  bfs(start) {
    const visitedVertices = new Set();
    const results = [];
    const queue = [start];
    while (queue.length) {
      const vertex = queue.shift();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        results.push(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          if (!visitedVertices.has(v)) {
            queue.push(v);
          }
        });
      }
    }
    return results;
  }
  dfsIterative(start) {
    const results = [];
    const visitedVertices = new Set();
    const stack = [start];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        results.push(vertex);

        this.adjacencyList[vertex].forEach((v) => {
          if (!visitedVertices.has(v)) {
            stack.push(v);
          }
        });
      }
    }
    return results;
  }
  dfsRecursive(start, visitedVertices = new Set(), results = []) {
    if (!visitedVertices.has(start)) {
      visitedVertices.add(start);
      results.push(start);

      this.adjacencyList[start].forEach((v) => {
        if (!visitedVertices.has(v)) {
          this.dfsRecursive(v, visitedVertices, results);
        }
      });
    }
    return results;
  }
}

const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log(graph);

// graph.removeVertex("E");

console.log("-----------------------");
// console.log(graph);

console.log("Breadth-First Search (BFS) from A:");
console.log(graph.bfs("A"));

console.log("\nDepth-First Search (DFS - Iterative) from A:");
console.log(graph.dfsIterative("A"));

console.log("\nDepth-First Search (DFS - Recursive) from A:");
console.log(graph.dfsRecursive("A"));
