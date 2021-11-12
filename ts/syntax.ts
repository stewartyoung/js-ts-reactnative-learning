#!/usr/bin/env ts-node
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

export * as syntax from "./syntax";