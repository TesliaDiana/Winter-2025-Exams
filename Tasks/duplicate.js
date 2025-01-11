'use strict';

// Refactor following solution
// Return an array without duplicates

const duplicate = (filler, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = filler;
  }
  return result;
};

module.exports = duplicate;
