// 사과 담기 게임
let input = require('fs')
  .readFileSync('sample.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const J = +input[1];
let pos = [0];
let dist = 0;
for (let i = 2; i < input.length; i++) {
  pos.push(+input[i]);
}
// 바구니 시작을 s, 끝을 e로 지정
let s = 1;
let e = M;
for (let i = 1; i <= J; i++) {
  let move = 0;
  while (pos[i] < s || pos[i] > e) {
    move++;
    if (pos[i] > pos[i - 1]) {
      s++;
      e++;
    } else {
      s--;
      e--;
    }
    if (e === N) break;
  }
  dist += move;
  console.log(`pos[${i}]: ${pos[i]}, s:${s}, e:${e}, dist:${dist}`);
}
console.log(dist);
