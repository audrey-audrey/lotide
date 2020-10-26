// assertEqual function
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

// head function
const head = function(array) {

  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }

};

// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
