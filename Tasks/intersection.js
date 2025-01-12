'use strict';

// Refactor following solution
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const intersectionObject = {};

  for (const [key, value] of Object.entries(object1)) {

    if (value === object2[key]) intersectionObject[key] = value;

  }

  return intersectionObject;
};

module.exports = intersection;
