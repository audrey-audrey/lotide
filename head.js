// assertEqual function
const assertEqual = require('./assertEqual');

// head function
const head = function(array) {

  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }

};

module.exports = head;
