// assertEqual
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

// eqArray
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

// eqObjects 
const eqObjects = function(object1, object2) {

  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);

  let result = false;


  for (let key of object1Array) {

    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1Array.length === object2Array.length) {
        if (object1[key] === object2[key]) {
          result = true;
        } else {
          result = false;
        }
      }
    }

  }
  return result;

}

// assertObjectEqual
const assertObjectEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  let result = eqObjects(actual, expected);

  if (result === true) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

}

// Test
// primitive data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(ab, abc); // => false

// arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => false


