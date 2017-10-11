var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return Object.create(stackMethods);
  
};

var stackMethods = {
  storage: {},
  push: function(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      var max = 0;
      for (var key in this.storage) {
        if (Number(key) > max) {
          max = Number(key);
        }
      }
      this.storage[max + 1] = value;
    }
    
    
  },
  pop: function() {},
  size: function() {
    return Object.keys(this.storage).length;
  }
  
  
  
};


