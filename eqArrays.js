const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (arrayFirst, arraySecond) {

let output = true;

for (let i = 0; i < arrayFirst.length; i++) {
  if (arrayFirst[i] !== arraySecond[i]) {
    output = false;
  }
}

console.log(output);
return output;

};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2,3]), true); // => should PASS
