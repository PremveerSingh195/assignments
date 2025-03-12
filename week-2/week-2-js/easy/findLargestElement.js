/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  const largestnumber = numbers.sort((a, b) => a - b)[numbers.length - 1];
  return largestnumber;
}

findLargestElement([1, 4, 8, 10]);

module.exports = findLargestElement;