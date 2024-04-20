function Graph(){
    this.vertices = [];
    this.adjacency = new Map();
}

// Method to add vertex
Graph.prototype.addVertex = function(vertex){
    this.vertices.push(vertex);
    this.adjacency.set(vertex, []);
};

Graph.prototype.addEdge = function(vertex1, vertex2){
    this.adjacency.get(vertex1).push(vertex2);
    this.adjacency.get(vertex2).push(vertex1);
}

// Method for depth-first traversal
Graph.prototype.depthFirstTraversal = function(startVertex, visited=new Set()){
    if(!this.vertices.includes(startVertex) || visited.has(startVertex)){
        return;
    }
    console.log(`Visited:${startVertex}`);
    visited.add(startVertex);

    const neighbours = this.adjacency.get(startVertex);
    for(const neighbour of neighbours){
        this.depthFirstTraversal(neighbour, visited);
    }

};

// Created a graph instance
const graph = new Graph();

// Adding vertices
['A','B','C','D','E','F'].forEach(vertex => graph.addVertex(vertex));

// Adding edges
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('B','E');
graph.addEdge('C','F');

// Perform depth first traversal
console.log('\nDepth First Traversal:');
graph.depthFirstTraversal('A');