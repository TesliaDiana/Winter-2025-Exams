'use strict';

// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const positionOfPrefix = str.indexOf(prefix);

  if (positionOfPrefix === -1) return '';

  const endPositionOfPrefix = positionOfPrefix + prefix.length;
  str = str.substring(endPositionOfPrefix);

  if (suffix) {
    const positionOfSuffix = str.indexOf(suffix);

    if (positionOfSuffix === -1) return '';

    str = str.substring(0, positionOfSuffix);
  }

  return str;
};

module.exports = getValueBetween;
