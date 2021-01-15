// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Examples:
// findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("bbbbbb"); // 1

function findLongestSubstring(str) {
  if (str.length < 1) {
    return 0;
  }
  let startIndex = 0;
  let endIndex = 0;
  let len = 0;
  let seen = {};

  while (endIndex < str.length) {
    if (seen[str[endIndex]] >= startIndex) {
      startIndex = seen[str[endIndex]] + 1;
      seen[str[endIndex]] = endIndex;
    } else {
      seen[str[endIndex]] = endIndex;
      len = Math.max(len, endIndex - startIndex + 1);
    }
    endIndex++;
  }
  return len;
}
