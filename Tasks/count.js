'use strict';

// Refactor following solution
// Sum all number values in dict

const count = (object) => {
  let summa = 0;
  for (const value of Object.values(object)) {
    if (typeof value === 'number') summa += value;
  }
  return summa;
};

module.exports = count;
