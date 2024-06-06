let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const balls = input[1].split(' ');
let bases = [0, 0, 0];
let score = 0;

const BALL = '1';
const DEADBALL = '2';
const WILD_PITCH = '3';
let cnt = 0;

function fourBalls() {
  if (!bases.includes(0)) {
    runBase(1);
    return;
  }
  if (bases[0] === 0) {
    bases[0] = 1;
    return;
  }
  if (bases[1] === 0) {
    bases[1] = 1;
  } else {
    bases[2] = 1;
  }
}

function runBase(hitter) {
  bases.unshift(hitter);
  score += bases.pop();
}

for (let i = 0; i < N; i++) {
  switch (balls[i]) {
    case BALL:
      ++cnt;
      break;
    case DEADBALL:
      cnt = 4;
      break;
    case WILD_PITCH:
      ++cnt;
      runBase(0);
      break;
  }
  if (cnt === 4) {
    if (balls[i] === WILD_PITCH) bases[0] = 1;
    else fourBalls();
    cnt = 0;
  }
}
console.log(score);