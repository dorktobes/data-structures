



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //creates hashIndex of kString
  var index = getIndexBelowMaxForKey(k, this._limit);

  /*if (!this._storage[index]) {
    console.log(k + !this._storage[index]);
    var arr = [];  
    this._storage.set(index, arr);
  }*/
  if (!this._storage.get(index)) {
    var arr = [];
    this._storage.set(index, arr);
  }
  
  
  var tuple = [k, v];
  this._storage.each(function (e, i, c) {
    
    if (i === index) {
      e.push(tuple);
    }
  });
              
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    console.log('no items in location');
    return;
  }
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (elem, i, coll) {
    if (i === index) {
      coll.splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


