let [nums, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = nums.split(' ').map(Number);

let graph = Array.from(Array(N), () => []);
let visited = new Array(N).fill(false);

input.forEach((el) => {
  const [v1, v2] = el.split(' ').map(num => +num - 1);
  graph[v1].push(v2);
  graph[v2].push(v1);
})

let cnt = 0;

const dfs = (v) => {
  visited[v] = true;
  graph[v].forEach((node) => {
    if (!visited[node]) {
      dfs(node);
    }
  });
} 

for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt += 1;
  }
}
console.log(cnt);