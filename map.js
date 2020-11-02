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

// MAP
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// // TEST CASE 1
// // const words = ["ground", "control", "to", "major", "tom"];
// // const results1 = map(words, word => word[0]);
// // assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

// // Test case 2 - only 1 letter in each string
// const words = ['a', 'b', 'c'];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['a','b','c']);

// // Test case 3 - EMPTY ARRAY
// // const words = [];
// // const results1 = map(words, word => word[0]);
// // assertArraysEqual(results1, [])