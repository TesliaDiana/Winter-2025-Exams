'use strict';

// Refactor following solution
// Find longest string

const longest = (strings = []) => strings.reduce((maxString, string) => (
  string.length > maxString.length ? string : maxString
), '');

module.exports = longest;
