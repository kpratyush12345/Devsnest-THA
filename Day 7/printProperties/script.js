"use strict";

//Write a JavaScript program to list the properties of a JavaScript object.
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

let result = "";

for (let key in student) {
  result += key;
  result += ",";
}

console.log(result);
