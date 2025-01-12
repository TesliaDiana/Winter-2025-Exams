'use strict';

// Refactor following solution
// Find longest string

const longest = (strings = []) => {
  let maxLength = -1;
  let longestString = '';
  for (let string of strings) {
    if (string.length > maxLength) {
      maxLength = string.length;
    } else {
      string = 0;
    }
    if (string.length >= maxLength) {
      longestString = string;
    } else {
      string = -1;
    }
  }
  return longestString;
};

module.exports = longest;
