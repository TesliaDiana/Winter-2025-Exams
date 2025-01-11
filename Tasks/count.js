'use strict';

// Refactor following solution
// Sum all number values in dict

const count = (object) => Object.values(object).reduce(
  (summa, value) => (typeof value === 'number' ? (summa += value) : summa), 0
);

module.exports = count;
