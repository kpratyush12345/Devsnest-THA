"use strict";

//Write a JavaScript program to get the length of an JavaScript object.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let res = 0;
for (let key in student) {
  res += 1;
}
console.log(res);
