const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let q = [];
let res = [];
for (let i = N; i >= 1; i--) {
  q.push(i);
}

while (q.length > 1) {
  const top = q.pop();
  res.push(top);
  if (q.length === 1) break;
  const next = q.pop();
  q.unshift(next);
}
res.push(q.pop());
console.log(res.join(' '));
