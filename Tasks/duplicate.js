'use strict';

// Refactor following solution
// Return an array without duplicates

const duplicate = (value, N) => {
  const res = [];
  for (let i = 0; i < N; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicate;
