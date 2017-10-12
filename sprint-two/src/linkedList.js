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
      var nodeInstance = Node(value);
      list.tail.next = nodeInstance;
      list.tail = nodeInstance;
    }
  };

  list.removeHead = function() {
    var thisHeadVal = list.head.value;
    list.head = list.head.next;
    return thisHeadVal;
  };

  list.contains = function(target) {
    for (var node in list) {
      if (list[node].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail's complexity is O(1);
   removeHead's complexity is O(1);
   contains's complexity is O(n);
 */
