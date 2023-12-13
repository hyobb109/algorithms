const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let comb = new Array(M);
let res = '';

function getComb(n) {
    if (n === M) {
        res += comb.join(' ') + '\n'; 
        return;
    }
    for (let i = 1; i<= N; i++){
        comb[n] = i;
        getComb(n + 1);
    }
}

getComb(0);
console.log(res.trim());