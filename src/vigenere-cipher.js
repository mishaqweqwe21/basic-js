const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Определяет, прямая или обратная машина.
  }

  validateInput(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!"); // Проверка на валидность входных данных.
    }
  }

  encrypt(message, key) {
    this.validateInput(message, key);

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (/[A-Z]/.test(char)) {
        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(
          ((messageCode + keyCode) % 26) + 65
        );
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    this.validateInput(message, key);

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (/[A-Z]/.test(char)) {
        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(
          ((messageCode - keyCode + 26) % 26) + 65
        );
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
