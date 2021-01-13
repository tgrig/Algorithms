// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:

// Time: O(N)

// Examples:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

function sameFrequency(first, second) {
  first = first.toString();
  second = second.toString();
  const lookUp = {};

  for (let num of first) {
    lookUp[num] = (lookUp[num] || 0) + 1;
  }

  for (let num of second) {
    if (!lookUp[num]) {
      return false;
    }
    lookUp[num] -= 1;
  }
  return true;
}
