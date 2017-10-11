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
    
    
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
