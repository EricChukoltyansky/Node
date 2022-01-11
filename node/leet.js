var longestCommonPrefix = function (strs) {
  let longestCommonPrefix = "";

  if (strs === null || strs.length === 0) {
    return longestCommonPrefix;
  }

  let minLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};
