g.addEdge("B", "C");
g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("B", "C");

console.dir(g.adjacencyList, { depth: null });

console.log(g.detectCycle("A"));
