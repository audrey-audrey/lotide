// eqArrays function
const eqArrays = function (arrayFirst, arraySecond) {

  let output = true;
  
  for (let i = 0; i < arrayFirst.length; i++) {
    if (arrayFirst[i] !== arraySecond[i]) {
      output = false;
    }
  }
  
  return output;
  
  };
  
  // assertArraysEqual function
  const assertArraysEqual = function (inputOne, inputTwo) {
  
  let result = eqArrays(inputOne, inputTwo);
  
    if (result === true) {
      console.log(`✅✅✅ Assertion passed: ${inputOne} === ${inputTwo}`);
    } else {
      console.log(`🛑🛑🛑 Assertion failed: ${inputOne} !== ${inputTwo}`);
    }
  
  }

  // middle function 
const middle = function (array) {

  // Empty array
  let retArray = [];

  // Middle element of the array
  let middleNum = Math.floor((array.length)/2)

  if ((array.length > 2) && (array.length % 2 === 0)) {
    retArray.push(array[middleNum - 1], array[middleNum]);
    
  } else if ((array.length > 2) && (array.length % 2 !== 0)) {
    retArray.push(array[middleNum]);
  }
  
  console.log(retArray)
  return retArray;
}

// Test case 1
middle([1]) // => []
middle([1, 2]) // => []

// Test case 2
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

// Test case 3
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

