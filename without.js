// eqArrays function => comparing two given arrays for an exact match
const eqArrays = function (arrayFirst, arraySecond) {

  let output = true;
  
  for (let i = 0; i < arrayFirst.length; i++) {
    if (arrayFirst[i] !== arraySecond[i]) {
      output = false;
    }
  }
  
  return output;
  
  };
  
  // assertArraysEqual function => print out a message to see whether the assertion is true or not
const assertArraysEqual = function (inputOne, inputTwo) {

  let result = eqArrays(inputOne, inputTwo);

  if (result === true) {
    console.log(`✅✅✅ Assertion passed: ${inputOne} === ${inputTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inputOne} !== ${inputTwo}`);
  }


}

// without function => remove specified values from a given array
const without = function (source, itemsToRemove) {

  let modifiedArray = source;

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        modifiedArray.splice(i, 1);
      }
    }
  }

  return modifiedArray;

}

// Test case 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
