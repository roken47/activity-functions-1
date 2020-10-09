// Easy Mode Function Buttons
const sumBtn = document.querySelector("#sum");
const avgBtn = document.querySelector("#avg");
const greatThanBtn = document.querySelector("#greaterThan");
const contVowelBtn = document.querySelector("#containsVowel");
const tipBtn = document.querySelector("#tip");
const longWordBtn = document.querySelector("#longestWord");
// Functions for 7 Easy Exercises
// Sum-----------------------
function sum(a, b) {
  return a + b;
}
console.log("Sum: ", sum(2, 3));
//Average--------------------
function avg(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
console.log("Average: ", avg(2, 3, 4, 5, 6));
//Greater Than--------------
function greaterThan(a, b) {
  if (a > b) {
    return true;
  } else return false;
}
console.log(">?: ", greaterThan(5, 6));
console.log(">?: ", greaterThan(8, 5));
//Find Second Largest
let array = [76, 43, 52, 47, 90, 89, 31, 30, 8, 6, 0];
function secondLargest(arr) {
  let top_two = arr.sort(function (a, b) {
    return b - a;
  })[1];
  return top_two;
}
console.log("Top 2: ", secondLargest(array));
/* ----What is a & b in secondLargest function? 
-------Is it index 0 and 1 of array after sort? Assuming sort was largest to smallest.
-------[1] pull out 89?
-------*/
//Contains a Vowel?
// function containsVowel(char, word) {
//     return 'aeiou'.indexOf()
// }
//20% Tip Rounded-Up + Meal
function tip(meal) {
  let tip = Math.ceil(meal) * 0.2;
  console.log(tip);
  return Math.ceil(meal + tip);
}
console.log(tip(33.6));
//Find the Longest Word
//Hint use .split() on a string
