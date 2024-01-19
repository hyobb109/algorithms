let [n, ...records] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let dancing = new Set(['ChongChong']);

records.forEach((people) => {
    const [A, B] = people.split(' ');
    if (dancing.has(A)) dancing.add(B);
    if (dancing.has(B)) dancing.add(A);
})

console.log(dancing.size);