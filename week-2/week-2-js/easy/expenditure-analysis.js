/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] 
  // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800001,
    price: 12,
    category: "toy",
    itemName: "Ballon",
  },
  {
    id: 3,
    timestamp: 1656076800003,
    price: 14,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 4,
    timestamp: 1656076800004,
    price: 20,
    category: "toy",
    itemName: "Whisle",
  },
];

// function calculateTotalSpentByCategory(transactions) {
//   const test = new Map();
//   transactions.forEach((item) => {
//     if (test.has(item.category)) {
//       test.set(item.category, test.get(item.category) + item.price);
//     } else {
//       test.set(item.category, item.price);
//     }
//   });
//   const result = [];
//   for (let [key, value] of test) {
//     result.push({ category: key, totalSpent: value });
//   }
//   return result;
// }

// console.log(calculateTotalSpentByCategory(transactions));
// module.exports = calculateTotalSpentByCategory;

// function calculateTotalSpentByCategory(transactions) {
//   const newObj = {};
//   transactions.forEach((transaction) => {
//     const { category, price } = transaction;
//     if (category in newObj) {
//       newObj[category] += price;
//     } else {
//       newObj[category] = price;
//     }
//   });
//   console.log(newObj);

//   const result = [];
//   for (const category in newObj) {
//     result.push({ category, totalspent: newObj[category] });
//   }
//   return result;
// }

// console.log(calculateTotalSpentByCategory(transactions));

function calculateTotalSpentByCategory(transactionsarray) {
  const newObj = {};
  transactionsarray.forEach((transaction) => {
    const { category, price } = transaction;

    if (category in newObj) {
      newObj[category] += price;
    } else {
      newObj[category] = price;
    }
  });
  const result = [];
  for (const category in newObj) {
    result.push({ category, totalspent: newObj[category] });
  }
  return result;
}

console.log(calculateTotalSpentByCategory(transactions));