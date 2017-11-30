var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.extraStorage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}; 

stackMethods.pop = function() {
  this.extraStorage[this.counter] = this.storage[this.counter];
  this.
};