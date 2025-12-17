function toCamelCase(str) {
  const words = str.trim().split(/[\s_-]+/).filter(Boolean);
  if (!words.length) return '';
  
  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

module.exports = { toCamelCase };
