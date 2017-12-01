var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
  //create a node object with value as newLast
    var newLast = Node(value);
  //if (!list.head) then set list.head = newLast
    if (list.head === null) { 
  // and set list.tail = newLast
      list.head = newLast;
      list.tail = newLast;
    } else {
  // else:
  //access list.tail and set as lastNode
  //set lastNode.next = newLast
  // list.tail= newLast 
      var lastNode = list.tail; 
      lastNode.next = newLast;
      list.tail = newLast;
    }
// if (!list.head) {
    //   list.head = Node(value);
    // } else {
    //   var current = list.head; 
    //   while (current.next) {
    //     current = current.next;
    //   }   
    //   list.tail = Node(value);
    //   current.next = list.tail;
    // }    
  
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target, node = list.head) {
    //var finder = function(node, target) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return list.contains(target, node.next);
    //}; 
    //return finder(list.head, target);    

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? linear
 */
