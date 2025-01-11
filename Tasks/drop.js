'use strict';

// Refactor following solution
// Delete listed keys from dictionary

const drop = (object, ...excludeKeys) => {
  Object.keys(object).forEach((key) => {
    if (excludeKeys.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = drop;
