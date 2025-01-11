'use strict';

// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const uniqValues = [];

  for (const value of data) {

    if (!uniqValues.includes(value)) uniqValues.push(value);
  
  }
  
  return uniqValues;
};

module.exports = distinct;
