var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, BSTmethods);
  
  return tree;
};

var BSTmethods = {};

BSTmethods.insert = function(val) {
  
  var cN = this;
  if (this.value === val) {
    console.log('can\'t insert duplicate values');
    return;
  } else if (val < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(val);
      return;
    } else {
      cN = this.left;
      cN.insert(val);   
      
    }      
  } else if (val > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(val);
      return;
    } else {
      cN = this.right;
      cN.insert(val);
    }
  }
  
};

BSTmethods.contains = function(target) {
  
  var cN = this;
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (!this.left) {
      return false;
    } else {
      cN = this.left;
      return cN.contains(target);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      cN = this.right;
      return cN.contains(target);
    }
    
  }
  
  
  
  
};

BSTmethods.depthFirstLog = function(cb) {
  var cN = this;
  cb(this.value);
  if (this.left) {
    cN = this.left;
    cN.depthFirstLog(cb);
  }
  if (this.right) {
    cN = this.right;
    cN.depthFirstLog(cb);
  }
  
  
  
  
};











/*
 * Complexity: What is the time complexity of the above functions?
 insert() and contains() are O(log n);
 depthFirstLog() is O(n)
 */
