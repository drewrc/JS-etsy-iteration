// The filter() method creates a shallow copy of a portion of a given array,
//filtered down to just the elements from the given array that pass the test
// implemented by the provided function.

// forEach() method executes a provided function once for each array element

//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.

//  1. Show me how to calculate the average price of all items listed in USD.
//  Please console.log the average.
//  The average price is $23.86

//solution:
//(function(){
//"get strict"

//

console.log(items);

const prices = items
  .filter(function (items) {
    return items.currency_code === "USD";
  })
  .map(function (item) {
    return item.price;
  });

const total = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const avgPrices = total / prices.length;

console.log({ prices, avgPrices });

//  2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.

//refactored:

const sum = prices.reduce(function (acc, i) {
  //use .reduce() function to
  return acc + i;
});

console.log(sum);

const cheapItems = items
  .filter(function (item) {
    return item.price >= 14 && item.price <= 18 && item.currency_code === "USD";
  })
  .forEach(function (item) {
    console.log(item.title);
  });

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

const itemsGBP = items.filter(function (item) {
  return item.currency_code === "GBP";
});
console.log(itemsGBP);

//4. Show me how to find which items are made of wood. Please console.log the ones you find.

const itemsMadeOfWood = items
  .filter(function (item) {
    return item.materials.includes("wood");
  })
  .map(function (item) {
    return item.title;
  })
  .forEach(function (title) {
    console.log(`${title}\n`);
  });

//5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

const eightOrMoreMaterials = items
  .filter(function (item) {
    return item.materials.length >= 8;
  })
  .map(function (item) {
    return item.title;
  });

console.log(eightOrMoreMaterials);

//6. Show me how to calculate how many items were made by their sellers. Please console.log your answer.

const madeBySeller = items.filter(function(item){
    return item.who_made === 'i_did';
})

console.log(`${madeBySeller.length} were made by their sellers`);
console.log(madeBySeller)
