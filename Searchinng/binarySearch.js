// Write a function called binarySearch which accepts a
// sorted array and a value and returns the index at which the
// value exists. Otherwise, return -1.

// Examples:
// binarySearch([1, 2, 3, 4, 5], 2) // 1
// binarySearch([1, 2, 3, 4, 5], 3) // 2
// binarySearch([1, 2, 3, 4, 5], 6) // -1

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const middle = Math.floor((right + left) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }

  return -1;
}
