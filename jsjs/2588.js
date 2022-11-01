let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('sample.txt').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let res = 0;

for (let i = 1; i <= 100; i *= 10)
{
    let mul = a * (b % 10);
    console.log(mul);
    res += mul * i;
    b = parseInt(b / 10);
}

console.log(res);
