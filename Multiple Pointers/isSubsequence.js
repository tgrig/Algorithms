// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear somewhere
// in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(first, second) {
  let firstIndex = 0;
  let secondIndex = 0;
  if (!first) {
    return true;
  }
  while (secondIndex < second.length) {
    if (second[secondIndex] === first[firstIndex]) {
      firstIndex++;
    }
    if (firstIndex === first.length) {
      return true;
    }
    secondIndex++;
  }
  return false;
}
