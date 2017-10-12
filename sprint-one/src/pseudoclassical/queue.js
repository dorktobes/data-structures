var Queue = function() {
  this.storage = {};
  
};

Queue.prototype.enqueue = function (value) {
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
};

Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length === 0) {
    console.log('err');
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
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};


  
