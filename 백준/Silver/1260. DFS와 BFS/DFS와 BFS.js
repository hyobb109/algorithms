let [nums, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, _, V] = nums.split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => []);

input.forEach((el) => {
  const [v1, v2] = el.split(" ").map(Number);
  graph[v1].push(v2);
  graph[v2].push(v1);
});
graph.forEach((arr) => arr.sort((a, b) => a - b));

const getRes = (search) => {
  let visited = new Array(N + 1).fill(false);
  const res = [];
  const dfs = (v) => {
    visited[v] = true;
    res.push(v);
    graph[v].forEach((node) => {
      if (!visited[node]) {
        dfs(node);
      }
    });
  };
  const bfs = (v) => {
    let q = [v];
    visited[v] = true;
    res.push(v);
    while (q.length) {
      const node = q.shift();
      graph[node].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          q.push(n);
          res.push(n);
        }
      });
    }
  };
  search === "dfs" ? dfs(V) : bfs(V);
  return res.join(" ");
};

console.log(`${getRes("dfs")}\n${getRes("bfs")}`);
