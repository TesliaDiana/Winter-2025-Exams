'use strict';

// Refactor following solution
// Find key by value

const find = (object, value) => {

  for (const key in object) {

    if (object[key] === value) return key;

  }

};

module.exports = find;
