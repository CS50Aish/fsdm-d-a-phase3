// Graph implementation using adjacency list
class Graph{
    constructor(){
        this.vertices = [];
        this.adjacency = new Map();
    }

    // Function to add a vertex to the graph
    addVertex(vertex){
        this.vertices.push(vertex);
        this.adjacency.set(vertex, []);
    } 

    // Function to add an edge between two vertices
    addEdge(vertex1, vertex2){
        this.adjacency.get(vertex1).push(vertex2);
        this.adjacency.get(vertex2).push(vertex1);
    }

    // Function to display the graph
    printGraph(){
        for(const vertex of this.vertices){
            const neighbours = this.adjacency.get(vertex).join(',');
            console.log(`${vertex} -> ${neighbours}`);
        }     
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','C');

console.log('Graph representation:');
graph.printGraph();