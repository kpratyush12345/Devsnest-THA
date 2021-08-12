"use strict";

// Write a JavaScript function to check whether an `input` is an array or not
function is_array(obj) {
  return Array.isArray(obj);
}

console.log(is_array([1, 2, 4, 0]));
console.log(is_array("w3resource"));
