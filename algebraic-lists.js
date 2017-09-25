/* 
* So, you will now add:
* filter: create a new algebraic list containing only the elements that satisfy a predicate function.
* map : create a new list in which every element is the result of applying a function provided as argument.
* fromArray: a convenient complementary method that creates a list out of a JavaScript array. 
*/
Cons.fromArray = function(array){
  if (array.length == 1) return new Cons(array[0], null);
  let element = array.shift();
  return new Cons(element, Cons.fromArray(array));
};

function filter(list, predicate){
  return Cons.fromArray(list.toArray().filter(predicate));
}

function map(list, mapper){
  return Cons.fromArray(list.toArray().map(mapper));
}

Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };
