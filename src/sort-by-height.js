const { NotImplementedError } = require("../extensions/index.js");

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
  const sortedHeights = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  // Insert sorted values back into the original array, skipping -1
  let index = 0;
  return arr.map((num) => (num === -1 ? num : sortedHeights[index++]));
}

module.exports = {
  sortByHeight,
};
