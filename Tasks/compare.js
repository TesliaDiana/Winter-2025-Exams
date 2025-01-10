'use strict';

// Refactor following solution
// Compare two dictionaries

const compare = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.join('-') !== keys2.join('-')) return false;
  let isSame = true;
  for (const key of keys1) {
    isSame = isSame && object1[key] === object2[key];
  }
  return isSame;
};

module.exports = compare;
