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