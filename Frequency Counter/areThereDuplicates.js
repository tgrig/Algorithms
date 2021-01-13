// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments checks whether there are any duplicates among
// the arguments passed in.
// You can solve this using the frequency counter pattern OR
// the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
  const collection = {};
  for (let val in args) {
    collection[args[val]] = (collection[args[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
