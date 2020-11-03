const assertArraysEqual = require('./assertArraysEqual');
const assertArrayEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array) {

  let retArray = [];

  for(const item of array){
    if(Array.isArray(item)){
      // Nested for/of loop if item is an array
      for (const element of item) {
        retArray.push(element);
      }
    } else {
      retArray.push(item);
    }
  }
  
return retArray;

}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ])