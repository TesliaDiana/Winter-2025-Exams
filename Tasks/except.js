'use strict';

// Refactor following solution
// Copy all values from dict except listed

const except = (object, ...excludeKeys) => Object.fromEntries(
  Object.entries(object).filter(([key]) => !excludeKeys.includes(key))
);

module.exports = except;
