var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      var firstHead = Node(value);
      list.head = firstHead;
      list.tail = firstHead;
    } else {
      var nodeInstance = Node(value, list.tail);
      list.tail.next = nodeInstance;
      list.tail = nodeInstance;
    }
  };
 

  list.removeHead = function() {
    var thisHeadVal = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.prev = null;
    }
    return thisHeadVal;
  };
  
  list.contains = function(target) {
    var currentNode = list.head;
    var foundMatch = false;
    while (currentNode !== list.tail) {
      if (currentNode.value === target) {
        foundMatch = true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === list.tail) {
      if (currentNode.value === target) {
        foundMatch = true;
      }
    }
    return foundMatch;
  };
  ////////////////////////ADVANCED METHODS///////////////////////
    
    
  list.addToHead = function (val) {
    if (!list.head) {
      list.addToTail(val);
      return;
    }
    var oldHead = this.head;
    var nodeInstance = Node(val);
    nodeInstance.next = oldHead;
    oldHead.prev = nodeInstance;
    list.head = nodeInstance;
  };

  list.insertBehind = function (nodeToFollow, value) {
    var currentNode = list.head;
    var newNode = Node(value);
    
    while (currentNode !== list.tail) {
      if (currentNode.value === nodeToFollow) {
        newNode.prev = currentNode;
        newNode.next = currentNode.next;
        newNode.next.prev = newNode;
        currentNode.next = newNode;
        return;
        
      }
      currentNode = currentNode.next;
    }
    
    if (currentNode === list.tail) {
      if (currentNode.value === nodeToFollow) {
        list.addToTail(newNode);
      }
    }
    
  };

  list.removeTail = function () {
    var oldTailVal = list.tail.value;
    var newTail = list.tail.prev;
    newTail.next = null;
    list.tail = newTail;
    return oldTailVal;
  };  
  

  return list;
};

var Node = function (value, prev) {
  var node = {};

  node.prev = prev || null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail's complexity is O(1);
   removeHead's complexity is O(1);
   contains's complexity is O(n);
   addToHead's complexity is O(1);
   removeFromTail's complexity is O(1);
   insertBehind's complexity is O(n);
 */
