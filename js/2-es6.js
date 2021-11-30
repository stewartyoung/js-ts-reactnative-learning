#!/usr/bin/env node

// closure "bug"
// will console log 5
function makeArray() {
    const arr = []
    // if we use var, we can still console log i outside of the for loop
    // if we use let, we cannot
    // avoid the closure with let
    for (let i = 0; i < 5; i++) {
        arr.push(function() {
            console.log(i);
        })
    }
    // console.log("i at the end of function", i);

    return arr
}

function makeHelloFunction() {
    const message = 'hi there';

    function sayHello() {
        console.log(message);
    }

    return sayHello;
}

const sayHello = makeHelloFunction();

// message is undefined here
// console.log("type of message: ", typeof message);
// this outputs "message"
console.log(sayHello.toString());
// this outputs 'hi there'
sayHello();

const arr = makeArray();
arr[0]()

// iife 
// variable msg cannot be available anywhere else
const sayHelloIife = (function() {
    const msg = 'Hello from iife';

    console.log(msg);
})();

const counter = (function() {
    let count = 0;

    return {
        inc: function() {
            count = count + 1; 
        },
        get: function() {
            console.log(count);
        }
    }
})()

counter.get()
counter.inc()
counter.get()

let x = [4,5,6]
function addOne(num) {
    return num + 1;
}
function greaterThanFive(num) {
    return num > 5;
}
function add(x, y) {
    return x + y;
}
x = x.map(addOne)
console.log(x);
x = x.filter(greaterThanFive);
console.log(x);
newArr = []
x.forEach(function(val) {
    newArr.push(val);
})
console.log("newArr:", newArr);
x = x.reduce(add);
console.log(x);
