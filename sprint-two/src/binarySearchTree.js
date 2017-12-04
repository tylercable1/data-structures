var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


BinarySearchTree.prototype.insert = function(value) {
  // check new value against original val
  // if > and .right is null assign new instance to this.right
  // if < assign to this.left  
  if (value < this.value) {
  	if (this.left === null) {
  		this.left = new BinarySearchTree(value);
  	} else {
  	  this.left.insert(value);	
  	}
  } else if (value > this.value) {
  	if (this.right === null) {
  		this.right = new BinarySearchTree(value);
  	} else {
  	  this.right.insert(value);	
  	}
  } else {

  }
};

BinarySearchTree.prototype.contains = function(value) {
  // compare passed in value to new instance value if equal return true
  // check if less than or greater than current nodes value
  // check if .left or .right properties are null if null, return false
  // and if not recurse until value either matches or null is found
  if (value === this.value) {
  	return true;
  } else if (value < this.value) {
  	return !! (this.left && this.left.contains(value));
  } else if (value > this.value) {
  	return !! (this.right && this.right.contains(value));
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
  	this.left.depthFirstLog(cb);
  }
  if (this.right) {
  	this.right.depthFirstLog(cb);
  }
};
