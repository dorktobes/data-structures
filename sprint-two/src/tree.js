var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childInstance = Tree(value);
  this.children.push(childInstance);
};

treeMethods.contains = function(target) {
  var exists = false;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        exists = true;
      }
    }
  } 
  
  return exists;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild's complexity is O(1);
 contain's complexity is O(n);
 
 */
