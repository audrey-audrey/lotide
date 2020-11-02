// eqArrays function
const eqArrays = function(arrayFirst, arraySecond) {

  let output = true;
  
  for (let i = 0; i < arrayFirst.length; i++) {
    if (arrayFirst[i] !== arraySecond[i]) {
      output = false;
    }
  }
  
  return output;
  
};
  
// assertArraysEqual function
const assertArraysEqual = function(inputOne, inputTwo) {
  
  let result = eqArrays(inputOne, inputTwo);
  
  if (result === true) {
    console.log(`✅✅✅ Assertion passed: ${inputOne} === ${inputTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inputOne} !== ${inputTwo}`);
  }
  
};

// takeUntil function
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else if (callback(item)) {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])


