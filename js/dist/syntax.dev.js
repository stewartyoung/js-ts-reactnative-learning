#!/usr/bin/env node
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var firstName = "Stewart"; // "" can be changed with ''
// semicolons ; optional
// if you use java probably a good habit to put them in

var lastName = 'Young'; // can store a function in an array

var val = 42; // let means you can update it
// const means you can't

var arr = ['string', 42.5, function () {
  console.log('hi');
}]; // call the function in the array

arr[2](); // loops

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} // implicit and explicit coercion


var x = 42;
var explicit = String(42); //explicit == "42"

var implicit = x + ""; // implicit == "42"
// comparing values
// == coerces the types
// === doesn't do any coercion
// should ALWAYS USE === NOT ==

console.log(_typeof(42));
console.log(_typeof(null));
var equal = "42" == 42;
var strictEqual = "42" === 42;
console.log(equal);
console.log(strictEqual); // objects

var obj = new Object();
obj.firstName = "Stewart";
obj.lastName = "Young";
obj.isCoding = true;

obj.greet = function () {
  if (this.isCoding) {
    console.log("Hi " + this.firstName + " " + this.lastName);
  }
}; // equivalent to line 42


obj.greet();
var obj2 = {};
obj["isCoding"] = false; // inline object declaration
// all object keys are passed to a string

var obj3 = {
  firstName: "Stewart",
  lastName: "Young",
  greet: function greet() {
    if (this.isCoding) {
      console.log("Hi " + this.firstName + " " + this.lastName);
    }
  },
  address: {
    streetNumber: 21,
    streetName: "Oxford Street"
  }
};
console.log(obj3.address.streetNumber + " " + obj3.address.streetName); // object mutation

var o = {
  a: "a",
  b: "b",
  dummyObj: {
    a: "a",
    b: "b"
  }
}; // we want
// o2 = {
//     a: "a",
//     b: "b"
// }
// shallow copy (does not copy nested objects)

var o2 = Object.assign({}, o);
o2.dummyObj.a = "b";
console.log(o2); // deep copy (copy nested objects)

function deepCopy(obj) {
  // check through all values
  // if values are objects -> deep copy
  // else return the value
  var keys = Object.keys(obj);
  var newObject = {};

  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];

    if (_typeof(obj[key]) === 'object') {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }

  return newObject;
}

console.log(o);
var o3 = deepCopy(o); // o3 is not updated to new value on this change
// this is deep copy
// can no longer mutate by reference

o.dummyObj.a = "new value";
console.log(o3);
console.log(o); // demonstating prototypal inheritance 

arr = [];
arr.push("a");
arr.push("b"); // prints out the methods of this object
// in this case, array has a lot of built in methods

console.log(arr.__proto__);