// 포켓몬 GO
// EACCES 에러로 fs 모듈 대신 readline 모듈로 입력 받음
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(k, i) {
  let cnt = 0;
  while (i >= k) {
    i -= k - 2;
    cnt++;
  }
  return cnt;
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = +input[0];
  let max = -1;
  let res = [0, ''];
  for (let i = 1; i < 2 * N; i += 2) {
    const P = input[i];
    const [K, I] = input[i + 1].split(' ').map(Number);
    let cnt = count(K, I);
    if (cnt > max) {
      max = cnt;
      res[1] = P;
    }
    res[0] += cnt;
  }
  console.log(res.join('\n'));
  process.exit();
});
