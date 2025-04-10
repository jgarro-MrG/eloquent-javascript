////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(a, b, step=1) {
  let output = []
  if (step >= 1) {
    if (a < b) {
      for (let i = a; i <= b; i += step) {
        output.push(i);
      }
    } else if (a > b) {
      for (let i = a; i >= b; i -= step) {
        output.push(i);
      }
    }
  }
  return output;  
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  reversedArray = reverseArray(array);
  for (let i = 0; i < array.length; i++) {
    array[i] = reversedArray[i];
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
  // base
  if (list.rest === null) {
    output.push(list.value);
    return output;
  }

  // recursion
  output.push(list.value);
  return listToArray(list.rest, output)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
takes an element and a list and 
creates a new list that adds the element 
to the front of the input list, 
*/ 
function prepend(element, list) {
  let newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
 takes a list and a number
 returns the element at the given position in the list
 (with zero referring to the first element) 
 or undefined when there is no such element.
*/
function nth(list, n) {
  if (n < 0) {
    return undefined;
  }
  // base 
  if (n === 0) {
    return list.value
  }
  // recursion
  return nth(list.rest, n-1)
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};