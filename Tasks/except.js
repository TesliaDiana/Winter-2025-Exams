'use strict';

// Refactor following solution
// Copy all values from dict except listed

const EXCEPT = (incomingvaluesarray, ...no) => {
  Object.keys(incomingvaluesarray).forEach((Z) => {
    if (no.includes(Z)) delete incomingvaluesarray[Z];
  });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
