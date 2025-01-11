'use strict';

// Refactor following solution
// Get day number

const DAYS = [0, 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => DAYS.indexOf(day?.slice?.(0, 3));

module.exports = parseDay;
