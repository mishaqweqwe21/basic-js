const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  // Проверяем, является ли переданный объект реальной датой
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return "spring"; // Весна
  } else if (month >= 5 && month <= 7) {
    return "summer"; // Лето
  } else if (month >= 8 && month <= 10) {
    return "autumn"; // Осень
  } else {
    return "winter"; // Зима
  }
}

module.exports = {
  getSeason,
};
