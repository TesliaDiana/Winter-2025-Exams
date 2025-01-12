'use strict';

// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const indexes = Object.keys(array);
  indexes.forEach((_, index) => indexes[index] = array.pop());
  return indexes;
};

module.exports = invert;
