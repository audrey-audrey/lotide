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

// assertArrayEqual function
const assertArrayEqual = function (inputOne, inputTwo) {

let result = eqArrays(inputOne, inputTwo);

  if (result === true) {
    console.log(`✅✅✅ Assertion passed: First Array === Second Array`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: First Array !== Second Array`);
  }

}

// Test Code
assertArrayEqual([1,1,3],[1,2,3])