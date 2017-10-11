var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      var max = 0;
      for (keys in storage) {
        if (Number(keys) > max) {
          max = Number(keys);
        }
      }
      storage[max + 1] = value;
    }
    
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length === 0) {
      console.log('Error can\'t dequeue from empty queue');
    } else {
      var min = Object.keys(storage).length;
      for (var keys in storage) {
        if (Number(keys) < min) {
          min = Number(keys);
        }
      }
      //store it 
      var firstEl = storage[min];
      //delete it
      delete storage[min];
      //return it
      return firstEl;
    }
    
    
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
