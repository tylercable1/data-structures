var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.dequeue = function() {
// use this here
};

queueMethods.enqueue = function(value) {
// use this here
};

queueMethods.size = function() {
// use this here
 
  return Object.keys().length;
};


