#!/usr/bin/env node
'use strict';
const firstName = "Stewart";
// "" can be changed with ''
// semicolons ; optional
// if you use java probably a good habit to put them in
const lastName = 'Young'

// can store a function in an array
const val = 42
const arr = [
    'string',
    42.5,
    function() {console.log('hi');}
];

// call the function in the array
arr[2]();

// loops
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// implicit and explicit coercion
const x = 42;
const explicit = String(42); //explicit == "42"
const implicit = x + ""; // implicit == "42"

// comparing values
// == coerces the types
// === doesn't do any coercion
// should ALWAYS USE === NOT ==
console.log(typeof(42));
console.log(typeof(null));
const equal = "42" == 42;
const strictEqual = "42" === 42;
console.log(equal);
console.log(strictEqual);


// objects
const obj = new Object();
obj.firstName = "Stewart";
obj.lastName = "Young";
obj.isCoding = true;
obj.greet = function() {
    if (this.isCoding) {
        console.log("Hi " + this.firstName + 
        " " + this.lastName);
    }
}
// equivalent to line 42
obj.greet();
const obj2 = {};
obj["isCoding"] = false;

// inline object declaration
// all object keys are passed to a string
const obj3 = {
    firstName: "Stewart",
    lastName: "Young",
    greet: function() {
        if (this.isCoding) {
            console.log("Hi " + this.firstName + 
            " " + this.lastName);
        }
    },
    address: {
        streetNumber: 21,
        streetName: "Oxford Street"
    }
}
console.log(obj3.address.streetNumber + " " + obj3.address.streetName)

// object mutation
const o = {
    a: "a",
    b: "b",
    dummyObj: {
        a: "a",
        b: "b",
    }
}

// we want
// o2 = {
//     a: "a",
//     b: "b"
// }

// shallow copy (does not copy nested objects)
const o2 = Object.assign({}, o);
o2.dummyObj.a = "b";
console.log(o2);

// deep copy (copy nested objects)
function deepCopy(obj) {
    // check through all values
    // if values are objects -> deep copy
    // else return the value
    const keys = Object.keys(obj);
    const newObject = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}
console.log(o);
const o3 = deepCopy(o);
// o3 is not updated to new value on this change
// this is deep copy
// can no longer mutate by reference
o.dummyObj.a = "new value";
console.log(o3);
console.log(o);