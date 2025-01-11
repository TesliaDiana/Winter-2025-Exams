'use strict';

// Refactor following solution
// Copy all values from dict except listed

const except = (object, ...excludeKeys) => {
  const filteredObject = {};

  for (const [key, value] of Object.entries(object)) {

    if (!excludeKeys.includes(key)) filteredObject[key] = value;

  }

  return filteredObject;
};

module.exports = except;
