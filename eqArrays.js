// assertEqual function 
const assertEqual = require('./assertEqual');

// eqArrays function
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

module.exports = eqArrays;
