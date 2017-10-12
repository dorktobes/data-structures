

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
  this[node].value = node;
  this[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var arr = this[node].edges.slice();
  for (var i = 0; i < arr.length; i++) {
    this.removeEdge(node, arr[i]); 
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges.indexOf(toNode) !== -1;
    
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return;
  }
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromConnection = this[fromNode].edges.indexOf(toNode);
  var toConnection = this[toNode].edges.indexOf(fromNode);
  this[fromNode].edges.splice(fromConnection, 1);
  this[toNode].edges.splice(toConnection, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


