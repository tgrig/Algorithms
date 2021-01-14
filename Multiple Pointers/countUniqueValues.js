// Implement a function called countUniqueValues, which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array,
// but it will always be sorted.

// Examples:
// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

function countUniqueValues(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      index++;
    }
  }
  return index;
}
