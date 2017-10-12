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
    //input value : none;
    //return value: the head of the linked list
    var thisHeadVal = list.head.value;
    list.head = list.head.next;
    return thisHeadVal;
    //side effects: linked list head is reassigned to the address at the head's next property.
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
 */
