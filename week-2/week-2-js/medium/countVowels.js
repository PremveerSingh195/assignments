/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelCount = 0;
  const vowels = str.toLowerCase().split("");

  for (let i = 0; i < vowels.length; i++) {
    if (
      vowels[i] === "a" ||
      vowels[i] === "e" ||
      vowels[i] === "i" ||
      vowels[i] === "o" ||
      vowels[i] === "u"
    ) {
      vowelCount++;
      console.log(1);
    }
  }

  return vowelCount;
}

console.log(countVowels("Hello, world!"));

// function countVowels(str) {
//   let vowelCount = 0;
//   const vowelWord = ["a", "e", "i", "o", "u"];
//   const vowels = str.toLowerCase().split("");

//   for (let i = 0; i < vowels.length; i++) {
//     if (vowelWord.includes(vowels[i])) {
//       vowelCount++;
//     }
//   }

//   return vowelCount;
// }

// console.log(countVowels("Hello, world!"));


module.exports = countVowels;