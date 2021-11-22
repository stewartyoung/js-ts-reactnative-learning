#!/usr/bin/env ts-node
"use strict";
exports.__esModule = true;
var first = "Stewart";
var last = "Young";
var num = 42;
var arry = [
    'string',
    42.5,
    function () { console.log('hi'); }
];
arry[2]();
for (var i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}
// implicit and explicit coercion
var x = 42;
var explicit = String(42); //explicit == "42"
var implicit = x + ""; // implicit == "42"
var o = {
    firstName: "Stewart",
    lastName: "Young",
    isCoding: true,
    greet: function () {
        if (this.isCoding) {
            console.log("Hi " + this.firstName + " " + this.lastName);
        }
    },
    address: {
        streetNumber: 21,
        streetName: "Oxford Street"
    },
    dummyObj: {
        a: "a"
    }
};
o.greet();
console.log(o.address.streetNumber + " " + o.address.streetName);
console.log("o", o);
// we want
// o2 = {
//     a: "a",
//     b: "b"
// }
// shallow copy (does not copy nested objects)
var o2 = Object.assign({}, o);
o2.dummyObj.a = "b";
console.log("o2 = Object.assign({}, o)", o2);
// deep copy (copy nested objects)
function deepCopy(obj) {
    // check through all values
    // if values are objects -> deep copy
    // else return the value
    var keys = Object.keys(obj);
    var newObject = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        }
        else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}
console.log("o before deep copy", o);
var o3 = deepCopy(o);
// o3 is not updated to new value on this change
// this is deep copy
// can no longer mutate by reference
o.dummyObj.a = "new value";
console.log("o3 = deepCopy(o)", o3);
console.log("o after deepCopy", o);
exports.syntax = require("./syntax");
