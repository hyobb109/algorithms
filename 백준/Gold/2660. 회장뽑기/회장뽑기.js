let [n, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = +n;
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

input.forEach((el) => {
  if (el === "-1 -1") return;
  const [v1, v2] = el.split(" ").map(Number);
  graph[v1][v2] = 1;
  graph[v2][v1] = 1;
});

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (graph[i][j] > graph[i][k] + graph[k][j])
        graph[i][j] = graph[i][k] + graph[k][j];
    }
  }
}

let scores = graph.map(nums => 
  Math.max(...nums.filter(el => el !== Infinity)));
scores.shift();
let score = Math.min(...scores);
let candidates = [];
for (let i = 0; i < N; i++){
  if (scores[i] === score) candidates.push(i + 1);
}
candidates.sort((a, b) => a - b);
console.log(`${score} ${candidates.length}\n${candidates.join(' ')}`);