let num = +require('fs').readFileSync('/dev/stdin').toString().trim();

let cards = new Array(10).fill(0);

while (num) {
  ++cards[num % 10];
  num = parseInt(num / 10);
}
let tmp = Math.ceil((cards[6] + cards[9]) / 2);
cards[6] = tmp;
cards[9] = tmp;
let max = Math.max(...cards);
console.log(max);
