let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let runners = input.slice(0, +n);
const finished = input.slice(+n);

let map = new Map();
runners.forEach(runner => {
    const value = map.get(runner);
    value ? map.set(runner, value + 1) : map.set(runner, 1);
})

finished.forEach(runner => {
    const value = map.get(runner);
    map.set(runner, value - 1);
})

map.forEach((val, key) => {
    if (val > 0) console.log(key);
})
