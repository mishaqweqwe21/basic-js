const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map = {};
  let commonCount = 0;

  // Создаем карту частот символов строки s1
  for (const char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  // Ищем общие символы в строке s2
  for (const char of s2) {
    if (map[char] > 0) {
      commonCount++; // Увеличиваем счетчик общих символов
      map[char]--; // Уменьшаем количество доступных символов в карте
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
