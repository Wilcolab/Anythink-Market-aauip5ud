function toCamelCase(str) {
  return str
    .trim()
    .split(/[\s_-]+/)
    .map((word, i) => i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

module.exports = { toCamelCase };
