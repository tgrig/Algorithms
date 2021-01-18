// Write a recursive function called capitalizeWords. Given an
// array of words, return a new array containing each word capitalized.

// Example:
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  const newArr = [];

  function helper(arr2) {
    if (!arr2.length) {
      return;
    }
    newArr.push(arr2[0].toUpperCase());
    arr2.shift();
    helper(arr2);
  }
  helper(arr);

  return newArr;
}
