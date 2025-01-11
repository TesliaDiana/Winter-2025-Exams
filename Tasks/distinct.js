'use strict';

// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const uniqValues = new Set();
  data.forEach((value) => {
    if (!uniqValues.has(value)) {
      uniqValues.add(value);
    }
  });
  return [...uniqValues];
};

module.exports = distinct;
