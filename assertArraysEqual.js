// eqArrays function
const eqArrays = require('./eqArrays');

// assertArraysEqual function
const assertArraysEqual = function (inputOne, inputTwo) {

let result = eqArrays(inputOne, inputTwo);

  if (result === true) {
    console.log(`✅✅✅ Assertion passed: ${inputOne} === ${inputTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inputOne} !== ${inputTwo}`);
  }

}

module.exports = assertArraysEqual;