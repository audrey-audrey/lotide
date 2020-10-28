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

// letterPositions function
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (const letter in sentence) {
    const objKey = sentence[letter];

    if (results[objKey] && (results[objKey] !== ' ')) {
      results[objKey].push(Number(letter));
    } else if (results.objKey !== ' '){
      results[objKey] = [Number(letter)];
    }

  }

  return results;

};

console.log(letterPositions("lighthouse in the house"));
// Test Cases
let testThis = letterPositions('hello');
assertArraysEqual(testThis.h, [0]);