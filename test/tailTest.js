const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns result.length "2" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });

  it('returns original array length "3" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it('returns empty array for one element [2]', () => {
    assert.deepEqual(tail([2]), []);
  });

  it('returns empty array for []', () => {
    assert.deepEqual(tail([]), []);
  });

});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 3: Array of only one element
// console.log(tail([2]));

// // Test Case 4: Empty array
// console.log(tail([]));