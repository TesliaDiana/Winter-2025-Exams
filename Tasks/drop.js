'use strict';

// Refactor following solution
// Delete listed keys from dictionary

const drop = (object, ...excludeKeys) => Object.fromEntries(
  Object.entries(object).filter(([key]) => !excludeKeys.includes(key))
);

module.exports = drop;
