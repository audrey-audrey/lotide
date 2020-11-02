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