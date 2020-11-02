// Test with ASSERTEQUAL
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

// COUNTLETTERS
const countLetters = function(string) {

  const results = {};

  for (let letter of string) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

module.exports = countLetters;

// // Test cases
// let testThis = countLetters('LHL');
// assertEqual(testThis.L, 2);

// countLetters("lighthouse in the house");