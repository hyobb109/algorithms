let [a, b, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = +a;

let visited = new Array(N).fill(false);
let graph = [...Array(N)].map(() => []);
input.forEach((el) => {
  const [v1, v2] = el.split(' ').map(num => Number(num) - 1);
    graph[v1].push(v2);
    graph[v2].push(v1);
});

let cnt = 0;
const dfs = (v) => {
  visited[v] = true;
  graph[v].forEach((node) => {
    if (visited[node]) return;
    cnt += 1;
    dfs(node);
  });
}
dfs(0);
console.log(cnt);