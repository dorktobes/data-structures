var Stack = function() {
  var stackInstance = {storage: {}};
  extend(stackInstance, stackMethods);
  return stackInstance;
};

var extend = function (obj, methods) {
  for (var prop in methods) {
    obj[prop] = methods[prop];
  }
};

var stackMethods = {
  push: function (value) {
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
  pop: function () {
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
      delete this.storage[max];
      return lastEl;  
    } 
    
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


