#!/usr/bin/env node
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
const o2 = {};
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