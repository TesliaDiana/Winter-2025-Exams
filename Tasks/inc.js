'use strict';

// Refactor following solution
// Increment all numbers in dictionary

const incNumbers = (object) => {
  const incrementedObject = {};

  for (const [key, value] of Object.entries(object)) {

    incrementedObject[key] = typeof value === 'number' ? value + 1 : value;

  }

  return incrementedObject;
};

module.exports = incNumbers;
