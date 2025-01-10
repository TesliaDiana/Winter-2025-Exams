'use strict';

// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const positionOfPrefix = str.indexOf(prefix);
  const endPositionOfPrefix = positionOfPrefix + prefix.length;
  const positionOfSuffix = str.indexOf(suffix, endPositionOfPrefix);

  return str.substring(endPositionOfPrefix, positionOfSuffix);
};

module.exports = getValueBetween;
