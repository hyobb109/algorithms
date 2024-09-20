let [nums, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, _] = nums.split(" ").map(Number);
let graph = new Array(N + 1).fill(0).map(() => []);

input.forEach((el) => {
  const [v1, v2] = el.split(" ").map(Number);
  graph[v1].push(v2);
  graph[v2].push(v1);
});

let dist = new Array(N + 1).fill(0);
let max = 1;

const bfs = () => {
  let q = [1];
  dist[1] = 1;

  while (q.length) {
    const v = q.shift();
    graph[v].forEach((node) => {
      if (dist[node] === 0) {
        q.push(node);
        dist[node] = dist[v] + 1;
        if (dist[node] > max) max = dist[node];
      }
    });
  }
};

bfs();
let res = [];
let cnt = 0;
dist.forEach((v, idx) => {
  if (v === max) {
    res.push(idx);
    cnt += 1;
  }
});

console.log(res[0], max - 1, cnt);
