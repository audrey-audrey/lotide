# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @audrey-audrey/lotide`

**Require it:**

`const _ = require('@audrey-audrey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual(actual, expected)`: takes in two objects and returns a message to specify if the two objects are equal
*  `assertEqual(actual, expected)`: takes in two primitive datas and returns a message to specify if the datas are equal
*  `assertObjectsEqual(actual, expected)`: takes in two objects and returns a message to specify if the two objects are equal

*  `countLetters(sentence)`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence
*  `countOnly(allItems, itemsToCount)`: takes in a collection of items and return counts for a specific subset of those items

*  `eqArrays(array1, array2)`: takes in two objects and returns a true if the two objects are equal
*  `eqObjects(object1, object2)`: takes in two objects and returns true if the two objects are equal

*  `findKey(object, callback)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*  `findKeyByValue(object, value)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*  `head(array)`: takes an array and returns the first element of the array
*  `letterPositions(sentence)`: takes in a string and returns all the indices (zero-based positions) in the string where each character is found
*  `map(array, callback)`: takes an array and a callback and returns a new array based on the results of the callback function
*  `middle(array)`: takes an array and returns the middle element of the array
*  `tail(array)`: takes an array and returns all the elements of the array without the first element
*  `takeUntil(array, callback)`: takes an array and a callback and returns "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
*  `without(array, itemsToRemove)`: takes in an array and an itemsToRemove array and returns an array without any elements found in itemsToRemove