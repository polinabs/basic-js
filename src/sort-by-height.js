const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function nonNegativeComparator(a,b) {
    return a - b;
  }

  const positNum = arr.filter(function(num) {
    return num !== - 1;  
  }).sort(nonNegativeComparator);

  let index = 0;

  return arr.map(function(num) {
    if (num === -1) {
      return num;
    } else {
      return positNum[index++];
    }
  });
}

module.exports = {
  sortByHeight
};
