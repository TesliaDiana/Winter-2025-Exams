'use strict';

// Refactor following solution
// Filter array by type name

const filter = (data, filteringType) => {
  const removeIndexes = [];
  for (const element of data) {
    const index = data.indexOf(element);
    if (typeof data[index] !== filteringType) {
      removeIndexes.unshift(index);
    }
  }
  for (const index of removeIndexes) data.splice(index, 1);
  return data;
};

module.exports = filter;
