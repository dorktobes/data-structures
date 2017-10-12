var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (value) {
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
Stack.prototype.pop = function () {
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
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

