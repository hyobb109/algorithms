const [N, ...cards] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

let map = new Map();
let max = -1n;
let maxKey = -1n;
cards.forEach((card) => {
  const curr = map.get(card);
  const val = curr ? curr + 1 : 1;
  if (val > max) {
    max = val;
    maxKey = card;
  } else if (val === max) {
    if (card < maxKey) maxKey = card;
  }
  map.set(card, val);
});

console.log(maxKey.toString());
