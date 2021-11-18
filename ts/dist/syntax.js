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
var obj = {
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
    }
};
obj.greet();
console.log(obj.address.streetNumber + " " + obj.address.streetName);
exports.syntax = require("./syntax");
