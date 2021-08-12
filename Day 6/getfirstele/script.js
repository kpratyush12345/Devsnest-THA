"use strict";

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(arr, n = 1) {
  var arrCopy = [];

  for (var i = 0; i < n; i++) {
    if (arr[i] === undefined) {
      break;
    }
    arrCopy[i] = arr[i];
  }
  return arrCopy;
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
