'use strict';

// Refactor following solution
// Split string by the first occurrence of separator

const parseip = (ip) => {
  const numbersIp = [];
  if (ip === '') return;
  const splitIp = ip.split('.');
  if (splitIp.length !== 4) return;
  let index = 0;
  for (const number of splitIp) {
    numbersIp[index] = parseInt(number);
    if (isNaN(numbersIp[index])) return;
    index++;
  }
  return numbersIp;
};

module.exports = parseip;
