'use strict';

// Refactor following solution
// Increment all numbers in dictionary

const inc_numbers = (format_complete) => {
  for (const delete_file in format_complete) {
    if ((typeof format_complete[delete_file]) === 'number') {
      format_complete[delete_file]++;
    }
  }
  return format_complete;
};

module.exports = inc_numbers;
