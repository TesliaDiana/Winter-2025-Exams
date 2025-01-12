'use strict';

// Refactor following solution
// Filter array by type name

const filter = (data, filteringType) => data.filter(
  (value) => typeof value === filteringType
);

module.exports = filter;
