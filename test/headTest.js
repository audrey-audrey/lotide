const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");