'use strict';

// Refactor following solution
// Find longest string

const longest = (strings = []) => {
  let longestString = '';

  for (const string of strings) {

    if (string.length > longestString.length) longestString = string;

  }

  return longestString;
};

module.exports = longest;
