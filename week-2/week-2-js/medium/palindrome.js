/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const text = str.toLowerCase().split("");

  let a = [];

  for (let i = str.length; i >= 0; i--) {
    a.push(text[i]);
  }
  console.log(a.join(""));
  return (
    a.join("").replace(/[^a-zA-Z]/g, "") ==
    str.toLowerCase().replace(/[^a-zA-Z]/g, "")
  );
}

console.log(isPalindrome("NAN"));


module.exports = isPalindrome;
