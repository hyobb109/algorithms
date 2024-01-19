let input  = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function getFoxSound() {
    let set = new Set();
    let sounds = input.shift().split(' ');
    let str = input.shift();
    while (str !== 'what does the fox say?') {
        const sound = str.split(' goes ')[1];
        set.add(sound);
        str = input.shift();
    }
    return sounds.filter(sound => !set.has(sound)).join(' ');
}

const T = input.shift();
let res = '';
for (let i = 0; i < T; i++) {
    res += getFoxSound() + '\n';
}
console.log(res);