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