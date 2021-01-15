// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Examples:
// minSubarrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
// minSubarrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
// minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52

function minSubarrayLen(nums, target) {
  let startIndex = 0;
  let endIndex = 0;
  let sum = 0;
  let len = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= target) {
      endIndex = i;
      len = endIndex + 1;
      break;
    }
  }

  if (sum < target) {
    return 0;
  }

  while (endIndex < nums.length) {
    sum = sum - nums[startIndex];
    if (sum >= target) {
      startIndex++;
      len = Math.min(len, endIndex - startIndex + 1);
    } else {
      sum = sum + nums[startIndex] + nums[endIndex + 1];
      endIndex++;
    }
  }
  return len;
}
