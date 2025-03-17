/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const strlower = str.toLowerCase();
  let i = 0;
  let j = strlower.length - 1;
  while (i <= j) {
    if (strlower.charAt(i) !== strlower.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome("assa"));


module.exports = isPalindrome;
