var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function double(x) {
//   newNumbers.push(x * 2);
// });

const newNumbers1 = numbers.map(function (x) {
  return x * 2;
});

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(function (num) {
  return num > 10;
});

// same way, more work
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) newNumbers.push(num);
// });

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber1 = numbers.reduce(function (accumulator, currentNum) {
  return accumulator + currentNum;
});

//Find - find the first item that matches from an array.
const newNumber2 = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex(function (num) {
  return num > 10;
});

//Challenge - truncate emojipedia meanings to 100 characters.
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
