"use strict";

//Write a simple JavaScript program to join all elements of the following array into a string.
var myColor = ["Red", "Green", "White", "Black"];

var str = "";

for (var i = 0; i < myColor.length; i++) {
  str += myColor[i];
  if (i !== myColor.length - 1) str += ",";
}

console.log(str);

str = "";

for (var i = 0; i < myColor.length; i++) {
  str += myColor[i];
  if (i !== myColor.length - 1) str += "+";
}

console.log(str);
