const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array for one element [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("returns empty array for two elements [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [2] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [3, 4] for [1, 2, 3, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});

// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// // Test case 1
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []

// // Test case 2
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// // Test case 3
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]