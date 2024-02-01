const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let comb = [];
let res = [];
let sum = 0;
function getComb() {
    if (sum === n) {
        res.push(comb.join('+'));
        return;
    }
    for (let i = 1; i <= 3; i++) {
        if (sum + i > n) continue;
        sum += i;
        comb.push(i);
        getComb();
        sum -= i;
        comb.pop();
    }
}

getComb();
res.length < k ? console.log(-1) : console.log(res[k -1]);
