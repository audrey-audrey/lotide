// eqArrays function
const eqArrays = require('./eqArrays');
  
// assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

// middle function
const middle = function(array) {

  // Empty array
  let retArray = [];

  // Middle element of the array
  let middleNum = Math.floor((array.length) / 2);

  if ((array.length > 2) && (array.length % 2 === 0)) {
    retArray.push(array[middleNum - 1], array[middleNum]);
    
  } else if ((array.length > 2) && (array.length % 2 !== 0)) {
    retArray.push(array[middleNum]);
  }
  
  return retArray;
};

module.exports = middle;



