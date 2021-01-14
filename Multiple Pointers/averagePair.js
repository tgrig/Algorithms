// Write a function called `averagePair`.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Examples:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 9) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // true

function averagePair(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const average = (numbers[start] + numbers[end]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
