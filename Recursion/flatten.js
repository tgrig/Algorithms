// Write a recursive function called flatten which accepts an
// array of arrays and returns a new array with all values flattened.

// Examples:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
  let finalArr = [];
  function helper(arr2) {
    if (!arr2.length) {
      return;
    }
    if (!Array.isArray(arr2[0])) {
      finalArr.push(arr2[0]);
    } else {
      helper(arr2[0]);
    }
    helper(arr2.slice(1));
  }
  helper(arr);
  return finalArr;
}
