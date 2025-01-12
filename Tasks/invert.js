'use strict';

// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const reverseArray = [];

  for (const value of array) {
    reverseArray.unshift(value);
  }

  return reverseArray;
};

module.exports = invert;
