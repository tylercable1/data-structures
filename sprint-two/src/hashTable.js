

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    bucket.push(tuple); 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  return this._storage.get(index);

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


