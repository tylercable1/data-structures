var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};


queueMethods.dequeue = function() {
// use this here

};

queueMethods.enqueue = function(value) {
// use this here
  this.storage = value;
  this.counter++;
};

queueMethods.size = function() {
// use this here
 
  return Object.keys(this.storage).length;
};


