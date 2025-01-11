'use strict';

// Refactor following solution
// Copy all values from dict except listed

const except = (object, ...excludeKeys) => {
  Object.keys(object).forEach((key) => {
    if (excludeKeys.includes(key)) delete object[key];
  });
  return object;
};

module.exports = except;
