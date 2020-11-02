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
