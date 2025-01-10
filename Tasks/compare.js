'use strict';

// Refactor following solution
// Compare two dictionaries

const compare = (first_values, second_values) => {
  const a = Object.keys(first_values);
  const b = Object.keys(second_values);
  if (a.join('-') !== b.join('-')) return false;
  let e = true;
  for (const c of a) {
    e = e && first_values[c] === second_values[c];
  }
  return e;
};

module.exports = compare;
