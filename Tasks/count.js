'use strict';

// Refactor following solution
// Sum all number values in dict

const count = (object) => {
  let summa = 0;
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (typeof value === 'number') summa += value;
  });
  return summa;
};

module.exports = count;
