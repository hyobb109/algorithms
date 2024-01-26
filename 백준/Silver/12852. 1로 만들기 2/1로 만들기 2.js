const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Map();
dp.set(1, [1]);
dp.set(2, [2, 1]);
dp.set(3, [3, 1]);
dp.set(4, [4, 3, 1]);

for (let i = 4; i <= N; i++) {
  let tmp = [...dp.get(i - 1)];
  if (i % 3 === 0 && tmp.length > dp.get(i / 3).length) {
    tmp = [...dp.get(i / 3)];
  }
  if (i % 2 == 0 && tmp.length > dp.get(i / 2).length) {
    tmp = [...dp.get(i / 2)];
  }
  dp.set(i, [i, ...tmp]);
}

let val = [...dp.get(N)];
console.log(`${val.length - 1}\n${val.join(' ')}`);
