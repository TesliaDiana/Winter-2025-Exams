'use strict';

// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const uniqValues = new Set();
  let index = 0;
  data.forEach((value) => {
    if (uniqValues.has(value)) {
      delete data[index];
    } else {
      uniqValues.add(value);
    }
    index++;
  });
  return data.filter
  (value => typeof value === 'number');
};

module.exports = distinct;
