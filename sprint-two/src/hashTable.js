



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //creates hashIndex of kString
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    var arr = [];
    this._storage.set(index, arr);
  }
  
  
  var tuple = [k, v];
  this._storage.each(function (e, i, c) {
    //e is the array within each index in this._storage
    //c is this._storage
    var hasKey = false;
    if (i === index) {
      e.forEach(function (se, si, sc) {
        if (se[0] === k) {
          se[1] = v;
          hasKey = true;
        }
      });
      if (!hasKey) {
        e.push(tuple);
      }
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
 hashTables have a variety of time complexity based on the data set.
 There are linear and constant elements to all functions. comparative to the initial data set, functions are average cases are O(1), but worst case are O(n).
 */


