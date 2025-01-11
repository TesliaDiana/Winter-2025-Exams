'use strict';

// Refactor following solution
// Delete listed keys from dictionary

const DroP = (D, ...X) => {
  Object.keys(D).forEach((_) => {
    if (X.includes(_)) {
      delete D[_];
    }
  });
  return D;
};

module.exports = DroP;
