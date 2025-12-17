function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const trimmed = str.trim();
  if (!trimmed) return '';

  const words = trimmed.split(/[\s_-]+/).filter(Boolean);
  if (!words.length) return '';

  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

function toDotCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const trimmed = str.trim();
  if (!trimmed) return '';

  const words = trimmed
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[\s_-]+/)
    .filter(Boolean);

  if (!words.length) return '';

  return words.map(word => word.toLowerCase()).join('.');
}

/**
 * Converts a string to camelCase format.
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase formatted string
 * @throws {TypeError} If input is not a string
 * @example
 * toCamelCase("first name") // "firstName"
 * toCamelCase("user_id") // "userId"
 * toCamelCase("SCREEN_NAME") // "screenName"
 */

/**
 * Converts a string to dot.case format.
 * @param {string} str - The input string to convert
 * @returns {string} The dot.case formatted string
 * @throws {TypeError} If input is not a string
 * @example
 * toDotCase("first name") // "first.name"
 * toDotCase("userName") // "user.name"
 */

module.exports = { toCamelCase, toDotCase };
