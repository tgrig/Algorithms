// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phrase,
// or name formed by rearranging the letters of another, such as
// cinema, formed from iceman

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookUp = {};

  for (let char of first) {
    lookUp[char] ? (lookUp[char] += 1) : (lookUp[char] = 1);
  }

  for (let char of second) {
    if (!lookUp[char]) {
      return false;
    }
    lookUp[char] -= 1;
  }

  return true;
}
