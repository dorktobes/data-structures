var Queue = function() {
  var queueInstance = { storage: {} };
  extend(queueInstance, queueMethods);
  return queueInstance; 
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key]; 
  }
};


var queueMethods = {
  
  enqueue: function (value) {
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
  
  dequeue: function () {
    if (Object.keys(this.storage).length === 0) {
      console.log('Err');
    } else {
      var min = Object.keys(this.storage).length;
      for (var key in this.storage) {
        if (Number(key) < min) {
          min = Number(key);
        }
      }
      var firstEl = this.storage[min];
      delete this.storage[min];
      return firstEl;
    }
    
    
    
  },
  
  size: function () {
    return Object.keys(this.storage).length;
  }
  
  
  
  
  
  
};


