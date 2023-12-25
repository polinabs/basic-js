const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cols; j += 1) {
      let count = 0;

      for (let di = -1; di <= 1; di += 1) {
        for (let dj = -1; dj <= 1; dj += 1) {
          if (di === 0 && dj === 0) continue;

          const ni = i + di;
          const nj = j + dj;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && matrix[ni][nj]) {
            count += 1;
          }
        }
      }
    row.push(count);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper
};
