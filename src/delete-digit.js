const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const getString = n.toString();
  let max = 0;

  for (let i = 0; i < getString.length; i += 1) {
    const currentNum = parseInt(getString.slice(0, i) + getString.slice(i + 1));
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
