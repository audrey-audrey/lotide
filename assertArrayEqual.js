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
    console.log(`✅✅✅ Assertion passed: ${inputOne} === ${inputTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inputOne} !== ${inputTwo}`);
  }

}

// Test Code
assertArrayEqual([1,1,3],[1,2,3])