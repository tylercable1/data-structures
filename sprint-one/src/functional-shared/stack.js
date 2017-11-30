var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(value) {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return Object.keys(storage).length;
};


