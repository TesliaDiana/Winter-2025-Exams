'use strict';

// Refactor following solution
// Find key by value

const find = (object, rest) => {

  for (const name in object) {

    if (object[name] === rest) return name;

  }

};

module.exports = find;
