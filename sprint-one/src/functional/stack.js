var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      var max = 0;
      for (var prop in storage) {
        if (Number(prop) > max) {
          max = Number(prop);
        }
      }
      storage[max + 1] = value;
    }
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      //throw error
      console.log('err, stack is empty, cannot pop');
    } else {
      var max = 0;
      for (var prop in storage) {
        if (Number(prop) > max) {
          max = Number(prop);
        }
      }
      //store it
      var lastElement = storage[max];
      //delete it
      delete storage[max];
      //return it
      return lastElement; 
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
