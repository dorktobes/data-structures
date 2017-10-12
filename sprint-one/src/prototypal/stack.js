var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  return stackInstance;
  
};

var stackMethods = {
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
  pop: function() {
    if (Object.keys(this.storage).length === 0) {
      console.log('err');
    } else {
      var max = 0;
      for (var key in this.storage) {
        if (Number(key) > max) {
          max = Number(key);
        }
      }
      var lastEl = this.storage[max];
      console.log(this.storage);
      delete this.storage[max];
      console.log(this.storage);
      return lastEl;
    }
    
  },
  
  size: function() {
    return Object.keys(this.storage).length;
  }
  
  
  
};


