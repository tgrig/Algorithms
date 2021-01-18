// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.

// Examples:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str === "") {
    return "";
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
}
