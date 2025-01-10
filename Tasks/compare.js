'use strict';

// Refactor following solution
// Compare two dictionaries

const compare = (object1, object2) => {
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);

  for (let i = 0; i < entries1.length; i++) {
    const [key1, value1] = entries1[i];
    const [key2, value2] = entries2[i];

    if (key1 !== key2 || value1 !== value2) return false;

  }
  return true;
};

module.exports = compare;
