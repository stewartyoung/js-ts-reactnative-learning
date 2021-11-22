#!/usr/bin/env ts-node
"use strict";
const first = "Stewart";

const last = "Young";

const num = 42;
const arry: [string, number, { (): void;}] = [
    'string',
    42.5, 
    function() {console.log('hi');}
];

arry[2]();

for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}

// implicit and explicit coercion
const x = 42;
const explicit = String(42); //explicit == "42"
const implicit = x + ""; // implicit == "42"

interface ISomeObject {
    firstName: string;
    lastName: string;
    isCoding: boolean;
    greet: {(): void;};
    address: {
        streetNumber: number;
        streetName: string;
    };
    dummyObj: {
        a: string
    }
}

const o : any = {
    firstName: "Stewart",
    lastName: "Young",
    isCoding: true,
    greet: function(): void {
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
}
o.greet();
console.log(o.address.streetNumber + " " + o.address.streetName);
console.log("o", o);
// we want
// o2 = {
//     a: "a",
//     b: "b"
// }

// shallow copy (does not copy nested objects)
const o2 = Object.assign({}, o);
o2.dummyObj.a = "b";
console.log("o2 = Object.assign({}, o)", o2);

// deep copy (copy nested objects)
function deepCopy(obj: any) {
    // check through all values
    // if values are objects -> deep copy
    // else return the value
    const keys: Array<string> = Object.keys(obj);
    const newObject:{[key:string] : any} = {};

    for (let i = 0; i < keys.length; i++) {
        const key: string = keys[i];
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}
console.log("o before deep copy", o);
const o3 = deepCopy(o);
// o3 is not updated to new value on this change
// this is deep copy
// can no longer mutate by reference
o.dummyObj.a = "new value";
console.log("o3 = deepCopy(o)", o3);
console.log("o after deepCopy", o);

export * as syntax from "./syntax";