let [n, ...files] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let map = new Map();

files.forEach(file => {
    const extension = file.split('.')[1];
    const value = map.get(extension);
    value ? map.set(extension, value + 1) : map.set(extension, 1);
})

let res = [];
map.forEach((val, key) => {
    res.push(`${key} ${val}`);
})

console.log(res.sort().join('\n'));