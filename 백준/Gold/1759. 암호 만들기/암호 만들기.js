let [nums, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = nums.split(' ').map(Number);

const letters = input.split(' ').sort();

let password = new Array(L);

let used = new Array(C).fill(false);
let res = '';
let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

function getPassword(n, s) {
    if (n === L) {
        const v = password.filter((c) => vowels.has(c)).length;
        if (v >= 1 && L - v >= 2)
            res += password.join('') + '\n';
        return ;
    }
    for (let i = s; i < C; i++) {
        if (used[i]) continue;
        password[n] = letters[i];
        used[i] = true;
        getPassword(n + 1, i + 1);
        used[i] = false;
    }
}

getPassword(0, 0);
console.log(res);