const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arrayFirst, arraySecond) {

  for (let i = 0; i < arrayFirst.length; i++) {
    if (arrayFirst.length === arraySecond.length) {
      if (arrayFirst[i] !== arraySecond[i]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;

};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
