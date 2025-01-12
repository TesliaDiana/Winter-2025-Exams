'use strict';

// Refactor following solution
// Find key by value

const find = (object, searchingValue) => Object.entries(object).find(
  // eslint-disable-next-line no-unused-vars
  ([_, value]) => value === searchingValue
)?.[0];

module.exports = find;
