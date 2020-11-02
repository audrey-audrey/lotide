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
// function with input parameters source and itemsToRemove
const without = function(source, itemsToRemove) {

  // create empty array retArray
  const retArray = [];

  // iterate through each item of source
  for (let item of source) {
    // if itemsToRemove does NOT include any element from source proceed to next step
    if (!itemsToRemove.includes(item)) {
      // add source element to retArray
      retArray.push(item);
    }
  }
  // print retArray to check result
  console.log(retArray);
  return retArray;
}

module.exports = without;

// // Test Cases
// console.log(without([1, 2, 3], [2, 1])) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


