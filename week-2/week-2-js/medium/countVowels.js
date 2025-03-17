/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//   const text = str.split("");

//   const vowels = "aeiouAEIOU";

//   let count = 0;

//   text.forEach((item) => {
//     if (vowels.includes(item)) {
//       count++;
//     }
//   });

//   console.log(count);
// }

// function countVowels(str) {
//   const vowels = "aeiou";
//   let count = 0;
//   const strlower = str.toLowerCase();
//   // vowels.charAt()
//   for (let i = 0; i < strlower.length; i++) {
//     if (vowels.includes(strlower.charAt(i))) {
//       count++;
//     }
//   }


  
  // for (const element of str) {
  //   if (vowels.includes(element)) {
  //     count++;
  //   }
  // }

//   console.log(count);
// }

countVowels("Abfjadhg");

module.exports = countVowels;