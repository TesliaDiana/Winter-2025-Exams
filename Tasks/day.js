'use strict';

// Refactor following solution
// Get day number

const D = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const _parse_day_ = (s) => {
  for (let i = 0; i < D.length; i++) {
    if (s.startsWith(D[i])) return i + 1;
  }
  return -1;
};

module.exports = _parse_day_;
