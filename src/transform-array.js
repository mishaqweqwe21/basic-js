const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i + 1 < arr.length) {
          i++; // Skip the next element
        }
        break;

      case "--discard-prev":
        if (
          i > 0 &&
          result.length > 0 &&
          arr[i - 1] === result[result.length - 1]
        ) {
          result.pop(); // Remove the previous element
        }
        break;

      case "--double-next":
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]); // Add the next element twice
        }
        break;

      case "--double-prev":
        if (
          i > 0 &&
          result.length > 0 &&
          arr[i - 1] === result[result.length - 1]
        ) {
          result.push(arr[i - 1]); // Add the previous element again
        }
        break;

      default:
        result.push(arr[i]); // Add regular elements to the result
        break;
    }
  }
  return result;
}

module.exports = {
  transform,
};
