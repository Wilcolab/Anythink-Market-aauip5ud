function toKebabCase(str) {
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

  return words.map(word => word.toLowerCase()).join('-');
}

module.exports = { toKebabCase };
