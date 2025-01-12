'use strict';

// Refactor following solution
// Split string by the first occurrence of separator

const parseip = (ip) => {
  if (typeof ip !== 'string') return;

  const splitIp = ip.split('.');

  if (splitIp.length !== 4) return;

  const numbersIp = [];

  for (let number of splitIp) {
    number = parseInt(number);

    if (isNaN(number)) return;

    numbersIp.push(number);
  }

  return numbersIp;
};

parseip();

module.exports = parseip;
